#!/usr/bin/env node

func = function(n) {
	console.log(n);
}


errFunc = function(err, n, retry) {
	err = true; /* なぜかかならず失敗する設定 */
	if (retry == 0) return;
	if (err == true) {
		errFunc(err, n, retry - 1);
	}
	console.log("Retry: " + n);
}

for (i = 0; i < 10; i++) {
	// f = func.bind(this, i)
	// setTimeout(f, i * 100);
	n = i;
	retry = 3;
	f = errFunc.bind(this, false, n, retry);
	setTimeout(f, i * 100);
}

/* こういうのをかっこよく Node.js で書くにはどうしてるんですか？ */
/* # かっこいいの定義：匿名関数の callee で再帰呼び出ししたい */

