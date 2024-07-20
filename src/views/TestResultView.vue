<template>
  <div class="wrap">
    <div class="result">
      <h2 class="result-title">Ваш результат рассчитан:</h2>
      <div class="result-text">
        <p>
          <span>Вы относитесь к 3% респондентов</span> , чей уровень интеллекта более чем на 15
          пунктов отличается от среднего в большую или меньшую сторону!
        </p>
      </div>
      <h3 class="result-subtitle">Скорее получите свой результат!</h3>
      <div class="result-info">
        <p>
          В целях защиты персональных данных результат теста, их подробная интерпретация и
          рекомендации доступны в виде голосового сообщения по звонку с вашего мобильного телефона
        </p>
      </div>
      <h4 class="result-ring">
        Звоните скорее, запись доступна всего <br />
        <span>{{ minutes }}:{{ seconds }}</span> МИНУТ
      </h4>
      <button class="result-btn" @click="fetchData">Позвонить и прослушать результат</button>

      <div class="result-info" v-if="person">
        <h2>{{ person.name }}</h2>
        <p><strong>Height:</strong> {{ person.height }} cm</p>
        <p><strong>Mass:</strong> {{ person.mass }} kg</p>
        <p><strong>Hair Color:</strong> {{ person.hair_color }}</p>
        <p><strong>Skin Color:</strong> {{ person.skin_color }}</p>
        <p><strong>Eye Color:</strong> {{ person.eye_color }}</p>
        <p><strong>Birth Year:</strong> {{ person.birth_year }}</p>
        <p><strong>Gender:</strong> {{ person.gender }}</p>
      </div>
      <footer class="footer">
        <div class="footer-content">
          TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI
          CA AVETI 18 ANI IMPLINITI,
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: null,
      minutes: 10,
      seconds: 0,
      person: null
    }
  },
  mounted() {
    this.startTimer()
  },

  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        if (this.seconds === 0) {
          if (this.minutes === 0) {
            clearInterval(this.timer)
            this.$router.push('/')
          } else {
            this.minutes--
            this.seconds = 59
          }
        } else {
          this.seconds--
        }
      }, 1000)
    },
    fetchData() {
      fetch('https://swapi.dev/api/people/1/')
        .then((response) => response.json())
        .then((data) => {
          this.person = data
          clearInterval(this.timer)
        })
        .catch((error) => {
          console.error('Error fetching data:', error)
        })
    }
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style scoped>
.wrap {
  height: calc(100vh - 46px);
  overflow-y: auto;
}
.result {
  min-height: 100vh;
  background-image: url('@/assets/lightning_right.png'), url('@/assets/lightning_left.png'),
    url('@/assets/rain_bk.png');
  background-position:
    right 90%,
    left 90%,
    center;
  background-size: auto, auto, cover;
  background-repeat: no-repeat, no-repeat, no-repeat;
  color: var(--white);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 35px 0;
}

.result-title {
  font-size: 15px;
  line-height: 107%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.result-text {
  max-width: 268px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
}

.result-text > span {
  text-decoration: underline;
}

.result-subtitle {
  font-weight: 700;
  font-size: 18px;
  line-height: 122%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--progress);
}

.result-info {
  max-width: 256px;
  background-color: #1c2741;
  border-radius: 6px;
  margin: 0 auto;
  padding: 20px;
}

.result-info > p {
  font-family: var(--font3);
  font-weight: 500;
  font-size: 8px;
  line-height: 175%;
  letter-spacing: 0.25em;
  text-transform: uppercase;
}

.result-ring {
  font-weight: normal;
  font-size: 11px;
  line-height: 273%;
  letter-spacing: 0.1em;
  color: var(--progress);
}

.result-ring > span {
  font-size: 20px;
  line-height: 150%;
  letter-spacing: 0.1em;
}
.result-btn {
  width: 290px;
  font-family: var(--font3);
  font-weight: 900;
  font-size: 15px;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  text-align: left;
  color: var(--white);
  background-color: #eb1b00;
  border-radius: 5px;
  padding: 30px 30px 30px 60px;
  background-image: url('@/assets/call.svg');
  background-position: 15px;
  top: 50%;
  background-repeat: no-repeat;
  margin: 0 auto;
}

.footer {
  width: 100%;
  margin-top: auto;
}

.footer-content {
  font-family: var(--font3);
  font-weight: 400;
  font-size: 7px;
  line-height: 129%;
  letter-spacing: 0.43em;
  text-transform: uppercase;
  text-align: center;
  color: rgba(255, 255, 255, 0.5);
  white-space: no-wrap;
}
</style>
