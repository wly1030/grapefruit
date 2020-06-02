<template>
	<div class="schoolList">
		<van-nav-bar
		  title="学校列表"
		  left-text=""
		  right-text="开通学校"
		  left-arrow
		  @click-left="onClickLeft"
		  @click-right="onClickRight"
		/>
		<div class="input"><input type="text" placeholder="请输入学校简称,关键字或全称"></div>
		<div id="center">
			<div id="floatLetter">
				<ul>
					<li><span>#</span></li>
					<li><span>B</span></li>
					<li><span>C</span></li>
					<li><span>D</span></li>
					<li><span>F</span></li>
					<li><span>G</span></li>
					<li><span>H</span></li>
					<li><span>J</span></li>
					<li><span>K</span></li>
					<li><span>L</span></li>
					<li><span>N</span></li>
					<li><span>Q</span></li>
					<li><span>S</span></li>
					<li><span>T</span></li>
					<li><span>W</span></li>
					<li><span>X</span></li>
					<li><span>Z</span></li>
				</ul>
			</div>
			<p class="p">#</p>
			<div class="school_top">
				<ul>
					<li @click="school('所有学校')">
						<img src="all_merchant.png" alt="">
						<div>
							<p>所有学校</p>
							<p class="font">您将同时浏览所有学校的商品</p>
						</div>
					</li >
					<van-divider />
					<li @click="school('自营')">
						<img style="margin-bottom: 10px;" src="platform.png" alt="">
						<div>
							<p>自营</p>
							<p class="font">您将浏览官方自营的商品</p>
						</div>
					</li>
				</ul>
			</div>
			<div class="school_center">
				<div class="school_center1" v-for="(itme,index) in schoolData" :key="index" >
					<p class="p">{{letterList[index]}}</p>
					<div class="school_center2" v-for="(itme1,index) in itme" :key="index" >
						<div id="school_center2" @click="school(itme1.sub_title)">
							<img :src="itme1.logo" alt="">
							<div>
								<p>{{itme1.title}}</p>
								<p class="font">{{itme1.address}}</p>
							</div>
							
						</div>
						<div v-if="itme.length>1&&itme.length!=index+1">
							<van-divider />
						</div>
						
					</div>
				</div>
		</div>
			<van-divider style="margin-bottom: 50px;">我也是有底线的</van-divider>
		</div>
	</div>
</template>
<style lang="less">
	#floatLetter{
		position: fixed;
		top: 122px;
		right: 10px;
		font-size: 11px;
		li{
			margin-top: 10px;
		}
	}
	#center{
		position: absolute;
		top: 105px;
		left: 0;
		right: 0px;
		bottom: 0 ;
		overflow-y: auto;
	}
	// #center::-webkit-scrollbar{
	// 	display: none;
	// }
	#school_center2{
		// width: 100%;
		height: 60px;
		// height: 70px;
		margin: 10px;
		display: flex;
		box-sizing: border-box;
		justify-content: flex-start;
		img{
			width: 15%;
			// height: 30%;
			margin-right: 10px;
		}
		div{
			p{
				text-align: left;
			}
			.font{
				margin-top: 10px;
				font-size: 13px;
				color: #999;
			}
		}
	}
</style>
<style scoped="scoped" lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.school_top{
		ul{
			li{
				margin: 10px 10px 0 10px;
				display: flex;
				justify-content: flex-start;
				img{
					width: 15%;
					height: 15%;
					margin-right: 10px;
				}
				div{
					p{
						text-align: left;
					}
					.font{
						margin-top: 10px;
						font-size: 13px;
						color: #999;
					}
				}
				
			}
		}
	}
	.input{
		margin: 10px auto;
		width: 90%;
		height: 35px;
		background-color: #f5f5f5;
		border-radius: 20px;
		color: #999;
		input{
			width: 80%;
			height: 30px;
			border: none;
			background-color: #f5f5f5;
			color: #999;
			opacity: 0.6;
			font-size: 14px;
			margin-top: 2px;
		}
	}
	.p{
		height: 33px;
		padding-left: 15px;
		font-size: 13px;
		color: #999;
		background: #f5f5f5;
		text-align: left;
		line-height: 33px;


	}
</style>
<script>
	import {schoolList,letterData} from '../datas.js'
	import { Dialog } from 'vant';
	
	export default {
		data(){
			return{
				schoolData:null,
				letterList:null
			}
		},
		created() {
			this.schoolData=schoolList.data;
			this.letterList=letterData;
		},
		methods: {
			school(ages){
				this.$router.go(-1);
				this.$store.commit("add_school",ages);
			},
			onClickLeft() {
			  this.$router.go(-1);
			},
			onClickRight(){
				Dialog.confirm({
				  title: '温馨提示',
				  message: '请您先登入,点击确定跳转到登入页面'
				}).then(() => {
					this.$router.push('/mine')
				}).catch(() => {
				  // on cancel
				});
			}
		  }
		}
</script>


