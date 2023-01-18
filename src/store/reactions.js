import reactions from '../mocks/reactions'

const loadReactions = (time) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(reactions)
        }, time)
    })
}

export default {
    namespaced: true,
    state: {
        reactions: []
    },
    mutations: {
        SET_REACTIONS(state, payload) {
            state.reactions = payload
        }
    },
    getters: {
        getReactions(state) {
            return state.reactions
        }
    },
    actions: {
        async loadReactions({ commit }, payload) {
            try {
                const reactions = await loadReactions(payload)
                commit('SET_REACTIONS', reactions)
            } catch (error) {
                console.error(error)
            }
        }
    }
}
