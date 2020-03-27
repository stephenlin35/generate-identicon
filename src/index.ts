import generateIndenticon from "./util/index";

const $ = document;
const randomizeBtn = $.querySelector<HTMLButtonElement>('#randomize');
if (randomizeBtn === null) {
  throw new Error('Randomize Identicon button not found');
}
randomizeBtn.addEventListener('click', generateIndenticon);

// const firstTile = $.querySelector<SVGRectElement>('#\\30-0');
// if (firstTile === null) {
//   console.log("tile 0-0 is not found");
// } else {
//   firstTile.setAttribute('fill', 'red');
// }

// const p = $.querySelector<HTMLParagraphElement>("p");
// if (p === null) {
//   throw new Error("Not found");
// }
// p.style.color = "red";
