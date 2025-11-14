import { APIRequestContext, expect } from '@playwright/test';
import { UserController } from '../api-tests/controllers/users.ts';
import { validateResponse } from '../api-tests/utils/responseValidation.ts';
import { schemaValidation } from '../api-tests/utils/schemaValidation.ts';
import { responseDefaultSchema } from '../data/JsonSchema/auth.ts';
import fs from 'fs';
import { IUserUpdateInfo } from '../types/request/user.ts';
import { getUserInfo } from '../api-tests/utils/queryDB/user.ts';

export class UserService {
  private userController: UserController;
  constructor(contextApi: APIRequestContext) {
    this.userController = new UserController(contextApi);
  }


  

  async updateInfoUser(body: IUserUpdateInfo) {
    const formData = {
      avatar: {
        name: 'avatar.png',
        mimeType: 'image/png',
        buffer: fs.readFileSync('./data/img/cat.jpg'),
      },
      name: body.name,
      email: body.email,
    };

    const response = await this.userController.updateInfoUser(formData);

    validateResponse(response, 200);
    schemaValidation(response.body, responseDefaultSchema);

    const { image_url } = await getUserInfo();

    expect(image_url).toContain('https://res.cloudinary.com');

    return response.body;
  }
}
