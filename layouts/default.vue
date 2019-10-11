<template>
	<v-app>
		<v-app-bar :clipped-left="clipped" fixed app>
			<v-toolbar-title v-text="title" />
		</v-app-bar>
		<v-content>
			<v-container fluid>
				<nuxt />
			</v-container>
		</v-content>

		<v-footer :fixed="fixed" app>
			<span>&copy; R.M.V.R 2019</span>
		</v-footer>
	</v-app>
</template>

<script>
export default {
	data() {
		return {
			fixed: false,
			clipped: false,
			title: "R.M.V.R"
		};
	}
};
</script>
<style>
p,
h4 {
	font-family: "Anonymous Pro", monospace;
}
</style>
