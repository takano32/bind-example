#!/usr/bin/env node

func = function(n) {
	console.log(n);
}


for (i = 0; i < 10; i++) {
	n = i;
	f = func.bind(this);
	setTimeout(func, i * 100);
}

