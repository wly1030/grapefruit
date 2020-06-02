<template>
	<div class="job">
		<div class="top">
			<van-nav-bar
			  title="兼职"
			  left-text=""
			  right-text="☹☺☹"
			  left-arrow
			  @click-left="onClickLeft"
			  @click-right="onClickRight"
			/>
		</div>
		<div class="cente" v-if="jobData">
			<van-tabs v-model="active" title-active-color="red">
				<van-tab title="时间">
					<p style="background-color: #efefef; height:10px; margin-top: 0px;"></p>
					<div class="time1">
						<ul @click="jobDetail(jobData)">
							<li class="li1">
								<p>{{jobData.title}}</p>
								<p style="color: #D22D72;">{{jobData.salary}}</p>
							</li>
							<li class="li2">
								<p>{{jobData.address}} | {{jobData.job_time}}</p>
								<p>{{jobData.merchant_name}}</p>	
							</li>
							<li class="li3">
								<p>
									<van-tag type="warning">{{jobData.keyword[0]}}</van-tag> |
									<van-tag type="warning">{{jobData.keyword[1]}}</van-tag>
								</p>
							</li >
							<li class="li4">
								<img style="width: 50px; border-radius: 50%" :src="jobData.logo" alt="">
								<div class="li5">
									<p>{{jobData.company_name}}</p>
									<div class="li6">
										<p>招:{{jobData.people_num}}</p>
										<p>{{jobData.add_time}}</p>
									</div>	
								</div>
							</li>
						</ul>
					</div>
				</van-tab>
				<van-tab title="近一周">
					<p style="background-color: #efefef; height:10px; margin-top: 0px;"></p>
					<div class="time2">
						<img style="width:60%;" src="noJob.png" alt="">
					</div>
				</van-tab>
				<van-tab title="浏览量">
					<p style="background-color: #efefef; height:10px; margin-top: 0px;"></p>
					<div class="time1">
						<ul @click="jobDetail(jobData)">
							<li class="li1">
								<p>{{jobData.title}}</p>
								<p style="color: #D22D72;">{{jobData.salary}}</p>
							</li>
							<li class="li2">
								<p>{{jobData.address}} | {{jobData.job_time}}</p>
								<p>{{jobData.merchant_name}}</p>	
							</li>
							<li class="li3">
								<p>
									<van-tag type="warning">{{jobData.keyword[0]}}</van-tag> |
									<van-tag type="warning">{{jobData.keyword[1]}}</van-tag>
								</p>
							</li >
							<li class="li4">
								<img style="width: 50px; border-radius: 50%" :src="jobData.logo" alt="">
								<div class="li5">
									<p>{{jobData.company_name}}</p>
									<div class="li6">
										<p>招:{{jobData.people_num}}</p>
										<p>{{jobData.add_time}}</p>
									</div>	
								</div>
							</li>
						</ul>
					</div>
				</van-tab>
				<van-tab to="/schoolList" title="筛选"></van-tab>
			</van-tabs>
			<van-divider style="margin-bottom: 50px;">没有了¤一点都没有了</van-divider>
		</div>
	</div>
</template>
<style scoped="scoped" lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.cente{
		.time1{
			// background-color: #ebedf0;
			margin:10px;
			padding:5px;
			.li1{
				
				display: flex;
				justify-content: space-between;
				p{
					margin: 3px;
					font-size: 15px;
					opacity: 0.8;
				}
			}
			.li2{
				
				display: flex;
				justify-content: space-between;
				p{
					color: #acb0b0;
					margin: 3px;
					font-size: 15px;;
				}
			}
			
			.li3{
				p{
					margin: 3px;
					text-align: left;
				}
			}
			.li4{
				
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
				.li6{
					width: 100%;
					display: flex;
					justify-content: space-between;
					p{
						
						color: #acb0b0;
						font-size: 15px;;
					}
				}
			}
		}
		.time2{
			margin-top:80px ;
		}
	}
</style>
<script>
import {job} from '../datas.js'

	export default {
		data() {
		    return {
		      active: 0,
			  jobData:null
		    };
		},
		created() {
			this.jobData=job.data[0];
		},
		methods: {
			onClickLeft(){
				this.$router.go(-1);
			},
			onClickRight() {
				this.$toast('☹累死了☹');
			},
			jobDetail(ages){
				this.$router.push("/Recruitment_details/"+ages.id);
			}
			
		}
	}
</script>


