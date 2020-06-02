<template>
	<div class="hots">
		<div class="top">
			<h3 >资讯</h3>
		</div>
		<van-swipe :autoplay="3000" indicator-color="white" v-if="hotsBanner">
			<van-swipe-item v-for="(image, index) in hotsBanner" :key="index">
			  <div class="banner">
				  <a :href="image.url">
					  <van-image
						width="375px"
						height="180px"
						fit="cover"
						:src="image.image_input[0]"
					  />
				  </a>
				 <p>{{image.title}}</p>
			  </div>
			</van-swipe-item>
		</van-swipe>
		<div class="official" v-if="officialData">
			<div class="official1" v-for="(image, index) in officialData" :key="index">
				<a :href="image.url" class="official2">
					<img :src="image.image_input[0]" alt="" style="width: 32%;">
					<div class="official3">
						<p style="font-size: 17px;">{{image.title}}</p>
						<div class="official4">
							<p>{{image.source}}</p>
							<div>
								{{image.add_time}}
								<p >{{image.source}}</p>
							</div>
						</div>
						
					</div>
				</a>
			</div>
		</div>
		<div class="hotsOfficial" v-if="hotsOfficialData">
			<div class="hotsOfficial1" v-for="(image, index) in hotsOfficialData" :key="index">
				<a :href="image.url" class="hotsOfficial2">
					<!-- <img :src="image.image_input[0]" alt="" style="width: 32%;"> -->
					<van-image
						class="img"
						width="32%"
						
						fit="cover"
						:src="image.image_input[0]"
					/>
					<div class="hotsOfficial3">
						<p style="font-size: 17px;">{{image.title}}</p>
						<div class="hotsOfficial4">
							<p>{{image.source}}</p>
							<div>
								{{image.add_time}}
							</div>
						</div>
						
					</div>
				</a>
			</div>
		</div>
		<van-divider style="margin: 100px 0;">做人要有底线,我也是</van-divider>
	</div>
</template>
<style scoped="scoped" lang="less">
	.hotsOfficial{
		.hotsOfficial1{
			margin:10px;
			.hotsOfficial2{
				color: #000000;
				display: flex;
				// justify-content: space-around;
				.img{
					border-radius: 5px;
					overflow: hidden;
					margin-right: 10px;
					
				}
				.hotsOfficial3{
					width: 225px;
					text-align: left;
					
					// margin-right: 10px;
					display:flex;
					flex-direction: column;

					.hotsOfficial4{
						margin-top: 33px;
						font-size: 13px;
						color: #999;
						display:flex;
						justify-content: space-between;
					}
				}
			}
		}
		
	}
</style>
<style scoped="scoped" lang="less">
	*{
		margin: 0;
		padding: 0;
	}

	.official{
		.official1{
			margin:10px;
			.official2{
				color: #000000;
				display: flex;
				// justify-content: space-around;
				img{
					border-radius: 5px;
					margin-right: 10px;
					
				}
				.official3{
					width: 225px;
					// margin-right: 10px;
					display:flex;
					flex-direction: column;

					.official4{
						margin-top: 33px;
						font-size: 13px;
						color: #999;
						display:flex;
						justify-content: space-between;
						div{
							p{
								display: inline-block;
								border:1px solid #5677fc;
								color: #5677fc!important;
								border-radius: 0 6px 6px 0;
								margin-left: 5px;
								font-size: 12px;
							}
						}
					}
				}
			}
		}
		
	}
	.top{
		h3{
			height: 46px;
			line-height: 46px;
		}
	}
	.banner{
		p{
			width: 90%;
			position:absolute;
			top: 150px;
			left: 15px;
			color:#fff ;
			font-size: 17px;
			font-weight: 700;
			
			background: linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,.7));
			box-sizing: border-box;
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			
		}
	}
</style>

<script>
import {hots,official,hotsOfficial} from '../datas.js'
	
	
export default {
	data() {
		return {
		  hotsBanner:null,
		  officialData:null,
		  hotsOfficialData:null
		}
	},
	created() {
		this.hotsBanner=hots.data;
		this.officialData=official.data;
		this.hotsOfficialData=hotsOfficial.data;
	},
	methods: {
	   
	}
}

</script>


