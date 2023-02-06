<template>
    <div class="content-box">
      <div class="breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem to="/home">主页</BreadcrumbItem>
          <BreadcrumbItem to="/research">研究方向</BreadcrumbItem>
          <BreadcrumbItem>跨媒体内容理解</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div>
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;<Icon type="ios-fastforward" />&nbsp;&nbsp;跨媒体内容理解</h1>
            <p class="research-people">
              <span>团队成员</span><br/>
              <span>
               <a href="/#/people/liuanan">刘安安（教授）</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/#/people/xuning">徐宁（预聘教师)</a><br/>
               田宏硕（博士生）&nbsp;王彦辉（博士生）<br/>
               逯子慕（硕士生）&nbsp; 李杰思（硕士生）&nbsp;翟英晨（硕士生）
             </span>
            </p>
      </div>
      <Collapse class="collapse" v-model="value1" style="font-size: 13px">
        <Panel name="1">
          1.简介
          <p class="me-collapse-content" slot="content">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近年来，随着网络技术飞速发展，特别是公共安全监控系统和网络视频分享平台的普及，视觉数据呈现出爆炸性增长。在大数据时代，如何对视觉信息中包含的复杂语义进行自动解析，实现从独立的语义概念识别到类人的自然语言描述生成，是当前计算机视觉和人工智能领域的研究热点，对于公共安全风险防范、网络文化市场监管等多个领域具有重要的应用价值。M2I实验室-跨媒体内容理解组主要关注于视觉语义概念建模、视觉关系检测与识别、视觉类人描述等研究方向。
          </p>
        </Panel>
        <Panel name="2">
          2.视觉语义概念建模
          <p slot="content" class="me-collapse-content">
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;视觉语义概念广泛涉及目标、属性、场景、人体动作等。相对于静态的目标检测和属性识别等，人体动作同时具有视觉表形和运动动态多样性，因此，我们着重研究了比较具有挑战性的人体动作识别任务。
            </span><br/>
            <br/>
            <img class="me-img" src="../../assets/pic/research1-1.png" width="800px"><br/><br/>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近年来，随着拍摄角度与拍摄模态的变化，单视角或单模态提供的信息相对片面，因此如何将多视角多模态数据中互补的动作信息进行有效的融合，进一步提升动作识别准确率，依然是一个亟待解决的难题。同时，多任务学习通过融合各个任务之间的关联信息，可以共同提高识别的准确率以及模型整体的泛化能力，但是，由于多视角和多模态的数据都具有独特的特征分布，传统的多任务学习方法并不能直接处理多视角和多模态两类条件下的动作识别问题。
             为了解决如上问题，我们面向多视角和多模态的多域信息，基于多任务学习理论进行多语义潜在关联挖掘，提出一种多域多任务动作识别算法（MDMTL），从语义概念关联性出发，引导并探索了多视角和多模态两类因素下的多语义概念联合建模问题。如图1-2所示，该算法通过学习得到一组嵌入式矩阵，将多域特征分别强制映射到公共的稀疏空间，该空间极大地削弱了类内差异，使得每个子集的动作样本都具有相似的嵌入表征。我们设计了整体学习策略，通过预评估每个样本得到具有差异性的权重，从而融合同一子集特征得到对应的多域不变性样本表征。我们使用多任务算法来探索“语义-语义”间关联性的挖掘，构建分类模型，同时使用 范数项和设计了稀疏约束项。最后，将特征提取与分类建模整合到统一的目标函数中，通过对目标方程的学习及参数优化，得到MDMTL算法模型。
            </span><br/><br/>
            <img class="me-img" src="../../assets/pic/research1-2.png" width="800px"><br/><br/>
          </p>
        </Panel>
        <Panel name="3">
          3.视觉关系检测与识别
          <p slot="content" class="me-collapse-content">
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;视觉关系识别任务不仅需要识别出图像中的目标物体及其位置（detection），还需要识别目标之间的关系（relationship）。一张图像中的关系通常表示为主谓宾三元组形式——&lt;目标1-关系-目标2&gt;，关系包含空间关系（clock-above-person），动词关系（person1-talk-person2）和比较级关系（person1-taller-person2）;等。如图所示，输入一张图片，输出为目标及其位置边框，以及目标之间的关系&lt;person-on-motorcycle&gt;。
            </span><br/><br/>
            <img class="me-img" src="../../assets/pic/research1-3.png" ><br/><br/>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;视觉关系通过将目标置于一个上下文语义环境中，提供了对图像场景的综合理解，在联系计算机视觉和自然语言方面展示出了巨大的作用。因此，视觉关系识别是图像理解的基础，能够推动很多研究课题的发展。例如，视觉描述任务中往往包含目标之间关系的描述；视觉问答任务的一些问题也包含目标之间的关系；图像检索任务也需要根据自然语言中描述的关系或者图像中蕴含的视觉关系来进行检索。
              &nbsp;&nbsp;&nbsp;&nbsp;为了充分地挖掘图像/视频中的语义信息，大部分研究者将知识图谱（scene graph）作为视觉关系识别的主要表征形式。如图2-2所示，知识图谱由节点和边组成，其中，每个节点对应图像的目标物体，每个边对应图像中两两目标间的关系。
            </span><br/><br/>
            <img class="me-img" src="../../assets/pic/research1-4.png" ><br/><br/>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;现有的视觉关系识别算法基于“目标对”所涉及的图像区域进行建模，从而实现目标和关系的识别。但是，视觉关系识别需要模型对整个图像的上下文信息进行全局的理解，而不应仅仅关注在局部“目标对”区域的建模。如图2-3所示，图像场景的上下文信息有助于局部目标和关系的识别。例如，识别&lt;人>和&It摩托车>的关系&It骑>，“目标对”&lt;人-摩托车&gt;的周边上下文视觉信息&lt;头盔&gt;和&lt;车辆&gt;，可以为识别关系&lt;骑&gt;提供充分的依据。相似地，通过融合上下文信息&lt;头盔&gt;、&lt;裤子&gt;和&lt;背包&gt;，也能有效地提高目标&lt;人&gt;的识别准确率。因此，对图像场景的上下文信息进行深入的挖掘有利于视觉关系识别模型性能的提升。
            </span><br/><br/>
            <img class="me-img" src="../../assets/pic/research1-5.png" width="800px"><br/><br/>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，我们提出一个多层级上下文信息建模算法（Multi-Scale Context Modeling, MSCM），该方法通过联合挖掘与整合目标层级和区域层级的上下文信息，实现基于多层级上下文建模的知识图谱生成。如图2-4所示，首先，本课题针对目标级和区域级的上下文信息，分别设计一种基于RNN的编码模块，通过“目标到目标”，“区域到区域”、“目标到区域”以及“区域到目标”之间的信息交互式建模，灵活地探索与提取每个层级的上下文隐态信息。然后，通过融合目标/区域级的上下文隐态信息与目标/区域的视觉特征，实现知识图谱的生成。
            </span><br/><br/>
            <img class="me-img" src="../../assets/pic/research1-6.png" width="800px" ><br/><br/>
          </p>
        </Panel>
        <Panel name="4">
          4.视觉类人描述
          <p class="me-collapse-content" slot="content">
            <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近年来，计算机视觉这一领域取得了长足的进展。为了让机器能够像人类一样“看”懂周围的世界，研究人员设计了大量的人工特征去描述一个物体或者事件，并且提出了各种模型去识别这些人为设计的特征。几年前，当我们谈论视觉理解时，我们能做的只是给一幅图像或一段视频自动打上一些相互独立的语义标签。而今天，我们已经可以借用深度学习的发展将这一基础任务再往前推进一步，即将单个的标签变成一段和当前视觉内容相关，并且通顺连贯的自然语言描述，即视觉类人描述任务。视觉类人描述是一个集计算机视觉和自然语言处理的交叉领域。不仅需要对视觉内容进行深入的建模，而且需要对自然语言（词汇、短语、句子）进行处理，使之与相应的视觉内容匹配。
                &nbsp;&nbsp;&nbsp;&nbsp;但是，现有的基于多模态数据分析的视频类人描述模型只是在同一个模块中简单地探究了视觉特征和语义概念的隐态信息（hidden states）。但是，多模态数据之间的分布往往是异步的，如图3-1所示，视觉模态特征的改变常常比语义模态特征的改变更加敏感。因此，现有方法中，以帧为单位的模态特征拼接术（比如，串联和线性融合）将不足以充分挖掘每个模态中蕴含的视觉/语义信息。
            </span><br/><br/>
            <img class="me-img" src="../../assets/pic/research1-7.png" width="800px" ><br/><br/>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;因此，为了探索和融合异步多模态数据的隐态信息，我们提出基于多模异步状态融合的视频类人解析算法（Dual-Stream RNN，DS-RNN）。如图3-2所示，该方法可同时挖掘和整合视觉流（视觉特征）和语义流（图像语义）的隐态信息。首先，我们设计了一种基于LSTM的模态编码模块，即，注意力细粒度编码模块（Attentive Multi-Grained Encoder，AMGE），该模块借助视频（全局）语义概念来强化每个模态局部特征的学习，从而灵活地探索每个模态流的隐态信息。然后，我们设计了双流解码单元，通过融合上述两模块输出的异步且互补的序列隐态信息，将其解析为视频描述语句。直观来讲，当生成描述单词时，DS-RNN可通过互补的模态信息，灵活地侧重在视觉/语义模态的局部特征上。
            </span><br/><br/>
            <img class="me-img" src="../../assets/pic/research1-8.jpg"  ><br/><br/>
          </p>
        </Panel>
      </Collapse>
    </div>
</template>

<script>
export default {
  name: 'ResearchOneContent'
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
