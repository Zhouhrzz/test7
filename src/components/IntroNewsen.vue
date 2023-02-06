<template>
  <div class="demo-split intro-new">
    <Split v-model="split1">
      <div slot="left" class="demo-split-pane" style="padding-right: 10%">
        <h2 style="padding-bottom: 10px"><Icon type="ios-school" />  INTRODUCTION</h2>
        <hr class="research-line" style="margin: 10px 0 15px 0">
        <p>Institute of Television and Image Information, Tianjin University is dedicated to multimedia content understanding, retrieval, security and communication research.<br/>
          <br/>
          History:<br/>
          In early February 1970, Tianjin University Radio Department as the main part of the second group to undertake the development of color television system test broadcast vehicle task.<br/>
          In 1979, with the approval of the Ministry of Education, Tianjin University established the Television Research Institute on the basis of the core members of the color TV research group.<br/>
          In 1992, it was upgraded to Institute of Television and Image Information with the approval of the Ministry of Education.
          <br/>
          <br/>
          Our research interests widely cover the related problems in computer vision, machine learning, signal processing and information retrieval and particularly focus in the following areas：<br/>
          1. Computer Vision And Machine Learning<br/>
          2. Biomedical Image Analysis<br/>
          3. Multimedia Understanding And Retrieval<br/>
          4. Media Security And Forensics<br/></p>
      </div>
      <div slot="right" class="demo-split-pane" style="padding-left: 10%">
        <h2 style="padding-bottom: 10px"><Icon type="ios-list-box" />  NEWS</h2>
        <hr class="research-line" style="margin: 10px 0 15px 0">
        <p><Icon type="md-arrow-forward" />Heyu Zhou  attended the 27th ACM International Conference on Multimedia in Nice, France on 20th October , 2019.</p><br/>
        <p><Icon type="md-arrow-forward" />Two papers are accepted by ACM Multimedia 2019 (Oral).</p><br/>
        <p><Icon type="md-arrow-forward" />One paper is accepted by NeurIPS 2019.</p><br/>
        <p><Icon type="md-arrow-forward" />One paper is accepted by IEEE Transactions on Circuits and Systems for Video Technology (TCSVT) 2019.</p><br/>
        <p><Icon type="md-arrow-forward" />One paper is accepted by IEEE Transactions on Multimedia (TMM).</p><br/>
        <p><Icon type="md-arrow-forward" />One paper is accepted by IEEE Journal of Biomedical and Health Informatics (JBHI) 2019.</p>
      </div>
    </Split>
  </div>
</template>

<script>
export default {
  name: 'IntroNewsen',
  data () {
    return {
      split1: 0.5
    }
  }
}
</script>

<style scoped>
  .intro-new{
    margin: 70px 150px;
    padding:2%;
    font-size: 14px;
    line-height: 24px;
  }
  .demo-split{
    height:700px;
    border: 1px solid #dcdee2;
    min-height: 700px;
  }
  .demo-split-pane{
    padding: 3%;
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
  p{
    font-size:14px;
  }
</style>
