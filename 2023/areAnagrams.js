function areAnagrams(s1, s2) {
    if (s1.length !== s2.length) {
      return false;
    }
  
    let freq1 = new Map();
    let freq2 = new Map();
  
    let splitS1 = s1.split("");
    let splitS2 = s2.split("");
  
    splitS1.forEach(ch => {
      freq1.set(ch, (freq1.get(ch) || 0) + 1);
    });
  
    splitS2.forEach(ch => {
      freq2.set(ch, (freq2.get(ch) || 0) + 1);
    });
  
    for (let key of freq1.keys()) {
      if (!freq2.has(key)) {
        return false;
      }
    }
  
    return true;
  }
  
  let s1 = "listen";
  let s2 = "silent";
  
  console.log(areAnagrams(s1, s2)); // Output: false
  
