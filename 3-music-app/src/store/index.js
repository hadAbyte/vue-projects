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
      const userCred = await auth.createUserWithEmailAndPassword(payload.email, payload.password);

      await userCollection.doc(userCred.user.uid).set({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
        who_you_are: payload.who_you_are,
      });

      await userCred.user.updateProfile({
        displayName: payload.name,
      });

      commit("toggleAuth");
    },

    async login({ commit }, payload) {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);

      commit("toggleAuth");
    },

    init_login({ commit }) {
      const user = auth.currentUser;
      if (user) {
        commit("toggleAuth");
      }
    },

    async signout({ commit }) {
      await auth.signOut();

      commit("toggleAuth");
    },
  },
});
