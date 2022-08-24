<template>
<div class="pt-24 w-96 text-3xl font-extrabold text-gray-900 text-center">
  <label>resistor3</label>
    <input type="text" class="form-control" v-model="input1">
  <label>resistor4</label>
  <input type="text" class="form-control mb-4" v-model="input2">

  <h1> results</h1>
  <button @click="calc" class="btn btn-success">Calculate</button><br>
  Resistance: {{resistance}}<br>
</div>

</template>

<script>
export default {
  name: "wheatstone",
  data() {
    return {
      resistance:''
    }
  },
  methods: {
   calc() {
   this.resistance = 1/((1/this.input1)+1/(this.input2))+(2*this.input1);
   }
  }
}
</script>

<style scoped>

</style>
