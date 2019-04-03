function generateHashtag(str){

    return str.length > 140 || str ===' ' ? false: 
    '#' + str.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ')

    // if(str.length > 140 || str === null)
    
    // return false

    // return str = '#' + str.split(' ').map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ');  
}

function capitalize(word){
    return word.charAt(0).toUpperCase()+word.slice(1);
}
console.log(generateHashtag('hello miss yang'));