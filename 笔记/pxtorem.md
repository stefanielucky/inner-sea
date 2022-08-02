## px
px，表示像素，呈现在我们显示器上的一个个小点，每个像素点都是大小等同的，所以像素为计量单位被分在了绝对长度单位中。  
有些人会把px认为是相对长度，原因在于在移动端中存在设备像素比，px实际显示的大小是不确定的。  
px的大小和元素的其他属性无关，所以是绝对单位。  

## em

em是相对长度单位。相对于当前对象内文本的字体尺寸。  
如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸（1em = 16px）

1. font-size = 10px  
   em = 对象内文本字体的大小，1em = 10px、1.2em = 12px

2. font-size = 62.5%  
   em = （浏览器默认字体大小）* 62.5% => 16 * 62.5% = 10px

设置为62.5更好是因为浏览器默认字体大小是16，在高分辨率的屏幕上，可能环境适配会修改默认字体大小，这样可以随着进行适配展示


## rem

rem，相对单位，相对的只是HTML根元素font-size的值  
同理em，可以在根元素html中加入font-size: 62.5%
```
html {font-size: 62.5%;  } /*  公式16px*62.5%=10px  */ 
```
同样，1rem=10px、1.2rem=12px、1.4rem=14px、1.6rem=16px
  

## 使用pxtorem

### 1. 安装

当前项目命令行
```
npm install postcss-pxtorem@5.1.1
```

指定安装5.1.1版本，否则会报错“PostCSS plugin postcss-pxtorem requires PostCSS 8”


### 2. 基础配置

在vue.config.js文件中进行引入配置

```
const pxtorem = require("postcss-pxtorem")

css: {
    loaderOptions: {
      postcss: {
          pxtorem({
            rootValue: 16, // px换算为rem的换算基数
            propList: ['*'], //对所有文件进行转换
            unitPrecision: 3, //允许rem单位增长的十进制数字，小数点后保留的位数
            selectorBlackList: ['.com-box', '.right-box'], //要忽略的选择器名称
            replace: false, //替换rems的规则
            mediaQuery: fales, //是否在媒体查询中转换px
            minPixelValue: 1, //要替换的最小像素值
            exclude: [/(node_module)/] //正则，要忽略并保留为px的文件路径
          })
        ]
      }
    ...
    }
}
```

### 3. 动态配置转换比例

新建rem.js文件，检查当前环境，动态修改window的fontsize
在main.js中引入rem.js文件。  
window.clientWidth / 设计稿标准 = x / 16
x = 16 * (window.clientWidth / 设计稿标准）

```
// 设置不同分辨率下fontsize大小
(function(){
    var initFontSize = 16
    var iPhone6Width = 375
    const machineTypeIsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    var newFontSize = initFontSize
    var clientWidth
    if(machineTypeIsMobile){
        clientWidth = window.document.documentElement.clientWidth || iPhone6Width
        newFontSize = initFontSize * (clientWidth / iPhone6Width)
    }
    console.log("当前页面显示clientWidth", clientWidth)
    console.log("当前页面显示fontsize", newFontSize)
    document.documentElement.style.fontSize = newFontSize + 'px'
})()
```

## 其他转换工具

- postcss-px2rem
- postcss-plugin-px2rem
