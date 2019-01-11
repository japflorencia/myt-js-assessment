exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {

    var validDir = false;
    var finalList = [];

    for(var i=0; i< data.files.length;i++){
      if(typeof data.files[i] == "string"){
        if(data.dir == dirName && dirName != undefined || dirName == undefined){
          validDir = true;
        }else{
          validDir = false;
        }
        if(validDir==true){
          finalList.push(data.files[i]);
        }
      }else if(typeof data.files[i] == "object"){
        for(var x=0; x<data.files[i].files.length;x++){
          if(typeof data.files[i].files[x] == "string"){
            if(data.files[i].dir == dirName && dirName != undefined || dirName == undefined){
              validDir = true;
            }else{
              validDir = false;
            }
            if(validDir==true){
              finalList.push(data.files[i].files[x]);
            }
          }else if(typeof data.files[i].files[x] == "object"){
            for(var z=0; z<data.files[i].files[x].files.length;z++){
              if(typeof data.files[i].files[x].files[z] == "string"){
                if(validDir==true){
                  finalList.push(data.files[i].files[x].files[z]);
                }
              }
            }
            
          }
        }

      }
    }
    return finalList;
  }
};
