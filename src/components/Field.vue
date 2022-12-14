<template>
  <div class="Field">
    <p>Name: {{ name }} ({{ modelValue }})</p>
    <Component :is="as" v-bind:value="modelValue" v-bind:onInput="handleChange" v-bind="$attrs">
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
  inject: ['getForm'],
  data() {
    return {
      modelValue: '',
    }
  },
  computed: {
  },
  methods: {
    handleChange(event) {
      this.modelValue = event.target.value  
    },
  },
  created() {
    const form = this.getForm()
    this.modelValue = form[this.name]
  },
}
</script>