<template>
  <div class="content-box">
    <Row>
      <Col span="6">
        <Menu class="menu" theme="light" active-name="4" style="width: 200px; background-color: rgb(245, 247, 249);margin-top: 50px">
          <MenuItem name="1" to="/publication/publication2019English">
            <Icon type="md-document" />
            2019
          </MenuItem>
          <MenuItem name="2" to="/publication/publication2018English">
            <Icon type="md-document" />
            2018
          </MenuItem>
          <MenuItem name="3" to="/publication/publication2017English">
            <Icon type="md-document" />
            2017
          </MenuItem>
          <MenuItem name="4" to="/publication/publication2016English">
            <Icon type="md-document" />
            2016
          </MenuItem>
        </Menu>
      </Col>
      <Col span="18">
        <div class="education">
          <div class="education-block">
            <h3></h3>
            <p class="p title"><strong>Multi-Modal Clique-Graph Matching for View-Based 3D Model Retrieval</strong></p>
            <p class="p author"><i>An-An Liu, Weizhi Nie, Yue Gao, Yuting Su </i></p>
            <p class="p time">IEEE Transactions on Image Processing, TIP 2016.</p>
            <p class="p materials">[<a href="https://ieeexplore.ieee.org/document/7430305">Paper</a>]</p>
            <br>

            <p class="p title"><strong>3D Convolutional Networks-Based Mitotic Event Detection in Time-Lapse Phase Contrast Microscopy Image Sequences of Stem Cell Populations</strong></p>
            <p class="p author"><i>An-An Liu, Yuting Su, Weizhi Nie, Mohan Kankanhalli</i></p>
            <p class="p time"> IEEE Conference on Computer Vision and Pattern Recognition Workshops, CVPRW 2016.</p>
            <p class="p materials">[<a href="https://ieeexplore.ieee.org/document/7789661">Paper</a>]</p>
            <br>
            <p class="p title"><strong>Predicting Image Memorability Through Adaptive Transfer Learning From External Sources</strong></p>
            <p class="p author"><i>Peiguang Jing, Yuting Su, Liqiang Nie, Huimin Gu</i></p>
            <p class="p time"> IEEE Transactions on Multimedia, TMM 2016.</p>
            <p class="p materials">[<a href="https://ieeexplore.ieee.org/document/7797211">Paper</a>]</p>
            <br>

            <p class="p title"><strong>SnapVideo: Personalized Video Generation for a Sightseeing Trip</strong></p>
            <p class="p author"><i>Luming Zhang, Peiguang Jing, Yuting Su, Chao Zhang, Ling Shaoz</i></p>
            <p class="p time"> IEEE Transactions on Cybernetics, TCYB 2016.</p>
            <p class="p materials">[<a href="https://ieeexplore.ieee.org/document/7516655">Paper</a>]</p>
            <br>

            <p class="p title"><strong>HEp-2 Cells Classification via Clustered Multi-task Learning</strong></p>
            <p class="p author"><i>An-An Liu, Yao Lu, Weizhi Nie, Yuting Su, Zhaoxuan Yang</i></p>
            <p class="p time">Neurocomputing, 2016.</p>
            <p class="p materials">[<a href="https://www.sciencedirect.com/science/article/pii/S0925231216001235">Paper</a>]</p>
            <br>

            <p class="p title"><strong>A Tensor-Driven Temporal Correlation Model for Video Sequence Classification</strong></p>
            <p class="p author"><i>Jing Zhang, Chuanzhong Xu, Peiguang Jing, Chengqian Zhang, Yuting Su  </i></p>
            <p class="p time">IEEE Signal Processing Letters, 2016.</p>
            <p class="p materials">[<a href="https://ieeexplore.ieee.org/document/7486042">Paper</a>]</p>
            <br>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'publication2016Contenten'
}
</script>

<style scoped>
  .menu{
    float: right;
  }
  .content-box{
    margin: 60px 320px 60px 340px;
  }
  .education{
    padding:50px 15px 20px 15px;
    border-bottom:1px solid #dcd9d9;
    text-align:center;
    float: left;
    font-size: 14px;
  }
  .education-block{
    max-width:700px;
    margin:0 auto 30px auto;
    padding:15px;
    border:1px solid #dcd9d9;
    text-align:left}
  .education-block h3{
    font-weight:500;
    float:left;
    margin:0;
    color:#374054}
  .education-block span{
    color:#74808a;
    float:right}
  .education-block h4{
    color:#74808a;
    clear:both;
    font-weight:500;
    margin:0 0 15px 0}
  .education-block p,.education-block ul{margin:0;color:#74808a;font-size:0.9em}.education-block ul{padding:0 0 0 15px}
</style>
