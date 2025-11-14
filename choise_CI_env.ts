import dotenv from 'dotenv';

function choise_env() {
  dotenv.config({
    path: process.env.CI ? 'dev.env' : 'local',
  });
}

export default choise_env;
