<template>
  <div class="content-box">
    <div class="breadcrumb">
      <Breadcrumb>
        <BreadcrumbItem to="/home">主页</BreadcrumbItem>
        <BreadcrumbItem to="/research">研究方向</BreadcrumbItem>
        <BreadcrumbItem>三维模型检索</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;<Icon type="ios-fastforward" />&nbsp;&nbsp;三维模型检索</h1>
      <p class="research-people">
        <span>团队成员</span><br/>
        <span>
               <a href="/#/people/liuanan">刘安安（教授）</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="/#/people/nieweizhi">聂为之（副教授)</a><br/>
               <a href="/#/people/songdan">宋丹（助理教授)</a><br/>
               李文辉（博士生）&nbsp;&nbsp;李余钱（博士生）&nbsp;&nbsp;李佳玉（博士生）<br/>
          周河宇（博士生）&nbsp;&nbsp;向&nbsp;&nbsp;&nbsp;&nbsp;姝（硕士生）&nbsp;&nbsp;赵镇澜（硕士生）<br/>
               郭富斌（硕士生）&nbsp; 胡&nbsp;&nbsp;&nbsp;&nbsp;念（硕士生）
             </span>
      </p>
    </div>
    <Collapse class="collapse" v-model="value1" style="font-size: 13px">
      <Panel name="1">
        1.简介
        <p class="me-collapse-content" slot="content">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近年来，随着多媒体采集设备和三维建模技术的快速发展，三维模型数量呈现爆炸性增长。据统计，当前全球制造业三维模型数量过亿。特别是随着3D打印技术的普及，用户对三维模型需求强烈，迫切需要便捷的三维模型获取途径。因此，在新数据的驱动下，学术界与工业界急需基于人工智能的三维模型检索新理论，实现便捷的三维模型大数据管理。
        </p>
      </Panel>
      <Panel name="2">
        2.三维模型多视角视觉特征的高分辨力表征
        <p slot="content" class="me-collapse-content">
          <span>2.1基于域自适应的跨域三维模型多视角特征学习方法
          </span><br/><br/>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;与拥有亿级数量的二维图像数据库相比，现有的三维模型数据库所包含模型数量相当有限。最新的三维模型数据库，如ModelNet40和ShapeNet55也分别只有12311和51300个模型。尽管当前已提出多种流行的三维模型多视图特征提取方法，但是这些方法仅适用于单一数据域任务，无法适用于目标域和源域来自不同领域的真实应用场景。理论上讲，深度学习方法高度依赖于大规模训练数据，因此现有的深度学习方法对于常见的小规模三维模型数据库来说往往形成过拟合，泛化能力受到严重制约。因此，需要探索鲁棒的三维模型多视角特征跨域学习方法来提高模型泛化能力。<br/>
                该方法的创新点主要包括以下两个方面：<br/>
                1）针对三维模型多视角视图集提出多视角深度卷积网络模型，实现端到端模式下数据驱动的多视角特征提取和融合；<br/>
                2）提出跨域数据分布对齐理论，实现不同分布下同类数据共嵌空间投影，从而实现高分辨力的多视角特征学习。<br/>
          </span><br/><br/>
          <img class="me-img" src="../../assets/pic/research2-1.jpg" width="800px"><br/><br/>
          <span>2.2基于多视角隐性变量模型的三维模型特征提取方法
          </span><br/><br/>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;基于视图的三维模型检索的目的是识别三维模型数据库中与给定查询模型相似的模型，该模型通常由一组多视角视图集表示。要创建多视图集表示，需要为每个三维模型定义特定的相机阵列配置（如图2（a）所示）。然后，每个三维模型可以由对应于预定义相机阵列各空间位置的一组连续视图图像来表示。由此可知，相机阵列的定义对于多视角特征学习非常关键，其难点在于：1）难以启发式地定义多个相机的空间位置以捕获三维模型的显着特征；2）难以启发式的确定使用多少必要的相机数目。领域急需一种不受限于相机阵列设定约束的三维模型特征提取方法。因此，我们提出了一种多视角隐变量模型（MVLVM）来解决该问题。<br/>
            该方法的创新点主要包括以下两个方面：<br/>
            1）通过模型类别、代表性视图选择和多视角视图潜在关联的联合学习实现多视角特征学习。<br/>
            2）突破了传统方法对视图采集角度与数目的约束，显著提升视觉特征的高分辨力。<br/>
          </span>
          <img class="me-img" src="../../assets/pic/research2-2.jpg" width="800px"><br/><br/>
        </p>
      </Panel>
      <Panel name="3">
        3.三维模型间相似性度量
        <p slot="content" class="me-collapse-content">
            <span>
              3.1基于多模态团图匹配的三维模型相似性度量方法
            </span><br/><br/>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;给定由一组多视角2D图像表示的三维模型，设计特定图结构以表示三维模型的视觉特性和空间相关性，然后利用图匹配来计算成对模型之间的相似性。当前基于图匹配的度量方法有经典图和超图，但存在两个严重的问题：1）经典图和超图的构造严重依赖于特征视图提取。但是，从多个相似视图中选择特征视图非常具有挑战性；2）对于超图构造，定义高阶属性是非常复杂的，解决与映射约束的超图匹配极具挑战性。为了解决这些问题，我们提出构建多模态团图（Multi-modal Clique Graph, MCG）。<br/>
            该方法的创新点主要包括以下两个方面：<br/>
            1）将超图中复杂高阶节点的关联信息用简单的团图结构替换，有效降低图结构的复杂性；<br/>
            2）将经典超图匹配中超边的匹配问题转换成了两个团图结构的匹配，有效降低超图匹配的算法复杂度。<br/>
          </span><br/><br/>
          <img class="me-img" src="../../assets/pic/research2-3.jpg" width="800px" ><br/><br/>
          <span>
              3.2基于超集团图的相似性度量方法
            </span><br/><br/>
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了探索团图的高阶计算理论，我们提出了超集团图（Hyper-Clique Graph, HCG）的构建，如图4所示，将各团结构作为一个超节点，并使用超边来进行连接。由于图结构的变化导致了超集团图匹配的目标函数发生了根本性变化，因此我们针对潜在的变量重新设置目标函数并进行优化，克服一对一约束下的高阶匹配的困难，从而解决超集团图之间的相似度计算问题。<br/>
            该方法的创新点主要包括以下两个方面：<br/>
            1）提出创新的超集团图构建方法，针对多视角图集构建超节点和超边，显著增强图结构对多视角潜在关联性的表征能力；<br/>
            2）针对超节点间关联性表征提出了高阶张量计算理论，并提出基于加权随机游走策略的HCG匹配方法。<br/>
          </span><br/><br/>
          <img class="me-img" src="../../assets/pic/research2-4.jpg" width="800px" ><br/><br/>
        </p>
      </Panel>
      <Panel name="4">
        4.论文
        <p class="me-collapse-content" slot="content">
        </p>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
export default {
  name: 'ResearchTwoContent'
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
