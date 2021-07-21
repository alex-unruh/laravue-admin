require("./bootstrap");

// Inertia and Vue
import { createApp, h, reactive } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import { InertiaProgress } from "@inertiajs/progress";

// Assets
import "prismjs/themes/prism-coy.css";
import "@/assets/layout/layout.scss";
import "@/assets/layout/flags/flags.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";

// Components
import Breadcrumb from '@/components/Breadcrumb';
import PageTitle from '@/components/PageTitle';

// Primevue
import PrimeVue from "primevue/config";
import CodeHighlight from "./AppCodeHighlight";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
import Ripple from "primevue/ripple";
import BadgeDirective from "primevue/badgedirective";
import Tooltip from "primevue/tooltip";
import InputText from "primevue/inputtext";
import InputSwitch from "primevue/inputswitch";
import RadioButton from "primevue/radiobutton";

InertiaProgress.init();

createInertiaApp({
  resolve: (name) => import(`./views/${name}`),
  setup({ el, app, props, plugin }) {
    const vue = createApp({ render: () => h(app, props) })
      .use(plugin)
      .mixin({ methods: { route: window.route } })
      .directive("code", CodeHighlight)
      .use(PrimeVue, { ripple: true })
      .use(ConfirmationService)
      .use(ToastService)
      .directive("tooltip", Tooltip)
      .directive("ripple", Ripple)
      .directive("badge", BadgeDirective)

      .component("Breadcrumb", Breadcrumb)
      .component("PageTitle", PageTitle)
      .component("InputText", InputText)
      .component("InputSwitch", InputSwitch)
      .component("RadioButton", RadioButton);

    vue.config.globalProperties.$appState = reactive({
      inputStyle: "outlined",
    });

    vue.mount(el);
  },
});
