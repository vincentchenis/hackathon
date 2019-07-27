<template>
  <div class="Main flexbox">
    <div class="centerBanner">
      Get in touch!
    </div>
    <div class="explanation">
      <p>if you're a student, get your school signed up by talking to a teacher!</p>
      <p>If you're a teacher/school representative, call us on (02) 98711868 on Monday to Friday between 9am to 5pm.</p>
      <p>Or, provide us with your email so we can contact you: </p>
    </div>
    <div class="review">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="input-group-2" label="Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="School:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>

          <div class="flexbox"><b-button type="submit" variant="primary" style="margin-left: auto">Submit</b-button></div>
        </b-form>
    </div>
  </div>
</template>


<script>
export default {
    name: 'Contact us',
data() {
  return {
    form: {
      email: '',
      name: ''
    },
    show: true
  }
},
methods: {
  onSubmit() {
    // Reset our form values
    this.form.email = ''
    this.form.name = ''
    this.show = false
  }
}
}
</script>

<style scoped>
h1 {
  color: green;
}
.review {
    align-self: center;
    width: 40%;
}
</style>
