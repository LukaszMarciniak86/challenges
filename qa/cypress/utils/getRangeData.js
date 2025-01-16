export const getRange = (fixturesFile, startIndex, endIndex) => {

    if (startIndex < 0 || endIndex >= fixturesFile.length || startIndex > endIndex) {
      throw new Error('Invalid range.');
    }
  
    return fixturesFile.slice(startIndex, endIndex + 1);
  };