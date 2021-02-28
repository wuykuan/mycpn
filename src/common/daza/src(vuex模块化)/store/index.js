import Vue from 'vue';
import Vuex from 'vuex';
// import state from "./state"
// import mutations from "./mutations"
import counter1 from './counter1'
import counter2 from './counter2'

Vue.use(Vuex);
const store = new Vuex.Store({
    // state,
    // mutations,
    modules: {
        counter1,
        counter2
    }
});
 
export default store;