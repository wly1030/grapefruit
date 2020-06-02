<template>
	<div class="hots">
		<van-nav-bar
		  title="搜索"
		  left-text=""

		  left-arrow
		  @click-left="onClickLeft"

		/>
		<div class="input">
			<!-- <van-icon style='margin-top: 8px; margin-left: 15px;' name="search" size="20px"/> -->
			<van-search placeholder="输入搜索关键字" v-model="value"  @keydown.enter="search(value)"/>
			<!-- <input type="text" placeholder="输入搜索关键字"> -->
		</div>
		<div v-if="historySearch">
			<p>搜索历史</p><span @click="remove1">清空历史搜索 X</span>
			<div class="hotBot">
				<span  v-for="(itme,index) in historySearch" :key="index">
					{{itme}}
				</span>
			</div>
		</div>
		<p>大家正在搜索</p>
		<div class="hotBot">
			<span :style="{backgroundColor: colors[ Math.random()*10 ] }"  @click="$router.push('/detail')" v-for="(itme,index) in hotBotList" :key="index">
				{{itme.title}}
			</span>
		</div>
	</div>
</template>
<style scoped="scoped" lang="less">

	p{
		font-size:14px;
		font-weight: 700;
		text-align: left;
		margin-left: 15px;
	}
	span{
		border-radius: 5px;
		border: 1px solid darkgray ;
		font-size: 14px;
		opacity: 0.8;
		margin-left: 240px;
		padding: 2px 5px;
	}
	.hotBot{
		flex-wrap: wrap;
		display:flex;
		
		span{
			margin: 10px;
			padding: 0 10px;
			text-align: center;
			line-height: 25px;
			display: block;
			height: 25px;
			background-color: #ededed;
			border-radius: 20px;
			color: #999;
			font-size:15px;
		}
	}
	.input{
		display: flex;
		justify-content: flex-start;
		margin: 10px auto;
		width: 90%;
		height: 35px;
		background-color: #ededed;
		border-radius: 20px;
		color: #999;
		
		.van-search{
			
			width: 100%;
			height: 30px;
			border: none;
			background-color: #ededed;
			color: #999;
			opacity: 0.6;
			font-size: 14px;
			margin-top: 2px;
		}
	}
</style>
<script>
import {hotBot} from '../datas.js'
	
export default {
	data(){
		return{
			hotBotList:null,
			value:'',
			colors:["primary","success","danger","warning"],
			historySearch:JSON.parse(localStorage.getItem("historySearch"))||[]
		}
	},
	computed:{
		searchHistory(){
			// let now = localStorage.getItem("historySearch");
			return this.historySearch
		}
		
		
	},
	created() {
		this.hotBotList=hotBot.data;
	},
	 methods: {
		onClickLeft() {
		  this.$router.go(-1);
		},
		search(value){
			this.historySearch.unshift(value);
			// console.log(this.historySearch);
			localStorage.setItem("historySearch",JSON.stringify(this.historySearch));
			this.value='';
			if(value=='数码产品'){
				this.$router.push('/detail');
			}
			
		},
		remove1(){
			localStorage.removeItem("historySearch");
			this.historySearch.splice(0,this.historySearch.length);
		}
		
	}
}
</script>
