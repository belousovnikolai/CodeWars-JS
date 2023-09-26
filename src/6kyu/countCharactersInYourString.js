// https://www.codewars.com/kata/52efefcbcdf57161d4000091/javascript

function count(string) {
    const map = {};
    
    for (let i = 0; i < string.length; i++) {
      if(map.hasOwnProperty(string.charAt(i))) {
        map[string.charAt(i)]++;
      } else {
        map[string.charAt(i)] = 1;
      }
    }
    return map;
  }