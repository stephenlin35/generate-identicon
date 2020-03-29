import generateIndenticon from "./util/index";

const $ = document;
const randomizeBtn = $.querySelector<HTMLButtonElement>('#randomize');
if (randomizeBtn === null) {
  throw new Error('Randomize button not found');
}
randomizeBtn.addEventListener('click', generateIndenticon);
