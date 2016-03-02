var fs=require('fs');

fs.readFile(process.argv[2], function (err, data) {
	if(err != null) console.log(err);
	else {
		var lines = data.toString().split('\n');
		console.log(lines.length-1);
	}
	}
)
