<template>
  <div>
    <Layout>
      <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
        <home-header :active-name="activeIndex"></home-header>
      </Header>
      <Content>
        <publication2018-content></publication2018-content>
      </Content>
      <Footer>
        <home-footer></home-footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import Publication2018Content from '../../components/publication/Publication2018Content'
import HomeFooter from '../../components/HomeFooter'
import HomeHeader from '../../components/HomeHeader'
export default {
  name: 'publication2018',
  components: {HomeHeader, HomeFooter, Publication2018Content},
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/publication/publication2018'
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
