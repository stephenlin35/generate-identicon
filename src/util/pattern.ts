const _isEven = (n: number) => n % 2 === 0 ? true : false;

const pattern = (hash: string) => {
  const arr: boolean[] = [];

  for (let i = 0; i < hash.length; i += 2) {
    const dec_val = parseInt(hash.substring(i, i + 2), 16);
    const bool_val = _isEven(dec_val);
    arr.push(bool_val);
  }

  return arr;
};

export default pattern;