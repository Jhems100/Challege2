function findRoutes(routes) {
    let destinations = {};
  
    for (let route of routes) {
      destinations[route[0]] = route[1];
    }
  
    let start = null;
    for (let destination in destinations) {
      if (!Object.values(destinations).includes(destination)) {
        start = destination;
        break;
      }
    }
  
    let sequence = [start];
    let currentDestination = start;
    while (destinations[currentDestination]) {
      currentDestination = destinations[currentDestination];
      sequence.push(currentDestination);
    }
  
    return sequence.join(', ');
  }
  
  console.log(findRoutes([['USA', 'BRA'], ['JPN', 'PHL'], ['BRA', 'UAE'], ['UAE', 'JPN']])); // Output: "USA, BRA, UAE, JPN, PHL"
  