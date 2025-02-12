import { useColorMode } from '@vueuse/core'
import { watch } from 'vue';

export const colorMode = useColorMode()

export function initColorMode() {
  const htmlElement = document.documentElement

  watch(colorMode, (newValue) => {
    if (newValue === 'dark') {
      htmlElement.classList.add('dark')
    } else {
      htmlElement.classList.remove('dark')
    }
  }, { immediate: true })
}
