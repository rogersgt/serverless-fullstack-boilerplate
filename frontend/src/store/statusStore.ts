import { ref } from 'vue';
import { defineStore } from 'pinia';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { AxiosError } from 'axios';

import axiosClient from '../services/httpService';

const useStatusStore = defineStore('StatusStore', () => {
  const statusMessage = ref<string>('');

  const getStatus = async () => {
    try {
      const { data }: { data: { message: string } } = await axiosClient.get('/status');
      statusMessage.value = data.message;
    } catch (error: AxiosError | unknown) {
      console.error(error);
      statusMessage.value = 'API is unreachable';
    }
  };

  return {
    getStatus,
    statusMessage,
  };
});

export default useStatusStore;
