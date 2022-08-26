<template>
  <div class="container text-2xl pl-96 pr-96 font-extrabold text-white text-center mt-12 bg-slate-900 rounded-xl shadow pt-4 mb-12">
    <div class="row pl-12 pr-12">
      <div class="col-md mr-72 ml-72">
        <div class="mb-2 text-3xl">Number of<span class="text-indigo-500"> Resistors</span></div>
        <label class="mb-2">R1 Value:</label>
        <input type="number" class="rounded-pill form-control bg-blue-500 mb-2 text-center" v-model="r1">
        <label class="mb-2">R2 Value:</label>
        <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="r2">
        <div class="text-3xl mb-2 mt-4">Result</div>
        <button @click="calcRx" class="mb-2 btn btn-primary">Calculate</button>
        <button @click="resetInputs" class="mb-2 btn btn-primary">Reset values</button><br>
        Equivalent Resistance = {{ rx }}<br><br>
      </div>
    </div>
</div>

</template>

<script>
export default {
  name: "parallelresistor",
  data() {
    return {
      rx: '',
      r1: '',
      r2: '',
      r3: '',
      r4: '',
      r5: '',
      r6: '',
    }
  },
  methods: {
    calcRx() {
      this.rx = this.formatOutput(
          this.rx = 1 / ((1 / this.r1) + 1 / (this.r2))
      );
    },
    formatOutput(e) {
      return isNaN(e) || "" == e || null == e ? e : parseFloat(e.toFixed(3));
    },
    resetInputs() {
        this.r1 = null,
        this.r2 = null,
        this.r3 = null,
        this.r4 = null,
        this.r5 = null,
        this.r6 = null,
        this.rx = null
    },
  },
}
</script>

<style scoped>
input[type=number] {
  background-color: rgb(30 41 59);
  border-color: rgb(30 41 59);
  color: white;
}
</style>
