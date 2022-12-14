<template>
  <Formik :initial-values="initialValues" :validate="validate" @submit="handleSubmit" />
</template>

<script lang="ts">
import Formik from "./components/Formik.vue"

export default {
  name: 'App',
  components: {
    Formik,
  },
  data() {
    return {
      initialValues: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    validate(values) {
      console.log(values)
      const errors = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required';
      }
      return errors;
    },
    handleSubmit(values, setIsSubmitting) {
      console.log('Form submitted', values)
      setTimeout(() => {
        setIsSubmitting(false);
      }, 2000)
    }
  }
}
</script>


<style scoped>

</style>
