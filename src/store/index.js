import Vue from 'vue'
import Vuex from 'vuex'
import reactions from './reactions'
import user from "@/store/user";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { reactions,user }
})



//state-um pahum enq tvyalner
//mutations funkcianer en voronq asinxron en u yst vishaki poxvum en
//getters nmana computedin aysinqn arjeqa veradardznum
//actions asinxron functions voronq ashxatum en artaqin api-ov
