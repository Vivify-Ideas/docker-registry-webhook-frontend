<template>
  <layout>
    <h2 class="title">Project: VivifyScrum</h2>
    <div class="logs-panel">
      <RecycleScroller :items="logs" :item-height="10">
        <div slot-scope="{ item }" class="line">> {{ item.text }}</div>
      </RecycleScroller>
    </div>
  </layout>
</template>

<script>
import LayoutComponent from "./../../layout/layout.component";

export default {
  name: "Logs",
  components: {
    layout: LayoutComponent
  },
  data() {
    return {
      logs: []
    };
  },
  computed: {
    channelName() {
      const { projectName, namespace } = this.$route.params;
      return `/logs/${projectName}/${namespace}`;
    }
  },
  destroy() {
    this.$unsubscribeFromChannel(this.channelName);
  },
  mounted() {
    this.$subscribeToChannel(this.channelName, data => {
      const log = {
        id:
          "_" +
          Math.random()
            .toString(36)
            .substr(2, 9),
        text: data.text,
        type: data.type
      };
      this.logs.push(log);
    });
  }
};
</script>

<style lang="scss">
.title {
  text-align: left;
  color: white;
  margin-bottom: 1rem;
}

.logs-panel {
  height: 70vh;
  border: 1px solid #000;
  background: black;
  color: white;
  text-align: left;
  border-radius: 5px;
  padding: 1rem;
  overflow: scroll;

  .line {
    margin: 2px;
    word-break: break-all;
  }
}
</style>
