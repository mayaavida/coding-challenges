// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    let sum = array.reduce((a,b) => a + b, 0);
    let avg = sum/(array.length) || 0;
    return avg;
  }

//   Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

//   Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
    if (n<0 || m<0) {
      return 0
    }
    let blankPages = n*m
    return blankPages
  }

// Build a function that returns an array of integers from n to 1 where n>0.

//   Example : n=5 --> [5,4,3,2,1]

  const reverseSeq = n => {
    let arr = []
    for (let i=n; i>0; i--){
      arr.push(i)
    }return arr
  };

//   Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

function DNAtoRNA(dna) {
    return dna.split('').map(element => element === 'T' ? 'U' : element).join('')
  }

//   You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

//   Array can contain numbers or strings. X can be either.
  
//   Return true if the array contains the value, false if not.

function check(a, x) {
    if (a.find(element => element == x)){
      return true
    }else {
      return false
    }
  }