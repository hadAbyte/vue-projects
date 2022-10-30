<script lang="ts" setup>
import {ref} from "vue";

const periods = <const>['Today', 'This Week', 'This Month']

type Period = typeof periods[number]

const selectedPeriod = ref<Period>('Today')

function selectPeriod(period: Period) {
	selectedPeriod.value = period
}
</script>

<template>
	<nav class="is-primary panel">
		<span class="panel-tabs">
			<a
					v-for="period in periods"
					:key="period"
					:class="{
						'is-active': period === selectedPeriod
					}"
					@click="selectPeriod(period)"
			>
				{{ period }}
			</a>
		</span>
	</nav>
</template>