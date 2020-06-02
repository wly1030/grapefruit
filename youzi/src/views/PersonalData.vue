<template>
	<div class="personalData">
		<div class="top" >
			<van-icon @click="$router.go(-1)" name="arrow-left" size="32px"/>
			<p>个人资料</p>
		</div>
		<div class="cente"> 
			<p>昵称: 忧郁的孤独者</p>
			<p>性别: 妖</p>
			<p>在线天数: 1030 </p>
			<p>等级: <span style="color: red;"> 黄金VIP</span></p>
			<p>注册时间: 1997-1-1</p>
			<p>职业: 计算机/互联网/通信</p>
			<p>公司: 奇酷</p>
			<p>家乡: 被火星遗忘的村</p>
			<p>昵称: 忧郁的孤独者</p>
			
		</div>
		<div class="foot">
			<div @click="logout">退出账户</div>
		</div>
	</div>
</template>

<script>
	export default {
			data(){
				return{

				}
			},
			methods: {
				logout(){
					this.$router.push('/mine');
					this.$store.commit('changeLogin',0);
				}
			}
	}
</script>

<style scoped="scoped" lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.top{
		
		margin:20px 0 0 20px ;
		display: flex;
		p{
			text-align: center;
			line-height: 36px;
			margin: 0 100px 0;
			font-size: 22px;
			font-weight: 700;
			height: 36px;
			
		}
	}
	.cente{
		overflow: auto;
		box-shadow: 0px 0px 12px rgba(0,0,0,.1);
		margin: 50px 35px 0 35px;
		text-align: left;
		font-size: 18px;
		p{
			margin: 20px 20px 20px 40px;
		}
	}
	.foot{
		div{
			background-color: #f06c7a ;
			width: 270px;height: 40px;
			border-radius: 10px;
			margin: 20px 0 0 54px;
			text-align: center;
			line-height: 40px;
			font-size: 20px;
			font-weight: 588;
			color: white;
			
		}
	}
</style>
