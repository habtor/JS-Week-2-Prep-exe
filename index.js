"use strict";

function runExperiment(sampleSize) {
  const valueCounts = [0, 0, 0, 0, 0, 0];
  for (let i = 0; i < sampleSize; i++) {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    if (randomNumber === 1) {
      valueCounts[0]++;
    } else if (randomNumber === 2) {
      valueCounts[1]++;
    } else if (randomNumber === 3) {
      valueCounts[2]++;
    } else if (randomNumber === 4) {
      valueCounts[3]++;
    } else if (randomNumber === 5) {
      valueCounts[4]++;
    } else {
      valueCounts[5]++;
    }
  }

  const results = [];

  for (let i = 0; i < valueCounts.length; i++) {
    let percentage = ((valueCounts[i] / sampleSize) * 100).toFixed(2);
    results.push(percentage);
  }

  return results;
}

function main() {
  const sampleSizes = [100, 1000, 1000000];

  for (let i = 0; i < sampleSizes.length; i++) {
    let sampleResult = runExperiment(sampleSizes[i]);
    console.log(sampleResult, sampleSizes[i]);
  }
}

main();
