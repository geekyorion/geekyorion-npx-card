import path from 'path';
import * as url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const filePath = path.join(__dirname, '../../bin/output');
