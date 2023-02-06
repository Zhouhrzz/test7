<template>
  <div>
    <Layout>
      <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
        <home-headeren active-name="activeIndex"></home-headeren>
      </Header>
      <Content>
        <contest-content1en></contest-content1en>
      </Content>
      <Footer>
        <home-footer></home-footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import HomeHeaderen from '../../components/HomeHeaderen'
import ContestContent1en from '../../components/contest/ContestContent1en'
import HomeFooter from '../../components/HomeFooter'
export default {
  name: 'contest1English',
  components: {HomeFooter, ContestContent1en, HomeHeaderen},
  data () {
    return {
      activeIndex: '/research'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/contest/contest1English'
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
