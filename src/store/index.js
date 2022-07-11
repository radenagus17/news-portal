import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  /*state */
  state: {
    news: [],
    page: 0,
    totalPage: 0,
    username: "",
    bookmarks: [],
    baseUrl: "http://backend-menit-com.herokuapp.com",
  },
  mutations: {
    /*commit syncronus */
    SET_NEWS(state, payLoad) {
      state.news = payLoad;
    },
    SET_TOTAL_PAGE(state, payLoad) {
      state.totalPage = payLoad;
    },
    SET_PAGE(state, payLoad) {
      state.page = payLoad;
    },
    SET_USERNAME(state, payLoad) {
      state.username = payLoad;
    },
    SET_BOOKMARKS(state, payLoad) {
      state.bookmarks = payLoad;
    },
  },
  actions: {
    /*dispatch asyncronus */
    async getNews(context, payLoad) {
      try {
        const resp = await fetch(`${this.state.baseUrl}/news/pub/pag?${payLoad}`);
        const { news, page, totalPage } = await resp.json();
        context.commit("SET_NEWS", news);
        context.commit("SET_PAGE", page);
        context.commit("SET_TOTAL_PAGE", totalPage);
      } catch (error) {
        console.log(error);
      }
    },

    async getNewsById(context, payLoad) {
      try {
        const resp = await fetch(`${this.state.baseUrl}/news/pub/${payLoad}`);
        const { News } = await resp.json();
        context.commit("SET_NEWS", News);
      } catch (error) {
        console.log(error);
      }
    },

    getUser(_, payload) {
      return fetch(`${this.state.baseUrl}/user/pub/sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }).then((resp) => {
        if (resp.status === 400) throw Error(resp.statusText);
        else if (resp.status === 401) throw Error(resp.statusText);
        return resp.json();
      });
    },

    async getBookmark(context, payLoad) {
      try {
        const resp = await fetch(`${this.state.baseUrl}/news/book/pub/${payLoad}`, {
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        const { bookmark } = await resp.json();
        context.commit("SET_BOOKMARKS", bookmark);
      } catch (error) {
        console.log(error);
      }
    },

    addToBookmark(context, payLoad) {
      return fetch(`${this.state.baseUrl}/news/book/pub/${payLoad}`, {
        method: "POST",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      }).then((resp) => {
        return resp.json();
      });
    },
  },
  modules: {},
});
