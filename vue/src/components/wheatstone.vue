<template>
<div class="pt-24 w-96 text-3xl font-extrabold text-gray-900 text-center">
  <label>Vin Value:</label>
    <input type="text" class="form-control" v-model="vin">

  <label>R1 Value:</label>
    <input type="text" class="form-control mb-4" v-model="r1">

  <label>R2 Value:</label>
    <input type="text" class="form-control" v-model="r2">

  <label>R3 Value:</label>
    <input type="text" class="form-control mb-4" v-model="r3">

  <label>V out:</label>
    <input type="text" class="form-control mb-4" v-model="vout">

<!--  <label>Rx:</label>-->
<!--    <input type="text" class="form-control mb-4" v-model="rx">-->

  <h1> results</h1>
  <button @click="calc" class="btn btn-success">Calculate</button><br>
  Rx= {{ rx }}<br>
<!--  Vout = {{ vout }} <br>-->
</div>

</template>

<script>
export default {
  name: "wheatstone",
  data() {
    return {
      rx: 0,
      vin: 0,
      r1: 0,
      r2: 0,
      r3: 0,
      vout: 0,
    }
  },
  methods: {
   calc() {
  // this.vout = (this.vin)*((this.rx)/(this.r3 + this.rx) - (this.r2 / (this.r1 + this.r2)));
  this.rx = (((this.r2 * this.r3) + (this.r3 * (this.r1 + this.r2) * (this.vout / this.vin))) /
   (this.r1 - (this.r1 + this.r2) * (this.vout / this.vin)));
  // this.rx = (((2 * 2) + (2 * (2 + 2) * (2 / 2 ))) / (2 - (2 + 2) * (2 / 2)));
   }
  }
}
</script>

<style scoped>

</style>
