<template>
  <div class="content-box">
    <div class="content">
      <Menu mode="horizontal" :theme="theme1" active-name="1" style="min-width: 600px; background-color: rgb(245, 247, 249);" >
        <MenuItem name="1" to='/contest/contest1English' style="width: 50%; overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">
          <Icon type="ios-paper" />
          SHREC 2015-2020
        </MenuItem>
        <MenuItem name="2" to='/contest/contest2English' style="width: 50%; overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">
          <Icon type="ios-ribbon" />
          CVPR 2019 Contest on Mitosis Detection in Phase Contrast Microscopy Image Sequences
        </MenuItem>
      </Menu>
      <div class="contest-content">
        <Card style="min-width: 700px; background-color: rgb(245, 247, 249);">
          <a href="https://iti-tju.org/MI3DOR20"><h2 style="margin: 10px 0;color: rgb(0,82,140); text-align:left;">SHREC 2020 - Extended Monocular Image Based 3D Model Retrieval</h2></a><br>
          <p>According to our SHREC 2019 - Monocular Image Based 3D Object Retrieval track, we have extended the number of the categories from the initial 21 classes to 40 classes, resulting in a new dataset which has 40,000 images and 12,732 models. We seek for more evaluations on the performance of existing and new 3D retrieval methods using the SHREC'20 benchmark, which is more comprehensive. Especially, we would like to bring unsupervised learning to 3D retrieval based on 2D images for its significance in reality.
            <br/><br><span  style="color: rgb(0,82,140); ">This contest is undergoing</span>
          </p>
        </Card><br><br>
        <Card style="min-width: 700px; background-color: rgb(245, 247, 249);">
          <a href="https://iti-tju.org/MI3DOR19"><h2 style="margin: 10px 0;color: rgb(0,82,140); text-align:left">SHREC 2019 - Monocular Image-based 3D Model Retrieval</h2></a><br>
          <p>Monocular image based 3D object retrieval is a novel and challenging research topic in the field of 3D object retrieval. Given a RGB image captured in real world, it aims to search for relevant 3D objects from a dataset. To advance this promising research, we organize this SHREC track and build the first monocular image based 3D object retrieval benchmark by collecting 2D images from ImageNet and 3D objects from popular 3D datasets such as NTU, PSB, ModelNet40 and ShapeNet. The benchmark contains classified 21,000 2D images and 7,690 3D objects of 21 categories. This track attracted 9 groups from 4 countries and the submission of 20 runs. The evaluation results show that the supervised cross domain learning get the superior retrieval performance (Best NN is 97.4 %) by bridging the domain gap with label information. However, there is still a big challenge for unsupervised cross domain learning (Best NN is 61.2%), which is more practical for the real application.
            <br/><br><a href="../../../static/SHREC19.pdf" download="SHREC19.pdf" style="color: rgb(0,82,140); text-decoration: underline">[Paper Download]</a>
          </p>
        </Card><br><br>
        <Card style="min-width: 700px; background-color: rgb(245, 247, 249);">
          <a href="https://iti-tju.org/SHREC2016"><h2 style="margin: 10px 0;color: rgb(0,82,140); text-align:left">SHREC’16 Track: 3D Object Retrieval with Multimodal Views</h2></a><br>
          <p>In the SHREC’16 track of 3D Object Retrieval with Multimodal Views, we aim to concentrate focused research efforts on how to represent the 3D object by using multimodal views. The objective of this track is to retrieve 3D printing objects and 3D real objects by using multimodal views, which are color images and depth images for each 3D object. Different to our SHREC’15 track, our collection is composed of 605 objects, in which 200 objects including 100 3D printing objects and 100 3D real objects are selected as the queries while the others are selected as the tests. Seven groups were participated in this track and 9 runs were submitted. The evaluation results show a promising scenario about multimodal view-based 3D retrieval methods.
            <br/><br><a href="../../../static/SHREC16.pdf" download="SHREC16.pdf" style="color: rgb(0,82,140); text-decoration: underline">[Paper Download]</a>
          </p>
        </Card><br><br>
        <Card style="min-width: 700px; background-color: rgb(245, 247, 249);">
          <a href="https://iti-tju.org/SHREC2015"><h2 style="margin: 10px 0;color: rgb(0,82,140); text-align:left">SHREC’15 Track: 3D Object Retrieval with Multimodal Views</h2></a><br>
          <p>In the SHREC’15 track of 3D Object Retrieval with Multimodal Views, we aim to concentrate focused research efforts on how to represent the 3D object by using multimodal views. The objective of this track is to retrieve 3D objects by using multimodal views, which are color images and depth images for each 3D object. Our collection is composed of 505 objects, in which 311 objects are selected as the queries. Six groups were participated in this track and 26 runs were submitted for two tasks. The evaluation results show a promising scenario about multimodal view-based 3D retrieval methods, and reveal interesting insights in dealing with multimodal data.
            <br/><br><a href="../../../static/SHREC15.pdf" download="SHREC15.pdf" style="color: rgb(0,82,140); text-decoration: underline">[Paper Download]</a>
          </p>
        </Card><br><br>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContestContent1en'
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
