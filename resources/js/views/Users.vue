<template>
  <div class="p-grid crud-demo">
    <div class="p-col-12">
      <Breadcrumb :model="breadcrumb" :title="title" :icon="icon" />

      <div class="card">
        <Toast />

        <Toolbar class="p-mb-4">
          <template v-slot:left>
            <button type="button" class="p-button-success p-button p-component p-mr-2" @click="openNew"><i class="pi pi-plus"> </i>&nbsp;New</button>
            <button type="button" class="p-button-danger p-button p-component p-mr-2" @click="confirmDeleteSelected" :disabled="!selectedProducts || !selectedProducts.length"><i class="pi pi-trash"></i>&nbsp; Delete</button>
          </template>

          <template v-slot:right>
            <button type="button" class="p-button-help p-button p-component" @click="exportCSV($event)"><i class="pi pi-upload"></i>&nbsp;Export</button>
          </template>
        </Toolbar>

        <DataTable ref="dt" :value="users" v-model:selection="selectedProducts" dataKey="id" :paginator="true" :rows="10" :filters="filters" paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5, 10, 25]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products" responsiveLayout="scroll">
          <template #header>
            <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
              <h5 class="p-m-0">Manage Users</h5>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global']" placeholder="Search..." />
              </span>
            </div>
          </template>

          <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>

          <Column header="Image">
            <template #body="slotProps">
              <span class="p-column-title">Image</span>
              <img :src="'storage/' + slotProps.data.image" :alt="slotProps.data.image" class="product-image" />
            </template>
          </Column>

          <Column field="id" header="Id" :sortable="true">
            <template #body="slotProps">
              <span class="p-column-title">Id</span>
              {{ slotProps.data.id }}
            </template>
          </Column>

          <Column field="name" header="Name" :sortable="true">
            <template #body="slotProps">
              <span class="p-column-title">Name</span>
              {{ slotProps.data.name }}
            </template>
          </Column>

          <Column field="email" header="E-mail" :sortable="true">
            <template #body="slotProps">
              <span class="p-column-title">Email</span>
              {{ formatCurrency(slotProps.data.email) }}
            </template>
          </Column>

          <Column field="profile" header="Profile" :sortable="true">
            <template #body="slotProps">
              <span class="p-column-title">Profile</span>
              {{ formatCurrency(slotProps.data.profile) }}
            </template>
          </Column>

          <Column>
            <template #body="slotProps">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editUser(slotProps.data)" />
              <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteProduct(slotProps.data)" />
            </template>
          </Column>
        </DataTable>

        <Dialog v-model:visible="productDialog" :style="{ width: '500px' }" :header="dialogLabel" :modal="true" class="p-fluid">
          <form @submit.prevent="submit">
            <img :src="'storage/' + form.image" :alt="form.image" class="product-image" v-if="form.image && isUpdate" />

            <div class="p-field">
              <label for="name">Name</label>
              <input type="text" class="p-inputtext p-component" name="name" id="name" v-model.trim="form.name" required="true" autofocus :class="{ 'p-invalid': errors.name }" />
              <small class="p-invalid" v-if="errors.name">{{ errors.name }}</small>
            </div>

            <div class="p-field">
              <label for="email">Email</label>
              <input type="text" class="p-inputtext p-component" name="email" id="email" v-model.trim="form.email" required="true" autofocus :class="{ 'p-invalid': errors.email }" />
              <small class="p-invalid" v-if="errors.email">{{ errors.email }}</small>
            </div>

            <div class="p-field">
              <label for="password">Password</label>
              <Password id="password" v-model.trim="form.password" :required="!isUpdate" autofocus :class="{ 'p-invalid': errors.password }" />
              <small class="p-invalid" v-if="errors.password">{{ errors.password }}</small>
            </div>

            <div class="p-field">
              <label for="profile">User Profile</label>
              <Dropdown v-model="form.profile" :options="profiles" optionLabel="label" optionValue="label" placeholder="Select a profile" />
              <small class="p-invalid" v-if="errors.profile">{{ errors.profile }}</small>
            </div>

            <div class="p-field">
              <label for="profile">User Image</label><br />
              <input type="file" @change="changeUserImage" accept="image/*" class="custom-input-file" />
              <small class="p-invalid" v-if="errors.image">{{ errors.image }}</small>
            </div>
          </form>

          <template #footer>
            <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
            <Button :label="isUpdate ? 'Update' : 'Save'" icon="pi pi-check" class="p-button-text" @click="saveUser" />
          </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
          <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
            <span v-if="product"
              >Are you sure you want to delete <b>{{ product.name }}</b
              >?</span
            >
          </div>
          <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductDialog = false" />
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteProduct" />
          </template>
        </Dialog>

        <Dialog v-model:visible="deleteProductsDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
          <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
            <span v-if="product">Are you sure you want to delete the selected products?</span>
          </div>
          <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteProductsDialog = false" />
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedProducts" />
          </template>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "@/service/ProductService";
import Layout from "@/layout/App";
export default {
  props: {
    users: Array,
    errors: Object,
  },
  layout: Layout,
  data() {
    return {
      title: "Users",
      icon: "pi pi-fw pi-users",
      breadcrumb: [{ label: "Users", route: "users" }],
      dialogLabel: null,
      isUdpate: false,
      products: null,
      productDialog: false,
      deleteProductDialog: false,
      deleteProductsDialog: false,
      product: {},
      selectedProducts: null,
      filters: {},
      submitted: false,
      profiles: [{ label: "Admin" }, { label: "Editor" }, { label: "Visitor" }],
      form: this.$inertia.form({
        id: null,
        name: null,
        email: null,
        password: null,
        image: null,
        profile: null,
      }),
    };
  },
  productService: null,
  created() {
    this.productService = new ProductService();
  },
  mounted() {
    this.productService.getProducts().then((data) => (this.products = data));
  },
  methods: {
    formatCurrency(value) {
      if (value)
        return value.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      return;
    },
    openNew() {
      this.dialogLabel = "New User";
      this.product = {};
      this.submitted = false;
      this.productDialog = true;
      this.isUpdate = false;
    },
    hideDialog() {
      this.productDialog = false;
      this.submitted = false;
    },
    saveUser() {
      this.submitted = true;
      this.form.post(route("users.store"), {
        data: this.form,
        forceFormData: true,
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.$toast.add({ severity: "success", summary: "Success", detail: "User created", life: 3000 });
          this.form.reset();
          this.productDialog = false;
        },
      });
    },
    editUser(user) {
      this.dialogLabel = "Edit User";
      this.form = { ...user };
      this.isUpdate = true;
      this.productDialog = true;
    },
    confirmDeleteProduct(product) {
      this.product = product;
      this.deleteProductDialog = true;
    },
    deleteProduct() {
      this.products = this.products.filter((val) => val.id !== this.product.id);
      this.deleteProductDialog = false;
      this.product = {};
      this.$toast.add({
        severity: "success",
        summary: "Successful",
        detail: "Product Deleted",
        life: 3000,
      });
    },
    findIndexById(id) {
      let index = -1;
      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].id === id) {
          index = i;
          break;
        }
      }
      return index;
    },
    createId() {
      let id = "";
      var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 5; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
    },
    exportCSV() {
      this.$refs.dt.exportCSV();
    },
    confirmDeleteSelected() {
      this.deleteProductsDialog = true;
    },
    deleteSelectedProducts() {
      this.products = this.products.filter((val) => !this.selectedProducts.includes(val));
      this.deleteProductsDialog = false;
      this.selectedProducts = null;
      this.$toast.add({
        severity: "success",
        summary: "Successful",
        detail: "Products Deleted",
        life: 3000,
      });
    },
    changeUserImage(event) {
      this.form.image = event.target.files[0];
    },
  },
};
</script>

<style scoped lang="scss">
.table-header {
  display: flex;
  justify-content: space-between;
}

.product-image {
  width: 60px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.p-dialog .product-image {
  width: 150px;
  margin: 0 auto 2rem auto;
  display: block;
}

.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-badge {
  border-radius: 2px;
  padding: 0.25em 0.5rem;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.3px;

  &.status-instock {
    background: #c8e6c9;
    color: #256029;
  }

  &.status-outofstock {
    background: #ffcdd2;
    color: #c63737;
  }

  &.status-lowstock {
    background: #feedaf;
    color: #8a5340;
  }
}

::v-deep(.p-toolbar) {
  flex-wrap: wrap;
  .p-button {
    margin-bottom: 0.25rem;
  }
}

.custom-input-file::file-selector-button {
  border: 1px solid #999;
  padding: 0.6em;
  border-radius: 0.2em;
  background: linear-gradient(to bottom, #000 0%, #555 50%, #000 100%);
  color: #ddd;
  transition: 1s;
  cursor: pointer;
}
.custom-input-file::file-selector-button:hover {
  background: linear-gradient(to bottom, #000 0%, #f0563d 50%, #000 100%);
}
</style>
