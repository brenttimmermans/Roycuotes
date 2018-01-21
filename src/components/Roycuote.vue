<template>
  <div class="roycuote__container">
    <div class="roycuote__content">
      <div class="roycuote__quote">{{quote}}</div>
      <div class="roycuote__author">&sim; {{author}}</div>
    </div>
    <button class="button button--primary roycuote__button" v-on:click="pickRoycuote">Another one!</button>
  </div>
</template>

<script>
import { getRoycuote } from '../lib/roycuotes';

export default {
  data() {
    return {
      quote: '',
      author: 'Roy, CEO Royco',
    };
  },
  mounted() {
    this.pickRoycuote();
  },
  methods: {
    pickRoycuote() {
      this.quote = getRoycuote();
    },
  },
};
</script>

<style scoped>
.roycuote__container {
  text-align: center;
  width: 500px;
}

.roycuote__content {
  height: 100px;
}

.roycuote__quote {
  font-weight: 600;
  font-size: 30px;
}

.roycuote__author {
  margin-top: 5px;
}

.roycuote__button {
  margin-top: 15px;
}

@media (max-width: 500px) {
  .roycuote__container {
    width: auto;
  }
}

@media (max-width: 300px) {
  .roycuote__content {
    height: 150px;
  }
}
</style>
