<template>
	<div class="job">
		<div class="top">
			<van-nav-bar
			  title="求购"
			  left-text=""
			  right-text="☹☺☹"
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			/>
		</div>
		<div class="cente" v-if="buyData&&buyData1&&buyData2">
			<div class="cente1">
				<van-tabs v-model="active" title-active-color="red" line-width="0px">
					<van-tab title="时间">
						<div class="timea" v-for="(itme,index) in buyData" :key="index">
							<p style="background-color: #efefef; height:10px; margin-top: 0px;"></p>
							<div class="time1">
								<ul @click="buydetail1(itme,[index,0]) ">
									
									<li class="li1">
										<p>{{itme.title}}</p>
										<p style="color: #D22D72;">{{itme.price}}￥</p>
									</li>
									<li class="li2">
										<p>{{itme.merchant_name}}</p>
									</li>
									<li class="li3">
										<div>
											<p v-for="(itme1,index) in itme.keyword" :key="index">
												<van-tag type="warning">{{itme1}}</van-tag>
												<span v-if="itme.keyword.length>1&&itme.keyword.length>index+'1'"> | </span>
											</p>
										</div>
									</li >
									<li class="li4">
										<img style="width: 50px; border-radius: 50%" :src="itme.avatar" alt="">
										<div class="li5">
											<p>{{itme.nickname}}</p>
											<p id="font1">更新于{{itme.refresh_time}}</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</van-tab>
					<van-tab title="近一周">
						<div  class="timea" v-for="(itme,index) in buyData2" :key="index">
							<p style="background-color: #efefef; height:10px; margin-top: 0px;"></p>
							<div class="time1">
								<ul @click="buydetail1(itme,[index,1]) ">
									<li class="li1">
										<p>{{itme.title}}</p>
										<p style="color: #D22D72;">{{itme.price}}￥</p>
									</li>
									<li class="li2">
										<p>{{itme.merchant_name}}</p>
									</li>
									<li class="li3">
										<div>
											<p v-for="(itme1,index) in itme.keyword" :key="index">
												<van-tag type="warning">{{itme1}}</van-tag>
												<span v-if="itme.keyword.length>1&&itme.keyword.length>index+'1'"> | </span>
											</p>
										</div>
									</li >
									<li class="li4">
										<img style="width: 50px; border-radius: 50%" :src="itme.avatar" alt="">
										<div class="li5">
											<p>{{itme.nickname}}</p>
											<p id="font1">更新于{{itme.refresh_time}}</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</van-tab>
					<van-tab title="浏览量">
						<div class="timea" v-for="(itme,index) in buyData1" :key="index">
							<p style="background-color: #efefef; height:10px; margin-top: 0px;"></p>
							<div class="time1">
								<ul @click="buydetail1(itme,[index,2])">
									<li class="li1">
										<p>{{itme.title}}</p>
										<p style="color: #D22D72;">{{itme.price}}￥</p>
									</li>
									<li class="li2">
										<p>{{itme.merchant_name}}</p>
									</li>
									<li class="li3">
										<div>
											<p v-for="(itme1,index) in itme.keyword" :key="index">
												<van-tag type="warning">{{itme1}}</van-tag>
												<span v-if="itme.keyword.length>1&&itme.keyword.length>index+'1'"> | </span>
											</p>
										</div>
									</li >
									<li class="li4">
										<img style="width: 50px; border-radius: 50%" :src="itme.avatar" alt="">
										<div class="li5">
											<p>{{itme.nickname}}</p>
											<p id="font1">更新于{{itme.refresh_time}}</p>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</van-tab>
					<van-tab to="/schoolList" title="筛选"></van-tab>
				</van-tabs>
			</div>
			<van-divider style="margin-bottom: 50px;">没有了¤一点都没有了</van-divider>
		</div>
	</div>
</template>
<style scoped="scoped" lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.cente::-webkit-scrollbar{
		display: none;
	}
	.cente{
		position:absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top:50px;
		overflow-y:auto;
		.time1{
			// background-color: #ebedf0;
			margin:10px;
			padding:5px;
			.li1{
				display: flex;
				justify-content: space-between;
				p{
					text-align: left;
					margin: 3px;
					font-size: 15px;
					opacity: 0.8;
				}
			}
			.li2{
				
				display: flex;
				justify-content: space-between;
				p{
					text-align: left;
					color: #acb0b0;
					margin: 3px;
					font-size: 15px;;
				}
			}
			
			.li3{
				div{
					display: flex;
					flex-wrap: nowrap;
					justify-content: flex-start;
					margin: 4px 4px 4px 0;
					text-align: left;
					p{
						margin-left:4px;
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
		.time2{
			margin-top:80px ;
		}
	}
</style>
<script>
	import {buy,buyPV,buydetail1} from '../datas.js'

	export default {
		data() {
		    return {
		      active: 0,
			  buyData:null,
			  buyData1:null,
			  buyData2:null,
			  nowTime2:null
		    };
		},
		created() {
			// let nowTime1= new Date();
			// this.nowTime2=nowTime1.getDate();
			// console.log(this.nowTime2);
			this.buyData=buy.data.list;
			this.buyData1=buyPV.data.list;
			this.buyData2=buydetail1.data.list;
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
			},
			onClickRight() {
				this.$toast('☹累死了☹');
			},
			buydetail1(ages1,ages2){
				this.$router.push('/buydetail'+'/'+ages1.id);
				
				
				
				this.$store.commit("add_buyindex",ages2);
				// this.$store.getters.getBuyIndex
				// console.log(this.$store.getters.getBuyIndex);
			}
		}
	}
</script>


