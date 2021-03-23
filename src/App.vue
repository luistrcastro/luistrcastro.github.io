<template>
  <v-app>
    <v-toolbar dark dense color="#dff8eb">
      <v-toolbar-title>
        <v-btn to="/" icon class="geek-btn">
          <v-img
            alt="Geek Icon"
            class="geek-icon"
            src="./assets/geek-icon.png"
            transition="scale-transition"
            max-width="30"
          />
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="d-none d-sm-flex">
        <v-list class="d-flex text-body-1 font-weight-bold" color="#dff8eb">
          <v-list-item v-for="item in menuItems" :key="item.key" @click="callback">
            <v-icon v-if="item.icon" color="#2c3e50" large>{{item.icon}}</v-icon>
            <v-list-item-title class="hire-me" v-else>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-toolbar-items>
      <v-menu offset-y>
        <template color="accent" v-slot:activator="{on, attrs}">
          <v-btn color="#2c3e50" v-bind="attrs" v-on="on" class="d-sm-none" icon plain>
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in menuItems" :key="item.key" @click="callback">
            <v-icon v-if="item.icon">{{item.icon}}</v-icon>
            <v-list-item-title v-else class="font-weight-bold">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
    
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    drawer: false,
    menuItems: [
      { icon: "mdi-linkedin", title: "LinkedIn" },
      { icon: "mdi-github", title: "Github" },
      { title: "Hire Me!" }
    ]
  })
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #dff8eb;
}

.nav-link {
  font-weight: bold;
  color: #2c3e50;
  font-size: 1.5rem;
}

.geek-btn {
  border: rgb(1, 22, 56, 0.4) 1px solid;
}

.geek-icon {
  display: block;
  margin-right: 1px;
  margin-bottom: 2px;
  max-width: 30px;
}

.hire-me {
  color: #2c3e50;
}
</style>
