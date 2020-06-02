<template>
	<div class="buydetail">
		<!-- {{$route.params.id}} -->
		<div class="top">
			<van-nav-bar
			  title="求购详情"
			  left-text=""
			  right-text="☹☺☹"
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			/>
		</div>
		<div class="cente" v-if="data[0]||data[1]||data[2]">
			<div v-if="buy_detail_index[0]==index0" v-for="(itme,index0) in data[buy_detail_index[1]]" :key="index0">
				<div class="time1">
					<ul>
						<li class="li4">
							<img style="width: 50px; border-radius: 50%" :src="itme.avatar" alt="">
							<div class="li5">
								<p>{{itme.nickname}}</p>
								<p id="font1">更新于{{itme.refresh_time}}</p>
							</div>
						</li>
						<li class="li1">
							<p>{{itme.title}}</p>
							<p style="color: #acb0b0; font-size: 14px;">{{itme.desc}}</p>
							<div class="money">
								<img style="width: 25px; height: 25px; border-radius: 50%" src="job_salary.png" alt="">
								<p style="color: #D22D72;">{{itme.price}}￥</p>
							</div>
						</li>
						<li class="li2">
							<div>
								<img style="width: 22px; height: 22px; " src="job_map.png" alt="">
								<p>{{itme.merchant_name}}</p>
							</div>
							
						</li>
						<li class="li3">
							<div>
								<p v-for="(itme1,index) in itme.keyword" :key="index">
									<van-tag type="warning">{{itme1}}</van-tag>
									<span v-if="itme.keyword.length>1&&itme.keyword.length>index+'1'"> | </span>
								</p>
							</div>
						</li >
					</ul>
				</div>
				<p style="background-color: #efefef; height:10px; margin-top: 0px;"></p>
				<div class="bottom">
					<p>联系方式</p>
					<div v-if="itme.phone">
						<img src="job_phone.png" alt="">
						<p>手机: {{itme.phone}} <span @click="click(itme.phone)">拨号</span></p>
					</div>
					<div v-if="itme.qq">
						<img  src="job_qq.png" alt="">
						<p>QQ: {{itme.qq}} <span @click="$toast(itme.qq+ '复制成功');">复制</span></p>
					</div>
					<div v-if="itme.wechat">
						<img  src="job_wechat.png" alt="">
						<p>手机: {{itme.wechat}} <span @click="$toast(itme.wechat+ '复制成功');">复制</span></p>
					</div>
				</div>
			</div>
			
		</div>
	</div>
</template>

<script>
	import {buy,buyPV,buydetail1} from '../datas.js'
	import { Dialog } from 'vant';
	
	export default {
		data() {
		    return {
		      active: 0,
			  buy_detail_index:null,
			  data:[]
		    };
		},
		created() {
			this.buydetail();
			this.data=[buy.data.list,buydetail1.data.list,buyPV.data.list]
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {
				this.$toast('☹累死了☹');
			},
			buydetail(){
				this.buy_detail_index=this.$store.getters.getBuyIndex;
			},
			click(ages){
				Dialog.confirm({
				  title: '联系卖家',
				  message: `确认拨打 ${ages} 吗?`
				}).then(() => {
				  // on confirm
				}).catch(() => {
				  // on cancel
				});
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.cente{
		.time1{
			/* background-color: #ebedf0; */
			margin:10px;
			padding:5px;
			.li1{
				.money{
					margin: 5px 0;
					display: flex;
					justify-content: flex-start;
				}
				p{
					text-align: left;
					margin: 3px;
					font-size: 15px;
					opacity: 0.8;
				}
			}
			.li2{
				
				div{
					margin: 5px 0;
					display: flex;
					justify-content: flex-start;
					img{
						margin-top: 2px;
					}
					p{
					
						text-align: left;
						color: #acb0b0;
						margin: 3px 6px;
						font-size: 15px;
					}
				}
			}
			.li3{
				div{
					// height: 30px;
					display: flex;
					flex-wrap: nowrap;
					justify-content: flex-start;
					margin: 4px 4px 4px 0;
					line-height: 30px;
					text-align: left;
					
					p{
						line-height: 20px;
						// height: 30px;
						margin-left:2px;
					}
				}
			}
			.li4{
				margin-top: 5px;
				display: flex;
				img{
					margin: 3px;
				}
			}
			.li5{
				width: 100%;
				p{
					text-align: left;
					margin: 5px;
					font-size: 15px;
					opacity: 0.8;
				}
				#font1{
					text-align: left;
					margin: 5px;
					color: #acb0b0;
					font-size: 15px;;
				}
			}
		}
		.bottom{
			p{
				font-weight: 600;
				text-align: left;
				margin-left: 15px;
			}
			div{
				height: 30px;
				display: flex;
				flex-wrap: nowrap;
				justify-content: flex-start;
				p{
					font-weight:500;
					span{
						display: inline-block;
						color: lightpink;
						border:lightpink 1px solid;
						border-radius: 5px;
						margin-left: 20px;
					}
				}
				img{
					margin: 15px 0 5px 8px;
					width: 25px; 
					height: 25px;
				}
			}
		}
	}
</style>
