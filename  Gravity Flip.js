const flip=(d, a)=>{
    //TODO
  switch (d) {
      case 'R': 
      a.sort((a, b) => a - b);
      break;
      case 'L':
      a.sort((a, b) => b - a)
    }
    return a
  } 