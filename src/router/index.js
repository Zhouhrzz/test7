import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import HomeEnglish from '../pages/homeEnglish'
import Research from '../pages/research'
import ResearchEnglish from '../pages/researchEnglish'
import Research1 from '../pages/research/research1'
import Research2 from '../pages/research/research2'
import Research3 from '../pages/research/research3'
import Research4 from '../pages/research/research4'
import Research5 from '../pages/research/research5'
import People from '../pages/people/people-main'
import PeopleEnglish from '../pages/people/people-mainEnglish'
import Xuning from '../pages/people/xuning'
import XuningEnglish from '../pages/people/xuningEnglish'
import Songdan from '../pages/people/songdan'
import SongdanEnglish from '../pages/people/SongdanEnglish'
import Liujing from '../pages/people/liujing'
import LiujingEnglish from '../pages/people/liujingEnglish'
import Suyuting from '../pages/people/suyuting'
import SuyutingEnglish from '../pages/people/suyutingEnglish'
import Nieweizhi from '../pages/people/nieweizhi'
import NieweizhiEnglish from '../pages/people/nieweizhiEnglish'
import Liuanan from '../pages/people/liuanan'
import LiuananEnglish from '../pages/people/liuananEnglish'
import Jingpeiguang from '../pages/people/jingpeiguang'
import JingpeiguangEnglish from '../pages/people/JingpeiguangEnglish'
import Publication2019 from '../pages/publication/publication2019'
import Publication2018 from '../pages/publication/publication2018'
import Publication2017 from '../pages/publication/publication2017'
import Publication2016 from '../pages/publication/publication2016'
import Publication2019English from '../pages/publication/publication2019English'
import Publication2018English from '../pages/publication/publication2018English'
import Publication2017English from '../pages/publication/publication2017English'
import Publication2016English from '../pages/publication/publication2016English'
import Contest1 from '../pages/contest/contest1'
import Contest1English from '../pages/contest/contest1English'
import Contest2 from '../pages/contest/contest2'
import Contest2English from '../pages/contest/Contest2English'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/home',
      name: Home,
      component: r => require.ensure([], () => r(require('../pages/home')), 'home')
    },
    {
      path: '/',
      name: HomeEnglish,
      component: r => require.ensure([], () => r(require('../pages/homeEnglish')), 'homeEnglish')
    },
    {
      path: '/research',
      name: Research,
      component: r => require.ensure([], () => r(require('../pages/research')), 'research')
    },
    {
      path: '/researchEnglish',
      name: ResearchEnglish,
      component: r => require.ensure([], () => r(require('../pages/researchEnglish')), 'researchEnglish')
    },
    {
      path: '/research/research1',
      name: Research1,
      component: r => require.ensure([], () => r(require('../pages/research/research1')), 'research1')
    },
    {
      path: '/research/research2',
      name: Research2,
      component: r => require.ensure([], () => r(require('../pages/research/research2')), 'research2')
    },
    {
      path: '/research/research3',
      name: Research3,
      component: r => require.ensure([], () => r(require('../pages/research/research3')), 'research3')
    },
    {
      path: '/research/research4',
      name: Research4,
      component: r => require.ensure([], () => r(require('../pages/research/research4')), 'research4')
    },
    {
      path: '/research/research5',
      name: Research5,
      component: r => require.ensure([], () => r(require('../pages/research/research5')), 'research5')
    },
    {
      path: '/people',
      name: People,
      component: r => require.ensure([], () => r(require('../pages/people/people-main')), 'people')
    },
    {
      path: '/peopleEnglish',
      name: PeopleEnglish,
      component: r => require.ensure([], () => r(require('../pages/people/people-mainEnglish')), 'peopleEnglish')
    },
    {
      path: '/people/xuning',
      name: Xuning,
      component: r => require.ensure([], () => r(require('../pages/people/xuning')), 'xuning')
    },
    {
      path: '/people/xuningEnglish',
      name: XuningEnglish,
      component: r => require.ensure([], () => r(require('../pages/people/xuningEnglish')), 'xuningEnglish')
    },
    {
      path: '/people/songdan',
      name: Songdan,
      component: r => require.ensure([], () => r(require('../pages/people/songdan')), 'songdan')
    },
    {
      path: '/people/SongdanEnglish',
      name: SongdanEnglish,
      component: r => require.ensure([], () => r(require('../pages/people/SongdanEnglish')), 'SongdanEnglish')
    },
    {
      path: '/people/liujing',
      name: Liujing,
      component: r => require.ensure([], () => r(require('../pages/people/liujing')), 'liujing')
    },
    {
      path: '/people/liujingEnglish',
      name: LiujingEnglish,
      component: r => require.ensure([], () => r(require('../pages/people/liujingEnglish')), 'liujingEnglish')
    },
    {
      path: '/people/nieweizhi',
      name: Nieweizhi,
      component: r => require.ensure([], () => r(require('../pages/people/nieweizhi')), 'nieweizhi')
    },
    {
      path: '/people/nieweizhiEnglish',
      name: NieweizhiEnglish,
      component: r => require.ensure([], () => r(require('../pages/people/nieweizhiEnglish')), 'nieweizhiEnglish')
    },
    {
      path: '/people/liuanan',
      name: Liuanan,
      component: r => require.ensure([], () => r(require('../pages/people/liuanan')), 'liuanan')
    },
    {
      path: '/people/liuananEnglish',
      name: LiuananEnglish,
      component: r => require.ensure([], () => r(require('../pages/people/liuananEnglish')), 'liuananEnglish')
    },
    {
      path: '/people/suyuting',
      name: Suyuting,
      component: r => require.ensure([], () => r(require('../pages/people/suyuting')), 'suyuting')
    },
    {
      path: '/people/suyutingEnglish',
      name: SuyutingEnglish,
      component: r => require.ensure([], () => r(require('../pages/people/suyutingEnglish')), 'suyutingEnglish')
    },
    {
      path: '/people/jingpeiguang',
      name: Jingpeiguang,
      component: r => require.ensure([], () => r(require('../pages/people/jingpeiguang')), 'jingpeiguang')
    },
    {
      path: '/people/JingpeiguangEnglish',
      name: JingpeiguangEnglish,
      component: r => require.ensure([], () => r(require('../pages/people/JingpeiguangEnglish')), 'JingpeiguangEnglish')
    },
    {
      path: '/publication/publication2019',
      name: Publication2019,
      component: r => require.ensure([], () => r(require('../pages/publication/publication2019')), 'publication2019')
    },
    {
      path: '/publication/publication2018',
      name: Publication2018,
      component: r => require.ensure([], () => r(require('../pages/publication/publication2018')), 'publication2018')
    },
    {
      path: '/publication/publication2017',
      name: Publication2017,
      component: r => require.ensure([], () => r(require('../pages/publication/publication2017')), 'publication2017')
    },
    {
      path: '/publication/publication2016',
      name: Publication2016,
      component: r => require.ensure([], () => r(require('../pages/publication/publication2016')), 'publication2016')
    },
    {
      path: '/publication/publication2019English',
      name: Publication2019English,
      component: r => require.ensure([], () => r(require('../pages/publication/publication2019English')), 'publication2019English')
    },
    {
      path: '/publication/publication2018English',
      name: Publication2018English,
      component: r => require.ensure([], () => r(require('../pages/publication/publication2018English')), 'publication2018English')
    },
    {
      path: '/publication/publication2017English',
      name: Publication2017English,
      component: r => require.ensure([], () => r(require('../pages/publication/publication2017English')), 'publication2017English')
    },
    {
      path: '/publication/publication2016English',
      name: Publication2016English,
      component: r => require.ensure([], () => r(require('../pages/publication/publication2016English')), 'publication2016English')
    },
    {
      path: '/contest/contest1',
      name: Contest1,
      component: r => require.ensure([], () => r(require('../pages/contest/contest1')), 'contest1')
    },
    {
      path: '/contest/contest2',
      name: Contest2,
      component: r => require.ensure([], () => r(require('../pages/contest/contest2')), 'contest2')
    },
    {
      path: '/contest/contest1English',
      name: Contest1English,
      component: r => require.ensure([], () => r(require('../pages/contest/contest1English')), 'contest1English')
    },
    {
      path: '/contest/Contest2English',
      name: Contest2English,
      component: r => require.ensure([], () => r(require('../pages/contest/Contest2English')), 'Contest2English')
    }
  ]
})

export default router
