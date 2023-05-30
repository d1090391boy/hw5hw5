import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

function changeColor() {
    var input = document.getElementById("myInput");
    input.style.backgroundColor = "#FFFFFF";
}
function changeColor2() {
    var input2 = document.getElementById("myInput2");
    input2.style.backgroundColor = "#FFFFFF";
}
