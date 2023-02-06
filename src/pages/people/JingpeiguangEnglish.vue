<template>
  <div>
    <Layout>
      <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
        <home-headeren :active-name="activeIndex"></home-headeren>
      </Header>
      <Content>
        <jingpeiguang-contenten></jingpeiguang-contenten>
      </Content>
      <Footer>
        <home-footer></home-footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import HomeHeaderen from '../../components/HomeHeaderen'
import JingpeiguangContenten from '../../components/people/JingpeiguangContenten'
import HomeFooter from '../../components/HomeFooter'
export default {
  name: 'JingpeiguangEnglish',
  components: {HomeFooter, JingpeiguangContenten, HomeHeaderen},
  data () {
    return {
      activeIndex: '/people'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/people/jingpeiguangEnglish'
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
