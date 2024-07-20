import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import TestOne from '@/views/TestOneView.vue'
import TestTwo from '@/views/TestTwoView.vue'
import TestThree from '@/views/TestThreeView.vue'
import TestFour from '@/views/TestFourView.vue'
import TestFive from '@/views/TestFiveView.vue'
import TestSix from '@/views/TestSixView.vue'
import TestSeven from '@/views/TestSevenView.vue'
import TestEight from '@/views/TestEightView.vue'
import TestNine from '@/views/TestNineView.vue'
import TestTen from '@/views/TestTenView.vue'
import TestEleven from '@/views/TestElevenView.vue'
import TestLoad from '@/views/LoadingView.vue'
import TestResult from '@/views/TestResultView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/test-1',
      name: 'testOne',
      component: TestOne
    },
    {
      path: '/test-2',
      name: 'testTwo',
      component: TestTwo
    },
    {
      path: '/test-3',
      name: 'testThree',
      component: TestThree
    },
    {
      path: '/test-4',
      name: 'testFour',
      component: TestFour
    },
    {
      path: '/test-5',
      name: 'testFive',
      component: TestFive
    },
    {
      path: '/test-6',
      name: 'testSix',
      component: TestSix
    },
    {
      path: '/test-7',
      name: 'testSeven',
      component: TestSeven
    },
    {
      path: '/test-8',
      name: 'testEight',
      component: TestEight
    },
    {
      path: '/test-9',
      name: 'testNine',
      component: TestNine
    },
    {
      path: '/test-10',
      name: 'testTen',
      component: TestTen
    },
    {
      path: '/test-11',
      name: 'testEleven',
      component: TestEleven
    },
    {
      path: '/test-12',
      name: 'testLoad',
      component: TestLoad
    },
    {
      path: '/test-result',
      name: 'testResult',
      component: TestResult
    }
  ]
})

export default router
