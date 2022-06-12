

function verifiedArray(array, ignoreArray) {
  let cleanArray = [];
  for (let content of array) {
    if (ignoreArray.indexOf(content) > -1) {
    }
    else {
      cleanArray.push(content)
    }
  }
  return cleanArray;
}



export default verifiedArray;


