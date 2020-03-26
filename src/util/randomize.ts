const _randomize = (length: number) => {
  return Math.floor(Math.random() * length);
};

const generateRandomString = () => {
  const char_selection = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz";
  const output_length = _randomize(40);
  let output = "";

  for (let i = 0; i < output_length; i++) {
    output += char_selection.charAt(_randomize(char_selection.length));
  }

  return output;
};

export default generateRandomString;