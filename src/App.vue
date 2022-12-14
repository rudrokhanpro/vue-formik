<template>
  <Formik :initial-values="initialValues" :validate="validate" @submit="handleSubmit">
    <template #default="{ handleSubmit }">
      <form @submit="handleSubmit">
        <Field name="email" />
        <Field name="password" type="password" />
        <Field name="color" as="select">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Field>
        <button>Submit</button>
      </form>
    </template>
    
  </Formik>
</template>

<script lang="ts">
import Formik from "./components/Formik.vue"
import Field from "./components/Field.vue"

export default {
  name: 'App',
  components: {
    Formik,
    Field,
  },
  data() {
    return {
      initialValues: {
        email: 'toto@gmail.com',
        password: '',
        color: 'red',
      }
    }
  },
  methods: {
    validate(values) {
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
    handleSubmit(values, setIsSubmitting, event) {
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
