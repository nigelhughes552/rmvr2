<template>
  <v-layout row justify-center align-center>
    <v-flex xs10>
      <h1>About</h1>
      <p>
        With over 30 years of experience in all makes and types of vehicles
        R.M.V.R will help you. dfhdf fdh dfh fh fdhg df hfh fh dfh fdhg fdh
        dfhfdh fh fh fh dfh
      </p>
    </v-flex>
    <v-flex xs12>
      <v-parallax src="car.jpg" />
    </v-flex>

    <WhatWeDo />

    <v-flex xs12>
      <v-parallax src="engine.jpg" />
    </v-flex>
    <FindUs />
    <v-flex xs12>
      <v-parallax src="FindUs.jpg" />
    </v-flex>
  </v-layout>
</template>

<script>
import WhatWeDo from '@/components/WhatWeDo'
import FindUs from '@/components/FindUs'
export default {
  components: {
    WhatWeDo,
    FindUs
  }
}
</script>
