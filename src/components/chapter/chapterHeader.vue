<template>
  <div class="header">
    <i class="el-icon-back" @click="getBack"></i>
    <button class="btn">Add Author Detail</button>
    <button class="btn">Add Cast</button>
    <button class="btn btn3" @click="dialogFormVisible = true">
      Create Chapter
    </button>

    <!-- create form -->
    <el-dialog :visible.sync="dialogFormVisible" class="dialog">
      <p>Create Chapter</p>
      <input placeholder="Title" name="Title" v-model="form.Title" />
      <label for="upload" class="">
        <div class="trigger">
          <img src="" alt="" ref="preview" class="preview" @load="adaptation"/>
        </div>
      </label>
      <input
        name="CoverImage"
        type="file"
        id="upload"
        style="display: none"
        ref="selected"
        @change="onChange"
        accept="image/*"
      />
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false;reset()">Cancel</el-button>
        <el-button
          type="primary"
          @click="
            dialogFormVisible = false;
            onSubmit();
            reset()
          "
          >Confirm</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    getBack() {
      window.history.back(-1);
    },
    onChange() {
      const newFile = this.$refs?.selected.files;
      console.log(newFile);
      console.log("111");

      this.$refs.preview.src = URL.createObjectURL(newFile[0]);
      this.form.ChapterImage = newFile[0];
      // this.uploadFilesByOSS2(File);
    },
    onSubmit() {
      let formData = new FormData();

      formData.append("Id", this.id);
      formData.append("Title", this.form.Title);
      formData.append("ChapterImage", this.form.ChapterImage);
      axios
        .post("/admin/chapters/addChapters", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(
          (res) => {
            console.log(res);
            this.$emit("update");
          },
          (err) => {
            console.log(err);
          }
        );
    },
    adaptation() {
      const img = this.$refs.preview
      if(img.naturalHeight > img.naturalWidth) {
        img.style.height = "100%"
        img.style.width = "auto"
      } else {
        img.style.width = "100%"
        img.style.height = "auto"
      }
    },
    reset() {
      this.$refs.preview.src = ""
      this.$refs.selected.value = ""
      this.form.Title = ""
    }
  },
  data() {
    return {
      dialogFormVisible: false,
      form: {
        Title: "",
        ChapterImage: "",
      },
    };
  },
  props: {
    id: Number,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  height: 70px;
  line-height: 70px;
  align-items: center;
  background: black;
}

.header i {
  font-size: 0.36rem;
  display: inline-block;
  margin-right: 12rem;
  margin-left: 30px;
  color: #fff;
  cursor: pointer;
}

.header .btn {
  font-size: 0.16rem;
  margin: 0;
  padding: 0 20px;
  border: none;
  /* width: 300px; */
  height: 40px;
  border-radius: 10px;
  background: #edb13a;
  font-weight: bold;
  cursor: pointer;
}

.header .btn3 {
  margin-right: 50px;
}
.dialog {
  margin-top: -70px;
}
.trigger {
  width: 100%;
  height: 300px;
  border-radius: 10px;
  border: 1px solid #aaa;
  display: inline-block;
}
.preview {
  width: 200px;
}
.dialog-footer {
  margin-top: -50px;
}
input[name="Title"] {
  display: block;
  width: 100%;
  margin-bottom: 30px;
  height: 30px;
  border: 1px solid #aaa;

}
</style>