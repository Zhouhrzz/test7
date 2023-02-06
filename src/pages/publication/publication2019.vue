<template>
  <div>
    <Layout>
      <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
        <home-header :active-name="activeIndex"></home-header>
      </Header>
      <Content>
        <publication2019-content></publication2019-content>
      </Content>
      <Footer>
        <home-footer></home-footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import HomeHeader from '../../components/HomeHeader'
import Publication2019Content from '../../components/publication/Publication2019Content'
import HomeFooter from '../../components/HomeFooter'
export default {
  name: 'publication2019',
  components: {HomeFooter, Publication2019Content, HomeHeader},
  data () {
    return {
      activeIndex: '/publication'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/publication/publication2019'
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
