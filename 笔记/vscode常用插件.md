# vscode常用插件

1. koroFileHeader 自动添加文件、函数注释

1、CSScomb
看名字应该可以联想到它的功能了吧？没错，正如其名，一把梳理 CSS 属性顺序的 “梳子”。CSS 属性书写顺序非常重要，一个合格的前端er 一定会有他遵循的 CSS 书写顺序规则。至于 CSS 属性书写顺序，这里我推荐腾讯 AollyTeam 团队的规范：http://alloyteam.github.io/CodeGuide/#css-declaration-order
下面简单说下这个插件怎么用。按照插件的文档说明：




在项目的根目录下创建一个名为：.csscomb.json / csscomb.json / .csscomb.js / csscomb.js 的文件，然后添加一些配置项。也可以将配置项写入项目的 package.json 文件中的 csscombConfig 字段。
至于添加的配置项，CSScomb 提供了示例配置文件：https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json
其中的 sort-order 就是 CSS 属性书写顺序，可以按照自己遵循的规范设置，所以我直接替换成了腾讯的。
这个配置文件里面各个字段的作用可以戳这里查看：https://github.com/csscomb/csscomb.js/blob/master/doc/options.md
CSScomb

2019/5/23 更新
看名字应该可以联想到它的功能了吧？没错，正如其名，一把梳理 CSS 属性顺序的 “梳子”。CSS 属性书写顺序非常重要，一个合格的前端er 一定会有他遵循的 CSS 书写顺序规则。至于 CSS 属性书写顺序，这里我推荐腾讯 AollyTeam 团队的规范：http://alloyteam.github.io/CodeGuide/#css-declaration-order
下面简单说下这个插件怎么用。按照插件的文档说明：




在项目的根目录下创建一个名为：.csscomb.json / csscomb.json / .csscomb.js / csscomb.js 的文件，然后添加一些配置项。也可以将配置项写入项目的 package.json 文件中的 csscombConfig 字段。
至于添加的配置项，CSScomb 提供了示例配置文件：https://github.com/csscomb/csscomb.js/blob/master/config/csscomb.json
其中的 sort-order 就是 CSS 属性书写顺序，可以按照自己遵循的规范设置，所以我直接替换成了腾讯的。
这个配置文件里面各个字段的作用可以戳这里查看：https://github.com/csscomb/csscomb.js/blob/master/doc/options.md
2、carbon-now-sh
代码截图生成图片 cmd+opt+A
3、CodeIf
起名网站
4、Turbo Console Log
快捷添加 console.log，一键 注释 / 启用 / 删除 所有 console.log。
ctrl + alt + l 选中变量之后，使用这个快捷键生成 console.log
alt + shift + c 注释所有 console.log
alt + shift + u 启用所有 console.log
alt + shift + d 删除所有 console.log
5、vscode-json

6、LeetCode
