import { createApp } from "vue";
import App from "./App.vue";

import plugins from "plugin";

const app = createApp(App);
plugins(app);
app.mount("#app");
