一、命令式UI和声明式UI

命令式 UI ：无需编写如何在不同的 UI 状态之间进行切换的代码
    获取到 ViewB 的实例 b 和所有权，并调用相关的修改的方法（并隐式的使其失效）

// Imperative style
b.clearChildren()
ViewC c3 = new ViewC(…)
b.add(c3)

声明式 UI ：描述当前的 UI 状态，并将转换交给框架。
    视图配置（如 Flutter 的 Widget ）是不可变的，它只是轻量的“蓝图”。要改变 UI，widget 会在自身上触发重建（在 Flutter 中最常见的方法是在 StatefulWidgets 组件上调用 setState()）并构造一个新的 Widget 子树。
    当用户界面发生变化时，Flutter 不会修改旧的实例，而是构造新的 widget 实例。框架使用 RenderObjects 管理传统 UI 对象的职责（布局状态）。 RenderObjects 在帧之间保持不变， Flutter 的轻量级 widget 通知框架在状态之间修改 RenderObjects， Flutter 框架则处理其余部分。



｜总之，状态发生改变时，就会触发用户界面的重绘。


二、短时状态和应用状态

状态：用户界面重建时所需要的数据

短时状态 ( 用户界面(UI)状态 / 局部状态) ：可以完全包含在一个独立 widget 中的状态。widget 树中其他部分不需要访问这种状态。不需要去序列化这种状态，这种状态也不会以复杂的方式改变。
* 一个 PageView 组件中的当前页面
* 一个复杂动画中当前进度
* 一个 BottomNavigationBar 中当前被选中的 tab
class MyHomepage extends StatefulWidget {
  @override
  _MyHomepageState createState() => _MyHomepageState();
}

class _MyHomepageState extends State<MyHomepage> {
  int _index = 0;

  @override
  Widget build(BuildContext context) {
    return BottomNavigationBar(
      currentIndex: _index,
      onTap: (newIndex) {
        setState(() {
          _index = newIndex;
        });
      },
      // ... items ...
    );
  }
}

｜没有向外widget传递，会随着MyHomepage的注销而注销。


应用状态（共享状态）：在应用中的多个部分之间共享一个非短时的状态，并且在用户会话期间保留这个状态。
* 用户选项
* 登录信息
* 一个社交应用中的通知

需要说明的是，你可以使用 State 和 setState() 管理你的应用中的所有状态。实际上Flutter团队在很多简单的示例程序（包括你每次使用 flutter create 命令创建的初始应用）中正是这么做的。
也可以用另外一种方式。比如，在一个特定的应用中，你可以指定底部导航栏中被选中的项目不是一个短时状态。你可能需要在底部导航栏类的外部来改变这个值，并在对话期间保留它。在种情况下 _index 就是一个应用状态。
没有一个明确、普遍的规则来区分一个变量属于短时状态还是应用状态，有时你不得不在此之间重构。比如，刚开始你认为一些状态是短时状态，但随着应用不断增加功能，有些状态需要被改变为应用状态。







三、性能优化

1、渲染性能：

Controlling build() cost
* 避免在 build() 方法中进行重复且耗时的工作，因为当父 widget 重建时，子 Wdiget 的 build() 方法会被频繁地调用。
* 避免在一个超长的 build() 方法中返回一个过于庞大的 widget。把他们分拆成不同的 widget，并进行封装，另外他们要这样改变：
    * 当在 State 上调用 setState()时，所有后代 widget 都将重建。因此，将 setState() 的调用转移到其 UI 实际需要更改的 widget 子树部分。如果改变的部分仅包含在 widget 树的一小部分中，避免在 widget 树的更高层级中调用 setState()。
    * 当重新遇到与前一帧相同的子 widget 实例时，将停止遍历。

Apply effects only when needed
* 能不用 Opacity widget，就尽量不要用。
* 创建带圆角的矩形，( widget 都提供的 borderRadius属性)。裁切组件Clipping 操作没有 Opacity 那么耗时，但仍然很耗时，谨慎使用。

Render grids and lists lazily
* 使用listView而不是直接渲染list
https://medium.com/saugo360/flutter-creating-a-listview-that-loads-one-page-at-a-time-c5c91b6fabd3


其他：
动画首次渲染：https://flutter.cn/docs/perf/rendering/shader
web构建优化：https://medium.com/flutter/building-performant-flutter-widgets-3b2558aa08fa
web延迟加载：https://medium.com/flutter/optimizing-performance-in-flutter-web-apps-with-tree-shaking-and-deferred-loading-535fbe3cd674





