import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		buyindex:[],
		school:'所有学校',
		tag:0,
		login:0
	},
	getters:{
		getBuyIndex(state){
			return state.buyindex
		},
		getSchool(state){
			return state.school
		},
		getTag(state){
			return state.tag
		},
		getLogin(state){
			return state.login
		},
		
		
	},
    mutations: {
		add_buyindex(state,newIndex){
			state.buyindex=newIndex;
		},
		add_school(state,newSchool){
			state.school=newSchool;
		},
		changeTag(state,newTag){
			state.tag=newTag;
		},
		changeLogin(state,newLogin){
			state.login=newLogin;
		}
    },
	actions: {
	},
	modules: {
	}
})
