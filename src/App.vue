<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style-type: none;
}

#app {
  font-family: Arial, sans-serif;
  height: 100vh;
}

.button {
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #0324f78f;
  padding: 10px 20px;
  box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.2);
  margin: 0 auto;
  margin-bottom: 100px;
  display: block;
  cursor: pointer;
}

.button:hover {
  box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.3);
}
</style>
