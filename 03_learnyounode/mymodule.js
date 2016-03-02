var fs = require('fs');
//var filterCallback = function (file) {
//    return file.endsWith('.' + pattern);
//}

module.exports = function(directory, pattern, handleDir) {
    fs.readdir(directory, function filterData(err, data) {
        if(err != null) //error
               handleDir(err, null);
        else{ 

               var filtered = data.filter(function filterCallback(file){ 
                    return file.endsWith('.'+pattern) 
                });
               handleDir(null, filtered);
               // var filtered = data.filter(filterCallback);
               handleDir(null, filtered);
            }
    });
};

