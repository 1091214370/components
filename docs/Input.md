## Input组件
### API介绍
参数 | 说明 | 类型 | 默认值
---|--- | ---| ---
trim | 设置组件如何处理空白字符，可选`both`、`all`、`none` | string | 'both'
clearbtn | 设置组件是否开启清空输入按钮,不可与antd Input的suffix同时使用，否则会导致suffix无效 | bool | false
----
#### trim字段说明
 * both: 去除字符串两端空白字符（默认开启）
 * all: 去除字符串内任何空白字符
 * none：不去除空白符
----
### 使用场景列举
#### 1. 搜索部分的输入框
- 选择如何操作输入的空白字符
- 开启清除按钮，可以在实际开发中节省开发时间。

### 功能示例
#### trim
 ```
 // 清除所有输入的空白字符
 <Input trim="all" />

  // 清除前后输入的空白字符(默认开启)
 <Input trim="both" />
 <Input />

  // 不清除空白字符
 <Input trim="none" />
 ```
#### clearbtn
```
// 开启清除按钮
 <Input clearbtn={true} />
 <Input clearbtn />


// 关闭清除按钮(默认关闭)
 <Input clearbtn={false} />
 <Input />
```
