<script lang="ts" setup>
import { computed, ref } from 'vue';
import { thisMonth, today } from '../post';
import { DateTime } from 'luxon';

const periods = <const>['Today', 'This Week', 'This Month'];

type Period = typeof periods[number];

const selectedPeriod = ref<Period>('Today');

function selectPeriod(period: Period) {
  selectedPeriod.value = period;
}

const posts = computed(() => {
  return [today, thisMonth, thisMonth]
    .map((post) => {
      return {
        ...post,
        created: DateTime.fromISO(post.created),
      };
    })
    .filter((post) => {
      if (selectedPeriod.value === 'Today') {
        return post.created >= DateTime.now().minus({ day: 1 });
      }

      return post;
    });
});
</script>

<template>
  <nav class="is-primary panel">
    <span class="panel-tabs">
      <a
        v-for="period in periods"
        :key="period"
        :class="{
          'is-active': period === selectedPeriod,
        }"
        @click="selectPeriod(period)"
      >
        {{ period }}
      </a>
    </span>

    <a
      v-for="post in posts"
      :key="`${post}`"
      class="panel-block"
    >
      <a>{{ post.title }}</a>
      <div>{{ post.created.toFormat('d MMM') }}</div>
    </a>
  </nav>
</template>
