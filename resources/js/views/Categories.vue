<template>
  <div class="p-grid crud-demo">
    <div class="p-col-12">
      <Breadcrumb :model="breadcrumb" :title="title" :icon="icon" />

      <div class="card">
        <Toast />

        <Toolbar class="p-mb-4">
          <template v-slot:left>
            <button type="button" class="p-button-success p-button p-component p-mr-2" @click="openNew"><i class="pi pi-plus"> </i>&nbsp;New</button>
            <button type="button" class="p-button-danger p-button p-component p-mr-2" @click="confirmDeleteSelected" :disabled="!selectedCategories || !selectedCategories.length"><i class="pi pi-trash"></i>&nbsp; Delete</button>
          </template>

          <template v-slot:right>
            <button type="button" class="p-button-help p-button p-component" @click="exportCSV($event)"><i class="pi pi-upload"></i>&nbsp;Export</button>
          </template>
        </Toolbar>

        <DataTable ref="dt" :value="categories" v-model:selection="selectedCategories" dataKey="id" :paginator="true" :rows="10" :filters="filters" :globalFilterFields="['name', 'email', 'profile']" filterDisplay="menu" paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5, 10, 25]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} categories" responsiveLayout="scroll">
          <template #header>
            <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
              <h5 class="p-m-0">Manage categories</h5>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Search..." />
              </span>
            </div>
          </template>
          <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
          <Column header="Image">
            <template #body="slotProps">
              <img :src="slotProps.data.image" :alt="slotProps.data.image" class="category-image" />
            </template>
          </Column>
          <Column field="id" header="Id" :sortable="true" />
          <Column field="name" header="Name" :sortable="true" />
          <Column field="slug" header="Slug" :sortable="true" />
          <Column field="description" header="Description" :sortable="true" />
          <Column header="Manage">
            <template #body="slotProps">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editCategory(slotProps.data)" v-if="slotProps.data.slug !== 'main'" />
              <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeleteCategory(slotProps.data)" v-if="slotProps.data.slug !== 'main'" />
            </template>
          </Column>
        </DataTable>

        <Dialog v-model:visible="CategoryDialog" :style="{ width: '500px' }" :header="dialogLabel" :modal="true" class="p-fluid">
          <form @submit.prevent="submit">
            <img :src="form.image" :alt="form.image" class="category-image" v-if="form.image" />

            <div class="p-field">
              <label for="name">Name</label>
              <input type="text" class="p-inputtext p-component" @blur="getSlug" name="name" id="name" v-model.trim="form.name" required="true" autofocus :class="{ 'p-invalid': errors.name }" />
              <small class="p-invalid" v-if="errors.name">{{ errors.name }}</small>
            </div>

            <div class="p-field">
              <label for="slug">Slug</label>
              <input type="text" class="p-inputtext p-component" name="slug" id="slug" disabled="true" v-model.trim="form.slug" required="true" :class="{ 'p-invalid': errors.slug }" />
              <small class="p-invalid" v-if="errors.slug">{{ errors.slug }}</small>
            </div>

            <div class="p-field">
              <label for="slug">Description</label>
              <textarea class="p-inputtext p-component" name="description" id="description" v-model.trim="form.description" :class="{ 'p-invalid': errors.description }" />
              <small class="p-invalid" v-if="errors.description">{{ errors.description }}</small>
            </div>

            <div class="p-field">
              <label for="profile">Parent Category</label>
              <Dropdown v-model="selectedParent" :options="parents" optionLabel="name" optionValue="id" filter="true" filterPlaceholder="Search..." placeholder="Select a parent" />
              <small class="p-invalid" v-if="errors.parent">{{ errors.parent }}</small>
            </div>

            <div class="p-field">
              <label for="profile">Category Image</label><br />
              <input type="file" name="image" @change="onCategoryImageChange" accept="image/*" class="custom-input-file" /><br />
              <small class="p-invalid" v-if="errors.image_file">{{ errors.image_file }}</small>
            </div>
          </form>

          <template #footer>
            <Button label="Cancel" icon="pi pi-times" class="p-button-text" @click="hideDialog" />
            <Button :label="isUpdate ? 'Update' : 'Save'" icon="pi pi-check" class="p-button-text" @click="saveCategory" />
          </template>
        </Dialog>

        <Dialog v-model:visible="deleteCategoryDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
          <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
            <span v-if="category"
              >Are you sure you want to delete <b>{{ category.name }}</b
              >?</span
            >
          </div>
          <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteCategoryDialog = false" />
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteCategory" />
          </template>
        </Dialog>

        <Dialog v-model:visible="deleteCategoriesDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
          <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
            <span>Are you sure you want to delete the selected categories?</span>
          </div>
          <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deleteCategoriesDialog = false" />
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedCategories" />
          </template>
        </Dialog>
      </div>
    </div>
  </div>
</template>

<script>
import Layout from "@/layout/App";
export default {
  layout: Layout,
  props: {
    categories: Array,
    errors: Object,
  },
  data() {
    return {
      title: "Categories",
      icon: "pi pi-fw pi-list",
      breadcrumb: [{ label: "Categories", route: "categories" }],
      isUpdate: false,
      CategoryDialog: false,
      deleteCategoryDialog: false,
      deleteCategoriesDialog: false,
      selectedCategories: null,
      filters: { global: { value: null } },
      submitted: false,
      selectedParent: 1,
      form: this.$inertia.form({
        id: null,
        name: null,
        slug: null,
        description: null,
        image: null,
        image_file: null,
        parent: null,
      }),
    };
  },
  computed: {
    parents() {
      let parents = [];
      for (let i = 0; i < this.categories.length; i++) {
        if (this.categories[i].id != this.form.id) {
          parents.push(this.categories[i]);
        }
      }
      return parents;
    },
    dialogLabel(){
      return this.isUpdate ? 'Edit Category' : 'New Category';
    }
  },
  methods: {
    getSlug() {
      this.$inertia.visit(route("categories.get-slug"), {
        method: "post",
        data: { name: this.form.name, id: this.form.id },
        preserveState: true,
        preserveScroll: true,
        replace: true,
        onSuccess: () => {
          this.form.slug = this.$page.props.flash.data;
        },
      });
    },
    openNew() {
      this.parents = this.categories;
      this.form = {};
      this.isUpdate = false;
      this.submitted = false;
      this.CategoryDialog = true;
    },
    editCategory(category) {
      this.form = { ...category };
      this.isUpdate = true;
      this.CategoryDialog = true;
    },
    confirmDeleteCategory(category) {
      this.category = category;
      this.deleteCategoryDialog = true;
    },
    hideDialog() {
      this.CategoryDialog = false;
      this.submitted = false;
    },
    saveCategory() {
      this.submitted = true;
      let url = !this.isUpdate ? route("categories.store") : route("categories.update", [this.form.id]);
      this.$inertia.visit(url, {
        method: "post",
        data: this.form,
        forceFormData: true,
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.CategoryDialog = false;
          this.$toast.add({ severity: "success", summary: "Success", detail: "Category created", life: 3000 });
        },
      });
    },
    deleteCategory() {
      this.$inertia.visit(route("categories.delete", [this.category.id]), {
        method: "post",
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.$toast.add({ severity: "success", summary: "Success", detail: "Category deleted", life: 3000 });
          this.deleteCategoryDialog = false;
        },
      });
    },
    onCategoryImageChange(event) {
      this.form.image_file = event.target.files[0];
      this.form.image = URL.createObjectURL(event.target.files[0]);
      console.log(this.form.image_file);
    },
    exportCSV() {
      this.$refs.dt.exportCSV();
    },
    confirmDeleteSelected() {
      this.deleteCategoriesDialog = true;
    },
    deleteSelectedCategories() {
      let ids = [];
      for (let i = 0; i < this.selectedCategories.length; i++) {
        ids.push(this.selectedCategories[i].id);
      }

      this.$inertia.visit(route("categories.delete-multiple"), {
        method: "post",
        data: { ids: ids },
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.deleteCategoriesDialog = false;
          this.$toast.add({ severity: "success", summary: "Success", detail: "Categories deleted", life: 3000 });
          this.selectedCategories = null;
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.table-header {
  display: flex;
  justify-content: space-between;
}

.category-image {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.p-dialog .category-image {
  width: 60%;
  margin: 0 auto 2rem auto;
  display: block;
}

.confirmation-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

::v-deep(.p-toolbar) {
  flex-wrap: wrap;
  .p-button {
    margin-bottom: 0.25rem;
  }
}
</style>
