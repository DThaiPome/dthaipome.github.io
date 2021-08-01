const state = {
    header: {
        showTitle: true,
        showHeader: true
    }
};

const getters = {
    headerShowTitle: state => state.header.showTitle,
    headerShowHeader: state => state.header.showHeader
};

export const SET_HEADER_SHOW_TITLE = 'SET_HEADER_SHOW_TITLE';
export const SET_HEADER_SHOW_HEADER = 'SET_HEADER_SHOW_HEADER';

const mutations = {
    [SET_HEADER_SHOW_TITLE](state, showTitle) {
        state.header.showTitle = showTitle;
    },
    [SET_HEADER_SHOW_HEADER](state, showHeader) {
        state.header.showHeader = showHeader;
    }
};

const store = {
    namespaced: true,
    state,
    getters,
    mutations
};

export default store;