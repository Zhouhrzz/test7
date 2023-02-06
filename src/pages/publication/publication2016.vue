<template>
  <div>
    <Layout>
      <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
        <home-header :active-name="activeIndex"></home-header>
      </Header>
      <Content>
        <publication2016-content></publication2016-content>
      </Content>
      <Footer>
        <home-footer></home-footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import HomeHeader from '../../components/HomeHeader'
import Publication2016Content from '../../components/publication/Publication2016Content'
import HomeFooter from '../../components/HomeFooter'
export default {
  name: 'publication2016',
  components: {HomeFooter, Publication2016Content, HomeHeader},
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/publication/publication2016'
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
