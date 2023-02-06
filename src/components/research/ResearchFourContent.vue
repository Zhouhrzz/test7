<template>
  <div class="content-box">
    <div class="breadcrumb">
      <Breadcrumb>
        <BreadcrumbItem to="/home">主页</BreadcrumbItem>
        <BreadcrumbItem to="/research">研究方向</BreadcrumbItem>
        <BreadcrumbItem>面向普通用户的三维人体重建</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;<Icon type="ios-fastforward" />&nbsp;&nbsp;面向普通用户的三维人体重建</h1>
      <p class="research-people">
        <span>团队成员</span><br/>
        <span>
               <a href="/#/people/songdan">宋丹（助理教授）</a><br/>
               李天宝（硕士生）&nbsp; 张婷（硕士生）&nbsp;赵小倩（硕士生）
             </span>
      </p>
    </div>
    <Collapse class="collapse" v-model="value1" style="font-size: 13px">
      <Panel name="1">
        1.简介
        <p class="me-collapse-content" slot="content">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;由于游戏、动画等应用的需求，三维人体重建一直是计算机图形学的重要研究课题。近几十年来，研究员们围绕这一课题提出了多种方法，取得了丰硕的成果。由于三维人体模型在游戏、动画中具有较高的应用价值，所以可以容忍这些方法在采集设备、方式和重建效率上付出较高的代价。然而对于虚拟试衣的个人用户来说，这些方法在方便性及快捷性方面存在很多不足：（1）采集设备诸如扫描仪、Kinect，并不是普通用户的常用设备；（2）采集方式要求用户穿紧身衣或穿着很少，给用户带来了不便与尴尬；及（3）迭代优化人体模型使之贴合输入数据的方法非常耗时。
        </p>
      </Panel>
      <Panel name="2">
        2. 针对着装图像的衣服尺码估计
        <p slot="content" class="me-collapse-content">
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;合适的衣服尺寸对提高网络购衣的交易成功率至关重要。然而，用户通过网络买到合身的衣服并不容易。一方面，用户需要在私密空间用卷尺较专业地测量自己的身材尺寸（随着身材改变，用户需要测量多次）。另一方面，由于不同国家不同品牌的衣服尺码标准不一致，用户往往要手动查看商品网页上的尺码表，询问卖家或查看多条评论信息。因此，我们需要方便可靠的衣服尺码推荐方法。通过参考服装设计类文献及主流电商平台，我们采用了与衣服尺码密切相关的20个人体尺寸，包括三维人体的长度信息及围度信息。根据这20个常用的人体尺寸，通过程序自动查询商家尺码表便可得到衣服的尺码。
            </span><br/>
          <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;进行网络购衣的人群大部分都是普通用户，为了给普通用户提供方便，我们以着装人体图像（即照片中的人穿着日常衣服）作为输入，既不需要诸如Kinect这样普通用户不常用的设备，又避免了用户穿着较少的不便与尴尬。然而，这也给估计身材尺寸引入了一些困难。如何去除衣服对身材的影响，如何有效且高效地从图像获取身材信息，都是我们要解决的难点。如图1所示，我们以人体标志点为桥梁连接输入图像与目标身材尺寸。基于构建的着装人体数据库，我们采用基于随机蕨的提升树回归方法根据着装人体剪影回归二维标志点运动。根据回归得到的二维标志点，我们计算与身材尺寸对应的标志点对之间的距离，并利用训练集学习二维标志点距离与对应身材尺寸之间的关系。
            </span><br/>
          <br/>
          <img class="me-img" src="../../assets/pic/research4-1.jpg" width="800px"><br/><br/>
        </p>
      </Panel>
      <Panel name="3">
        3. 针对着装图像的三维人体重建
        <p slot="content" class="me-collapse-content">
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;虚拟试衣系统为用户省去了真实世界试衣的繁琐，提供了宝贵的视觉信息及衣服尺码建议，提升用户在购衣时的真实感和沉浸度。目前虚拟试衣系统面临三大难点：（1）高效的基于物理的布料仿真方法；（2）真实的布料物理属性；及（3）准确的用户三维人体模型。我们针对第三个难点，提出了一个快速高效的针对着装图像的三维人体重建方法。
            </span><br/>
          <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如图2所示，我们的方法经历了三维标志点回归及三维人体重建两个阶段。我们使用含有三维未着装及着装人体对的数据库制造训练样本（着装人体剪影，初始三维标志点及目标三维标志点）。目标三维标志点是预先定义好的，与人体身材密切相关的一组标志点，初始三维标志点为随机选取的其他人体的三维标志点。我们提出了一个有效的刻画三维人体标志点与着装人体剪影关系的特征描述，并训练一系列级联回归算子驱动三维标志点运动。在测试阶段，根据训练结果首先从着装人体剪影中回归三维标志点，然后这些三维标志点被用来作为约束求解SCAPE人体参数，进而重构出三维人体模型。
            </span><br/><br/>
          <img class="me-img" src="../../assets/pic/research4-2.jpg" ><br/><br/>
        </p>
      </Panel>
      <Panel name="4">
        4. 面向普通用户的便捷三维人体重建
        <p class="me-collapse-content" slot="content">
            <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们面向普通用户开发了一个对用户友好的三维人体重建工具，使得普通用户可以更快更方便地获得他们的三维人体模型，以满足虚拟试衣的需求。我们使用Grabcut方法从照片中提取着装人体前景，我们允许用户放大缩小图像，且可以根据初步的分割结果增添新的暗示前景或背景的线条输入。接着分割出的人体轮廓被调整至虚拟相机配置下的应有的大小及位置，因此避免了相机标定操作，给用户带来更多的便利。我们训练了一系列的回归算子从着装人体剪影直接回归人体参数。既不需要耗时的匹配对应点过程，也不需要迭代优化求解人体参数。人体参数回归过程在一个普通的安卓手机上耗时仅1.26秒。虽然为了获得更高的重建效率，牺牲了一定的精度，但我们的结果依然满足普通用户试衣对尺寸的容忍程度。
            </span><br/>
          <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我们面向普通用户开发了一个对用户友好的三维人体重建工具，使得普通用户可以更快更方便地获得他们的三维人体模型，以满足虚拟试衣的需求。我们使用Grabcut方法从照片中提取着装人体前景，我们允许用户放大缩小图像，且可以根据初步的分割结果增添新的暗示前景或背景的线条输入。接着分割出的人体轮廓被调整至虚拟相机配置下的应有的大小及位置，因此避免了相机标定操作，给用户带来更多的便利。我们训练了一系列的回归算子从着装人体剪影直接回归人体参数。既不需要耗时的匹配对应点过程，也不需要迭代优化求解人体参数。人体参数回归过程在一个普通的安卓手机上耗时仅1.26秒。虽然为了获得更高的重建效率，牺牲了一定的精度，但我们的结果依然满足普通用户试衣对尺寸的容忍程度。
            </span><br/><br/>
          <img class="me-img" src="../../assets/pic/research1-7.png" width="800px" ><br/><br/>
          <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;图3展示了普通用户如何使用本章的方法获得他们的定制化三维人体模型及未来针对虚拟试衣的应用。用户仅需要一个移动设备，首先用户被拍摄正面及侧面两张照片，其次他们输入身高及选择衣服类型，然后交互式地抠图，最后仅需1.26秒便可获得定制化的三维人体。随着布料仿真技术的发展及布料物理属性获取方法的成熟，我们重建的三维人体可用于虚拟试衣。在不久的将来，当我们网上购衣时，我们不但可以获得衣服尺码推荐，还可以看到自己的虚拟化身在虚拟试衣间的穿衣效果。如图3右方橙色区域所示，一方面我们可以看到自己的虚拟化身穿着不同衣服，摆出多样化姿势的视觉效果，有助于我们挑选心仪的衣服款式。另一方面，我们可以通过着装后的衣服松紧图（图中红色表示衣服紧致，绿色表示衣服宽松）来选择合适的衣服尺码。便捷的三维人体重建技术对虚拟试衣系统的普及具有重要意义。
            </span><br/><br/>
          <img class="me-img" src="../../assets/pic/research4-3.jpg"  ><br/><br/>
        </p>
      </Panel>
      <Panel name="5">
        5. 论文
        <p class="me-collapse-content" slot="content">
            <span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1. Song, D., Tong, R., Chang, J., Yang, X., Tang, M., & Zhang, J. J. 3D Body Shapes Estimation from Dressed-Human Silhouettes. Computer Graphics Forum,2016.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2. Song, D., Tong, R., Du, J., Zhang, Y., & Jin, Y. Data-Driven 3-D Human Body Customization With a Mobile Device. IEEE Access,2018.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.	Song, D., Tong, R., Chang, J., Wang, T., Du, J., Tang, M., & Zhang, J. J. Clothes Size Prediction from Dressed-Human Silhouettes. International Workshop on Next Generation Computer Animation Techniques,2017.<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.	Song, D., Jin, Y., Wang, T., Li, C., Tong, R., & Chang, J. A Semantic Parametric Model for 3D Human Body Reshaping. International Conference on E-Learning and Games,2018.<br/>
            </span><br/>
        </p>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
export default {
  name: 'ResearchFourContent'
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
