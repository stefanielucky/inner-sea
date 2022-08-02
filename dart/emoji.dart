var emoji1 = '\u{23}\u{fe0f}\u{20e3}';
var emoji2 = '\u{1f9da}';

Runes input3 = Runes(emoji2);
var index3 = String.fromCharCodes(input3);

//十进制
// var index4 = String.fromCharCode(8419);

main() {
  print(input3);
  print(index3);

  print(emoji2.runes);
  print(input3.toString());
  print(index3.codeUnits);
  print(index3.codeUnits[0].toRadixString(16));
  print(index3.codeUnits[1].toRadixString(16));
}

/*
1、4位以上的十六进制数要加花括号
2、Runs，接受utf-32编码，可以把之处理成10进制数
3、String.codeUnitAt(index) - 返回指定字符的 10 进制 Unicode 索引
4、String.codeUnits - 返回所有字符的 10 进制 Unicode 索引，结果是个集合
5、String.runes - 返回所有字符的 10 进制 Unicode 编码值，结果是个集合
 */
