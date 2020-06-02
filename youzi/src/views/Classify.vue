<template>
  <div class="classify">
    <div class="top">
    	<h3>商城分类</h3>
    </div>
	<div class="cente" v-if="classifyLData">
		<div class="cente_left">
			<van-sidebar v-model="activeKey">
				
					<van-sidebar-item   v-for="(item,index) in classifyLData" :key="index" :title="item.cate_name"  />

			</van-sidebar>
		</div>
		<div class="cente_right">
			<div v-if="activeKey==index" class="commodity" v-for="(item,index) in classifyLData" :key="index">
				<p class="p1">{{item.cate_name}}</p>
				<div class="commodity1">
					<div @click="goDetail" class="commodity2" v-for="(item1,index) in item.child" :key="index">
						<img style="width:60px;" :src="item1.pic" alt="">
						<p>{{item1.cate_name}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
</template>
<style scoped="scoped" lang="less">
	*{
		margin: 0;
		padding: 0;
	}
	.top{
		h3{
			height: 46px;
			line-height: 46px;
		}
	}
	.cente{
		display:flex;
		.cente_left{
			width: 25%;
			
			.van-sidebar-item {
				// color: red;
				opacity: 0.8;
				background-color: white;
				// // width: 100px;
				// height: 50px;
				font-size: 14px;
				line-height: 10px;
				
			}
			
		}
		.cente_right{
			.right1{
				transition: all 1s;
			}
			width: 75%;
			position: absolute;
			left:25%;
			top: 40px;
			right: 0;
			bottom: 50px;
			overflow-y: auto;
			background-color:#f8f8f8;	
			.commodity{
				// background-color:#f8f8f8;
				margin-left: 10px;
				.p1{
					text-align: left;
					margin-left: 8px;
					height: 40px;
					line-height: 40px;
				}
				.commodity1{
					
					background-color:white;
					display: flex;
					flex-wrap: wrap;
					justify-content:flex-start;
					.commodity2{
						margin: 12px;
						
					}
				}
			}
		}
	}
</style>
<script>
import {classify} from '../datas.js'
	
export default {
  data() {
    return {
      activeKey: 0,
	  classifyLData:null,
	  ages:''
	  // alloffset:0
    }
  },
  methods:{
	 goDetail(){
		 this.$router.push('/detail');
		 this.$store.commit('changeTag',1);
	 }
  },
  created() {
  	this.classifyLData=classify.data;
  }
};
</script>