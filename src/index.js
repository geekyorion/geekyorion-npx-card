import { data } from './user/data.js';
import { createConsoleString } from './utils/createConsoleString.js';
import { filePath } from './config/io.config.js';
import { writeToFile } from './utils/io.js';
import { COLORS } from './config/chalk.config.js';

const result = createConsoleString(data);

writeToFile(filePath, result, COLORS.green)
  .then(data => console.log(data))
  .catch(err => console.log(err));
