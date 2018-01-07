# DParallax.js
一个简单的轻量级的滚动视差原生js插件
# 由来

> 滚动视差可以是网页看起来高端大气上档次，本希望借助第三方插件实现，最终发现找到的插件要么太繁琐要么太简单。感觉不如自己封装一个轻量级的来用。

# 步骤
## 1.页面引入
```javascript
  页面加载完毕后引入
  <script src="DParallax.js"></script>

```

## 2.页面结构
```html
  <div class="box">
		<div class="d0" data-bl=.2></div>
		<div class="d1" data-bl=.6 data-reverse="true"></div>
		<div class="d2" data-bl=.4></div>
		<div class="d3" data-bl=.3></div>
	</div>

```

### 3.初始化插件
```javascript
  new DParallax('.box');

```

# 参数说明
+ data-bl 偏移幅度。范围0~1,值越大，视差效果越明显。为0不视差
+ data-reverse 是否反转。默认false，为true时该元素偏移与滚动方向相反

