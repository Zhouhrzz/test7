<template>
    <div>
      <Layout>
        <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
          <home-header :active-name="activeIndex"></home-header>
        </Header>
        <Content>
          <xuning-content></xuning-content>
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
import XuningContent from '../../components/people/XuningContent'
export default {
  name: 'xuning',
  components: {XuningContent, HomeFooter, HomeHeader},
  data () {
    return {
      activeIndex: '/people'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/people/xuning'
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
