<template>
  <div
    v-if="login_show_alert"
    class="text-white text-center font-bold p-5 mb-4"
    :class="login_alert_variant"
  >
    {{ login_alert_msg }}
  </div>
  <vee-form :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <VeeField
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
        type="email"
        name="email"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <VeeField
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
        type="password"
        name="password"
      />
      <ErrorMessage class="text-red-600" name="password" />
    </div>
    <button
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      type="submit"
      :disabled="login_in_submission"
    >
      Submit
    </button>
  </vee-form>
</template>

<script>
export default {
  name: "LoginForm",

  data() {
    return {
      // Login Schema for validation
      loginSchema: {
        email: "required|min:3|max:100|email",
        password: "required|min:3|max:100",
      },

      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: "bg-blue-500",
      login_alert_msg: "Please wait! Your account is being created.",
    };
  },

  methods: {
    login(values) {
      this.login_in_submission = true;
      this.login_show_alert = true;
      this.login_alert_variant = "bg-blue-500";
      this.login_alert_msg = "Please wait! We will be log you in once you verified.";
      setTimeout((_) => {
        this.login_alert_variant = "bg-green-500";
        this.login_alert_msg = "Congrats! We log you in.";
      }, 3000);

      console.log(values);
    },
  },
};
</script>

<style></style>
