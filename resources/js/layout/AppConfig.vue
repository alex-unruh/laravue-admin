<template>
  <Toast />
  <div id="layout-config" :class="containerClass">
    <a href="#" class="layout-config-close" @click="hideConfigurator">
      <i class="pi pi-times"></i>
    </a>

    <div class="layout-config-content">
      <h5 style="margin-top: 0">Input Style</h5>
      <div class="p-formgroup-inline">
        <div class="p-field-radiobutton">
          <RadioButton id="input_outlined" name="inputstyle" value="outlined" :modelValue="inputStyle" @update:modelValue="changeInputStyle" />
          <label for="input_outlined">Outlined</label>
        </div>
        <div class="p-field-radiobutton">
          <RadioButton id="input_filled" name="inputstyle" value="filled" :modelValue="inputStyle" @update:modelValue="changeInputStyle" />
          <label for="input_filled">Filled</label>
        </div>
      </div>

      <h5>Ripple Effect</h5>
      <InputSwitch :modelValue="rippleActive" @update:modelValue="changeRipple" />

      <h5>Menu Type</h5>
      <div class="p-formgroup-inline">
        <div class="p-field-radiobutton">
          <RadioButton id="static" name="layoutMode" value="static" v-model="d_layoutMode" @change="changeLayout($event, 'static')" />
          <label for="static">Static</label>
        </div>
        <div class="p-field-radiobutton">
          <RadioButton id="overlay" name="layoutMode" value="overlay" v-model="d_layoutMode" @change="changeLayout($event, 'overlay')" />
          <label for="overlay">Overlay</label>
        </div>
      </div>

      <h5>Menu Theme</h5>
      <div class="p-formgroup-inline">
        <div class="p-field-radiobutton">
          <RadioButton id="dark" name="layoutColorMode" value="dark" v-model="d_layoutColorMode" @change="changeLayoutColor($event, 'dark')" />
          <label for="dark">Dark</label>
        </div>
        <div class="p-field-radiobutton">
          <RadioButton id="deluxe" name="layoutColorMode" value="deluxe" v-model="d_layoutColorMode" @change="changeLayoutColor($event, 'deluxe')" />
          <label for="dark">Deluxe</label>
        </div>
      </div>

      <h5>Logo</h5>
      <div class="p-formgroup-inline">
        <FileUpload ref="fileInput" mode="basic" id="logo" accept="image/*" :customUpload="true" :maxFileSize="1000000" @uploader="uploadLogo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    layoutMode: {
      type: String,
      default: null,
    },
    layoutColorMode: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      active: false,
      d_layoutMode: this.layoutMode,
      d_layoutColorMode: this.layoutColorMode,
      form: this.$inertia.form({
        logo: null,
      }),
    };
  },
  watch: {
    $route() {
      if (this.active) {
        this.active = false;
        this.unbindOutsideClickListener();
      }
    },
    layoutMode(newValue) {
      this.d_layoutMode = newValue;
    },
    layoutColorMode(newValue) {
      this.d_layoutColorMode = newValue;
    },
  },
  outsideClickListener: null,
  methods: {
    toggleConfigurator(event) {
      this.active = !this.active;
      event.preventDefault();
    },
    onToggleConfigurator(event) {
      this.toggleConfigurator(event);
    },
    hideConfigurator(event) {
      this.active = false;
      event.preventDefault();
    },
    changeInputStyle(value) {
      this.$appState.inputStyle = value;
    },
    changeRipple(value) {
      this.$primevue.config.ripple = value;
    },
    changeLayout(event, layoutMode) {
      this.$emit("layout-change", layoutMode);
      event.preventDefault();
    },
    changeLayoutColor(event, layoutColor) {
      this.$emit("layout-color-change", layoutColor);
      event.preventDefault();
    },
    uploadLogo(event){
      this.$inertia.visit(route('change.logo'), {
        method: 'post',
        forceFormData: true,
        data: {logo: event.files[0]},
        onSuccess: () => {
          this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
          this.$refs.fileInput.clear();
        }
      });
    },
  },
  computed: {
    containerClass() {
      return ["layout-config", { "layout-config-active": this.active }];
    },
    rippleActive() {
      return this.$primevue.config.ripple;
    },
    inputStyle() {
      return this.$appState.inputStyle;
    },
  },
  emits: ['layout-change', 'layout-color-change']
};
</script>
