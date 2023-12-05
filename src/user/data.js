import { COLORS, MODIFIERS } from '../config/chalk.config.js';

const { white, green, grey, blue, red, blueBright, yellow, cyan } = COLORS;
const { bold, dim, italic } = MODIFIERS;

export const data = {
  name: {
    text: "David G. Simmons",
    leftSpace: 5,
    color: cyan,
    style: bold,
  },
  handle: {
    text: "davidgs",
    color: green,
  },
  work: {
    label: { text: "Work:", style: bold, color: cyan },
    text: "DevRel Leader",
    color: white,
  },
  socialLinks: [
    {
      website: { text: "Home:", style: bold, color: cyan },
      url: { text: "https://davidgs.com/", color: green },
      handle: { text: "davidgs", color: blue },
    },
    {
      website: { text: "Github:", style: bold, color: cyan },
      url: { text: "https://github.com/", color: green },
      handle: { text: "davidgs", color: blue },
    },
    {
      website: { text: "npm:", style: bold, color: cyan },
      url: { text: "https://npmjs.com/", color: green },
      handle: { text: "~davidgs", color: red },
    },
    {
      website: { text: "LinkedIn:", style: bold, color: cyan },
      url: { text: "https://linkedin.com/in/", color: green },
      handle: { text: "davidgsimmons", color: blue },
    },
    {
      website: { text: "Mastodon:", style: bold, color: cyan },
      url: { text: "https://tty0.social/", color: green },
      handle: { text: "@davidgs", color: blue },
    },
    {
      website: { text: "Bluesky Social:", style: bold, color: cyan },
      url: { text: "https://staging.bsky.app/", color: green },
      handle: { text: "@davidgs.com", color: blueBright },
    },
    {
      website: { text: "Twitter:", style: bold, color: cyan },
      url: { text: "https://twitter.com/", color: green },
      handle: { text: "davidgsIoT", color: blueBright },
    },
  ],
  otherLinks: [
    {
      website: { text: "Card:", style: bold, color: cyan },
      url: { text: "npx davidgs", color: yellow },
    },
  ],
  footer: {
    text: "To make your own card, visit",
    style: dim,
    color: grey,
    url: {
      link: "https://www.npmjs.com/package/davidgs/",
      color: green,
      style: italic,
    },
  },
};
