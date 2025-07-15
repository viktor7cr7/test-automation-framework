import { APIRequestContext } from '@playwright/test';
import { AuthController } from '../api-tests/controllers/auth.ts';
import { generateDataAuth } from '../data/generateData.ts';
import { USER_EMAIL_REGISTER } from '../api-tests/config/environment.ts';
import { IRegisterData } from '../types/request/auth.ts';
import { validateResponse } from '../api-tests/utils/responseValidation.ts';
import { schemaValidation } from '../api-tests/utils/schemaValidation.ts';
import { responseDefaultSchema } from '../data/JsonSchema/auth.ts';
import { getTokenPassordUser, getTokenUser } from '../api-tests/utils/queryDB/queryToken.ts';
import { STATUS_CODES } from '../data/statusCode.ts';

export class AuthServices {
  private request: AuthController;
  constructor(context: APIRequestContext) {
    this.request = new AuthController(context);
  }

  async register() {
    const { name, password } = generateDataAuth({});
    const data: IRegisterData = {
      email: USER_EMAIL_REGISTER,
      name,
      password,
    };

    const response = await this.request.register(data);
    validateResponse(response, 201);
    schemaValidation(response.body, responseDefaultSchema);
    return response.body;
  }

  async verifyEmail() {
    const { email, password, name } = generateDataAuth({});
    await this.request.register({ email, password, name });

    const token = await getTokenUser(email);

    const params = new URLSearchParams({
      email,
      token,
    });

    const response = await this.request.verifyEmail(`?${params.toString()}`);
    validateResponse(response, STATUS_CODES.OK);
    schemaValidation(response.body, responseDefaultSchema);
    return response.body;
  }

  async forgotPassword() {
    const { email, password, name } = generateDataAuth({});
    await this.request.register({ email, password, name });
    const response = await this.request.forgotPassword({ email });

    validateResponse(response, STATUS_CODES.OK);
    schemaValidation(response.body, responseDefaultSchema);
    return response.body;
  }

  async resetPassword() {
    const { email, password, name } = generateDataAuth({});
    await this.request.register({ email, password, name });
    await this.request.forgotPassword({ email });

    const token = await getTokenPassordUser(email);
    
    const { password: newPassword } = generateDataAuth({});
    const response = await this.request.resetPassword({ email, password: newPassword, token });
    validateResponse(response, STATUS_CODES.OK);
    schemaValidation(response.body, responseDefaultSchema);
    return response.body;
  }
}
