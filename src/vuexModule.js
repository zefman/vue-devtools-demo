export const getters = {
    getFoo(state) {
        return state.foo;
    },
};

export const mutations = {
    setFoo(state, { foo }) {
        console.log(state, foo);
        state.foo = foo;
    },
};

export const actions = {

};

export default {
    state() {
        return {
            foo: 'bar'
        };
    },
    mutations,
    actions,
    getters,
    namespaced: true,
};
