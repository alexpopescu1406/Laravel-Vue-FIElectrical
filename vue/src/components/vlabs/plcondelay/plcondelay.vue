<template>
  <div class="pt-24 d-flex justify-content-center container mb-12">
    <div id="simscreen">

      <div class="simsubscreen bg-black">
        <div class="text-light">PLC On-Delay Timer Instruction</div>

        <img style="position:absolute; left:10px; top:90px;" src="../../../views/images/i1.png" />
        <img style="position:absolute; left:360px; top:10px;" src="../../../views/images/counter.png" />
        <img style="position:absolute; left:3px; top:220px;" src="../../../views/images/control.png" />
        <img style="position:absolute; left:20px; top:250px;" src="../../../views/images/circuit.png" />
        <img id="mainOn" style="position:absolute; left:40px; top:250px; visibility:hidden; cursor:pointer;" onclick="stop()" src="../../../views/images/switchOn.png" />
        <img id="mainOff" style="position:absolute; left:41px; top:232.5px; cursor:pointer;" onclick="start()" src="../../../views/images/switchOff.png" />

        <img style="position:absolute; left:175px; top:270px; width:175px; height:150px;" src="../../../views/images/motor.png" />
        <img id="arrow" style="position:absolute; left:199px; top:346.5px; visibility:hidden;" src="../../../views/images/arrow3.png" />
        <img style="position:absolute; left:184.5px; top:352.5px; height:15px;" src="../../../views/images/rotar.png" />

        <img id="off1" style="position:absolute; left:721px; top:95px; width:22.5px; height:22.5px;" src="../../../views/images/off.png" />
        <img id="on1" style="position:absolute; left:721px; top:95px; width:22.5px; height:22.5px; visibility:hidden;" src="../../../views/images/on.png" />
        <img id="off2" style="position:absolute; left:723px; top:140px; width:22.5px; height:22.5px; " src="../../../views/images/off.png" />
        <img id="on2" style="position:absolute; left:723px; top:140px; width:22.5px; height:22.5px; visibility:hidden;" src="../../../views/images/on.png" />
        <img id="off3" style="position:absolute; left:727.5px; top:185px; width:22.5px; height:22.5px;" src="../../../views/images/off.png" />
        <img id="on3" style="position:absolute; left:727.5px; top:185px; width:22.5px; height:22.5px; visibility:hidden;" src="../../../views/images/on.png" />
        <img id="off4" style="position:absolute; left:727.5px; top:242.5px; width:22.5px; height:22.5px; " src="../../../views/images/off.png" />
        <img id="on4" style="position:absolute; left:727.5px; top:242.5px; width:22.5px; height:22.5px; visibility:hidden;" src="../../../views/images/on.png" />
        <img id="off5" style="position:absolute; left:729px; top:295px; width:22.5px; height:22.5px; " src="../../../views/images/off.png" />
        <img id="on5" style="position:absolute; left:729px; top:295px; width:22.5px; height:22.5px; visibility:hidden;" src="../../../views/images/on.png" />
        <img id="off6" style="position:absolute; left:727px; top:339px; width:22.5px; height:22.5px;" src="../../../views/images/off.png" />
        <img id="on6" style="position:absolute; left:727px; top:339px; width:22.5px; height:22.5px; " src="../../../views/images/on.png" />
        <img id="off7" style="position:absolute; left:727px; top:403.5px; width:22.5px; height:22.5px;" src="../../../views/images/off.png" />
        <img id="on7" style="position:absolute; left:727px; top:403.5px; width:22.5px; height:22.5px; visibility:hidden;" src="../../../views/images/on.png" />

        <div id="bit1" style="position:absolute; left:418px; top:75px; padding:2px; background-color:red; color:black; font-size:11px; font-weight:bold;">I:1/0</div>
        <div id="bit2" style="position:absolute; left:411px; top:165px; padding:2px; background-color:red; color:black; font-size:11px; font-weight:bold;">T4:0/EN</div>
        <div id="bit3" style="position:absolute; left:411px; top:222.5px; padding:2px; background-color:red; color:black; font-size:11px; font-weight:bold;">T4:2/TT</div>
        <div id="bit4" style="position:absolute; left:411px; top:318px; padding:2px; background-color:#009900; color:black; font-size:11px; font-weight:bold;">T4:0/TT</div>
        <div id="bit5" style="position:absolute; left:408px; top:382.5px; padding:2px; background-color:red; color:black; font-size:11px; font-weight:bold;">T4:0/DN</div>

        <div id="mon" style="position:absolute; left:13px; top:315px; background-color:#996600; width:20px; height:20px; border-radius:11px; "></div>
        <div id="moff" style="position:absolute; left:13px; top:342.5px; background-color:#FFFF00; width:20px; height:20px; border-radius:11px; "></div>
        <div id="dt" style="position:absolute; left:13px; top:372px; background-color:#996600; width:20px; height:20px; border-radius:11px; "></div>

        <p style="position:absolute; left:724.5px; top:90px; font-size:11px; font-weight:bold;">EN</p>
        <p style="position:absolute; left:725.5px; top:135px; font-size:11px; font-weight:bold;">DN</p>
        <p id="accum" style="position:absolute; left:656px; top:152px; font-size:14.5px; color:white;">0</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "plcondelay",
  created() {
    var scripts = [
      "https://ied-nitk.vlabs.ac.in/exp/exp-plc-on-delay-nitk/simulation/js/ondelay.js",
      "https://ied-nitk.vlabs.ac.in/exp/exp-plc-on-delay-nitk/assets/js/iframeResize.js",
    ];
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  },
}
</script>

<style scoped>
#simscreen
{
  position: relative;
  left:0px;
  top:0px;
  height: 600px;
  width:800px;
  border:solid 1px;
  background-color:#000;
}

#title{
  position:relative;
  left: 1px;
  top: 1px;
  height:53px;
  width:794px;
  font-size: 22px;
  text-align:center;
  background-color: black;
  font-family: verdana;
  color: White;
  text-transform: uppercase;
  border:2px solid #fff;
}

#title h3
{
  padding-top:10px;
  margin:0px;
}

.simsubscreen
{
  position:absolute;
  left:1px;
  top:59px;
  height:520px;
  width:794px;
  border:2px solid #fff;
}

.incanvas
{
  margin:7.5px 0 0 7.5px;
  padding:5px;
}

#nextButton
{
  position:absolute;
  left:752px;
  top:530px;
  cursor:pointer;
}

@-webkit-keyframes rotate
{
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
}

@keyframes rotate
{
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
}

</style>
