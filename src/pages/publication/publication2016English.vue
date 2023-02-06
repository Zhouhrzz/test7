<template>
  <div>
    <Layout>
      <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
        <home-headeren :active-name="activeIndex"></home-headeren>
      </Header>
      <Content>
        <publication2016-contenten></publication2016-contenten>
      </Content>
      <Footer>
        <home-footer></home-footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import HomeHeaderen from '../../components/HomeHeaderen'
import HomeFooter from '../../components/HomeFooter'
import Publication2016Contenten from '../../components/publication/publication2016Contenten'
export default {
  name: 'publication2016English',
  components: {Publication2016Contenten, HomeFooter, HomeHeaderen},
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/publication/publication2016English'
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

</style>
