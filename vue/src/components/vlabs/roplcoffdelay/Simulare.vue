<template>
  <div class="pt-24 d-flex justify-content-center container mb-12">
    <div id="simscreen">
      <div id="title"><h3>Temporizare cu întârziere la închidere</h3></div>
    <div class="simsubscreen">
      <img style="position:absolute; left:35px; top:30px;" src="../../../views/images/plcoff/i1.png" />
      <img style="position:absolute; left:395px; top:10px;" src="../../../views/images/plcoff/counter.png" />
      <img style="position:absolute; left:32px; top:150px;" src="../../../views/images/plcoff/control.png" />
      <img style="position:absolute; left:50px; top:187px;" src="../../../views/images/plcoff/circuit.png" />
      <img id="mainOn" style="position:absolute; left:69px; top:187px; cursor:pointer;" @click="stopMotor"  src="../../../views/images/plcoff/switchOn.png" />
      <img id="mainOff" style="position:absolute; left:68.5px; top:175.25px; cursor:pointer; visibility:hidden;" @click="initStart" src="../../../views/images/plcoff/switchOff.png" />

      <img style="position:absolute; left:195px; top:320px; width:175px; height:150px;" src="../../../views/images/plcoff/motor.png " />
      <img id="arrow" style="position:absolute; left:217px; top:394px; visibility:hidden;" src="../../../views/images/plcoff/arrow3.png" />
      <img style="position:absolute; left:204.5px; top:402.5px; height:15px;" src="../../../views/images/plcoff/rotar.png" />

      <img id="fan1" style="position:absolute; width: 120px; height: 110px; left:40px; top:262.5px;" src="../../../views/images/plcoff/fan1.jpg" />
      <img id="fan2" style="position:absolute; width: 120px; height: 110px; left:40px; top:262.5px; visibility:hidden;" src="../../../views/images/plcoff/fan2.png" />

      <img id="off1" style="position:absolute; left:724.25px; top:50px; width:22.5px; height:22.5px;" src="../../../views/images/off.png" />
      <img id="on1" style="position:absolute; left:724.25px; top:50px; width:22.5px; height:22.5px; visibility:hidden;" src="../../../views/images/on.png" />
      <img id="off2" style="position:absolute; left:725px; top:102.5px; width:22.5px; height:22.5px; " src="../../../views/images/off.png" />
      <img id="on2" style="position:absolute; left:725px; top:102.5px; width:22.5px; height:22.5px; visibility:hidden;" src="../../../views/images/on.png" />
      <img id="off3" style="position:absolute; left:718.5px; top:160px; width:22.5px; height:22.5px;" src="../../../views/images/off.png" />
      <img id="on3" style="position:absolute; left:718.5px; top:160px; width:22.5px; height:22.5px; visibility:hidden;" src="../../../views/images/on.png" />
      <img id="off4" style="position:absolute; left:720.5px; top:204.5px; width:22.5px; height:22.5px; " src="../../../views/images/off.png" />
      <img id="on4" style="position:absolute; left:720.5px; top:204.5px; width:22.5px; height:22.5px; visibility:hidden;" src="../../../views/images/on.png" />
      <img id="off5" style="position:absolute; left:725px; top:250px; width:22.5px; height:22.5px; " src="../../../views/images/off.png" />
      <img id="on5" style="position:absolute; left:725px; top:250px; width:22.5px; height:22.5px; visibility:hidden;" src="../../../views/images/on.png" />
      <img id="off6" style="position:absolute; left:724px; top:308px; width:22.5px; height:22.5px;" src="../../../views/images/off.png" />
      <img id="on6" style="position:absolute; left:724.5px; top:308px; width:22.5px; height:22.5px; visibility:hidden;" src="../../../views/images/on.png" />
      <img id="off7" style="position:absolute; left:724.5px; top:374px; width:22.5px; height:22.5px;" src="../../../views/images/off.png" />
      <img id="on7" style="position:absolute; left:724px; top:374px; width:22.5px; height:22.5px; visibility:hidden;" src="../../../views/images/on.png" />
      <img id="off8" style="position:absolute; left:724px; top:439px; width:22.5px; height:22px;" src="../../../views/images/off.png" />
      <img id="on8" style="position:absolute; left:724px; top:439px; width:22.5px; height:22px; visibility:hidden;" src="../../../views/images/on.png" />

      <div id="bit1" style="position:absolute; left:444px; top:30px; padding:2px; background-color:red; color:black; font-size:11px; font-weight:bold;">I:1/0</div>
      <div id="bit2" style="position:absolute; left:444px; top:82.5px; padding:2px; background-color:red; color:black; font-size:11px; font-weight:bold;">I:1/0</div>
      <div id="bit3" style="position:absolute; left:444px; top:142.5px; padding:2px; background-color:red; color:black; font-size:11px; font-weight:bold;">I:1/0</div>
      <div id="bit4" style="position:absolute; left:435px; top:227.5px; padding:2px; background-color:red; color:black; font-size:11px; font-weight:bold;">T4:2/EN</div>
      <div id="bit5" style="position:absolute; left:435px; top:287.5px; padding:2px; background-color:red; color:black; font-size:11px; font-weight:bold;">T4:2/TT</div>
      <div id="bit6" style="position:absolute; left:435px; top:352px; padding:2px; background-color:red; color:black; font-size:11px; font-weight:bold;">T4:2/DN</div>
      <div id="bit7" style="position:absolute; left:435px; top:417.5px; padding:2px; background-color:red; color:black; font-size:11px; font-weight:bold;">T4:2/DN</div>

      <div id="mon" style="position:absolute; left:145px; top:155px; background-color:#FFFF00; width:20px; height:20px; border-radius:11px; "></div>
      <div id="moff" style="position:absolute; left:145px; top:178.5px; background-color:#996600; width:20px; height:20px; border-radius:11px; "></div>
      <div id="fon" style="position:absolute; left:145px; top:202.5px; background-color:#FFFF00; width:20px; height:20px; border-radius:11px; "></div>
      <div id="foff" style="position:absolute; left:145px; top:227.5px; background-color:#996600; width:20px; height:20px; border-radius:11px; "></div>

      <p style="position:absolute; left:722px; top:155px; font-size:11px; font-weight:bold;">EN</p>
      <p style="position:absolute; left:723px; top:198px; font-size:11px; font-weight:bold;">DN</p>
      <p id="accum" style="position:absolute; left:660px; top:215px; color:white; font-size:14.5px;">0</p>
    </div>
  </div>
  </div>
</template>

<script>


export default {
  data() {

    return {
      count: 0,
      trackCounter: null,
      counting: 0,
      myInt: 0,
    };
  },


mounted(){
    this.start();
},


  methods: {
    animateFan() {
      if (document.getElementById('fan2').style.visibility == "hidden")
        document.getElementById('fan2').style.visibility = "visible";
      else
        document.getElementById('fan2').style.visibility = "hidden";
    },

    initStart() {
      document.getElementById("mainOn").style.visibility = "visible";
      document.getElementById("mainOff").style.visibility = "hidden";
      this.start();
    },

    start() {
      document.getElementById("mon").style.backgroundColor = "#FFFF00";
      document.getElementById("fon").style.backgroundColor = "#FFFF00";
      document.getElementById("moff").style.backgroundColor = "#996600";
      document.getElementById("foff").style.backgroundColor = "#996600";
      document.getElementById("arrow").style.visibility = "visible";
      document.getElementById("arrow").style.animation = "rotate 0.2s linear infinite";
      this.myInt = setInterval(() => {
        this.animateFan();
      }, 100);
      for (let i = 1; i <= 7; i++) {
        if (i == 1 || i == 3 || i == 4 || i == 6) {
          document.getElementById("bit" + i).style.backgroundColor = "#009900";
        } else {
          document.getElementById("bit" + i).style.backgroundColor = "#FF0000";
        }
        if (i == 1 || i == 3 || i == 4 || i == 5 || i == 7) {
          document.getElementById("on" + i).style.visibility = "visible";
        } else {
          document.getElementById("on" + i).style.visibility = "hidden";
        }
      }
      document.getElementById("on8").style.visibility = "hidden";
    },

    stopMotor() {
      clearInterval(this.counting);
      this.count = 0;
      document.getElementById("accum").innerHTML = this.count;
      document.getElementById("mainOn").style.visibility = "hidden";
      document.getElementById("mainOff").style.visibility = "visible";
      this.counting = setInterval(() => {
        this.count++;
        document.getElementById("accum").innerHTML = this.count;
        this.doneCounting(this.count);
      }, 500);
      document.getElementById("mainOn").style.visibility = "hidden";
      document.getElementById("mainOff").style.visibility = "visible";
      document.getElementById("mon").style.backgroundColor = "#996600";
      document.getElementById("fon").style.backgroundColor = "#FFFF00";
      document.getElementById("moff").style.backgroundColor = "#FFFF00";
      document.getElementById("foff").style.backgroundColor = "#996600";
      document.getElementById("arrow").style.visibility = "visible";
      document.getElementById("arrow").style.animation = "rotate 0.2s linear infinite";
      for (let i = 1; i <= 7; i++) {
        if (i == 2 || i == 5 || i == 6) {
          document.getElementById("bit" + i).style.backgroundColor = "#009900";
        } else {
          document.getElementById("bit" + i).style.backgroundColor = "#FF0000";
        }

        if (i == 2 || i == 4 || i == 6 || i == 7) {
          document.getElementById("on" + i).style.visibility = "visible";
        } else {
          document.getElementById("on" + i).style.visibility = "hidden";
        }
      }
    },

    doneCounting(count) {
      if (count == 10) {
        clearInterval(this.myInt);
        clearInterval(this.counting);
        this.count = 0;
        document.getElementById("accum").innerHTML = this.count;
        console.log("gata");
        document.getElementById('fan2').style.visibility = "hidden";
        document.getElementById("fon").style.backgroundColor = "#996600";
        document.getElementById("foff").style.backgroundColor = "#FFFF00";
        document.getElementById("arrow").style.visibility = "hidden";
        document.getElementById("arrow").style.animation = "";
        for (let i = 1; i <= 7; i++) {
          if (i == 2 || i == 7) {
            document.getElementById("bit" + i).style.backgroundColor = "#009900";
          } else {
            document.getElementById("bit" + i).style.backgroundColor = "#FF0000";
          }

          if (i == 2) {
            document.getElementById("on" + i).style.visibility = "visible";
          } else {
            document.getElementById("on" + i).style.visibility = "hidden";
          }
        }
        document.getElementById("on8").style.visibility = "visible";
    }
  }
}}
</script>

<style scoped>
#simscreen {
  position: relative;
  left: 0;
  top: 0;
  height: 600px;
  width: 800px;
  border: solid 1px;
  background-color: #000;
}


#title h3 {
  padding-top: 10px;
  margin: 0;
}

.simsubscreen {
  position: absolute;
  left: 1px;
  top: 59px;
  height: 520px;
  width: 794px;
  border: 2px solid #fff;
}


@-webkit-keyframes rotate
{
  from {transform:rotate(0deg);}
  to {transform:rotate(1800deg);}
}

@keyframes rotate
{
  from {transform:rotate(0deg);}
  to {transform:rotate(1800deg);}
}


</style>
