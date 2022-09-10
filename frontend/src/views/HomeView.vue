<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    />
    <div>
      <button @click="getStatus">Get API Status</button>
      <p>{{ statusMessage }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import { useStatusStore } from '../store/index';

export default defineComponent({
  name: 'HomeView',
  setup() {
    const statusStore = useStatusStore();

    const { statusMessage } = storeToRefs(statusStore);
    const getStatus = (e: Event) => {
      e.preventDefault();
      return statusStore.getStatus();
    };

    return {
      statusMessage,
      getStatus,
    };
  },
});
</script>
