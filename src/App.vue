<template>
  <div id="app">
    <h1>{{ getFoo }}</h1>

    <button @click="normalMutation">Normal module mutation</button>
    <button @click="addVuexModule">Add dynamic vuex module</button>
    <button @click="dynamicMutation">Perform a mutation on the dynamic module</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HelloWorld from './components/HelloWorld.vue'
import vuexModule from '@/vuexModule';

export default {
  name: 'app',
  computed: {
    ...mapGetters('notDynamic', ['getFoo']),
  },
  methods: {
    addVuexModule() {
      console.log('Adding dynamic module');
      this.$store.registerModule('foo', vuexModule);
    },
    normalMutation() {
      this.$store.commit('notDynamic/setFoo', { foo: 'hello world' });
    },
    dynamicMutation() {
      this.$store.commit('foo/setFoo', { foo: 'hello world' });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
