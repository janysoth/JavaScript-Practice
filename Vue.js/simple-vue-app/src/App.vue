<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/todo-app">To-Do App</router-link> |
      <router-link to="/todo-app-v2">To-Do App V2</router-link> |
      <router-link to="/about">About</router-link> |
    </nav>

    <router-view />
  </div>
</template>

<style>
nav {
  padding: 30px;
  display: flex;
  justify-content: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  display: inline;
  padding: 0 10px;
}

nav a.router-link-exact-active {
  color: goldenrod;
}
</style>
