<template>
  <div class="content-box">
    <div class="content">
      <Menu mode="horizontal" :theme="theme1" active-name="2" style="background-color: rgb(245, 247, 249);" >
        <MenuItem name="1" to='/contest/contest1English' style="width: 50%; overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">
          <Icon type="ios-paper" />
          SHREC 2015-2020
        </MenuItem>
        <MenuItem name="2" to='/contest/contest2English' style="width: 50%; overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">
          <Icon type="ios-ribbon" />
          CVPR 2019 Contest on Mitosis Detection in Phase Contrast Microscopy Image Sequences
        </MenuItem>
      </Menu>
      <div class="contest-content">
        <h2 style="margin: 10px 0">CVPR 2019 Contest on Mitosis Detection in Phase Contrast Microscopy Image Sequences</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mitosis detection aims to determine the presence of mitosis in the microscopy image, and then locate the spatial and temporal location of mitotic cells across the microscopy image sequence. Unlike mitotic detection in static images, mitosis detection in phase contrast image dataset requires both spatial and temporal information to be taken into consideration for precise delineation and duration of these events.<br/><br/></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The aim of this challenge is to provide a common benchmark for the evaluation of the mitosis detection algorithms in a new dataset of phase contrast time-lapse microscopy images at low magnification. Low magnification detection of mitosis, in particular, is very challenging due to the lower available information/pixels per cell. However, this is necessary to ensure that the mitotic behavior of an adequate number of cells is monitored. Only then can the acquired data be considered to be representative of the cell population.<br/><br/>
          <a style="font-size: 15px" href="http://media.m2i.ac.cn/mitosisdetection">http://media.m2i.ac.cn/mitosisdetection</a><br/><br/>
        </p>
        <img src="../../assets/pic/research3.png" style=" width:80%; margin-left: 10%"><br/><br/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ContestContent2en'
}
</script>

<style scoped>
  .content-box{
    margin: 100px 250px 60px 250px;
    min-width: 800px;
  }
  .content{
    padding: 20px;
    border:1px solid #dcd9d9;
    font-size: 15px;
  }
  .contest-content{
    margin: 20px 40px;
    text-align: justify;
  }
</style>
