<template>
	<div class="login">
		<div class="top" >
			<van-icon @click="$router.go(-1)" name="arrow-left" size="35px"/>
		</div>
		<div class="cente">
			<p style="font-size: 22px; font-weight:600; opacity: 0.8;">欢迎回来!</p>
			<div class="cente1">
				<p>首次登入将自动注册</p>
				<div class="cente1_1">
					<p>手机号码</p>
					<input type="text" placeholder="请输入手机号码" v-model="number">
				</div>
				<div class="cente1_2">
					<p>验证码</p>
					<div class="cente1_2_1">
						<input type="password" placeholder="请输入验证码" v-model="pass">
						<p>获取验证码</p>
					</div>
				</div>
			</div>
			<div class="lojinButton" @click="login">登录</div>
		</div>
	</div>
</template>
<style scoped="scoped" lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.top{
		text-align: left;
		margin:20px 0 0 20px ;
	}
	.cente{
		text-align: left;
		margin:80px 0 0 20px ;
		.cente1{
			margin-top: 40px ;
			p{
				margin: 10px 0;
				font-size: 15px;
			}
			.cente1_1{
				border-radius: 10px;
				margin-right: 20px;
				overflow: auto;
				background-color: #f8f6fc;
				
				p{
					margin: 10px;
				}
				input{
					margin: 0 10px 10px;
					border: none;
					font-size: 15px;
					background-color: #f8f6fc;
					opacity: 0.8;
				}
			}
			.cente1_2{
				border-radius: 10px;
				margin:20px 20px 20px 0;
				overflow: auto;
				background-color: #f8f6fc;
				p{
					margin: 10px;
				}
				.cente1_2_1{
					display:flex;
					input{
						margin: 0 10px 10px;
						border: none;
						font-size: 15px;
						background-color: #f8f6fc;
						opacity: 0.8;
					}
					p{
						color: white;
						width: 80px;
						height: 30px;
						font-size: 14px;
						text-align: center;
						line-height: 30px;
						border-radius: 5px;
						background-color: #f06c7a;
						margin-bottom: 20px;
					}
				}
				
			}
		}
		.lojinButton{
			background-color: #f06c7a;
			margin:20px 20px 20px 0;
			font-size: 22px;
			text-align: center;
			height: 40px;
			line-height: 40px;
			border-radius: 5px;
			color: white;
		}
	}
</style>
<script>
	import { Dialog } from 'vant';

	export default {
		data(){
			return{
				number:'1234567989',
				pass:'zxcvbnm'
			}
		},
		methods: {
			login(){
				this.$router.push('/mine');
				this.$store.commit('changeLogin',1);
			}
		}
}
</script>

