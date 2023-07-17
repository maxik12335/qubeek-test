import { defineStore } from "pinia";
import { ref } from "vue";

export const useUploadsStore = defineStore("uploads", () => {
  const uploadedFiles = ref([])
  const uploading = ref(false)

  const handleFileUpload = async (event) => {
    uploading.value = true
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      uploadedFiles.value.push({
        filename: file.name,
        extention: file.type,
        size: file.size,
      });
    }

    uploading.value = false;
  }

  return {
    uploadedFiles, uploading, handleFileUpload
  }
});

// Options API
// export const useUploadsStore = defineStore({
//   id: "uploads",
//   state: () => ({
//     uploadedFiles: [],
//     uploading: false,
//   }),
//   actions: {
//     async handleFileUpload(event) {
//       console.log(event.target.files)
//       this.uploading = true;
//       const files = event.target.files;

//       for (let i = 0; i < files.length; i++) {
//         const file = files[i];

//         this.uploadedFiles.push({
//           filename: file.name,
//           extention: file.type,
//           size: file.size,
//         });
//       }

//       this.uploading = false;
//     },
//   },
// });
