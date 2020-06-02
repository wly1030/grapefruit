<template>
	<div class="mine">
		<div class="top">
			<div class="top1">
				<van-icon @click="login2" name="setting-o" size="26px"/>
			</div>
			<div @click="login1">
				<div class="top2" v-show="tag==0">
					<img  src="no_login.png" alt="">
					<div class="top2_1">
						<p style="font-size: 20px;">登录</p>
						<p>登录更精彩</p>
					</div>
				</div>
				<div class="top2" v-show="tag==1">
					<img style="border-radius:50%;" src="touxaing.jpg" alt="">
					<div class="top2_1">
						<p style="font-size: 20px;">忧郁的孤独者</p>
						<p>在线天数: 1030</p>
					</div>
				</div>
			</div>
		</div>
		<div class="top3">
			<img src="qiandao.png" alt="">
			<p><span v-show="tag1">您今天尚未签到</span><span v-show="!tag1">您已签到25天</span></p>
			<p @click="login3" id="p1" > <span v-show="tag1">签到</span><span v-show="!tag1">已签到</span></p>
		</div>
		<div class="cente">
			<p>我的工具栏</p>
			<div class="cente1">
				<div @click="goLogin" class="cente1_1">
					<img src="10.png" alt="">
					<p>我的收藏</p>
				</div>
				<div  @click="goLogin" class="cente1_1">
					<img src="11.png" alt="">
					<p>优惠券</p>
				</div>
				<div  @click="login2" class="cente1_1">
					<img src="12.png" alt="">
					<p>个人资料</p>
				</div>
				<div  @click="goLogin" class="cente1_1">
					<img src="13.png" alt="">
					<p>签到记录</p>
				</div>
				<div  @click="goLogin" class="cente1_1">
					<img src="14.png" alt="">
					<p>收货地址</p>
				</div>
				<div  @click="goLogin" class="cente1_1">
					<img src="15.png" alt="">
					<p>信息中心</p>
				</div>
				<div  @click="goLogin" class="cente1_1">
					<img src="16.png" alt="">
					<p>发布商品</p>
				</div>
				<div  @click="goLogin" class="cente1_1">
					<img src="17.png" alt="">
					<p>我的商品</p>
				</div>
				<div  @click="goLogin" class="cente1_1">
					<img src="18.png" alt="">
					<p>未认证</p>
				</div>
				<div  @click="$router.push('/schoolList')" class="cente1_1">
					<img src="19.png" alt="">
					<p>开通学校</p>
				</div>
				<div  @click="goLogin"  class="cente1_1">
					<img src="20.png" alt="">
					<p>发布求购</p>
				</div>
				<div   @click="goLogin" class="cente1_1">
					<img src="21.png" alt="">
					<p>我的求购</p>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped="scoped" lang="less">
	*{
		margin:0;
		padding: 0;
	}
	.top{
		overflow: auto;
		width: 375px;
		height: 186px;
		border-radius: 0 0 10px 10px;
		background-color:#f06c7a;
		.top1{
			text-align: right;
			margin: 15px 15px 0 0;
		}
		.top2{
			margin: 20px 0 0 20px;
			display: flex;
			img{
				width: 80px;
			}
			.top2_1{
				margin:10px 0 0 10px;
				p{
					margin: 5px;
					text-align: left;
					font-size: 15px;
					color: white;
				}
			}
		}
		
	}
	.top3{
		background-color: #f6d59b ;
		margin: 15px auto;
		width: 316px;
		height: 58px;
		text-align: center;
		line-height: 58px;
		border-radius: 10px;
		display: flex;
		
		img{
			margin:15px 5px 0 10px;
			width: 25px;
			height: 25px;
		}
		p{
			opacity: 0.8;
		}
		#p1{
			text-align: center;
			line-height: 20px;
			font-size: 14px;
			color: white;
			border-radius: 5px;
			margin: 18px 0 0 80px;
			width: 46px;
			height: 20px;
			background-color: #f06c7a;
		}
	}
	.cente{
		margin: 30px auto;
		border-radius: 10px;
		overflow: auto;
		box-shadow: 0px 0px 12px rgba(0,0,0,.1);
		width: 340px;
		height: 299px;
		
		.cente1{
			text-align:center;
			display: flex;
			align-items: center;
			justify-content: space-around;
			flex-wrap: wrap;
			.cente1_1{
				width: 70px;height: 80px;
				margin:3px;
				text-align:center;
				img{
					margin-left:5px ;
					width: 36px;
				}
				p{
					text-align:center;
					font-size: 15px;
				}
			}
		}
		p{
			text-align: left;
			margin: 10px 0 10px 10px;
		}
		
	}
</style>
<script>
	import { Dialog } from 'vant';
	
		export default {
			data(){
				return{
				tag:0,
				tag1:true
				}
			},
			created() {
				this.tag=this.$store.getters.getLogin
			},
			methods: {
				login1(){
					if(this.tag==0){
						this.$router.push('/login')
					}
					else{
						this.$router.push('/personalData')
					}
				},
				login2(){
					if(this.tag==0){
						Dialog.confirm({
						  title: '温馨提示',
						  message: '请您先登入,点击确定跳转到登入页面'
						}).then(() => {
							this.$router.push('/login')
						}).catch(() => {
						  // on cancel
						});
					}
					else{
						this.$router.push('/personalData')
					}
				},
				login3(){
					if(this.tag==0){
						Dialog.confirm({
						  title: '温馨提示',
						  message: '请您先登入,点击确定跳转到登入页面'
						}).then(() => {
							this.$router.push('/login')
						}).catch(() => {
						  // on cancel
						});
					}
					else{
						this.tag1=false;
					}
				},
				goLogin(){
					if(this.tag==0){
						Dialog.confirm({
						  title: '温馨提示',
						  message: '请您先登入,点击确定跳转到登入页面'
						}).then(() => {
							this.$router.push('/login')
						}).catch(() => {
						  // on cancel
						});
					}
					else{
						Dialog.confirm({
						  title: '温馨提示',
						  message: '由于时间不足此页面未开发'
						}).then(() => {
							// this.$router.push('/login')
						}).catch(() => {
						  // on cancel
						});
					}
					
				}
				
			}
	}
</script>


