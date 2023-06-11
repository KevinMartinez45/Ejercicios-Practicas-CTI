function rangeOfNumbers(startNum, endNum) {
    if(startNum > endNum){
      return [];
    }else{
      const Array = rangeOfNumbers(startNum, endNum - 1);
      Array.push(endNum);
      return Array;
    }
  };