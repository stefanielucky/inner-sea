显示所有的边框布局

在浏览器的书签管理器中添加一个新书签
名字随意设置
内容为

```
javascript: (function() { 
    var elements = document.body.getElementsByTagName('*'); 
    var items = []; 
    for (var i = 0; i < elements.length; i++) { 
        if (elements[i].innerHTML.indexOf('body * { outline: 1px solid red }') != -1) { 
            items.push(elements[i]);
         }
    } 
    if (items.length > 0) { 
        for (var i = 0; i < items.length; i++) { 
            items[i].innerHTML = '';
        } 
   


 } else { 
        document.body.innerHTML += '<style>body * { outline: 1px solid red }</style>'; 
    } 
})();
```
即可变身