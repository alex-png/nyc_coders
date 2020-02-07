var balancedStringSplit = function(s) {
    let balanced = 0
    let count = 0
    for(let x = 0; x<s.length; x++){
        if(s[x] === "R"){
            balanced++
           }else{
            balanced--
        }
        
        if(balanced === 0){
            count++
        }
        
    }
    return count
};
