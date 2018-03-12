import api from '@/vuex/api'
import * as type from '@/vuex/type'
import router from '@/router/index'
const state = {
    stationList: []
}
const actions = {
    getStationList: function ({ commit }, data) {
        api.getStationList(data).then(res => {
            if (res.success) {
                commit(type.GET_STATIONLIST, res.body.data)
            }
        })
    },
    addStation: function ({ commit }) {
        // 不需要在vuex中执行添加站点操作  在station页面中处理
    },
    delStationOpenClick: ({commit}, data) => {
        return api.delStationOpenClick(data)
    }
}
const getters = {
    stationList: (state) => {
        // var stationDemo = state.stationList
        if (state.stationList.content) {
            for (let [index, item] of state.stationList.content.entries()) {
                state.stationList.content[index].createTime = new Date(state.stationList.content[index].createTime).toLocaleString()
            }
        }
        return state.stationList
    }
}
const mutations = {
    [type.GET_STATIONLIST] (state, data) {
        state.stationList = data
    }
}
export default {
    state,
    actions,
    getters,
    mutations
}
