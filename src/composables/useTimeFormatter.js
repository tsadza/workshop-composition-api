import { ref, computed } from 'vue';

export const useTimeFormatter = () => {

  const showSeconds = ref(true);
  const toggleFormat = () => {
    showSeconds.value = !showSeconds.value;
  };

  // transform seconds to hh:mm:ss format
  const formatTime = (seconds) => {
    if (showSeconds.value) return seconds;

    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formattedTime = (seconds) => computed(() => formatTime(seconds));

  return { toggleFormat, formattedTime };
}
