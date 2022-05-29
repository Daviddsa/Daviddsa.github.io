function generateCharacter(name) {

}

function checkStats(stats) {
  for (var i in stats) {
    if (stats[i] > 100) {
      stats[i] = 100;
    }

    if (stats[i] < 1) {
      stats[i] = 1;
    }
  }
}
