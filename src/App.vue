<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import VueIcon from './assets/vue.svg'
const HelloWorld = defineAsyncComponent(
	() => import('./components/HelloWorld.vue'),
)
</script>

<template>
	<div>
		<a href="https://vite.dev" target="_blank">
			<img src="/vite.svg" class="logo" alt="Vite logo" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<VueIcon class="logo vue" />
		</a>
		<a href="https://www.typescriptlang.org/" target="_blank">
			<img
				src="./assets/ts-logo-512.svg"
				class="logo typescript"
				alt="TypeScript logo"
			/>
		</a>
	</div>
	<Header />
	<HelloWorld msg="Vite + Vue + TS" />
	<Footer />
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo.vue {
	width: 6em;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.typescript:hover {
	filter: drop-shadow(0 0 2em #3178c6aa);
}
</style>
