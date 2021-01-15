import App from './app';
import NameController from './names/name.controller';

import 'dotenv/config';

const PORT = process.env.PORT || 5000;

// Initialize server with App Class
const app = new App([new NameController()], PORT as number);

app.listen();
