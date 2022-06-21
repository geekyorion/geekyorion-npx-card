import { COLORS, MODIFIERS } from '../config/chalk.config.js';

const { white, green, grey, blue, red, blueBright, yellow } = COLORS;
const { bold } = MODIFIERS;

export const data = {
  name: {
    text: 'Shashank Sharma',
    leftSpace: 10,
    color: white,
    style: bold
  },
  handle: {
    text: 'geekyorion',
    color: green,
  },
  work: {
    label: { text: 'Work:', style: bold, color: white },
    text: 'Specialist Programmer at Infosys',
    color: white
  },
  socialLinks: [
    {
      website: { text: 'Github:', style: bold, color: white },
      url: { text: 'https://github.com/', color: grey },
      handle: { text: 'geekyorion', color: blue },
    },
    {
      website: { text: 'npm:', style: bold, color: white },
      url: { text: 'https://npmjs.com/', color: grey },
      handle: { text: '~geekyorion', color: red },
    },
    {
      website: { text: 'Twitter:', style: bold, color: white },
      url: { text: 'https://twitter.com/', color: grey },
      handle: { text: 'geekyorion_', color: blueBright },
    },
    {
      website: { text: 'LinkedIn:', style: bold, color: white },
      url: { text: 'https://linkedin.com/in/', color: grey },
      handle: { text: 'geekyorion', color: blue },
    },
    {
      website: { text: 'Medium:', style: bold, color: white },
      url: { text: 'https://medium.com/', color: grey },
      handle: { text: '@geekyorion', color: green },
    },
  ],
  otherLinks: [
    {
      website: { text: 'Web:', style: bold, color: white },
      url: { text: 'https://github.com/geekyorion', color: grey },
    },
    {
      website: { text: 'Card:', style: bold, color: white },
      url: { text: 'npx geekyorion', color: yellow },
    },
  ]
};
