const checkLetter = (attemps) => {
  const letters = attemps
    .filter((word) => word.length > 0)
    .map((word) => ({ ...word }))
    .reduce((prev, act) => prev.concat(Object.values(act)), []);

  return letters;
};

export default checkLetter;
