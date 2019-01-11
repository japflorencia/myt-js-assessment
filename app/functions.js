exports = (typeof window === 'undefined') ? global : window;
let intArr = [];
exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null,arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  
  functionFunction : function(str) {
    intArr.push(str);
    if(intArr.length<2){
      return this.functionFunction;
    }else{
      let result = intArr;
      intArr = [];
      return result.join(", ");
    }

  },

  makeClosures : function(arr, fn) {
    return arr.map(function(v) {
      return function(){return fn(v)};    
    });
  },

  useArguments : function() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++){
      result += arguments[i];
    }
    return result;
  }
};
