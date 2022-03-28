<template>
  <nav>
    <h1 class="title">{{ title }}</h1>
    <div class="container">
      <router-link :to="link.path" v-for="link in links" :key="link.index">
        {{ link.text }}
      </router-link>
      <button class="login-button">{{ loginText }}</button>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  data() {
    return {
      title: "タイトル",
      loginText: "Googleでログイン",
      links: [
        {
          path: "/top",
          text: "Top",
        },
        {
          path: "/",
          text: "Home",
        },
        {
          path: "/about",
          text: "About",
        },
        {
          path: "/css-park",
          text: "CSS Park",
        },
      ],
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #303030;
}

body {
  margin: 0;
}
nav {
  padding: 25px;
  background: #415a77;
  display: flex;
  justify-content: space-between;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 25px;
  font-size: 1.2rem;
}

nav a.router-link-exact-active {
  color: #303030;
  font-size: 1.3rem;
}
.title {
  margin: 0;
}
.container {
  display: flex;
  align-items: center;
}
.login-button {
  margin: 0 15px;
  padding: 8px;
  font-size: 1rem;
  border-radius: 5px;
}
</style>
