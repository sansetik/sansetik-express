  <template>
    <div class="menu">

      <div class="logo">
        <nuxt-link to="/">sansetik</nuxt-link>
      </div>
      <div class="some_menu">
        <ul>
          <li><nuxt-link to="/">Главная</nuxt-link></li>
          <li><nuxt-link to="/blog">Блог</nuxt-link></li>
          <li><nuxt-link to="/portfolio">Портфолио</nuxt-link></li>
          <li><nuxt-link to="/services">Услуги</nuxt-link></li>
          <li><nuxt-link to="/about">О Сайте</nuxt-link></li>
        </ul>
      </div>
      <div class="login">

        <div class="zuza">
          <div class="img_url" v-if="check_login"><img :src="img_url" alt=""> </div>
          <div v-if="check_login">Привет - {{name}} </div>
          <div>
            <button v-if="check_login" @click="out">Выйти</button>
            <button v-else @click="login" ><span class="google_img"><img src="@/static/img/ant-design_google-circle-filled.svg" alt=""></span><span class="login_b">Вход</span> <span class="login_img"><img src="@/static/img/Arrow.svg" alt=""></span></button>
          </div>
        </div>
      </div>
    </div>
  </template>
<script lang="js">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      check_login: false,
      name: '',
      img_url: '',
    }
  },
  name: 'AppMenu',
  methods: {
    // eslint-disable-next-line require-await
    async out () {
      const auth2 = window.gapi.auth2.getAuthInstance()
      auth2.disconnect()
      auth2.signOut()
      this.check_login = false
    },
    // eslint-disable-next-line require-await
    async login () {
      const auth2 = window.gapi.auth2.getAuthInstance()
      auth2.signIn().then((googleUser) => {
        // метод возвращает объект пользователя
        // где есть все необходимые нам поля
        const profile = googleUser.getBasicProfile()
        console.log('ID: ' + profile.getId()) // не посылайте подобную информацию напрямую, на ваш сервер!
        console.log('Full Name: ' + profile.getName())
        console.log('Given Name: ' + profile.getGivenName())
        console.log('Family Name: ' + profile.getFamilyName())
        console.log('Image URL: ' + profile.getImageUrl())
        console.log('Email: ' + profile.getEmail())
        this.name = profile.getName()
        this.img_url = profile.getImageUrl()

        // токен
        // eslint-disable-next-line camelcase
        const id_token = googleUser.getAuthResponse().id_token
        // eslint-disable-next-line camelcase
        console.log('ID Token: ' + id_token)
        this.check_login = true
        this.$http.$post('/api/save', {
          ID: profile.getId(),
          FullName: profile.getFamilyName(),
          Name: profile.getName(),
          LastName: profile.getFamilyName(),
          ImageURL: profile.getImageUrl(),
          Email: profile.getEmail(),
          IdToken: googleUser.getAuthResponse().id_token,
          PinCode: 1581,
          PinCodeQuestions: 'Quest',
          Country: 'Ukraine',
          City: 'Kyiv',
          Hobby: 'Kill Dendy'
        })
      })
    }

  },
  mounted () {
    const _onInit = (auth2) => {
      console.log('init OK', auth2)
    }
    const _onError = (err) => {
      console.log('error', err)
    }
    window.gapi.load('auth2', function () {
      window.gapi.auth2
        .init({ // не забудьте указать ваш ключ в .env
          client_id: '554535577319-jiqd47vmvoqpfv1dacg4vfm2qhqvef70.apps.googleusercontent.com'
        })
        .then(_onInit, _onError)
    })
  }
})

</script>

<style scoped>
.img_url img {
  width: 30px;
  height: 30px;
  border-radius: 100px;
}
.zuza{
  display: flex;
  justify-content: space-between;
}
.zuza div{
  margin-left: 10px;
}
.g-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #3c82f7;
  color: #fff;
  box-shadow: 0 3px 0 #0f69ff;
}

.logo{
  margin-top: 20px;
}
.login{
  margin-top: 20px;
}
.google_img{
  margin-top: 6px;
  margin-left: 7px;
}
.login_b{
  margin-top: 7px;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
}
.login_img{
  margin-top: 8px;
  margin-right: 8px;
}
.login button{
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 111px;
  height: 34px;
  border-radius: 4px;
  border: none;
  background-color: #B77005;

}
.login button:hover{
  background-color: #d48106;
}
.logo a{
  font-family: 'Comfortaa', cursive;
  font-size: 36px;
  color: #024469;
  text-decoration: none;
}
.menu{

  height: 85px;

  border-bottom: solid 1px #E1E1E1;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
}
.some_menu{
  margin-right: 100px;
  margin-top: 10px;
}
.some_menu ul li{
  margin-left: 20px;
  display: inline-block;
  text-decoration: none;
  list-style: none;
}
.some_menu ul li a{
  color: #024469;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
}
.some_menu ul li a:hover{
  border-bottom: dashed 1px #024469;
}
</style>
