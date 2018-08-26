import Vue from 'vue';
import AppointCardWait from './components/AppointCardWait.vue';
import AppointCardWork from './components/AppointCardWork.vue';
import AppointCardFinish from './components/AppointCardFinish.vue';

new Vue({
  el: '#appoint-card-wait',
  render: c => c(AppointCardWait)
});

new Vue({
  el: '#appoint-card-work',
  render: c => c(AppointCardWork)
});

new Vue({
  el: '#appoint-card-finish',
  render: c => c(AppointCardFinish)
});
