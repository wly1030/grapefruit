<template>
	<div class="discounts">
		<div class="top">
			<van-nav-bar
			  title="优惠券"
			  left-arrow
			  @click-left="onClickLeft"
			/>
		</div>
		<div class="cente">
			<img style="width:60%;" src="discounts.png" alt="">
		</div>
	</div>
	
</template>

<script>
export default {
	methods: {
		onClickLeft() {
		this.$router.go(-1);
		}
	}
}
</script>
<style scoped="scoped" lang="less">
	.top{
		.van-nav-bar{
			background-color: rgb(240, 108, 122);
			.van-icon{
			color: white ;
			}
			.van-nav-bar__title{
				color: white ;
				font-size: 18px;
				font-weight: 700;
			}
		}
		
	}
	.cente{
		margin-top:80px ;
		
	}
</style>
