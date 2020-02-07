class HashTable {
    constructor(size) {
        this.keyMap = new Array(size);
    }

    hashFunc(key) {
        let total = 0;
        let weirdPrime = 31; // hash functions take advantage of prime #s to reduce collisions
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * weirdPrime + value) % this.keyMap.length;
        }
        return total
    }
    set(key, value){
        let index = this.hashFunc(key)
        if (this.keyMap[index]){
          this.keyMap[index].push([key, value])
        }else{
          this.keyMap[index] = [[key, value]]
        }
      return this.keyMap  
    }

    get(key){
      //put key in hash func
      //returns hash index
      //call on index
      //use index to see if theres anything in there.
      //if empty return null
      //if length == 1 return the first value at index 0 
      //otherwise loop through till you find the key
      let index = this.hashFunc(key)
      let arrayAtIndex = this.keyMap[index]
      
      if(!this.keyMap[index]){
        return null
      }
      let len = this.keyMap[index].length
      if(len){
        for(let x = 0; x < len; x++){
          if (arrayAtIndex[x][0] === key){
            return arrayAtIndex[x][1]
          }
        }
      }
    }

  keys(){
    let keys = []
    for(let i = 0; i < this.keyMap.length; i++){
      if (Array.isArray(this.keyMap[i])){
        this.keyMap[i].forEach(arr => keys.push(arr[0]) )
        }     
      } 
 
  return keys
}

  values(){
    let values = []
    for(let i = 0; i < this.keyMap.length; i++){
      if (Array.isArray(this.keyMap[i])){
        this.keyMap[i].forEach(arr => values.push(arr[1]) )
        }     
      } 
 
  return values
  }






}

const newHash = new HashTable(10)
newHash.set("Alex", 32)
newHash.set("grey", 4)
newHash.set("brown", 5)
console.log(newHash)
console.log(newHash.keys())



