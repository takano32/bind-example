#!/usr/bin/env node

func = function(n) {
	console.log(n);
}


for (i = 0; i < 10; i++) {
	f = func.bind(this, i)
	setTimeout(f, i * 100);
}

