function promptForFroyoFlavors() {
    return prompt("Enter a list of comma-separated froyo flavors:");
  }
  
  function countFroyoFlavors(flavors) {
    const flavorCount = {};
  
    flavors.forEach((flavor) => {
      flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
    });
  
    return flavorCount;
  }
  
  function displayFlavorCount(flavorCount) {
    console.log("Froyo Flavor Count:");
    for (const flavor in flavorCount) {
      console.log(`${flavor}: ${flavorCount[flavor]}`);
    }
  }
  const initialFlavors = ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"];
  const userFlavorsInput = promptForFroyoFlavors();
  const userFlavorsArray = userFlavorsInput.split(",").map((flavor) => flavor.trim());
  
  const flavorCount = countFroyoFlavors(userFlavorsArray);
  displayFlavorCount(flavorCount);