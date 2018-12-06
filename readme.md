## 业务组件
### 1. Input
增加trim功能，组件自身具备处理输入的空白字符能力。基于antd的Input封装，仅支持input。在[antd的基础](https://ant-design.gitee.io/components/input-cn/#API)上增加字段`trim`,设置组件如何处理空白字符，默认为'both'，处理两端空白字符。
#### 参数介绍
参数 | 说明 | 类型 | 默认值
---|--- | ---| ---
trim | 设置组件如何处理空白字符，可选`both`、`all`、`none` | string | 'both'

 * both: 去除字符串两端（默认）空白字符
 * all: 去除字符串内任何空白字符
 * none：不去除空白符
 
 #### 示例

 ```
 // 清除所有输入的空白字符
 <Input trim="all" />
 ```