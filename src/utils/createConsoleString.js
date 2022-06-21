const newLine = '\n';
const padLeft = 15;

const addPad = string => string.padStart(padLeft);

const createCardLink = (links, isSocial = false) => {  
  return links.map(link => {
    const { website, url, handle } = link;
    const websiteName = website.color(website.style(addPad(website.text)));
    const websiteURL = url.color(url.text);
    let websiteHandle = '';
    if (isSocial) {
      websiteHandle = handle.color(handle.text);
    }
    return `${websiteName} ${websiteURL}${websiteHandle}`;
  }).join(newLine);
};

export const createConsoleString = (data) => {
  const { name, handle, work, socialLinks, otherLinks } = data;

  const cardHeader = name.style(`${name.color(" ".repeat(name.leftSpace) + name.text)} / ${handle.color(handle.text)}${newLine}`);
  const cardWork = `${work.label.color(work.label.style(addPad(work.label.text)))} ${work.color(addPad(work.text))}`;
  const cardSocialLinks = createCardLink(socialLinks, true);
  const cardOtherLinks = createCardLink(otherLinks);

  const result = [cardHeader, cardWork, cardSocialLinks, cardOtherLinks].join(newLine);
  return result;
};
