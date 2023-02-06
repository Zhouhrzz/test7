<template>
  <div>
    <Layout>
      <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
        <home-header :active-name="activeIndex"></home-header>
      </Header>
      <Content>
        <publication2017-content></publication2017-content>
      </Content>
      <Footer>
        <home-footer></home-footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import HomeFooter from '../../components/HomeFooter'
import HomeHeader from '../../components/HomeHeader'
import Publication2017Content from '../../components/publication/Publication2017Content'
export default {
  name: 'publication2017',
  components: {Publication2017Content, HomeHeader, HomeFooter},
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/publication/publication2017'
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
