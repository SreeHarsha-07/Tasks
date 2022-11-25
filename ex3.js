function sandwitchCalculator(bread,cheese){
    var count=0;
      while(bread>=2 && cheese>=1){
        count++;
        bread -=2;
        cheese -=1;
      }
      return count;
    }
    
    console.log(sandwitchCalculator(5,4));
    