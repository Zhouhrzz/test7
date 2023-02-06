<template>
  <div>
    <div class="breadcrumb">
      <Breadcrumb>
        <BreadcrumbItem to="/">HOME</BreadcrumbItem>
        <BreadcrumbItem to="/peopleEnglish">PEOPLE</BreadcrumbItem>
        <BreadcrumbItem>Ning Xu</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="content-box">
      <div>
        <Row>
          <Col span="5">
            <div class="people-img">
              <img src="../../assets/pic/xuning.jpg" width="143px" height="189px">
            </div>
          </Col>
          <Col span="19">
            <div class="people-intro">
              <span style="font-size: 23px; color:black;font-weight: bold">Ning Xu</span><span style="padding-left: 20px">Assistant Professor</span><br/><br/>
              <span>School of Electrical and Information Engineering</span><br/>
              <span>Tianjin University, China</span><br/>
              <span>Email：ningxu@tju.edu.cn</span><br/>
              <span>Personal Page：ningxu1990.github.io</span><br/>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <h2>Introduction</h2>
        <hr class="research-line" style="margin: 15px 0">
        <span class="content">I am currently an assistant professor at School of Electrical and Information Engineering, Tianjin University (TJU), China. I received my Ph.D. degree from Tianjin University in 2019, supervised by Prof. An-An Liu, and B.E. degree from Hainan University (Advanced Class) in 2013, respectively. I was a visiting scholar from 2016 to 2017 at the SeSaMe Research Centre of NUS, working with Dr. Mohan Kankanhalli(IEEE Fellow). My recent research interests include machine learning, computer vision, action recognition, relation detection, and image/video captioning.</span>
      </div>
      <div>
        <h2>Publication</h2>
        <hr class="research-line" style="margin: 15px 0">
        <div class="publication">
          <a href="https://ieeexplore.ieee.org/document/8476540">
            <p class="p title"><strong>[1]&nbsp;&nbsp; Multi-Domain and Multi-Task Learning for Human Action Recognition. </strong></p>
            <p class="p author"><i>An-An Liu, Ning Xu, Weizhi Nie, Yuting Su, Yongdong Zhang.</i></p>
            <p class="p time"> IEEE Transactions on Image Processing. 2019.</p>
          </a>
        </div>
        <div class="publication">
          <a href="https://ieeexplore.ieee.org/document/8447210/">
            <p class="p title"><strong>[2]&nbsp;&nbsp; Dual-Stream Recurrent Neural Network for Video Captioning. </strong></p>
            <p class="p author"><i>Ning Xu, An-An Liu, Yongkang Wong, Yongdong Zhang, Weizhi Nie, Yuting Su, Mohan S. Kankanhalli.</i></p>
            <p class="p time"> IEEE Transactions on Circuits and Systems for Video Technology. 2019.</p>
          </a>
        </div>
        <div class="publication">
          <a href="https://ieeexplore.ieee.org/document/8141866">
            <p class="p title"><strong>[3]&nbsp;&nbsp; Attention-in-Attention Networks for Surveillance Video Understanding in Internet of Things. </strong></p>
            <p class="p author"><i>An-An Liu, Ning Xu, Weizhi Nie, Yuting Su, Yongkang Wong, Mohan S. Kankanhalli.</i></p>
            <p class="p time"> IEEE Internet of Things Journal.2018.</p>
          </a>
        </div>
        <div class="publication">
          <a href="https://ieeexplore.ieee.org/document/7515012">
            <p class="p title"><strong>[4]&nbsp;&nbsp;  Benchmarking a Multimodal and Multiview and Interactive Dataset for Human Action Recognition.</strong></p>
            <p class="p author"><i>An-An Liu, Ning Xu, Weizhi Nie, Yuting Su, Yongkang Wong, Mohan S. Kankanhalli.</i></p>
            <p class="p time"> IEEE Transactions on Cybernetics.2017.</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XuningContenten'
}
</script>

<style scoped>
  .content-box{
    margin: 30px 275px;
  }
  .breadcrumb{
    margin: 90px 110px 10px 110px;
  }
  .people-img{
    margin: 30px 20px;
  }
  .people-intro{
    margin: 55px 50px 50px 50px;
    font-size: 14px;
    float: left;
    text-align: left;
    line-height: 24px;
  }
  h2{
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 10px;
  }
  .research-line{
    border-bottom-color: rgb(128, 128, 128);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-color: rgb(128, 128, 128);
    border-width: 0px;
    border-top-color: rgb(224, 227, 230);
    border-top-style: solid;
    border-top-width: 0.8px;
    box-sizing: content-box;
  }
  .content{
    font-size: 14px;
    line-height: 24px
  }
  a{
    font-size: 14px;
    color:rgb(0,82,140)
  }
  .publication{
    margin-bottom: 15px;
    text-align: justify;text-indent: -21pt; margin-left: 21pt;
  }
</style>
