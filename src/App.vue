<template>
  <div id="app">
    <v-app>
      <v-container class="grey lighten-5">
        <v-col md="2" offset="10">
          <v-select
            :value="cantidad"
            :items="perPage"
            @change="changeCantidad"
            label="Cantidad"
            dense
          ></v-select>
        </v-col>

        <v-col md="12">
          <v-row>
            <v-col xs="12" sm="6" md="4" lg="3" v-for="(item, index) in items" :key="index">
              <Info :key="index" :details="item"/>
            </v-col>
          </v-row>
        </v-col>

      </v-container>
    </v-app>
  </div>
</template>

<script>
import store from '@/store';
import axios from 'axios';
import Info from '@/components/Info.vue';

export default {
  name: 'App',
  data() {
    return {
      perPage: [5, 10, 25, 50, 100],
      items: [],
      url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=',
    };
  },

  components: {
    Info,
  },

  async mounted() {
    this.getItems().then(() => {
      console.log(this.items);
    });
  },

  methods: {
    changeCantidad(e) {
      store.dispatch('cantidad', e);
    },
    getItems() {
      return axios.get(`${this.url}${this.cantidad}`).then((resp) => {
        this.items = resp.data.results;
        this.items.map((item) => {
          item.testing = true;
          return item;
        });
      });
    },
  },

  computed: {
    cantidad() {
      return store.state.cantidad;
    },
  },

  watch: {
    cantidad() {
      this.getItems();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
