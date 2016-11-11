var getImage = (function() {
  let index = 0;
  return {
   	next: function() {
      return index++;
    }
  };   
})();

console.log(getImage.next())
console.log(getImage.next())
console.log(getImage.next())
console.log(getImage.next())
console.log(getImage.next())
console.log(getImage.next())