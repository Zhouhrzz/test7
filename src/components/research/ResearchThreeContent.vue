<template>
  <div class="content-box">
    <div class="breadcrumb">
      <Breadcrumb>
        <BreadcrumbItem to="/home">主页</BreadcrumbItem>
        <BreadcrumbItem to="/research">研究方向</BreadcrumbItem>
        <BreadcrumbItem>细胞图像分析</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;<Icon type="ios-fastforward" />&nbsp;&nbsp;细胞图像分析</h1>
      <p class="research-people">
        <span>团队成员</span><br/>
        <span>
               <a href="/">刘安安（教授）</a><br/>
               路&nbsp;&nbsp;&nbsp;&nbsp;遥（博士生）<br/>
               田宏硕（博士生）&nbsp;&nbsp;&nbsp;&nbsp;李佳玉（博士生）<br/>
             </span>
      </p>
    </div>
    <Collapse class="collapse" v-model="value1" style="font-size: 13px">
      <Panel name="1">
        1.简介
        <p class="me-collapse-content" slot="content">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近年来，随着医学信息采集技术的发展，在医疗诊断和生物研究的过程当中往往需要处理大量的医学图像数据。在医疗大数据的时代，利用机器学习方法和人工智能技术对海量的医学图像数据进行充分的分析和挖掘，将会对医学诊断和生物研究的发展带来新的促进。M2I实验室细胞图像分析组主要关注利用计算机视觉和机器学习方法对细胞显微镜图像下细胞有丝分裂事件进行识别、定位与分割。
        </p>
      </Panel>
      <Panel name="2">
        2.细胞有丝分裂事件的识别
        <p slot="content" class="me-collapse-content">
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;问题描述：对包含有丝分裂事件过程的细胞图像序列进行识别。对于目前细胞显微镜图像数据量大、来源多样的特点，传统的计算机视觉检测方法无法充分利用大数据信息帮助学习有丝分裂细胞的视觉特征表达和动态过程建模。<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创新：我们提出利用CNN+LSTM深度学习网络，通过将CNN和LSTM深度学习网络进行结合，对有丝分裂过程当中的细胞图像视觉外观特征和时序动态特征进行联合学习，大大提高了当前细胞有丝分裂事件检测方法的准确率和稳定性。从单个细胞图像序列的识别，本方法可以进一步扩展为对整个显微镜图像序列中的有丝分裂事件进行识别和定位。
            </span><br/>
          <br/>
          <img class="me-img" src="../../assets/pic/research3-1.jpg" width="800px"><br/><br/>
          <img class="me-img" src="../../assets/pic/research3-2.jpg" width="800px"><br/><br/>
        </p>
      </Panel>
      <Panel name="3">
        3.细胞有丝分裂事件的定位
        <p slot="content" class="me-collapse-content">
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;问题描述：对有丝分裂细胞图像序列中细胞分裂的时间节点进行准确的定位。由于医学图像数据具有数据量大、数据来源丰富、隐私性的特点，准确的人工标注信息获取相对困难，多变的图像成像条件和细胞形态也为标注信息在不同数据库之间的迁移共享带来困难。<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创新：针对该问题，我们提出了SSG-DNN深度学习方法，利用弱监督的序列级别标注信息，通过注意力机制充分发掘序列中每帧图像的细胞图像视觉特征关系，从而实现对细胞分裂事件准确的时序定位。在模型训练的过程当中，不需要准确标注细胞图像序列中的每一帧，只需要对序列中是否存在有丝分裂事件进行0/1标注，从而大大减小了人工标注所需的工作量，同时避免了不准确的标注信息所带来的干扰。
。
            </span><br/><br/>
          <img class="me-img" src="../../assets/pic/research3-3.jpg" width="800px"><br/><br/>
          <img class="me-img" src="../../assets/pic/research3-4.jpg" width="800px"><br/><br/>
        </p>
      </Panel>
      <Panel name="4">
        4.细胞有丝分裂过程分割
        <p slot="content" class="me-collapse-content">
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;问题： 通过对显微镜下细胞有丝分裂过程的观察，可以发现细胞有丝分裂过程可以进一步分为四个阶段，每个阶段中的细胞分别具有不同的视觉外观特征。对细胞有丝分裂过程当中的不同阶段进行分割。<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;创新：通过将序列中细胞在有丝分裂过程中不同阶段的状态转换作为半马尔可夫过程(Semi-Markov)进行建模，提出利用SMM (Semi-Markov Model) 图模型的方法对细胞有丝分裂过程当中的四个不同阶段进行分割。
            </span><br/><br/>
          <img class="me-img" src="../../assets/pic/research3-5.jpg" width="800px"><br/><br/>
          <img class="me-img" src="../../assets/pic/research3-6.jpg" width="800px"><br/><br/>
        </p>
      </Panel>
      <Panel name="5">
        5.相关论文
        <p slot="content" class="me-collapse-content">
            <span>
[1]	A. A. Liu, K. Li, and T. Kanade, “A Hierarchical Framework for Mitosis Detection in Time-Lapse Phase Contrast Microscopy Image Sequences of Stem Cell Populations,” IEEE Transactions on Medical Imaging, vol. 31, no. 2, pp. 359–369, 2009.<br/>
[2]	A. A. Liu, K. Li, and T. Kanade, “A semi-markov model for mitosis segmentation in time-lapse phase contrast microscopy image sequences of stem cell populations,” IEEE Transactions on Medical Imaging, vol. 31, no. 2, pp. 359–369, 2012.<br/>
[3] 	A. Liu, T. Hao, Z. Gao, Y. Su, and Z. Yang, “Nonnegative Mixed-Norm Convex Optimization for Mitotic Cell Detection in Phase Contrast Microscopy,” vol. 2013, 2013.<br/>
[4] 	Y. Su, J. Yu, A. Liu, Z. Gao, T. Hao and Z. Yang, "Cell type-independent mitosis event detection via hidden-state conditional neural fields," 2014 IEEE 11th International Symposium on Biomedical Imaging (ISBI), Beijing, 2014, pp. 222-225.<br/>
[5]	A. Liu, Z. Gao, T. Hao, Y. Su, and Z. Yang, “Sparse coding induced transfer learning for HEp-2 cell classification,” Bio-Medical Materials and Engineering, vol. 24, no. 1, pp. 237–243, 2014.<br/>
[6]	A. Liu, Y. Lu, W. Nie, Y. Su, and Z. Yang, “HEp-2 cells Classification via clustered multi-task learning,” Neurocomputing, vol. 195, pp. 195–201, 2016.<br/>
[7]	Wei-Zhi Nie, Wei-Hui Li, An-An Liu, Tong Hao, Yu-Ting Su, “3D Convolutional Networks-Based Mitotic Event Detection in Time-Lapse Phase Contrast Microscopy Image Sequences of Stem Cell Populations,” The IEEE Conference on Computer Vision and Pattern Recognition (CVPR) Workshops, 2016, pp. 55-62 pp. 1–8, 2016.<br/>
[8]	A.-A. Liu, Y. Lu, M. Chen, and Y. Su, “Mitosis Detection in Phase Contrast Microscopy Image Sequences of Stem Cell Populations: A Critical Review,” IEEE Transactions on Big Data, vol. 3, no. 4, pp. 1–1, 2017.<br/>
[9]	A. A. Liu, J. Tang, W. Nie, and Y. Su, “Multi-grained random fields for mitosis identification in time-lapse phase contrast microscopy image sequences,” IEEE Transactions on Medical Imaging, vol. 36, no. 8, pp. 1699–1710, 2017.<br/>
[10] Y. Su, Y. Lu, M. Chen and A. Liu, "Spatiotemporal Joint Mitosis Detection Using CNN-LSTM Network in Time-Lapse Phase Contrast Microscopy Images," in IEEE Access, vol. 5, pp. 18033-18041, 2017. doi: 10.1109/ACCESS.2017.2745544<br/>
[11] Y. Lu, A. Liu, M. Chen, W. Nie and Y. Su, "Sequential Saliency Guided Deep Neural Network for Joint Mitosis Identification and Localization in Time-Lapse Phase Contrast Microscopy Images," in IEEE Journal of Biomedical and Health Informatics.<br/>
            </span><br/><br/>
        </p>
      </Panel>
      <Panel name="6">
        6.数据库介绍
        <p slot="content" class="me-collapse-content">
            <span>
              C2C12-16数据库：<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;针对当前相差显微镜下细胞有丝分裂事件检测的数据库规模较小的问题，我们在记录小鼠C2C12肌肉干细胞培养过程的16个相差显微镜图像序列上对其中的细胞有丝分裂事件进行了人工标注，得到了目前最大的相差显微镜细胞分裂检测数据库。<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;相对于目前常用的C2C12数据库（在1个C2C12细胞显微镜图像序列中包含679个标注的有丝分裂事件）和C3H10数据库（在5个C3H10细胞显微镜图像序列中共包含409个标注的有丝分裂事件），新提出的C2C12-16数据库包含更多的相差显微镜图像(16×1013张1392×1040分辨率的16位深度显微镜图像)和更多标注的有丝分裂事件（共7159个标注的有丝分裂事件），能够有效地促进细胞有丝分裂事件检测方法的研究在大数据时代下的发展。
通过在细胞培养过程当中加入不同的生长因子，数据库中的细胞培养环境可分为4组。数据库中的16个细胞图像序列因此可以进一步按照细胞的培养环境分为4组，在每组的4个序列当中，细胞图像呈现不同的外观特征，进一步提高了细胞有丝分裂检测任务的挑战性。
            </span><br/><br/>
          <img class="me-img" src="../../assets/pic/research3-7.jpg" width="800px"><br/><br/>
        </p>
      </Panel>
      <Panel name="6">
        6.比赛网址
        <p slot="content" class="me-collapse-content">
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;在提出的C2C12-16数据库的基础上，我们在2018年CVPR CVMI (Computer Vision for Microscopy Image Analysis) workshop 上举办了相差显微镜下细胞有丝分裂事件检测比赛。比赛网址为：
            </span><br/><br/>
          <a href="http://media.m2i.ac.cn/mitosisdetection/">http://media.m2i.ac.cn/mitosisdetection/</a>
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
    color: rgb(81, 90, 110);
  }
  a:link,a:visited{
    color:rgb(0,82,140);
  }
  a:hover{
    color:rgb(0,82,140);
  }
</style>
