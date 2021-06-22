import { createApp } from 'vue';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate'; // 套件載入
import {
  required, email, min, numeric,
} from '@vee-validate/rules'; // 規則載入
import { localize, setLocale } from '@vee-validate/i18n'; // 多國語言載入
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCrow, faSearchPlus } from '@fortawesome/free-solid-svg-icons'; // Font Awesome icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; // Font Awesome icons
import axios from 'axios';
import VueAxios from 'vue-axios';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import Loading from '@/components/Loading.vue'; // Loading元件
import 'bootstrap'; // bootstrap icon
import App from './App.vue';
import router from './router';

defineRule('required', required);
defineRule('email', email);
defineRule('numeric', numeric);
defineRule('min', min);
configure({
  generateMessage: localize({
    zh_TW: zhTW,
  }),
  validateOnInput: true,
});
setLocale('zh_TW');

library.add(faCrow, faSearchPlus);

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('Loading', Loading);
app.config.productionTip = false;

app.mount('#app');
