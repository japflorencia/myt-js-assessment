exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
      var regxp = new RegExp("(.)(?=\\1{" + amount + "})","g");
      return str.replace(regxp, ""); 
  }
};
