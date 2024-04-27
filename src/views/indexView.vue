<template>
  <el-container>
    <el-header height="80px">
      <index-header></index-header>
    </el-header>
    <el-container class="content">
      <el-aside width="3.5rem">
        <index-aside></index-aside>
      </el-aside>
      <el-main>
        <!-- display series list -->
        <index-main-list ref="mainList"></index-main-list>

        <!-- create series -->
        <i class="el-icon-plus add" @click="dialogFormVisible = true"></i>

        <!-- create form -->
        <el-dialog :visible.sync="dialogFormVisible" class="dialog">
          <p>Create Series</p>
          <input placeholder="Title" name="Title" v-model="form.Title" />
          <input
            v-model="form.Description"
            name="Description"
            placeholder="Description"
            type="textarea"
            rows="5"
          />
          <label for="upload" class="">
            <div class="trigger">
              <img src="" alt="" ref="preview" class="preview" />
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
            <el-button @click="dialogFormVisible = false">Cancel</el-button>
            <el-button
              type="primary"
              @click="
                dialogFormVisible = false;
                onSubmit();
              "
              >Confirm</el-button
            >
          </div>
        </el-dialog>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import axios from "axios";
import IndexAside from "@/components/index/IndexAside.vue";
import IndexMainList from "@/components/index/IndexMainList.vue";
import IndexHeader from "@/components/index/IndexHeader.vue";
export default {
  components: { IndexAside, IndexMainList, IndexHeader },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        Title: "",
        Description: "",
        CoverImage: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    onChange() {
      const newFile = this.$refs?.selected.files;
      console.log(newFile);
      console.log("111");

      this.$refs.preview.src = URL.createObjectURL(newFile[0]);
      this.form.CoverImage = newFile[0];
      // this.uploadFilesByOSS2(File);
    },
    onSubmit() {
      let formData = new FormData();
      formData.append("Title", this.form.Title);
      formData.append("Description", this.form.Description);
      formData.append("CoverImage", this.form.CoverImage);
      axios
        .post("/admin/series/addSeries", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then(
          (res) => {
            console.log(res);
            this.$refs.mainList.getAll();
          },
          (err) => {
            console.log(err);
          }
        );
    },
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #000000;
  color: #333;
  text-align: left;
  line-height: 80px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  /* height: 600px; */
  padding: 15px 5px;
  overflow-y: overlay;
  position: relative;
  width: 100%;
  height: 100%;
}
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
  height: 150px;
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
input[name="Title"],
input[name="Description"] {
  display: block;
  width: 100%;
  margin-bottom: 30px;
  height: 30px;
}
</style>