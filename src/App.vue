<template>
  <v-app id="app">
    <v-app-bar
        color="blue accent-4"
        dense
        dark
    >
      <v-toolbar-title>Forms</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
          left
          bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              icon
              v-bind="attrs"
              v-on="on"
          >
            <v-icon>mdi-menu</v-icon>
            Form Selection
          </v-btn>
        </template>

        <v-list>
          <v-list-item
              v-for="n in menu"
              :key="n.id"
              @click="() => {}"
          >
            <v-list-item-title>
              <router-link :to="n.path">
              {{ n.name }}
              </router-link>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer
      color="blue"
      padless
      >
      <v-row>
        <v-col cols="6">
          <v-textarea label="to load" :value="textToLoad"></v-textarea>
          <v-btn>Load</v-btn>
        </v-col>
        <v-col cols="6">
          <v-textarea label="as serialized" :value="serialized"></v-textarea>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "formsApp",
  data: () => ({
    menu: [
      {id: 1, name: 'About', path: '/'},
      {id: 2, name: 'Genotyping', path: '/genotypingForm'},
      {id: 3, name: 'Kit', path: '/kitRequestForm'},
    ],
    textToLoad: '',
    serialized: ''
  })
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
