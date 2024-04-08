function check(a,x){
    var result = false;
    for(i = 0; i < a.length; i++){
      if(a[i]==x){
      result  = true;
      }
     
    }
    return result;
  };
  check([1, "hey", false], 1);