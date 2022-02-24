import { createStore } from "vuex";
import { auth, userCollection } from "@/includes/firebase";

export default createStore({
  state: {
    authModal: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModal = state.authModal === false;
    },
    toggleAuth: (state) => {
      state.userLoggedIn = state.userLoggedIn === false;
    },
  },
  getters: {
    // getAuthModal: (state) => state.authModal,
  },

  actions: {
    async register({ commit }, payload) {
      await auth.createUserWithEmailAndPassword(payload.email, payload.password);

      await userCollection.add({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
        who_you_are: payload.who_you_are,
      });

      commit("toggleAuth");
    },
  },
});
