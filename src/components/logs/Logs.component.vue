<template>
  <div>
    <h2 class="title">Project: VivifyScrum</h2>
    <div class="logs-panel">
      <RecycleScroller :items="logs" :item-height="20" class="scroller">
        <div slot-scope="{ item }" class="line">> {{ item.text }}</div>
      </RecycleScroller>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  name: "Logs"
})
export default class LogsComponent extends Vue {
  logs: String[] = [];

  get channelName() {
    const { projectName, namespace } = this.$route.params;
    return `/logs/${projectName}/${namespace}`;
  }
  destroy() {
    this.$sockets.unsubscribeFromChannel(this.channelName);
  }
  mounted() {
    this.$sockets.subscribeToChannel(this.channelName, (data: any) => {
      const logs = data.map((log: { text: string; type: string }) => ({
        id:
          "_" +
          Math.random()
            .toString(36)
            .substr(2, 9),
        text: log.text,
        type: log.type,
        height: 10
      }));
      this.logs.push(...logs);
    });
  }
}
</script>

<style lang="scss">
.title {
  text-align: left;
  color: white;
  margin-bottom: 1rem;
}

.scroller {
  height: 100%;
  width: 100%;
}

.logs-panel {
  position: absolute;
  overflow: hidden;
  top: 10%;
  bottom: 10%;
  left: 10%;
  right: 10%;
  border: 1px solid #000;
  background: black;
  color: white;
  text-align: left;
  border-radius: 5px;
  padding: 1rem;

  .line {
    word-break: break-all;
  }
}
</style>
