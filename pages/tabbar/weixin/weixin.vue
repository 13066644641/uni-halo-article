<template>
	<view >
		<view class="container">
			<button class="contact-author weixin" ref="autoClickButton" type="primary" open-type="contact">联系作者</button>
		</view>
		<view class="footer">
			<view>「 2022 uni-halo 丨 AGPL-3.0 Licensed @小莫唐尼 」，代码托管于 https://github.com/your/repo</view>
		</view>
	</view>
	
</template>

<script>
export default {
  mounted() {
		//console.log(this.$refs.autoClickButton)
    //this.$refs.autoClickButton.click(); // 自动触发点击
  },
  methods: {
    handleClick() {
      console.log("按钮被点击了！");
		}
	}
}
</script>

<style>
	.weixin{
		
	}
	.container {
	  display: flex;
	  justify-content: center; /* 水平居中 */
	  align-items: center;     /* 垂直居中 */
	  height: 100vh;           /* 需要指定容器高度 */
	}
	.footer {
		color: darkgrey;
		font-size: 7px;
		position: fixed;
		bottom: 20px; /* 距离底部20px，可根据需要调整 */
		width: 100%;
		text-align: center;
		}
</style>