import { ref, computed, onMounted, onUnmounted } from 'vue';

export const useTimer = () => {
  const time = ref(0);
  const intervalId = ref(null);

  const isTimerRunning = computed(() => !(intervalId.value === null));

  const startTimer = () => {
    if (isTimerRunning) {
      intervalId.value = setInterval(() => {
        time.value++;
      }, 1000);
    }
  };

  const stopTimer = () => {
    if (isTimerRunning) {
      clearInterval(intervalId.value);
      intervalId.value = null;
    }
  };

  onMounted(startTimer);
  onUnmounted(() => {
    stopTimer();
    console.log(`Timer stopped at: ${time.value} seconds`);
  });

  return { time, startTimer, stopTimer, isTimerRunning };
}
