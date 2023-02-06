<template>
  <div>
    <Layout>
      <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
        <home-headeren :active-name="activeIndex"></home-headeren>
      </Header>
      <Content>
        <research-menuen></research-menuen>
      </Content>
      <Footer>
        <home-footer></home-footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import HomeHeaderen from '../components/HomeHeaderen'
import ResearchMenuen from '../components/research/ResearchMenuen'
import HomeFooter from '../components/HomeFooter'
export default {
  name: 'researchEnglish',
  components: {HomeFooter, ResearchMenuen, HomeHeaderen},
  data () {
    return {
      activeIndex: '/research'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/researchEnglish'
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
