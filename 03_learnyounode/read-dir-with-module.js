var mymod = require('./mymodule.js');
mymod(process.argv[2], process.argv[3], function readArray(err, data) {
    for(var i=0; i < data.length; i++)
        console.log(data[i]);
})

