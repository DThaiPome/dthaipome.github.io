const state = {
    header: {
        showTitle: true,
        showHeader: true
    },
    appEl: null
};

const getters = {
    headerShowTitle: state => state.header.showTitle,
    headerShowHeader: state => state.header.showHeader,
    appEl: state => state.appEl
};

export const SET_HEADER_SHOW_TITLE = 'SET_HEADER_SHOW_TITLE';
export const SET_HEADER_SHOW_HEADER = 'SET_HEADER_SHOW_HEADER';
export const SET_APP_EL = 'SET_APP_EL';

const mutations = {
    [SET_HEADER_SHOW_TITLE](state, showTitle) {
        state.header.showTitle = showTitle;
    },
    [SET_HEADER_SHOW_HEADER](state, showHeader) {
        state.header.showHeader = showHeader;
    },
    [SET_APP_EL](state, appEl) {
        state.appEl = appEl;
    }
};

const actions = {
    repositionFooter({ getters }) {
        getters.appEl && getters.appEl.repositionFooter();
    }
}

const store = {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

export default store;