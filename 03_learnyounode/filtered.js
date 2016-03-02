var fs=require('fs');
fs.readdir(process.argv[2], function(err, files) {
    if(err) throw err;
    else {
        var filtered = files.filter(function (file){
        return file.endsWith('.' + process.argv[3]);
        }
        )
            for(var i = 0; i < filtered.length; i++)
            console.log(filtered[i]);
    }
});
