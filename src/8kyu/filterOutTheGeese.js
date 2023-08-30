function gooseFilter(birds) {
  const geese = [
    "African",
    "Roman Tufted",
    "Toulouse",
    "Pilgrim",
    "Steinbacher",
  ];

  for (let i = 0; i < birds.length; i++) {
    const bird = birds[i];
    for (let j = 0; j < geese.length; j++) {
      const goose = geese[j];
      if (bird == goose) {
        birds.splice(i, 1);
        i--;
      }
    }
  }
  return birds;
}
