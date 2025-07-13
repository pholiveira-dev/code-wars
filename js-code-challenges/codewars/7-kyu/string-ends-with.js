// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string)

function solution(str, ending) {
    const start = str.split('').reverse().join('');
    const end = ending.split('').reverse().join('');

    let endChar = end.length;

    if (start.slice(0, endChar) === end) return true;
    else return false;
}

console.log(solution('backend', 'end'));
console.log(solution('abc', 'd'));
console.log(solution('abc', 'bc'));