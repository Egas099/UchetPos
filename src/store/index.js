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
        num: '22304',
      },
    ],
    groups_imp: [],
    selectSubject: 'Web',
    selectDate: '2020-05-01',
  }),
  mutations: {
    remote_group(state, index) {
      state.groups.splice(index, 1);
    },
    new_group(state, newGroup) {
      let checkDup = false;
      if (state.groups.length !== 0) {
        state.groups.forEach((group) => {
          if (group.num === newGroup) {
            checkDup = true;
          }
        });
      }
      if (!checkDup) {
        state.groups.push({ num: newGroup });
      }
    },
    select_sub_and_date(state, payload) {
      state.selectDate = payload.selDate;
      state.selectSubject = payload.selSub;
    },
    add_groups(state, groups) {
      console.log(groups);
      console.log(groups.length);
      if (groups.length > 0) {
        groups.forEach((group) => {
          state.groups_imp.push(group);
        });
        console.log(state.groups_imp);
        console.log(groups);
      } else {
        state.groups_imp.push(groups);
        // state.groups_imp = groups;
      }
      console.log(state.groups_imp);
    },
    clear_groups(state) {
      state.groups_imp = [];
    },
  },
  actions: {
  },
  getters: {},
};

const DataForCheckTable = {
  state: () => ({
    visits: [],
    students: [],
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
      // state.visits.sort(visits.lesson.data);
    },
    import_students(state, students) {
      state.students = students;
    },
    change_Subject(state, subject) {
      state.selectSubject = subject;
    },
    change_Group(state, group) {
      state.selectGroup = group;
    },
  },
  actions: {
    students_request(context) {
      axios.get(`http://kappa.cs.petrsu.ru/~pogudin/tppo/web/group/${context.state.selectGroup}`)
        .then((response) => {
          context.commit('import_students', response.data.student);
        })
        .catch(() => console.log('Произошла ошибка при загрузке участников группы'));
    },
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
