import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.GOOGLE_API_KEY,
    libraries: "places",
  },
});
