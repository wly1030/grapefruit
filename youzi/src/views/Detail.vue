<template>
  <div class="detail">
    <div class="top">
		<van-icon style="margin-top:4px ;" @click="onClickLeft" name="arrow-left" size="22px"  />
		<p  id="top" slot="title" @click="return1"><span>搜索商品</span></p>
		<van-icon style="margin-top:3px ;" name="bars" size="22px" @click="tag=!tag"/>
		<van-icon style="margin-top:2px ;" @click="onClickRight" name="location" slot="right" size="22px" />
    </div>
	<div class="scrollbar" v-show="tag">
		<van-tabs v-model="active" title-active-color="red" line-width="0px">
			<van-tab title="时间">
				<p style="background-color: #efefef; height:10px; margin-top: 0px;"></p>
				<div class="cente" v-if="good">
					<div v-for="(itme,index) in good[active]" :key="index">
						<div class="cente1"  @click="$router.push('/goodDetail')" >
							<img style="width: 100px; height: 100px; border-radius: 10px;" :src="itme.image" alt="">
							<div class="cente2">
								<p>{{itme.store_name}}</p>
								<p style="color: red;">￥ {{itme.price}}</p>
								<div class="cente2_1">
									<p>{{itme.refresh_time}}</p>
									<p style="color:#f2826a;border: 1px solid #f2826a;">{{itme.slogan}}</p>
								</div>
								
							</div>
							
						</div>
						<div  v-if="index+1<good[active].length">
							<van-divider />
						</div>
					</div>
				</div>
			</van-tab>
			<van-tab title="价格">
				<p style="background-color: #efefef; height:10px; margin-top: 0px;"></p>
				<div class="cente" v-if="good">
					<div v-for="(itme,index) in good[active]" :key="index">
						<div class="cente1"  @click="$router.push('/goodDetail')">
							<img style="width: 100px; height: 100px; border-radius: 10px;" :src="itme.image" alt="">
							<div class="cente2">
								<p>{{itme.store_name}}</p>
								<p style="color: red;">￥ {{itme.price}}</p>
								<div class="cente2_1">
									<p>{{itme.refresh_time}}</p>
									<p style="color:#f2826a;border: 1px solid #f2826a;">{{itme.slogan}}</p>
								</div>
								
							</div>
							
						</div>
						<div  v-if="index+1<good[active].length">
							<van-divider />
						</div>
					</div>
				</div>
			
			</van-tab>
			<van-tab title="浏览量">
				<p style="background-color: #efefef; height:10px; margin-top: 0px;"></p>
				<div class="cente" v-if="good">
					<div v-for="(itme,index) in good[active]" :key="index">
						<div class="cente1"  @click="$router.push('/goodDetail')">
							<img style="width: 100px; height: 100px; border-radius: 10px;" :src="itme.image" alt="">
							<div class="cente2">
								<p>{{itme.store_name}}</p>
								<p style="color: red;">￥ {{itme.price}}</p>
								<div class="cente2_1">
									<p>{{itme.refresh_time}}</p>
									<p style="color:#f2826a;border: 1px solid #f2826a;">{{itme.slogan}}</p>
								</div>
								
							</div>
							
						</div>
						<div  v-if="index+1<good[active].length">
							<van-divider />
						</div>
					</div>
				</div>>
			</van-tab>
			<van-tab title="" >
				<van-cell is-link slot="title" @click="showPopup">多选</van-cell>
				<van-popup
				  v-model="show"
				  position="right"
				  :style="{ width: '45%',height:'100%' }"
				  >
					<p style="margin: 60px 0 3px 10px; text-align: left;">我没有离开家，</p>
					<p style="margin: 10px 0 3px 10px; text-align: left;">只是把家带去了远方。</p>
					<p style="margin: 10px 5px 3px 10px; text-align: right;">——方太</p>
					<p style="margin: 10px 0 3px 10px; text-align: left;">人生没有早知道，</p>
					<p style="margin: 10px 0 3px 10px; text-align: left;">只有当下酒，眼前人。。。</p>
					<p style="margin: 10px 5px 3px 10px; text-align: right;">	——江小白</p>
				</van-popup>
			</van-tab>
		</van-tabs>
	</div>
	<div class="scrollbar" v-show="!tag">
		<van-tabs v-model="active" title-active-color="red" line-width="0px">
			<van-tab title="时间">
				<p style="background-color: #efefef; height:10px; margin-top: 0px;"></p>
				<div class="cente" v-if="good">
					<div v-for="(itme,index) in good[active]" :key="index">
						<div class="like">
							<div @click="$router.push('/goodDetail')" class="like_div" >
								<img :src="itme.image" alt="">
								<span>{{itme.store_name}}</span>
								<p>{{itme.price+"￥"}} <span>{{itme.slogan}}</span></p>
							</div>
						</div>
					</div>
				</div>
			</van-tab>
			<van-tab title="价格">
				<p style="background-color: #efefef; height:10px; margin-top: 0px;"></p>
				<div class="cente" v-if="good">
					<div v-for="(itme,index) in good[active]" :key="index">
						<div class="like">
							<div @click="$router.push('/goodDetail')" class="like_div" >
								<img :src="itme.image" alt="">
								<span>{{itme.store_name}}</span>
								<p>{{itme.price+"￥"}} <span>{{itme.slogan}}</span></p>
							</div>
						</div>
					</div>
				</div>
			
			</van-tab>
			<van-tab title="浏览量">
				<p style="background-color: #efefef; height:10px; margin-top: 0px;"></p>
				<div class="cente" v-if="good">
					<div v-for="(itme,index) in good[active]" :key="index">
						<div class="like" @click="$router.push('/goodDetail')">
							<div @click="$router.push('/goodDetail')" class="like_div" >
								<img :src="itme.image" alt="">
								<span>{{itme.store_name}}</span>
								<p>{{itme.price+"￥"}} <span>{{itme.slogan}}</span></p>
							</div>
						</div>
					</div>
				</div>>
			</van-tab>
			<van-tab title="" >
				<van-cell is-link slot="title" @click="showPopup">多选</van-cell>
				<van-popup
				  v-model="show"
				  position="right"
				  :style="{ width: '45%',height:'100%' }"
				  >
					<p style="margin: 60px 0 3px 10px; text-align: left;">我没有离开家，</p>
					<p style="margin: 10px 0 3px 10px; text-align: left;">只是把家带去了远方。</p>
					<p style="margin: 10px 5px 3px 10px; text-align: right;">——方太</p>
					<p style="margin: 10px 0 3px 10px; text-align: left;">人生没有早知道，</p>
					<p style="margin: 10px 0 3px 10px; text-align: left;">只有当下酒，眼前人。。。</p>
					<p style="margin: 10px 5px 3px 10px; text-align: right;">	——江小白</p>
				</van-popup>
			</van-tab>
		</van-tabs>
	</div>
  </div>
</template>
<style scoped="scoped" lang="less">
	.scrollbar::-webkit-scrollbar{
		display: none;
	}
	.scrollbar{
		position:absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top:50px;
		overflow-y:auto;
		.cente{
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			margin:13px;
			.like_div{
				font-size: 15px;
				font-weight:bold ;
				text-align: left;
				width: 168px;
				padding-bottom: 5px;
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
	
</style>
<script>
	import {searchDetail,searchDetail1,searchDetail2,classifyDetail1,classifyDetail2,classifyDetail3} from '../datas.js'
	
	export default {
		data() {
		    return {
		      active:0,
			  good:[],
			  show: false,
			  tag:true,
			  ages:null
		    };
		},
		created() {
			
			this.ages=this.$store.getters.getTag;
			this.refresh();
			// console.log(this.ages,this.$store.getters.getTag)
			// console.log(searchDetail.data.list.length)
		},
		methods: {
			onClickLeft() {
				this.$router.go(-1);
				this.$store.commit('changeTag',0);
			},
			onClickRight() {
				this.$router.push('/schoollist')
			},
			showPopup() {
			      this.show = true;
			},
			refresh(){
				if(this.ages==1){
					this.good=[classifyDetail1.data.list,classifyDetail2.data.list,classifyDetail3.data.list]
				}
				else{
					this.good=[searchDetail.data.list,searchDetail1.data.list,searchDetail2.data.list];
				}
			},
			return1(){
				this.$router.push('/search');
				
			},
			
			
			
			
			
		}
	}
</script>

<style scoped="scoped" lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.scrollbar::-webkit-scrollbar{
		display: none;
	}
	.scrollbar{
		position:absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top:50px;
		overflow-y:auto;
		.cente{
		
			.cente1{
				margin: 10px;
				display: flex;
				.cente2{
					width: 70%;
					margin-left: 10px;
					p{
						text-align: left;
						margin:8px 0;
					}
					.cente2_1{
						width: 100%;
						justify-content: space-between;
						display: flex;
						p{
							font-size: 15px;
							// margin-right: 50px;
							// text-align: right;
						}
					}
					
				}
			}
		}
	}
	
	.top{
		margin: 10px 0;
		justify-content: space-around;
		display:flex;
			#top{
				text-align: left;
				line-height:30px ;
				width: 250px;
				height: 30px;
				background-color: #f5f5f5;
				margin-left:0px;
				margin-top: 0px;
				border-radius: 13px;
				span{
					opacity: 0.6;
					font-size: 15px;
					margin-left: 15px;
				}
			}
		
	}
</style>
