<template>
  <div class="p-grid crud-demo">
    <div class="p-col-12">
      <Breadcrumb :model="breadcrumb" :title="title" :icon="icon" />
      <Toast />
    </div>

    <div class="p-xl-9 p-lg-8 p-sm-12">
      <Card>
        <template #title>Post Data</template>
        <template #content>
          <div class="p-field">
            <label for="title">Title</label>
            <InputText type="text" id="title" v-model.trim="form.title" autofocus :class="{ 'p-invalid': errors.title }" required="true" @blur="getSlug" />
            <small class="p-invalid" v-if="errors.title">{{ errors.title }}</small>
          </div>

          <div class="p-field">
            <label for="slug">Slug</label>
            <InputText type="text" id="slug" v-model.trim="form.slug" :class="{ 'p-invalid': errors.slug }" required="true" disabled="true" />
            <small class="p-invalid" v-if="errors.slug">{{ errors.slug }}</small>
          </div>

          <div class="p-field">
            <label for="excerpt">Excerpt</label>
            <Textarea name="excerpt" id="excerpt" v-model.trim="form.excerpt" :class="{ 'p-invalid': errors.excerpt }" />
            <small class="p-invalid" v-if="errors.excerpt">{{ errors.excerpt }}</small>
          </div>

          <div class="p-field">
            <label for="meta_description">Meta description</label>
            <InputText type="text" id="meta_description" v-model.trim="form.meta_description" autofocus :class="{ 'p-invalid': errors.meta_description }" required="true" />
            <small class="p-invalid" v-if="errors.meta_description">{{ errors.meta_description }}</small>
          </div>

          <div class="p-field">
            <label for="content">Content</label>
            <Editor v-model="form.content" editorStyle="height: 550px" />
          </div>
        </template>
      </Card>
    </div>

    <div class="p-xl-3 p-lg-4 p-sm-12">
      <Card>
        <template #title>Post Image</template>
        <template #content>
          <img :src="postImage" alt="Post Image" style="width: 100%" class="p-mb-1" />
          <input type="file" name="image" @change="onPostImageChange" accept="image/*" class="custom-input-file p-mr-2" />
        </template>
      </Card>

      <Card>
        <template #title>Post Gallery</template>
        <template #content>
          <Dropdown v-model="selectedGallery" optionLabel="name" optionValue="id" :filter="true" filterPlaceholder="Search..." placeholder="Select gallery" />
          <div class="p-mt-2" style="text-align: right">
            <Button icon="pi pi-plus" class="p-button-info" label="Add Gallery" />
          </div>
        </template>
      </Card>

      <Card>
        <template #title>Post Categories</template>
        <template #content>
          <div class="p-field-checkbox" v-for="(category, index) in categories" :key="index">
            <Checkbox :id="'category' + index" name="categories" v-model="form.categories" :value="category.id" @change="teste" />
            <label for="cat">{{ category.name }}</label>
          </div>
          <div class="p-mt-2" style="text-align: right">
            <Button icon="pi pi-plus" class="p-button-info" label="Add Category" />
          </div>
        </template>
      </Card>
    </div>

    <div class="p-xl-3 p-lg-4 p-sm-12">
      <Button icon="pi pi-plus" class="p-button-success p-mr-2" label="Save Post" />
      <Button icon="pi pi-times" class="p-button-warning" label="Cancel" />
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
    categories: Array
  },
  data() {
    return {
      title: "Create New Post",
      icon: "pi pi-fw pi-book",
      breadcrumb: [
        { label: "Posts", route: "posts" },
        { label: "Create", route: "posts.create" },
      ],
      changeImage: false,
      deletePostDialog: false,
      deletePostsDialog: false,
      selectedCategories: null,
      selectedGallery: null,
      selectedPosts: null,
      filters: { global: { value: null } },
      submitted: false,
      form: this.$inertia.form({
        id: null,
        title: null,
        slug: null,
        excerpt: null,
        categories: null,
        meta_description: null,
        content: null,
        image: "no-image.png",
        image_file: null,
      }),
      galleries: {},
    };
  },
  computed: {
    postImage(){
      return !this.changeImage ? 'storage/medium/' + this.form.image : this.form.image;
    }
  },
  methods: {
    onPostImageChange(event) {
      this.changeImage = true;
      this.form.image_file = event.target.files[0];
      this.form.image = URL.createObjectURL(event.target.files[0]);
    },
    teste(){
      console.log(this.selectedCategories);
    },
    getSlug() {
      this.$inertia.visit(route("posts.get-slug"), {
        method: "post",
        data: { name: this.form.title, id: this.form.id },
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
