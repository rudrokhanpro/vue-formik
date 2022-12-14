<template>
  <div class="Field">
    <p>Name: {{ name }}</p>

    <Component :is="as" v-bind="$attrs">
      <slot />
    </Component>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Field',
  props: {
    name: {
      type: String,
      required: true
    },
    as: {
      type: String,
      default: 'input',
    },
  },
}
</script>