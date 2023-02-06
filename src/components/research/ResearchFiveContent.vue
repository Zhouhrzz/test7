<template>
  <div class="content-box">
    <div class="breadcrumb">
      <Breadcrumb>
        <BreadcrumbItem to="/home">主页</BreadcrumbItem>
        <BreadcrumbItem to="/research">研究方向</BreadcrumbItem>
        <BreadcrumbItem>多媒体计算</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;<Icon type="ios-fastforward" />&nbsp;&nbsp;多媒体计算</h1>
      <p class="research-people">
        <span>团队成员</span><br/>
        <span>
               <a href="/#/people/suyuting">苏育挺（教授）</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/#/people/jingpeiguang">井佩光（助理教授)</a><br/>
               张美琪（硕士生）&nbsp; 武宇廷（硕士生）&nbsp;李德盛（硕士生）<br/>
          洪道政（硕士生）&nbsp; 陈&nbsp;&nbsp;&nbsp;&nbsp;琦（硕士生）&nbsp;崔天舒（硕士生）<br/>
             </span>
      </p>
    </div>
    <Collapse class="collapse" v-model="value1" style="font-size: 13px">
      <Panel name="1">
        1.简介
        <p class="me-collapse-content" slot="content">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;随着信息时代的发展和时代需求的不断更新，多媒体视觉信息爆炸性增长，对于视觉语义的分析和理解逐渐走进人们的视野。对视觉语义的分析和理解主要应用于现如今多媒体环境下视频分类，视频推荐，情感分析，视觉记忆度分析等等具有实际应用价值的环境之中。其利用张量分解等工具对视觉信息进行相应分析处理。在张量分解领域，本实验室主要关注时间序列分析，视频序列分类等。在视觉语义理解领域，本实验室主要关注于视频的事件检测，视觉信息的情感分析，视觉信息的记忆度等等。
        </p>
      </Panel>
      <Panel name="2">
        2. 张量分解
        <p slot="content" class="me-collapse-content">
            <span>
              2.1高阶时间序列分析<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时间序列分析通过历史观测值去预测系统或现象的演变，其核心过程是通过一系列的观测值确定现象的内在本质。从基于时间序列预测的模型角度分析，当前的预测模型可以大致分为参数化的预测模型与非参数化的预测模型。在参数化的预测模型中，时间序列的潜在结构可以由带有未知参数的预定义函数决定。
            </span><br/>
          <img class="me-img" src="../../assets/pic/research5-1.png" width="800px"><br/><br/>
          <span>
             2.2高阶数据表示学习<br/>
 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过网络媒体平台及各种传感器设备所收集到的信息天然呈现高阶多维特性，为更好的利用数据原始内嵌的关联性结构信息解决多媒体数据的表示问题， 课题组利用张量对数据进行建模，并通过张量分解及张量学习的方式，获取更本质的特征表示，以更好地解决语义鸿沟问题。
            </span><br/>
          <br/>
          <img class="me-img" src="../../assets/pic/research5-2.jpg" width="800px"><br/><br/>
        </p>
      </Panel>
      <Panel name="3">
        3. 视觉语义理解
        <p slot="content" class="me-collapse-content">
            <span>
              3.1 情感分析<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;视觉情感分析的目的是使用带有主观感情色彩的方式表述图像和视频，并使计算机能够检测和表达这些信息。伴随着社会化媒体的兴盛和充沛训练数据的出现，深度学习之类的技术革命给该领域带来新的机遇和挑战。从视觉情感语义提取框架出发，对传统视觉情感分析中视觉特征提取、情感空间建立和特征与情感的映射等关键技术进行综述；并对基于中间表达层、目标对象检测的视觉情感分析以及大数据背景下深度学习技术在该领域的应用进行论述。

            </span><br/>
          <img class="me-img" src="../../assets/pic/research5-3.png" width="800px"><br/><br/>
          <span>
              3.2 时尚分析<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;互联网的快速普及和在线购物平台的蓬勃发展使得网购服饰成为了一种潮流。随着人工智能技术的发展，时尚智能分析不仅可以给消费者提供个性化服务，预测时尚的流行趋势，还可以推荐搭配的单品以及对时尚搭配的兼容度进行预测。在此背景下，聚焦于时尚搭配，兼容度评分预测等一系列问题的研究。

            </span><br/><br/>
          <img class="me-img" src="../../assets/pic/research5-4.png" width="800px"><br/><br/>
          <span>
              3.3 图像记忆度<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前，相机技术和设备的日益普及正在引发数字图像的指数爆炸式增长。虽然人类有在记忆各种类型的图像方面具有天生的能力，然而并不是所有的图像都以等同的方式驻留在我们的脑海中。一些图像虽然只是惊鸿一瞥，但是却让人记忆深刻，而其他的则会从我们的记忆中消失。图像可记忆度是用于测量用户在特定一段时间内对图像可记忆程度。近年来，由于图像可记忆度在教育、多媒体、交互设计和广告设计等领域的潜在的商业和应用价值，吸引了越来越多的研究者进行研究。例如，在图像/视频摘要应用中，图像可记忆度用来从用户图像集中挑选最难忘的图像组成图像/视频摘要集。在商业广告应用中，图像可记忆度还可以用于增强用户对目标品牌的印象度。
            </span><br/><br/>
          <img class="me-img" src="../../assets/pic/research5-5.png" width="800px"><br/><br/>
          <span>
              3.4 短视频语义分析<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;短视频作为用户生成内容的新趋势，在各种社交平台上广泛传播。 短视频的流行是因为它更好地适应了现代社会快节奏的特性，以社交传播为导向。区别于传统的视频，短视频是由个人用户创建的并且包含一些独特特性的短视频。短视频倾向于向观众概述一个相对简单但完整的故事，即在有限的时间段内，试图尽可能地凝练和最大化想要表达的内容，从而创造更有吸引力的故事。课题组在本方向上重点解决短视频流行度预测，短视频事件检测，短视频多标签分类等问题。
            </span><br/><br/>
          <img class="me-img" src="../../assets/pic/research5-6.png" width="800px"><br/><br/>
        </p>
      </Panel>
      <Panel name="4">
        4. 论文
        <p class="me-collapse-content" slot="content">
            <span>
               [1] Jing P, Su Y, Li Z, et al. Low-rank regularized tensor discriminant representation for image set classification[J]. Signal Processing, 2019, 156: 62-70.
[2] Su Y, Bai X, Jian P, et al. Low-rank approximation-based tensor decomposition model for subspace clustering[J]. Electronics Letters, 2019, 55(7): 406-408.
[3] Zhang J, Li Z, Jing P, et al. Tensor-driven low-rank discriminant analysis for image set classification[J]. Multimedia Tools and Applications, 2019, 78(4): 4001-4020.
[4] Jing P, Su Y, Nie L, et al. A framework of joint low-rank and sparse regression for image memorability prediction[J]. IEEE Transactions on Circuits and Systems for Video Technology, 2018, 29(5): 1296-1309.<br/>
[5] Jing P, Su Y, Jin X, et al. High-order temporal correlation model learning for time-series prediction[J]. IEEE transactions on cybernetics, 2018, 49(6): 2385-2397.<br/>
[6] Jing P, Su Y, Xu C, et al. HyperSSR: A hypergraph based semi-supervised ranking method for visual search reranking[J]. Neurocomputing, 2018, 274: 50-57.<br/>
[7] Zhang J, Li X, Jing P, et al. Low-rank regularized heterogeneous tensor decomposition for subspace clustering[J]. IEEE Signal Processing Letters, 2017, 25(3): 333-337.<br/>
[8] Jing P, Su Y, Nie L, et al. Low-rank multi-view embedding learning for micro-video popularity prediction[J]. IEEE Transactions on Knowledge and Data Engineering, 2017, 30(8): 1519-1532.<br/>
[9] Jing P, Su Y, Nie L, et al. Predicting image memorability through adaptive transfer learning from external sources[J]. IEEE Transactions on Multimedia, 2016, 19(5): 1050-1062.<br/>
[10] Zhang L, Jing P, Su Y, et al. SnapVideo: personalized video generation for a sightseeing trip[J]. IEEE transactions on cybernetics, 2016, 47(11): 3866-3878.<br/>
[11] Jing P, Su Y, Nie L, et al. Predicting image memorability through adaptive transfer learning from external sources[J]. IEEE Transactions on Multimedia, 2016, 19(5): 1050-1062.<br/>
<br/>
            </span><br/>
        </p>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
export default {
  name: 'ResearchFiveContent'
}
</script>

<style scoped>
  .content-box{
    margin: 30px 110px;
  }
  .breadcrumb{
    margin: 90px 0 10px 0;
  }
  .collapse{
    margin: 10px 20px;
  }
  .me-collapse-content{
    padding: 20px 50px;
    line-height: 30px;
    font-size: 14px;
  }
  .me-img{
    margin-left:40px;
  }
  h2{
    margin-bottom: 20px;
  }
  .research-people{
    font-size: 15px;
    background: rgba(235, 232, 232, 0.548);
    border-radius: 10px;
    width: 450px;
    margin: 20px 20px 30px 30px;
    padding: 20px 30px;
    border-left-width: 5px;
    line-height: 26px;
  }
  .title-img{
    margin: 30px;
  }
  a{
    color:rgb(0,82,140);
  }
</style>
