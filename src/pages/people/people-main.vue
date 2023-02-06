<template>
  <div>
    <Layout>
      <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
        <home-header :active-name="activeIndex"></home-header>
      </Header>
      <Content>
        <people-menu></people-menu>
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
import PeopleMenu from '../../components/people/PeopleMenu'
export default {
  name: 'people-main',
  components: {PeopleMenu, HomeFooter, HomeHeader},
  data () {
    return {
      activeIndex: '/people'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/people'
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
