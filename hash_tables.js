// function hash(key, arrayLen) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       let char = key[i];
//       let value = char.charCodeAt(0) - 96 // alphabetic position of char
//       total = (total + value) % arrayLen; // % keeps it within arrayLen
//     }
//     return total
//   }
  ​
  function hash(key, arrayLen) {
    let total = 0;
    let weirdPrime = 31; // hash functions take advantage of prime #s to reduce collisions
    for (let i = 0; i < Math.min (key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * weirdPrime + value) % arrayLen;
    }
    return total
  }

console.log( 
 hash("pink", 10)
)    