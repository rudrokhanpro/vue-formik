<template>
  <form class="Formik" @submit.prevent="handleSubmit">
    <h1>Formik</h1>
    <pre>
      Form: {{ JSON.stringify(form) }}
      Errors: {{ JSON.stringify(errors) }}
      Is submitting: {{ isSubmitting }}
    </pre>
    <slot v-bind:handleSubmit="handleSubmit">
      <div v-for="field in fields">
        <input type="text" v-model="form[field]" :placeholder="field">
        <p v-if="errors[field]">
          {{ errors[field] }}
        </p>
      </div>
      <button type="submit" :disabled="isSubmitting">Submit</button>
    </slot>
  </form>
</template>

<script lang="ts">
const isEmpty = (obj: Object) => Object.keys(obj).length === 0

export default {
  name: 'Formik',
  props: {
    initialValues: {
      type: Object,
      required: true
    },
    validate: {
      type: Function,
      required: true,
    },
  },
  emits: ['submit'],
  data() {
    return {
      form: {},
      errors: {},
      isSubmitting: false,
    }
  },
  computed: {
    fields() {
      const fields = Object.keys(this.initialValues)

      return fields
    },
  },
  methods: {
    setIsSubmitting(isSubmitting) {
      this.isSubmitting = isSubmitting
    },
    handleSubmit() {
      const values = { ...this.form }
      this.errors = this.validate(values)

      if (isEmpty(this.errors)) {
        this.$emit('submit', values, this.setIsSubmitting)

        this.isSubmitting = true;
      }
    },
  },
  created() {
    this.form = { ...this.initialValues };
  }
}
</script>