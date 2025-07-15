import * as dotenv from 'dotenv';
dotenv.config();
import * as pgp from 'pg-promise';

const dbConnect = pgp.default()(`${process.env.PGP_URL}`);
const dbConntectAdmin = pgp.default()(`${process.env.PGP_URL_ADMIN}`);

export { dbConnect, dbConntectAdmin };
