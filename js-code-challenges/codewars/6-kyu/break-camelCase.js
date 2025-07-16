// Complete the solution so that the function will break up camel casing, using a space between words.

function solution(string) {

    let result = "";
    
    for(let s of string) {
        if(s === s.toUpperCase() && s !== s.toLowerCase()) {
           result += " " + s;
        }
    
        else {
            result += s;
        }

    }

    return result;
}

console.log(solution('EmicidaRei'));