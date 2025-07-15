import { APIRequestContext } from '@playwright/test';
import { AddFundsController } from '../api-tests/controllers/addFunds.ts';
import { getBalance } from '../api-tests/utils/queryDB/user.ts';
import { validateResponse } from '../api-tests/utils/responseValidation.ts';
import { validationValue } from '../api-tests/utils/validationValue.ts';
import { getInfoBalanceTransaction } from '../api-tests/utils/queryDB/balanceUser.ts';
import { checkBalanceIncrease } from '../api-tests/utils/checkBalanceIncrease.ts';
import { balanceUSDValidation } from '../api-tests/utils/balanceValidation.ts';

export class AddFundsService {
  addFundsController: AddFundsController;
  constructor(private requestApi: APIRequestContext) {
    this.addFundsController = new AddFundsController(requestApi);
  }

  async addFunds(amountUSD: number) {
    const data = {
      amount: amountUSD,
    };

    const oldBalance = await getBalance();

    const response = await this.addFundsController.addFunds(data);
    validateResponse(response, 200);

    const { id_transaction, amountConvertRuble, type, userId } = response.body.session.metadata;
    let { amount, status } = await getInfoBalanceTransaction(id_transaction);
    validationValue(status, 'unpaid');
    balanceUSDValidation(amountConvertRuble, amountUSD);

    const dataWebHook = {
      type: 'checkout.session.completed',
      data: {
        object: {
          metadata: {
            id_transaction,
            amountConvertRuble,
            userId,
            type,
          },
        },
      },
    };

    const responseHook = await this.addFundsController.verifyStripe(dataWebHook);
    validateResponse(responseHook, 200);
    ({ status } = await getInfoBalanceTransaction(id_transaction));
    validationValue(status, 'paid');

    const newBalances = await getBalance();
    checkBalanceIncrease(oldBalance, newBalances, amount);

    return {
      body: response.body,
    };
  }
}
