<template>
	<div class="home">
		
		<div class="top">
			<van-icon @click="shoolList" class="top_img" name="location-o" size="20px"/>
			<p @click="shoolList">{{shoolName}}</p>
			<div class="top_div" @click="search">
				<p>请输入关键字</p><van-icon class="a1" name="search" size="20px"/>
			</div>
			<van-icon @click="remind" class="top_img" name="volume-o" size="20px"/>
		</div>
		
		<Home></Home>
		
	</div>
</template>
<style scoped="scoped" lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.home{
		
		text-align: center;
		line-height: 30px;
		.top{
			width: 100%;
			height: 30px;
			margin-top: 8px;
			display: flex;
			
			flex-wrap: nowrap;
			justify-content: space-around;
			p{
				font-size: 14px;
			}
			.top_img{
				margin:3px 10px;
			}

			.top_div{
				width: 60%;
				border-radius: 10px;
				margin: 0 5px;
				// border:1px solid #D3D3D3;
				background-color: #f5f5f5;
				display:flex;
				flex-wrap: nowrap;
				justify-content: space-between;
				.a1{
					margin-top: 5px;
					margin-right: 10px;
				}
				p{
					color: #999;
					margin-left: 10px;
				}
			}
		}
	}
</style>
<script>
	import Home from '@/components/Home.vue'
	import { Dialog } from 'vant';

	export default {
		name: 'home',
		components: {
			Home
		},
		data(){
			return{
				value:'',
				shoolName:'所有学校'
			}
		},
		created(){
			this.shoolName=this.$store.getters.getSchool;
		},
		methods: {
			
			shoolList(){
				this.$router.push("/schoollist")
			},
			search(){
				this.$router.push("/search")
			},
			remind(){
				Dialog.confirm({
				  title: '温馨提示',
				  message: '请您先登入,点击确定跳转到登入页面'
				}).then(() => {
					this.$router.push('/login')
				}).catch(() => {
				  // on cancel
				});
			}
			
		}
	}
</script>
