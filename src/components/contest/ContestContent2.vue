<template>
  <div class="content-box">
    <div class="content">
      <Menu mode="horizontal" :theme="theme1" active-name="2" style="background-color: rgb(245, 247, 249);" >
        <MenuItem name="1" to='/contest/contest1' style="width: 50%; overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">
          <Icon type="ios-paper" />
          SHREC'19--基于单视图的三维模型检索
        </MenuItem>
        <MenuItem name="2" to='/contest/contest2' style="width: 50%; overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">
          <Icon type="ios-ribbon" />
          相差显微镜图像序列细胞有丝分裂事件检测比赛
        </MenuItem>
      </Menu>
      <div class="contest-content">
        <h2 style="margin: 10px 0">相差显微镜图像序列细胞有丝分裂事件检测比赛</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;有丝分裂检测旨在确定显微镜图像中细胞有丝分裂事件的存在，并且在整个显微镜图像序列中定位有丝分裂细胞的空间和时间位置。 与静态显微镜图像中的有丝分裂检测不同，相差显微镜图像数据集中的有丝分裂检测需要同时考虑细胞图像的空间和时序动态信息，并且精确描述这些事件的发生和持续时间。<br/><br/></p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本次比赛的目的是为低倍率相差显微镜图像数据集下的细胞有丝分裂检测算法评估提供一个通用的基准。由于每个细胞仅能提供较低的可用像素信息，低倍率显微镜图像下的有丝分裂检测尤其具有挑战性。 低倍率显微成像是确保监视足够数量的细胞的有丝分裂行为所必需的。 只有这样才能将获得的足够的数据来对细胞群体进行分析。<br/><br/>
            <a style="font-size: 15px" href="http://media.m2i.ac.cn/mitosisdetection">http://media.m2i.ac.cn/mitosisdetection</a><br/><br/>
        </p>
        <img src="../../assets/pic/research3.png" style=" width:80%; margin-left: 10%"><br/><br/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContestContent2'
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
