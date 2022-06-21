#!/usr/bin/env node
import { readFile } from './utils/io.js';
import { filePath } from './config/io.config.js';

const output = readFile(filePath);
console.log(output);
