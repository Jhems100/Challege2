function towerBuilder(nFloors) {
    let tower = [];
  
    for (let i = 0; i < nFloors; i++) {
      let spaces = ' '.repeat(nFloors - i - 1);
      let asterisks = '*'.repeat(2 * i + 1);
  
      let floor = spaces + asterisks + spaces;
  
      tower.push(floor);
    }
  
    return tower;
  }
  
  console.log(towerBuilder(3));
  console.log(towerBuilder(6));
  