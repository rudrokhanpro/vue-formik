<template>
  <slot v-bind="{ values, errors, handleSubmit, isSubmitting }"></slot>
</template>

<script lang="ts">
import type { FormikData, FormikErrors, FormikValues } from "../../types/formik"

export default {
  name: 'Formik',
  props: {
    initialValues: {
      type: Object,
      default: () => ({}),
    },
    validate: {
      type: Function,
      default: () => (values: FormikValues): FormikErrors => ({}),
    },
  },
  data(): FormikData {
    return {
      values: {},
      errors: {},
      isSubmitting: false,
    }
  },
  methods: {
    handleSubmit() {
      this.errors = this.validate(this.values)
      const hasErrors = Object.keys(this.errors).length > 0

      if (!hasErrors) {
        this.$emit('submit', this.values, this.setIsSubmitting)
      }
    },
    getValueByName(name: string) {
      return this.values[name]
    },
    setValueByName(name: string, value: any) {
      this.values[name] = value
    },
    setIsSubmitting(isSubmitting: boolean) {
      this.isSubmitting = isSubmitting
    }
  },
  provide() {
    return {
      getValueByName: this.getValueByName,
      setValueByName: this.setValueByName,
    }
  },
  created() {
    this.values = { ...this.initialValues }
  },
}
</script>