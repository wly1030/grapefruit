<template>
	<div class="cente" >
		<div class="center">
			<van-swipe :autoplay="3000" indicator-color="white" v-if="banner">
				<van-swipe-item v-for="(image, index) in banner" :key="index">
				  <div class="banner">
					  <img :src="image.pic" alt="" style="width: 100%;">
				  </div>
				</van-swipe-item>
			</van-swipe>
			<div class="menus">
				<div @click="$router.push('/detail')" class="menus_" v-for="(value,index) in menus" :key="index">
					<img :src="value.pic" alt="">
					<span>{{value.name}}</span>
				</div>
			</div>
			<p style=" margin-left: 15px; margin-bottom: 10px;">❃<b>福利专区</b>❃</p>
			<div class="welfare">
				<ul>
					<li @click="discounts">
						<p>优惠券</p>
						<div class="li_p_div">
							<div>
								<p>福利多多</p>
								<p>点击进入</p>
							</div>
							<img src="3.png" alt="">
						</div>
					</li>
					<li @click="job">
						<p>兼职</p>
						<div class="li_p_div">
							
							<div>
								<p>校园兼职</p>
								<p>点击进入</p>
							</div>
							<img src="4.png" alt="">
						</div>
					</li>
					<li @click="buy">
						<p>求购</p>
						<div class="li_p_div">
							
							<div>
								<p>需求信息</p>
								<p>点击进入</p>
							</div>
							<img src="1.png" alt="">
						</div>
					</li>
					<li>
						<router-link to="/hots">
							<p>资讯</p>
							<div class="li_p_div">
								
								<div>
									<p>最新动态</p>
									<p>点击进入</p>
								</div>
								<img src="2.png" alt="">
							</div>
						</router-link>
					</li>
				</ul>
			</div>
			<p class="p_hua">
				<img src="hua.png" alt="">
				<span><b>热门推荐</b></span>
				<img src="hua.png" alt="">
			</p>
			<div class="like">
				
				<div @click="$router.push('/goodDetail')" class="like_div" v-for="(itme,index) in like" :key="index">
					<img :src="itme.image" alt="">
					<span>{{itme.store_name}}</span>
					<p>{{itme.price+"￥"}} <span>{{itme.slogan}}</span></p>
				</div>
				
			</div>
			
		</div>
		<van-loading style="margin:20px 0 50px 0;" size="24px">疯狂加载中...</van-loading>
	</div>
</template>
<style scoped="scoped" lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.cente{
		position: absolute;
		top: 50px;
		left: 0;
		right: 0;
		bottom: 30px;
		overflow-y:auto;
		.welfare{
			ul{
				display:flex;
				justify-content: space-around;
				flex-wrap: wrap;
				margin-left: 10px;
				margin-right: 10px;
				
				li{
					border-radius: 6px;
					margin-bottom: 10px;
					width: 45%;
					// overflow: auto;
					background-color: #ebf9f9;
					p{
						height: 30px;
						text-align: left;
						line-height: 30px;
						margin-left: 10px;
						color: #000000;
					}
					.li_p_div{
						display: flex;
						flex-wrap: nowrap;
						justify-content: space-between;
					
						p{
							margin-top: 2px;
							
							width: 100%;
							font-size: 11px;
							color: #acb0b0;
						}
						img{
							width:30%;
							height: 30%;
							margin-right: 10px;
							margin-top: 6px;
							
						}
					}
					
					
				}
			}
		}
		.p_hua{
			width: 100%;
			height: 40px;
			color:#f47825;
			text-align: center;
			line-height: 40px;
			img{
				width: 4%;
			}
		}
		.banner{
			margin: 0 10px;
			img{
				border-radius: 10px;
			}
		}
		.menus{
			display: flex;
			flex-wrap: wrap;
			border-bottom: 1px solid #f5f5f5;
			margin:10px;
			.menus_{
				// border: 1px solid red;
				font-size: smaller;
				width: 86px;
				height: 56px;
				margin-top: 20px;
				display:flex;
				justify-content: space-around;
				flex-direction: column;
				align-items: center;
				
				img{
					width: 40%;
					height: 58%;
				}
			}
		}
		.like{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin:13px;
			.like_div{
				font-size: 15px;
				font-weight:bold ;
				text-align: left;
				width: 168px;
				margin-bottom: 10px;
				border-radius: 6px;
				overflow: hidden;
				background-color: #f5f5f5;
				span{
					display: inline-block;
					margin-left: 8px;
					margin-right: 8px;
				}
				p{
					display: flex;
					justify-content: space-between;
					margin-left: 8px;
					margin-right: 8px;
					color: red;
					span{
						display: inline-block;
						font-weight: 400 ;
						font-size: 11px;
						height: 15px;
						width: auto;
						color: #07c160;
						border: 1px #07c160 solid;
						border-radius: 2px;
						margin-top: 7px;
						text-align: center;
						line-height: 15px;
					}
				}
				img{
					width: 168px;
				}
			}
		}
	}
	.cente::-webkit-scrollbar{
		display: none;
	}
</style>
<script>
import {homeData} from '../datas.js'
	
export default {
  data() {
	return {
		banner:null,
		menus:null,
		like:null
		}
	},
	created() {
		this.banner=homeData.data.banner;
		this.menus=homeData.data.menus;
		this.like=homeData.data.like;
	},
	methods:{
		discounts(){
			this.$router.push("/discounts")
		},
		job(){
			this.$router.push("/job")
		},
		buy(){
			this.$router.push("/buy")
		}
		
	}
	
}
</script>


