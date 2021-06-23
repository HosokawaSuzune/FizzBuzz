/*
  fizzbuzz.js
  cscriptコマンドで実行
*/

for (var i = 1; i <= 20; i++) {
  if (i % 3 == 0 && i % 5 == 0)  // iが3の倍数かつ5の倍数
    WScript.echo("FizzBuzz");
  else if (i % 3 == 0)  // iが3の倍数(かつ5の倍数でない)
    WScript.echo("Fizz");
  else if (i % 5 == 0)  // iが5の倍数(かつ3の倍数でない)
    WScript.echo("Buzz");
  else  // iが3の倍数でも5の倍数でもない
    WScript.echo(i);
}
