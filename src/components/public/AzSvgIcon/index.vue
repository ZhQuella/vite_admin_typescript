<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
    :width="size"
  >
    <use
      :xlink:href="iconName"
      :fill="color"
    />
  </svg>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue'
export default defineComponent({
  name: "AzSvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '#889aa4',
    },
    size: {
      type: Number,
      default: 20
    }
  },
  setup(props) {
    return {
      iconName: computed(() => `#icon-${props.iconClass}`),
      svgClass: computed(() => {
        if (props.className) {
          return `svg-icon ${props.className}`
        }
        return 'svg-icon'
      }),
    }
  },
})
</script>
