import { createStore } from "vuex"

export const store = createStore({
    state: {
        count: 0 
    },

    mutations:{
        mutCountPlus(state, count){
            state.count = count;
        }
    },

    actions:{
        actCountPlus({commit}, count){
            count++;
            commit('mutCountPlus', count)
        }
    },

    getters:{
        getCount(state){
            return state.count
        }
    }
})