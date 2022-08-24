<template>
<div class="pt-24 w-[600px] text-3xl font-extrabold text-gray-900 text-center">
  <div class="flex justify-between">
  <label class="mr-24">resistor1</label>
    <input type="text" class="form-control mb-4" v-model="input1">
  </div>
  <label>resistor2</label>
  <input type="text" class="form-control mb-4" v-model="input2">

  <h1> results</h1>
  <button @click="calc" class="btn btn-success">Calculate</button><br>
  Resistance: {{resistance}}<br>
</div>

</template>

<script>
export default {
  name: "parallelresistor",
  data() {
    return {
      resistance:''
    }
  },
  methods: {
   calc() {
   this.resistance = 1/((1/this.input1)+1/(this.input2));
   }
  }
}
</script>

<style scoped>

</style>
