<template>
  <div class="result">
    <div class="title">{{ results[resutlIndex].title }}</div>
    <div class="desc">{{ results[resutlIndex].desc }}</div>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      required: true,
    },
    totalCorrect: {
      type: Number,
      required: true,
    },
  },
  computed: {
    resutlIndex() {
      let index = 0;
      this.results.forEach((el, i) => {
        if (el.min <= this.totalCorrect && el.max >= this.totalCorrect) {
          index = i;
        }
      });
      return index;
    },
  },
};
</script>
