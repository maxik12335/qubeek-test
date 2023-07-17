<template>
  <div class="index">
    <button @click="$router.push('/preview')" class="button">
      Go to Preview
    </button>

    <h1 class="index__title">Index Page</h1>
      <input type="file" @change="handleFileUpload" class="hidden" multiple id="fileInput" />
      <label for="fileInput" class="label">
        {{ uploading ? "Uploading..." : "Click to Upload" }}
      </label>    
    </div>
</template>

<script>
import { useUploadsStore } from "../store/uploads";

export default {
  setup() {
    const { uploading, handleFileUpload} = useUploadsStore();

    return { uploading, handleFileUpload };
  },
};
</script>

<style>
.index {
  padding: 50px 0;
}

.index__title {
  text-align: center;
  font-size: 70px;
  margin-bottom: 50px;
}

input[type="file"].hidden {
  display: none; /* Скрываем стандартный input file */
}

.label {
  padding: 10px 30px;
  box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.2);
  cursor: pointer;
  margin: 0 auto;
  display: block;
  width: fit-content;
}

.label:hover {
  box-shadow: 0px 0px 8px 2px rgba(34, 60, 80, 0.4);
}
</style>