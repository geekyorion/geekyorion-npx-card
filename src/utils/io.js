import fs from 'fs';
import boxen from 'boxen';
import { boxenParameters } from '../user/boxUI.js';

export const readFile = fileName => {
  return fs.readFileSync(fileName, 'utf-8');
};

export const writeToFile = (filePath, data, boxColor) => {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFileSync(filePath, boxColor(boxen(data, boxenParameters)));
      resolve('Card is successfully created');
    } catch (error) {
      reject('Unable to create the card: ' + error);
    }
  });
};
