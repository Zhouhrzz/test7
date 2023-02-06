<template>
  <Layout>
    <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
      <home-headeren :active-name="activeIndex"></home-headeren>
    </Header>
    <Content>
      <liuanan-contenten></liuanan-contenten>
    </Content>
    <Footer>
      <home-footer></home-footer>
    </Footer>
  </Layout>
</template>

<script>
import HomeHeaderen from '../../components/HomeHeaderen'
import LiuananContenten from '../../components/people/LiuananContenten'
import HomeFooter from '../../components/HomeFooter'
export default {
  name: 'liuananEnglish',
  components: {HomeFooter, LiuananContenten, HomeHeaderen},
  data () {
    return {
      activeIndex: '/people'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/people/liuananEnglish'
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
