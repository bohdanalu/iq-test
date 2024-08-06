<template>
  <header>
    <div class="container">
      <div class="burger" @click="toggleMenu">
        <img src="../assets/menu.svg" alt="Открить меню" width="24" height="16" />
      </div>

      <div v-if="showLogoAndTitle" class="header-test">
        <img src="@/assets/brain.svg" alt="Лого" width="48" height="47" />
        <span class="test-title" v-if="$route.path !== '/test-result'">Тест на определение IQ</span>
        <span class="test-title result" v-else>Готово!</span>
      </div>

      <transition name="menu-transition">
        <nav v-if="menuOpen" class="menu">
          <div class="close" @click="toggleMenu">
            <img src="../assets/close.svg" alt="Закрить меню" width="28" height="28" />
          </div>
          <ul>
            <li><RouterLink to="/" @click.native="toggleMenu">Главная </RouterLink></li>
            <li><RouterLink to="test-2">Информация о тесте</RouterLink></li>
            <li><RouterLink to="test-1" @click.native="toggleMenu">Пройти тест</RouterLink></li>
          </ul>
        </nav>
      </transition>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView, useRoute } from 'vue-router'

export default {
  data() {
    return {
      menuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  },
  computed: {
    showLogoAndTitle() {
      return this.$route.path !== '/'
    }
  }
}
</script>

<style scoped>
header {
  /* height: 46px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bg);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.burger {
  cursor: pointer;
}

.menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  z-index: 10;
}

.close {
  font-size: 30px;
  cursor: pointer;
  align-self: flex-end;
}

.menu ul {
  list-style-type: none;
  padding: 0;
  margin: 110px 0 0 0;
  width: 100%;
}

.menu li {
  margin: 25px 0;
}

.menu a {
  color: var(--white);
  text-decoration: none;
  font-family: var(--font3);
  font-weight: 300;
  line-height: 137%;
  text-transform: uppercase;
}

.menu a:active,
.menu a:hover {
  color: var(--accent);
}

.menu-transition-enter-active,
.menu-transition-leave-active {
  transition: opacity 0.5s;
}
.menu-transition-enter,
.menu-transition-leave-to {
  opacity: 0;
}

.header-test {
  display: flex;
  align-items: center;
  gap: 10px;
}

.test-title {
  color: var(--accent);
  font-family: var(--second-family);
  font-size: 12px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.test-title.result {
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0.1em;
  padding-left: 20px;
}

@media (min-width: 450px) {
  .menu {
    width: 50%;
  }
}
</style>
