const randomColor = require('randomcolor');
const crypto = require('crypto');
import { generateString, pattern } from "./util";

const randomIdenticon = () => {
  const color = randomColor();
  const hash = crypto.createHash('sha1')
    .update(generateString())
    .digest('hex');
  const tiles_array = 

};

export default randomIdenticon;