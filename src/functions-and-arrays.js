// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(n1, n2) {
    if (n1 > n2){
        return n1
    } else {
        return n2
    }
}


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];



function findLongestWord(words) {
    
    if (words.length === 0) {
        return null;
    }

    let longestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord;
}



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {

    let sumTotal = 0

    for (let i = 0; i < numbers.length; i++){
        sumTotal += numbers[i]
    }
    return sumTotal
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {


    if (numbers2.length === 0){
        return 0
    }

    const sum = sumNumbers(numbers2)
    const average = sum / numbers2.length
    
   return average
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];
const wordToSearch = 'truth'

function doesWordExist(words2, wordToSearch) {

   
    if (words2.length === 0) {
        return null;
    }
    
    if (words2.indexOf(wordToSearch) !== -1) {
        return true;
    } else {
        return false;
    }
}

