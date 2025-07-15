import { APIRequestContext, expect } from '@playwright/test';
import { TransactonController } from '../api-tests/controllers/transaction.ts';
import { AddFundsService } from './add-funds.ts';
import { validateResponse } from '../api-tests/utils/responseValidation.ts';
import { schemaValidation } from '../api-tests/utils/schemaValidation.ts';
import { transactionsSchema } from '../data/JsonSchema/transactionts.ts';

export class TransactionService {
  private transactionController: TransactonController;
  private addFundsService: AddFundsService;
  constructor(contextApi: APIRequestContext) {
    this.transactionController = new TransactonController(contextApi);
    this.addFundsService = new AddFundsService(contextApi);
  }

  async getTransactions() {
    await this.addFundsService.addFunds(50);
    await this.addFundsService.addFunds(50);

    const response = await this.transactionController.getTransactions();
    console.log(response.body);
    validateResponse(response, 200);
    schemaValidation(response.body, transactionsSchema);
    expect(response.body.transactionItems.length).toBeGreaterThanOrEqual(2);
  }
}
