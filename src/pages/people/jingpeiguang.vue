<template>
  <div>
    <Layout>
      <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
        <home-header :active-name="activeIndex"></home-header>
      </Header>
      <Content>
        <jingpeiguang-content></jingpeiguang-content>
      </Content>
      <Footer>
        <home-footer></home-footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import HomeHeader from '../../components/HomeHeader'
import HomeFooter from '../../components/HomeFooter'
import JingpeiguangContent from '../../components/people/JingpeiguangContent'
export default {
  name: 'jingpeiguang',
  components: {JingpeiguangContent, HomeFooter, HomeHeader},
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/people/jingpeiguang'
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
