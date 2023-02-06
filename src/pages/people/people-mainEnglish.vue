<template>
  <div>
    <Layout>
      <Header style="position: fixed;right: 0;left: 0;z-index: 1030;">
        <home-headeren :active-name="activeIndex"></home-headeren>
      </Header>
      <Content>
        <people-menuen></people-menuen>
      </Content>
      <Footer>
        <home-footer></home-footer>
      </Footer>
    </Layout>
  </div>
</template>

<script>
import PeopleMenuen from '../../components/people/PeopleMenuen'
import HomeFooter from '../../components/HomeFooter'
import HomeHeaderen from '../../components/HomeHeaderen'
export default {
  name: 'people-mainEnglish',
  components: {HomeHeaderen, HomeFooter, PeopleMenuen},
  data () {
    return {
      activeIndex: '/people'
    }
  },
  methods: {
    myajaxs: function () {
      this.$axios({
        method: 'post',
        url: '/peopleEnglish'
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
