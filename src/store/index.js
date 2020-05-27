import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const Autorization = {
  state: () => ({
    autoriz: false,
    user_name: '',
    prepod: false,
  }),
  mutations: {
    autorization(state, data) {
      if (data.group === '22304' || data.group === 'faculty' || data.group === 'visitors' || data.groupp === 'staff') {
        state.prepod = true;
      }
      state.user_name = `${data.name}${state.prepod ? '(Права преподавателя)' : '(Права студента)'}`;
      state.autoriz = true;
      // localStorage.autoriz = true;
    },
    face_auth(state) {
      state.user_name = 'Test(Права преподавателя)';
      state.prepod = true;
      state.autoriz = true;
    },
    deautorization(state) {
      state.user_name = '';
      state.prepod = false;
      state.autoriz = false;
      // localStorage.autoriz = false;
    },
  },
  actions: {},
  getters: {},
};

const DataForNewTable = {
  state: () => ({
    groups: [
    ],
    groups_imp: [],
    selectSubject: '',
    selectDate: '',
    lesson_id: '',
  }),
  mutations: {
    remote_group(state, index) {
      state.groups.splice(index, 1);
    },
    change_less_id(state, id) {
      state.lesson_id = id;
      // console.log(state.lesson_id);
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
      if (groups.length > 0) {
        groups.forEach((group) => {
          state.groups_imp.push(group);
        });
      } else {
        state.groups_imp.push(groups);
        // state.groups_imp = groups;
      }
      // console.log(state.groups_imp);
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
    subjects: [],
    server_url: '',
  },
  mutations: {
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
