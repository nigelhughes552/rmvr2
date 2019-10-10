<template>
	<v-layout row justify-center>
		<About />

		<v-flex xs12>
			<v-parallax height="400" src="engine.jpg">
				<v-row align="center" justify="center">
					<h1 class="display-4 display-header  mb-4">RMVR</h1>
				</v-row>
			</v-parallax>
		</v-flex>

		<WhatWeDo />

		<v-flex xs12>
			<v-parallax height="400" src="car.jpg" />
		</v-flex>

		<FindUs />

		<v-flex xs12>
			<v-parallax height="400" src="FindUs.jpg" />
		</v-flex>

		<v-flex xs12>
			<GmapMap
				:center="{ lat: 51.9577446, lng: -1.2563323 }"
				:zoom="16"
				map-type-id="terrain"
				style="width: 100%; height: 800px"
			></GmapMap>
		</v-flex>

		<Contact />

		<v-flex xs12>
			<v-parallax height="400" src="Contact.jpg" />
		</v-flex>
	</v-layout>
</template>

<script>
import About from "@/components/About";
import Contact from "@/components/Contact";
import WhatWeDo from "@/components/WhatWeDo";
import FindUs from "@/components/FindUs";
export default {
	components: {
		About,
		Contact,
		WhatWeDo,
		FindUs
	}
};
</script>
<style scoped>
.display-header {
	font-size: 72px;
	color: #000;
	font-weight: bold;
}
</style>