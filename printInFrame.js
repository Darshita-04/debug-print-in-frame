const printInFrame = function(list) {
  list = list.split(' ');
  const longest = longestStr(list);
  const border = repeat('*', longest + 4);

  console.log(border);
  for (const word of list) {
    console.log(`* ${word}${repeat(' ', longest - word.length )} *`);
  }
  console.log(border);
};

const repeat = function(str, times) {
  let result = '';

  for (let i = 0; i < times; i++) {
    result += str;
  }

  return result;
};

const longestStr = function(list) {
  let longest = list[0].length;

  for (let i = 0; i < list.length; i++) {
    if(list[i].length > longest){
      longest = list[i].length;
    }
  }
  return longest;
};

// Test driver code, do not modify
printInFrame('May the force be with you');
printInFrame('Here\'s Johnny!');
printInFrame('Supercalifragalisticexpialadocious');
printInFrame('Lost, like tears in the rain');
