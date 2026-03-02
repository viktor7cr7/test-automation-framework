import dotenv from 'dotenv';

function choise_env() {
  dotenv.config({
    path: process.env.CI ? 'dev.env' : 'local.env',
  });
}

export default choise_env;
