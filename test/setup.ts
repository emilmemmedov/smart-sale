const fs = require('fs');
const path = require('path');
import * as dotenv from 'dotenv';

loadEnvironmentVariables();

function loadEnvironmentVariables() {
  if (fs.existsSync(path.resolve(__dirname, '..', 'test.env'))) {
    dotenv.config({ path: path.resolve(__dirname, '..', 'test.env') });
  } else {
    dotenv.config({ path: path.resolve(__dirname, '..', 'test.example.env') });
  }
}
