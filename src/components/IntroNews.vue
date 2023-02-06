<template>
  <div class="demo-split intro-new">
    <Split v-model="split1">
      <div slot="left" class="demo-split-pane" style="padding-right: 10%">
        <h2 style="padding-bottom: 10px"><Icon type="ios-school" />  实验室简介</h2>
        <hr class="research-line" style="margin: 10px 0 15px 0">
        <p>天津大学电视与图像信息研究所，致力于多媒体内容理解、检索、安全与通信的研究。<br/>
          历史沿革：<br/>
          1970年2月初，以天津大学无线电系为主体的会战二组承担了研制彩电制式试验转播车任务。<br/>
          1979年，经教育部批准，天津大学在彩电科研组核心人员的基础上成立了电视研究所。<br/>
          1992年，经教育部批准升格为电视与图像信息研究所（简称电视所）是中国高校中唯一经过国家教育部批准设立的从事电视技术研究的科研单位。<br/>
          <br/>
          我们的研究内容广泛，包括计算机视觉、机器学习、信号处理和信息检索等领域的相关问题，主要集中在以下几个方面:<br/>
          1. 计算机视觉和机器学习<br/>
          2. 生物医学图像分析<br/>
          3.多媒体理解与检索<br/>
          4. 媒体安全和取证<br/></p>
      </div>
      <div slot="right" class="demo-split-pane" style="padding-left: 10%">
        <h2 style="padding-bottom: 10px"><Icon type="ios-list-box" />  新闻</h2>
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
  name: 'IntroNews',
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
    height:550px;
    border: 1px solid #dcdee2;
    min-height: 100%;
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
</style>
