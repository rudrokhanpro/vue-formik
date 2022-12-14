<template>
  <div class="app">
    <Formik :initial-values="initialValues" :validate="validate" @submit="onSubmit">
      <template #default="{ handleSubmit, errors, values, isSubmitting }">
        <form @submit.prevent="handleSubmit">
          <!-- DEBUG -->
          <pre>values: {{ JSON.stringify(values, null, 4) }} isSubmitting: {{ String(isSubmitting) }}</pre>

          <Field name="email" placeholder="Email" :disabled="isSubmitting" />
          <p v-if="errors.email">{{ errors.email }}</p>

          <Field name="password" placeholder="Password" :disabled="isSubmitting" />
          <p v-if="errors.password">{{ errors.password }}</p>

          <Field name="color" as="select" :disabled="isSubmitting">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <button type="submit" :disabled="isSubmitting">Submit</button>
        </form>
      </template>
    </Formik>
  </div>
</template>

<script lang="ts">
import Field from './components/Field.vue';
import Formik from './components/Formik.vue';
import type { FormikErrors, FormikSubmitStatusSetter, FormikValues } from '../types/formik';

export default {
  name: 'App',
  components: {
    Formik,
    Field,
  },
  data() {
    return {
      initialValues: {
        email: 'rudro@email.com',
        password: '',
        color: 'red',
      },
    }
  },
  methods: {
    validate(values: FormikValues) {
      const errors: FormikErrors = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email.toString())
      ) {
        errors.email = 'Invalid email address';
      }

      if (!values.password) {
        errors.password = 'Required';
      }

      return errors;
    },
    onSubmit(values: FormikValues, setIsSubmitting: FormikSubmitStatusSetter) {
      setIsSubmitting(true)

      setTimeout(() => {
        setIsSubmitting(false)

        alert('Submitted !')
      }, 2000)
    },
  }
}
</script>
