<template>
  <div>
    <Layout>
      <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
        <home-header active-name="activeIndex"></home-header>
      </Header>
      <Content>
        <contest-content2></contest-content2>
      </Content>
      <Footer>
        <home-footer></home-footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import HomeHeader from '../../components/HomeHeader'
import ContestContent2 from '../../components/contest/ContestContent2'
import HomeFooter from '../../components/HomeFooter'
export default {
  name: 'contest2',
  components: {HomeFooter, ContestContent2, HomeHeader},
  data () {
    return {
      activeIndex: '/research'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/contest/contest2'
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
