<template>
  <div class="container">
    <div class="list">
      <div class="comic-tabs" v-for="tab in ResponseData" :key="tab.id">
        <tab-view
          :comicsName="tab.title"
          :coverImg="tab.portraitImagePath"
          :comicDef="tab.des"
          :comicChap="tab.chapters"
          :comicAuth="tab.authors"
          :comicID="tab.id"
          :info="tab"
        ></tab-view>
      </div>
    </div>
  </div>
</template>

<script>
import TabView from "./TabView.vue";
import axios from "axios";
export default {
  components: {
    TabView,
  },
  data() {
    return {
      ResponseData: [],
      Covers: [
        {
          id: 1,
          title: "Fallen Angel",
          portraitImagePath: require("../../assets/covers/167577146663e23e4a5f022316.jpg"),
          definition:
            "UPDATES MONDAYS - Masato a young angel accidentally travels too close to the edge of the forbidden lands and loses his wings, falling to Earth. Stranded on a new planet and without his wings, Masato must navigate the mortal world with the help of new friends he meets along the way. However, returning home to the heavens is not going to be easy, as an ancient war between the divine and the corrupted has resulted in the gates between the heavens and the mortal world being closed. Masato must now find a way to overcome the obstacles and return home, all while uncovering the truth about the ongoing war and his role in it.",
          chapters: [
            "Angel Down",
            "Pignose VS The old man!",
            "What's this powers?",
            "Clean up in Shoyo!",
            "A stroll through the forest",
            "Hear my roar!",
            "Hard decison",
          ],
          authors: ["DE'ANDRE MOFFETT", "KAPUMAX OMEGA"],
          Status: "complete",
          des: "",
        },
        {
          id: "0001",
          title: "Fallen Angel",
          portraitImagePath: require("../../assets/covers/167577146663e23e4a5f022316.jpg"),
          definition:
            "UPDATES MONDAYS - Masato a young angel accidentally travels too close to the edge of the forbidden lands and loses his wings, falling to Earth. Stranded on a new planet and without his wings, Masato must navigate the mortal world with the help of new friends he meets along the way. However, returning home to the heavens is not going to be easy, as an ancient war between the divine and the corrupted has resulted in the gates between the heavens and the mortal world being closed. Masato must now find a way to overcome the obstacles and return home, all while uncovering the truth about the ongoing war and his role in it.",
          chapters: [
            "Angel Down",
            "Pignose VS The old man!",
            "What's this powers?",
            "Clean up in Shoyo!",
            "A stroll through the forest",
            "Hear my roar!",
            "Hard decison",
          ],
          authors: ["DE'ANDRE MOFFETT", "KAPUMAX OMEGA"],
          Status: "complete",
          des: "",
        },
        {
          id: "0001",
          title: "Fallen Angel",
          portraitImagePath: require("../../assets/covers/167577146663e23e4a5f022316.jpg"),
          definition:
            "UPDATES MONDAYS - Masato a young angel accidentally travels too close to the edge of the forbidden lands and loses his wings, falling to Earth. Stranded on a new planet and without his wings, Masato must navigate the mortal world with the help of new friends he meets along the way. However, returning home to the heavens is not going to be easy, as an ancient war between the divine and the corrupted has resulted in the gates between the heavens and the mortal world being closed. Masato must now find a way to overcome the obstacles and return home, all while uncovering the truth about the ongoing war and his role in it.",
          chapters: [
            "Angel Down",
            "Pignose VS The old man!",
            "What's this powers?",
            "Clean up in Shoyo!",
            "A stroll through the forest",
            "Hear my roar!",
            "Hard decison",
          ],
          authors: ["DE'ANDRE MOFFETT", "KAPUMAX OMEGA"],
          Status: "complete",
          des: "",
        },
        {
          id: "0001",
          title: "Fallen Angel",
          portraitImagePath: require("../../assets/covers/167577146663e23e4a5f022316.jpg"),
          definition:
            "UPDATES MONDAYS - Masato a young angel accidentally travels too close to the edge of the forbidden lands and loses his wings, falling to Earth. Stranded on a new planet and without his wings, Masato must navigate the mortal world with the help of new friends he meets along the way. However, returning home to the heavens is not going to be easy, as an ancient war between the divine and the corrupted has resulted in the gates between the heavens and the mortal world being closed. Masato must now find a way to overcome the obstacles and return home, all while uncovering the truth about the ongoing war and his role in it.",
          chapters: [
            "Angel Down",
            "Pignose VS The old man!",
            "What's this powers?",
            "Clean up in Shoyo!",
            "A stroll through the forest",
            "Hear my roar!",
            "Hard decison",
          ],
          authors: ["DE'ANDRE MOFFETT", "KAPUMAX OMEGA"],
          Status: "complete",
          des: "",
        },
        {
          id: "0001",
          title: "Fallen Angel",
          portraitImagePath: require("../../assets/covers/167577146663e23e4a5f022316.jpg"),
          definition:
            "UPDATES MONDAYS - Masato a young angel accidentally travels too close to the edge of the forbidden lands and loses his wings, falling to Earth. Stranded on a new planet and without his wings, Masato must navigate the mortal world with the help of new friends he meets along the way. However, returning home to the heavens is not going to be easy, as an ancient war between the divine and the corrupted has resulted in the gates between the heavens and the mortal world being closed. Masato must now find a way to overcome the obstacles and return home, all while uncovering the truth about the ongoing war and his role in it.",
          chapters: [
            "Angel Down",
            "Pignose VS The old man!",
            "What's this powers?",
            "Clean up in Shoyo!",
            "A stroll through the forest",
            "Hear my roar!",
            "Hard decison",
          ],
          authors: ["DE'ANDRE MOFFETT", "KAPUMAX OMEGA"],
          Status: "complete",
          des: "",
        },
        {
          id: "0001",
          title: "Fallen Angel",
          portraitImagePath: require("../../assets/covers/167577146663e23e4a5f022316.jpg"),
          definition:
            "UPDATES MONDAYS - Masato a young angel accidentally travels too close to the edge of the forbidden lands and loses his wings, falling to Earth. Stranded on a new planet and without his wings, Masato must navigate the mortal world with the help of new friends he meets along the way. However, returning home to the heavens is not going to be easy, as an ancient war between the divine and the corrupted has resulted in the gates between the heavens and the mortal world being closed. Masato must now find a way to overcome the obstacles and return home, all while uncovering the truth about the ongoing war and his role in it.",
          chapters: [
            "Angel Down",
            "Pignose VS The old man!",
            "What's this powers?",
            "Clean up in Shoyo!",
            "A stroll through the forest",
            "Hear my roar!",
            "Hard decison",
          ],
          authors: ["DE'ANDRE MOFFETT", "KAPUMAX OMEGA"],
          Status: "complete",
          des: "",
        },
        {
          id: "0001",
          title: "Fallen Angel",
          portraitImagePath: require("../../assets/covers/167577146663e23e4a5f022316.jpg"),
          definition:
            "UPDATES MONDAYS - Masato a young angel accidentally travels too close to the edge of the forbidden lands and loses his wings, falling to Earth. Stranded on a new planet and without his wings, Masato must navigate the mortal world with the help of new friends he meets along the way. However, returning home to the heavens is not going to be easy, as an ancient war between the divine and the corrupted has resulted in the gates between the heavens and the mortal world being closed. Masato must now find a way to overcome the obstacles and return home, all while uncovering the truth about the ongoing war and his role in it.",
          chapters: [
            "Angel Down",
            "Pignose VS The old man!",
            "What's this powers?",
            "Clean up in Shoyo!",
            "A stroll through the forest",
            "Hear my roar!",
            "Hard decison",
          ],
          authors: ["DE'ANDRE MOFFETT", "KAPUMAX OMEGA"],
          Status: "complete",
          des: "",
        },
      ],
    };
  },
  methods: {
    getAll: function () {
      var that = this;
      // 10.1.1.55:8080
      axios.get("/admin/series").then(
        function (response) {
          console.log(response);
          that.ResponseData = response.data;
          console.log("success");
        },
        function (err) {
          console.log(err);
        }
      );
    },
  },
  created() {
    this.getAll();
  },
};
</script>

<style>
.list {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(auto-fill);
  grid-row-gap: 10px;
  /* grid-gap: 10px; */
  /* overflow-y: overlay;  */
}
.comic-tabs {
  /* white-space: nowrap; */
  display: inline-block;
  /* height: 160px; */
  /* margin: 1px 3px; */
}
/* 整体滚动条 */
::-webkit-scrollbar {
  width: 3px; /* 控制滚动条的宽度 */
  position: absolute;
  right: 0;
}

/* 滚动条轨道 */
/* ::-webkit-scrollbar-track {
  background: transparent;
} */

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  background: #d7dee0; /* 滑块的颜色 */
  border-radius: 20px;
}

/* 滑块hover效果 */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* 滑块hover的颜色 */
}
</style>