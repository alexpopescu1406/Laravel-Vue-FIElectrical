<template>
  <div class="container">
    <div class="row">
      <div class="col-4 border border-dark border-4">
        <div class="">
          <img class="w-[100px]" src="../../../views/images/mcb1.png">
          MCB Switch

          <div >DC Supply</div>
          <div >Starter</div>
        </div>
      </div>
      <div class="col-4 border border-dark border-4">
        <p>Voltmeter
          <span class="ml-8">Voltmeter Display</span>
          <span class="ml-8">Speedomoter</span>
        </p>
      </div>
      <div class="col-4 border border-dark border-4"><div id="overall">
        <table>
          <thead>
          <tr>
            <th v-for="header in headers">
              {{header}}
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-if="items.length === 0">
            <td>No data</td>
          </tr>
          <tr v-else v-for="item in items">

            <td>{{item.no}}</td>
            <td>{{item.speed}}</td>
            <td>{{item.gender}}</td>
          </tr>
          </tbody>
        </table>
      </div>

      </div>
    </div>



    <div class="row">
      <div class="col-xl-4 border border-dark border-4">
        <p>Auto Transformer
          <span class="ml-8">DC Generator<br> <span class="ml-[170px]">Field Resistance</span></span>
        </p>
      </div>
      <div class="col-xl-4 border border-dark border-4">
        <p>Induction Motor
          <span class="ml-8">DC Generator</span>
          <span class="ml-8">DC Motor</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Simulation",
  data: function () {
    return {
      headers: ['Sim. No', 'Speed Value', 'Voltmeter'],
      items: [{

      }],
    }
  },
  methods: {
    add: function (item) {
      this.items.push(item);
    }
  },
  mounted: function () {
  },
}
</script>

<style scoped>

</style>
