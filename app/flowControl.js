exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

    let codeIndex = null,
      statusCode = {
        'fizzbuzz': num % 3 === 0 && num % 5 === 0,
        'fizz': num % 3 === 0,
        'buzz': num % 5 === 0,
        'true': typeof num === 'number',
        'false': typeof num !== 'number'
      };

    for (codeIndex in statusCode) {
        if (statusCode.hasOwnProperty(codeIndex) && statusCode[codeIndex]) {
            return codeIndex === 'true' ? num : codeIndex === 'false' ? false : codeIndex;
        }
    }
  }
};
