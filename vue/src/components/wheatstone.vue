<template>
  <div class="container text-2xl font-extrabold text-white text-center mt-12 bg-slate-900 rounded-xl shadow pt-4 mb-12">
    <div class="row pl-12 pr-12">
      <div class="col-md mr-36">
        <div class="mb-2 text-3xl">Knowing <span class="text-indigo-500">Vout Value</span></div>
          <label class="mb-2">Vin Value:</label>
            <input type="number" class="rounded-pill form-control bg-blue-500 mb-2 text-center" v-model="vin">
          <label class="mb-2">R1 Value:</label>
            <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="r1">
          <label class="mb-2">R2 Value:</label>
            <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="r2">
          <label class="mb-2">R3 Value:</label>
            <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="r3">
          <label class="mb-2 text-indigo-500 ">Vout Value:</label>
            <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="vout">
          <div class="text-3xl mb-2 mt-4">Result</div>
            <button @click="calcRx" class="mb-2 btn btn-primary">Calculate</button>
            <button @click="resetInputs" class="mb-2 btn btn-primary">Reset values</button><br>
              Rx = {{ rx }}<br><br>
          </div>

      <div class="col-md mb-8">
        <div class="text-3xl mb-2"> Knowing <span class="text-indigo-500">Rx Value</span></div>
        <label class="mb-2">Vin Value:</label>
          <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="vinNew">
        <label class="mb-2">R1 Value:</label>
          <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="r1New">
        <label class="mb-2">R2 Value:</label>
          <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="r2New">
        <label class="mb-2">R3 Value:</label>
          <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="r3New">
        <label class="mb-2 text-indigo-500 ">Rx value:</label>
          <input type="number" class="rounded-pill form-control mb-2 text-center" v-model="rxNew">
        <div class="text-3xl mb-2 mt-4">Result </div>
          <button @click="calcVout" class="mb-2 btn btn-primary">Calculate</button>
          <button @click="resetInputsNew" class="mb-2 btn btn-primary">Reset values</button><br>
            Vout = {{ voutNew }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "wheatstone",
  data() {
    return {
      rx: '',
      vin: '',
      r1: '',
      r2: '',
      r3: '',
      vout: '',
      rxNew: '',
      vinNew: '',
      r1New: '',
      r2New: '',
      r3New: '',
      voutNew: '',
    }
  },
  methods: {
    calcRx() {
      this.rx = this.formatOutput(
        (this.r2 * this.r3 + this.r3 * (this.r1 + this.r2) * (this.vout / this.vin))
        / (this.r1 - (this.r1 + this.r2) * (this.vout / this.vin))
      );
    },
    calcVout() {
      this.voutNew = this.formatOutput(
        (this.vinNew * ((this.rxNew / (this.r3New + this.rxNew)) - (this.r2New / (this.r1New + this.r2New))))
      );
    },
    formatOutput(e) {
      return isNaN(e) || "" == e || null == e ? e : parseFloat(e.toFixed(3));
    },
    resetInputs() {
      this.vin = null,
        this.r1 = null,
        this.r2 = null,
        this.r3 = null,
        this.rx = null,
        this.vout = null
    },
    resetInputsNew() {
      this.vinNew = null,
        this.r1New = null,
        this.r2New = null,
        this.r3New = null,
        this.rxNew = null,
        this.voutNew = null
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
