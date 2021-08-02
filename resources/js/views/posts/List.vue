<template>
  <div class="p-grid crud-demo">
    <div class="p-col-12">
      <Breadcrumb :model="breadcrumb" :title="title" :icon="icon" />

      <div class="card">
        <Toast />

        <Toolbar class="p-mb-4">
          <template v-slot:left>
            <inertia-link type="button" :href="route('posts.create')" class="p-button-success p-button p-component p-mr-2"><i class="pi pi-plus"> </i>&nbsp;New</inertia-link>
            <button type="button" class="p-button-danger p-button p-component p-mr-2" @click="confirmDeleteSelected" :disabled="!selectedPosts || !selectedPosts.length"><i class="pi pi-trash"></i>&nbsp; Delete</button>
          </template>

          <template v-slot:right>
            <button type="button" class="p-button-help p-button p-component" @click="exportCSV($event)"><i class="pi pi-upload"></i>&nbsp;Export</button>
          </template>
        </Toolbar>

        <DataTable ref="dt" :value="posts" v-model:selection="selectedPosts" dataKey="id" :paginator="true" :rows="10" :filters="filters" :globalFilterFields="['name', 'email', 'profile']" filterDisplay="menu" paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" :rowsPerPageOptions="[5, 10, 25]" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} posts" responsiveLayout="scroll">
          <template #header>
            <div class="table-header p-d-flex p-flex-column p-flex-md-row p-jc-md-between">
              <h5 class="p-m-0">Manage posts</h5>
              <span class="p-input-icon-left">
                <i class="pi pi-search" />
                <InputText v-model="filters['global'].value" placeholder="Search..." />
              </span>
            </div>
          </template>
          <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
          <Column header="Image">
            <template #body="slotProps">
              <img :src="'storage/thumbs/' + slotProps.data.image" :alt="slotProps.data.image" class="post-image" />
            </template>
          </Column>
          <Column field="id" header="Id" :sortable="true" />
          <Column field="title" header="Title" :sortable="true" />
          <Column field="slug" header="Slug" :sortable="true" />
          <Column field="excerpt" header="Excerpt" :sortable="true" />
          <Column field="author" header="Author" :sortable="true" />
          <Column header="Manage">
            <template #body="slotProps">
              <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" />
              <Button icon="pi pi-trash" class="p-button-rounded p-button-warning" @click="confirmDeletePost(slotProps.data)" />
            </template>
          </Column>
        </DataTable>

        <Dialog v-model:visible="deletePostDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
          <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
            <span v-if="post"
              >Are you sure you want to delete <b>{{ post.name }}</b
              >?</span
            >
          </div>
          <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deletePostDialog = false" />
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deletePost" />
          </template>
        </Dialog>

        <Dialog v-model:visible="deletePostsDialog" :style="{ width: '450px' }" header="Confirm" :modal="true">
          <div class="confirmation-content">
            <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
            <span>Are you sure you want to delete the selected posts?</span>
          </div>
          <template #footer>
            <Button label="No" icon="pi pi-times" class="p-button-text" @click="deletePostsDialog = false" />
            <Button label="Yes" icon="pi pi-check" class="p-button-text" @click="deleteSelectedPosts" />
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
    posts: Array,
    errors: Object,
  },
  data() {
    return {
      title: "Posts",
      icon: "pi pi-fw pi-book",
      breadcrumb: [{ label: "Posts", route: "posts" }],
      changeImage: false,
      deletePostDialog: false,
      deletePostsDialog: false,
      selectedPosts: null,
      filters: { global: { value: null } },
      submitted: false,
    };
  },
  methods: {
    getSlug() {
      this.$inertia.visit(route("posts.get-slug"), {
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
    confirmDeletePost(post) {
      this.post = post;
      this.deletePostDialog = true;
    },
    hideDialog() {
      this.PostDialog = false;
      this.submitted = false;
    },

    deletePost() {
      this.$inertia.visit(route("posts.delete", [this.post.id]), {
        method: "post",
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.$toast.add({ severity: "success", summary: "Success", detail: "Post deleted", life: 3000 });
          this.deletePostDialog = false;
        },
      });
    },

    exportCSV() {
      this.$refs.dt.exportCSV();
    },
    confirmDeleteSelected() {
      this.deletePostsDialog = true;
    },
    deleteSelectedPosts() {
      let ids = [];
      for (let i = 0; i < this.selectedPosts.length; i++) {
        ids.push(this.selectedPosts[i].id);
      }

      this.$inertia.visit(route("posts.delete-multiple"), {
        method: "post",
        data: { ids: ids },
        preserveState: true,
        preserveScroll: true,
        onSuccess: () => {
          this.deletePostsDialog = false;
          this.$toast.add({ severity: "success", summary: "Success", detail: "Posts deleted", life: 3000 });
          this.selectedPosts = null;
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

.post-image {
  width: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
