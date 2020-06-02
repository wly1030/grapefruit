<template>
	<div class="goodDetail">
		
		<div class="scrollbar">
			<div class="top" @click="$router.go(-1)">
				<van-icon name="arrow-left" size="30px" color="#ffffff"/>
			</div>
			<van-swipe :autoplay="3000" indicator-color="white" v-if="goodBanner">
				<van-swipe-item v-for="(image, index) in goodBanner" :key="index">
				  <div class="banner">
					  <a :href="image" @click="$router.push('/goodDetail')">
						  <van-image
							width="375px"
							height="366px"
							fit="cover"
							:src="image"
						  />
					  </a>
				  </div>
				</van-swipe-item>
			</van-swipe>
			<div class="cente">
				<p style="font-size: 17px; font-weight: 700;">{{centeData.store_name}}</p>
				<p>{{centeData.store_info}}</p>
				<p style="color: red;">￥ {{centeData.price}}</p>
				<p>邮费:{{centeData.postage}}</p>
				<p style="background-color: #efefef;width: 375px; height:10px; margin: 0px;"></p>
				<div class="cente1">
					<img :src="centeData.avatar" alt="">
					<div class="cente1_2">
						<p>{{centeData.nickname}}</p>
						<p>{{centeData.nickname?'用户已认证':'未认证'}}</p>
					</div>
				</div>
				<div class="cente1">
					<van-icon name="location-o" /><span>{{centeData.merchant}}</span>
				</div>
				<div class="cente1">
					<van-icon name="underway-o" /><span>{{centeData.merchant}}</span>
				</div>
				<div class="cente1" v-if="centeData.keyword" >
					<div v-for="(itme,index) in centeData.keyword" :key="index">
						<van-tag type="warning">{{itme}}</van-tag>
						<span v-if="centeData.keyword.length>1&&centeData.keyword.length>index+'1'"> | </span>
					</div>
					
				</div>
				<div class="cente1">
					<van-icon name="chat-o" style="margin:8px 0"/>
					<p @click="onClick" style="color:#468966;background-color:gainsboro ;padding: 0 6px; border-radius: 10px;">登入后查看联系方式</p>
				</div>
				<p style="background-color: #efefef;width: 375px; height:10px; margin: 0px;"></p>
				<p style="font: 16px;">评价</p>
				<div v-if="evaluateData">
					<div class="cente1">
						<img :src="evaluateData.avatar" alt="">
						<div class="cente1_2">
							<p>{{evaluateData.nickname}}</p>
							<p>{{evaluateData.comment}}</p>
						</div>
					</div>
					
					<div class="cente1_3">
						<van-rate v-model="value" />
						<p>{{evaluateData.add_time}}</p>
					</div>
					
				</div>
			</div>
		</div>
		
	</div>
</template>
<style>
	.scrollbar::-webkit-scrollbar{
		display: none;
	}
	.scrollbar{
		position:absolute;
		bottom: 0;
		left: 0;
		right: 0;
		top:0px;
		overflow-y:auto;
	}
</style>
<style lang="less" scoped="scoped">
	.top{
		position: absolute;
		top: 10px;
		left: 10px;
		z-index: 10;
		width: 22px;height: 30px;
		padding-right: 10px;
		box-sizing: content-box;
		background-color:#000000;
		opacity: 0.4;
		border-radius: 50%;
		overflow: hidden;
	}
	.cente{
		p{
			font-size: 14px;
			text-align: left;
			margin: 6px 15px;
		}
		.cente1{
			font-size: 14px;
			display: flex;
			justify-content: flex-start;
			margin: 6px 15px;
			img{
				border-radius: 50%;
				width: 43px;
				height: 43px;
				margin-top: 8px;
			}
			span{
				margin-left: 5px;
			}
			
			
		}
		.cente1_3{
			display: flex;
			justify-content: space-between;
			margin: 5px 15px 50px 70px;
			p{
				color: gray;
				opacity: 0.6;
			}
		}
	}
</style>
<script>
	import {goodDetail} from '../datas.js'
	import { Dialog } from 'vant';
		
	export default {
		data() {
			return {
			  goodBanner:null,
			  centeData:null,
			  evaluateData:null,
			   value: 5
			}
		},
		created() {
			this.goodBanner=goodDetail.data.storeInfo.slider_image;
			this.centeData=goodDetail.data.storeInfo;
			this.evaluateData=goodDetail.data.reply;
		},
		methods: {
		   onClick(){
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


