import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const Autorization = {
  state: () => ({
    autoriz: false,
  }),
  mutations: {
    autorization(state) {
      state.autoriz = true;
      localStorage.autoriz = true;
    },
    deautorization(state) {
      state.autoriz = false;
      localStorage.autoriz = false;
    },
  },
  actions: {},
  getters: {},
};

const DataForNewTable = {
  state: () => ({
    groups: [
      {
        title: '22304',
        sudents: {},
      },
    ],
    selectSubject: '',
    selectDate: '',
  }),
  mutations: {
    remote_group(state, index) {
      state.groups.splice(index, 1);
    },
    new_group(state, newGroup) {
      state.groups.push({ title: newGroup });
    },
    select_sub_and_date(state, payload) {
      state.selectDate = payload.selDate;
      state.selectSubject = payload.selSub;
    },
  },
  actions: {
    group_request(context) {
      context.state.groups.forEach((element) => {
        console.log(element.title);
        axios.get('http://kappa.cs.petrsu.ru/~pogudin/tppo/web/group/')
          .then((response) => {
            console.log(response.data.student);
          })
          .catch((error) => console.log(error));
      });
    },
  },
  getters: {},
};

const DataForCheckTable = {
  state: () => ({
    visits: [],
    selectSubject: '',
    selectGroup: '',
  }),
  mutations: {
    none() {
      console.log('Вызван');
      axios.get('http://kappa.cs.petrsu.ru/~pogudin/tppo/web/')
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    },
    import_visits(state, visits) {
      state.visits = visits;
    },
    change_Subject(state, subject) {
      state.selectSubject = subject;
    },
    change_Group(state, group) {
      state.selectGroup = group;
    },
  },
  actions: {
  },
};

export default new Vuex.Store({ // Основной store
  state: {
    count: 5,
    subjects: [],
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
    subjects_fill(state, response) {
      state.subjects = response.data;
    },
  },
  actions: {
    subjects_request(context) {
      axios.get('http://kappa.cs.petrsu.ru/~pogudin/tppo/web/predmet')
        .then((response) => {
          context.commit('subjects_fill', response);
        })
        .catch((error) => console.log(error));
    },
  },
  modules: {
    a: Autorization,
    n: DataForNewTable,
    c: DataForCheckTable,
  },
});
