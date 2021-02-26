import Vue from 'vue'
import App from './App.vue'
import HmButton from './components/button.vue'
import MyDialog from './components/dialog.vue'
import OneIuput from './components/input.vue'
import OneSwitch from './components/switch.vue'
import OneRadio from './components/radio'
import OneRadioGroup from './components/radio-group.vue'

Vue.config.productionTip = false

Vue.component(HmButton.name, HmButton)
Vue.component(MyDialog.name, MyDialog)
Vue.component(OneIuput.name, OneIuput)
Vue.component(OneSwitch.name, OneSwitch)
Vue.component(OneRadio.name, OneRadio )
Vue.component(OneRadioGroup.name, OneRadioGroup)
new Vue({
  render: h => h(App)
}).$mount('#app')
