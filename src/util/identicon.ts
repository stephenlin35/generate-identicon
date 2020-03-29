const randomColor = require('randomcolor');
const crypto = require('crypto');
import generateString from "./randomize";
import pattern from "./pattern";

const $ = document;

const _clearTiles = () => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const tile = $.querySelector<SVGRectElement>(`.\\3${i}-${j}`);
      if (tile === null) throw new Error("Tile not found");
      tile.setAttribute('fill', '#efeded');
    }
  }
};

const _renderTiles = (tiles: boolean[]) => {
  const color = randomColor();
  let index = 0;

  _clearTiles();

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
      if (tiles[index]) {
        const tile = $.querySelector<SVGRectElement>(`.\\3${i}-${j}`);
        if (tile === null) throw new Error('Tile not found');
        tile.setAttribute('fill', `${color}`);

        if (j < 2) {
          const mirror_tile = $.querySelector<SVGRectElement>(`.\\3${i}-${j === 0 ? j + 4 : j + 2}`);
          if (mirror_tile === null) throw new Error('Mirror Tile not found');
          mirror_tile.setAttribute('fill', `${color}`);
        }
      }
      index++;
    }
  }
};

const identicon = () => {
  const hash = crypto.createHash('sha1')
    .update(generateString())
    .digest('hex');
  const tiles_array = pattern(hash);
  _renderTiles(tiles_array);
};

export default identicon;