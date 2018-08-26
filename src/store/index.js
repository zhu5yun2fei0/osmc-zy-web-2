import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state = {
        count:1,
        msg:[]
        
    }

const mutations={
		getname(state,msg){
			state.msg = msg
			return msg
		}  
    }
export default new Vuex.Store({
       state,
       mutations

    });