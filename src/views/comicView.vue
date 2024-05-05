<template>
  <div>
    <comic-header></comic-header>

    <comic-main :chapterInfo="this.$route.query.chapterInfo" ref="main"></comic-main>

    <!-- create series -->
    <i class="el-icon-plus add" @click="dialogFormVisible = true"></i>

    <!-- create form -->
    <el-dialog :visible.sync="dialogFormVisible" class="dialog">
      <p>Add Pages</p>
      <label for="upload" class="">
        <div class="trigger">
          <img src="" alt="" ref="preview" class="preview" @load="adaptation"/>
        </div>
      </label>
      <input
        name="PageImage"
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
import comicMain from "@/components/comic/comicMain.vue";
import comicHeader from "@/components/comic/comicHeader.vue";
import axios from "axios";
export default {
  data() {
    return {
      chapterInfo: {},
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        Id: "",
        PageImage: "",
      },
      formLabelWidth: "120px",
    };
  },
  create() {
    this.chapterInfo = this.$route.query.chapterInfo;
  },
  components: {
    comicMain,
    comicHeader,
  },
  methods: {
    onChange() {
      const newFile = this.$refs?.selected.files;
      console.log(newFile);
      console.log("111");

      this.$refs.preview.src = URL.createObjectURL(newFile[0]);
      this.form.PageImage = newFile[0];
      // this.uploadFilesByOSS2(File);
    },
    onSubmit() {
      let formData = new FormData();
      formData.append("Id", this.$route.query.chapterInfo.id);
      formData.append("PageImage", this.form.PageImage);
      axios
        .post("/admin/pages/addPages", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(
          (res) => {
            console.log(res);
            this.$refs.main.getPages();
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
    }
  },
};
</script>

<style scoped>
.add {
  position: fixed;
  right: 1%;
  bottom: 1%;
  font-size: 0.24rem;
  font-weight: bold;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: white;
  background: #f9a51c;
  border-radius: 100%;
  box-shadow: 4px 4px 4px #0000003f;
}
.el-container {
  height: 100%;
  overflow: hidden;
}
.dialog {
  margin-top: -70px;
}
.trigger {
  width: 100%;
  height: 500px;
  border-radius: 10px;
  border: 1px solid #aaa;
  display: flex;
  align-items: center;
  justify-content: center;
}
.preview {
  object-fit: cover;
}
.dialog-footer {
  margin-top: -50px;
}
input[name="Title"],
input[name="Description"] {
  display: block;
  width: 100%;
  margin-bottom: 30px;
  height: 30px;
}
</style>
