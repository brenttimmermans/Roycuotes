<template>
  <div class="app">
    <img class="roycuote__img" src="./assets/roy.png" alt="Roy, CEO Royco" />
    <Roycuote />
  </div>
</template>

<script>
import Roycuote from './components/Roycuote';

export default {
  components: {
    Roycuote,
  },
};
</script>

<style>
.app {
  color: #FFF;
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: radial-gradient(circle at bottom, #EA9F57, #BB292A 60%);
}

.roycuote__img {
  max-height: 400px;
  margin-right: 50px;
}

@media (max-width: 700px) {
  .app {
    flex-direction: column
  }

  .roycuote__img {
    max-height: 200px;
    margin: 0;
    margin-bottom: 15px;
  }
}
</style>
