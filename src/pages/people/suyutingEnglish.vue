<template>
  <div>
    <Layout>
      <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
        <home-headeren :active-name="activeIndex"></home-headeren>
      </Header>
      <Content>
        <suyuting-contenten></suyuting-contenten>
      </Content>
      <Footer>
        <home-footer></home-footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>

import SuyutingContenten from '../../components/people/SuyutingContenten'
import HomeFooter from '../../components/HomeFooter'
import HomeHeaderen from '../../components/HomeHeaderen'
export default {
  name: 'suyutingEnglish',
  components: {HomeHeaderen, HomeFooter, SuyutingContenten},
  data () {
    return {
      activeIndex: '/people'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/people/suyutingEnglish'
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
