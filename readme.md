## 安装说明
使用`npm install bcbc --save`安装，并在使用时引入。
```
import { input } from 'bcbc';
```
## 更新日志
### 1.0.12 ---- 解决输入框输入一个字符后失去焦点的问题，兼容allowClear属性，allowClear存在时，clearbtn无效

### 1.0.0 ---- 增加Input组件，提供trim能力和clear能力
## 业务组件
### 1. [Input](/docs/Input.md)
[点击组件标题或本行文字跳转至文档](/docs/Input.md)
- 基于antd的Input封装，仅支持input。
- 增加trim功能，组件自身具备处理输入的空白字符能力。在[antd的基础](https://ant-design.gitee.io/components/input-cn/#API)上增加字段`trim`,设置组件如何处理空白字符，默认为'both'，处理两端空白字符。
- 增加清除内容按钮，可配置开启或关闭，默认为关闭状态。(antd 3.12.0版本增加allowClear属性，与本功能冲突，allowClear属性存在时本功能无效)