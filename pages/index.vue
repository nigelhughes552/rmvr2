<template>
	<div>
		<v-row class="mx-3">
			<v-col>
				<About />
			</v-col>
		</v-row>
		<v-row no-gutters>
			<v-col>
				<v-parallax class="mx-n3" height="400" src="engine.jpg"> </v-parallax>
			</v-col>
		</v-row>
		<v-row class="mx-3">
			<v-col>
				<WhatWeDo />
			</v-col>
		</v-row>

		<v-row>
			<v-col>
				<v-parallax class="mx-n3" height="400" src="car.jpg"> </v-parallax>
			</v-col>
		</v-row>

		<v-row class="mx-3">
			<v-col>
				<FindUs />
			</v-col>
		</v-row>

		<v-row class="mx-n3">
			<v-col>
				<div data-aos="fade-up" data-aos-duration="2000">
					<a
						href="https://www.google.com/maps/@51.9577446,-1.2563323,15z"
						target="_blank"
						><v-img src="map.jpg"></v-img
					></a>
				</div>
			</v-col>
		</v-row>

		<v-row class="mx-3">
			<v-col>
				<Contact />
			</v-col>
		</v-row>

		<v-row>
			<v-col>
				<v-parallax class="mx-n3" height="400" src="Contact.jpg"> </v-parallax>
			</v-col>
		</v-row>

		<Testimonials />
	</div>
</template>

<script>
import About from "@/components/About";
import Contact from "@/components/Contact";
import WhatWeDo from "@/components/WhatWeDo";
import FindUs from "@/components/FindUs";
import Testimonials from "@/components/Testimonials";
export default {
	components: {
		About,
		Contact,
		WhatWeDo,
		FindUs,
		Testimonials
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