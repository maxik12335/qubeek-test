<template>
  <div class="preview">
    <button @click="$router.push('/')" class="button">
      Go to Index
    </button>
    <h1 class="preview__title">Preview Page</h1>
    <ul v-if="uploadedFiles.length" class="preview__list">
      <li v-for="(file, index) in uploadedFiles" :key="index" class="preview__list__item">
        {{ index + 1 }}
        <span>name</span>: {{ file.filename }},
        <span>extention</span>: {{ file.extention }},
        <span>size</span>: {{ file.size }}
      </li>
    </ul>
  </div>
</template>

<script>
import { useUploadsStore } from "../store/uploads";

export default {
  setup() {
    const { uploadedFiles } = useUploadsStore();

    return { uploadedFiles };
  },
};
</script>

<style>
.preview {
  padding: 50px 0;
}

.preview__title {
  text-align: center;
  font-size: 70px;
  margin-bottom: 50px;
}

.preview__list {
  width: fit-content;
  margin: 0 auto;
  padding: 50px;
  box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.2);
}

.preview__list__item {
  font-size: 17px;
  border-bottom: 1px dashed;
  padding-bottom: 3px;
  margin-bottom: 10px;
}

.preview__list__item span {
  font-weight: 600;
}

</style>
