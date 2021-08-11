import { createApp } from 'vue';

import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import {
  required, email, min, numeric,
} from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookSquare, faLine, faInstagramSquare, faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import axios from 'axios';
import VueAxios from 'vue-axios';

import Loading from '@/components/loading/Loading.vue';
import 'bootstrap';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App.vue';
import router from './router';

import { date, currency } from './methods/filters';

AOS.init({
  once: true,
});

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

library.add(
  faSearchPlus,
  faFacebookSquare,
  faLine,
  faInstagramSquare,
  faGithubSquare,
);

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.use(VueSweetalert2);
app.use(AOS);

app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('Font-awesome-icon', FontAwesomeIcon);
app.component('Loading', Loading);

app.config.productionTip = false;
// 將 filters.js 的方法解構出來並加入 globalProperties
app.config.globalProperties.$filters = {
  date, currency,
};

app.mount('#app');
