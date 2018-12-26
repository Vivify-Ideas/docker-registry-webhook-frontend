<template>
  <layout>
    <h2 class="title">Project: VivifyScrum</h2>
    <v-content class="content">
      <div class="logs-panel">
        <p
          class="line"
          v-for="log in logs"
          :key="log.id"
          :class="{ [log.type]: true }"
        >
          > {{ log.text }}
        </p>
      </div>
    </v-content>
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

.content {
  height: 100vh;
}

.logs-panel {
  border: 1px solid #000;
  height: 100vh;
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
