process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case 'exit':
				process.stdout.write('Wychodzenie z programu\n');
				process.exit();
			case 'about node':
				console.log(process.versions);
				break;
			default:
				process.stderr.write('Błędna komenda\n');
		}
	}
})