function mixColors(color1, color2) {
    var result;
  
    switch (color1) {
      case "red":
        switch (color2) {
          case "blue":
            result = "purple";
            break;
          case "yellow":
            result = "orange";
            break;
          default:
            result = "Invalid color combination";
        }
        break;
      case "blue":
        switch (color2) {
          case "red":
            result = "purple";
            break;
          case "yellow":
            result = "green";
            break;
          default:
            result = "Invalid color combination";
        }
        break;
      case "yellow":
        switch (color2) {
          case "red":
            result = "orange";
            break;
          case "blue":
            result = "green";
            break;
          default:
            result = "Invalid color combination";
        }
        break;
      default:
        result = "Invalid color combination";
    }
  
    return result;
  }
  
  var result = mixColors("red", "blue");
  console.log(result); // purple
  
  result = mixColors("red", "yellow");
  console.log(result); // orange
  
  result = mixColors("blue", "yellow");
  console.log(result); // green
  
  result = mixColors("red", "green");
  console.log(result); // Invalid color combination
  