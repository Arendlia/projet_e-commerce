function threedots(str) {
    var dotword = "";
    for (let i = 0; i < str.length; i++) {
      dotword += str[i];
      if (dotword.length >= 60) {
        dotword += "...";
        return dotword;
      }
    }
    return dotword;
  }
  export { threedots };
  
  
  function threedotstitle(str) {
    var dotword = "";
    for (let i = 0; i < str.length; i++) {
      dotword += str[i];
      if (dotword.length >= 15) {
        dotword += "...";
        return dotword;
      }
    }
    return dotword;
  }
  export { threedotstitle };
  