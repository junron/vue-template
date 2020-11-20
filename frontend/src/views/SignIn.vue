<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <!--  You can use expressions in data binding too      -->
        {{ name === "" ? "Sign In" : `Welcome, ${name}!` }}
        <v-spacer/>
      </v-card-title>
      <v-form class="ma-4">
        <!--   v-model binds the variable passed to the value of the element
               In this case, the variable `name` will be bound to the text entered by the user
               This allows the card title to update dynamically
             -->
        <v-text-field
          v-model="name"
          label="Name"
          required
        />
        <!--   You can reference your own components by name
               Data emitted by events are stored in the $event variable
            -->
        <MGSelect
          @update="$data.mentorGroup = $event"
        />
        <!--  Add : before an attribute to bind the value of the variable

              Example:
              disabled="!(name && mentorGroup)" would pass the string literal "!(name && mentorGroup)"
              while :disabled="!(name && mentorGroup)" evaluates the expression

              Exceptions:
              v-model and @event always bind variables/functions

              Check component documentation for more information
        -->
        <v-btn
          class="my-4"
          @click="signIn()"
          :disabled="!(name && mentorGroup)"
          color="success">
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import MGSelect from "@/components/MGSelect.vue";

export default Vue.extend({
  name: "SignIn",
  // Specify child components you would like to use here
  components: {
    MGSelect
  },
  // Vue tracks modifications to objects returned from the data function and updates the HTML
  // when necessary
  data() {
    return {
      name: "",
      mentorGroup: null,
    };
  },

  methods: {
    signIn() {
      const user = {
        name: this.$data.name,
        mentorGroup: this.$data.mentorGroup,
      };
      localStorage.setItem("user", JSON.stringify(user));
      this.$store.state.user = user;
      this.$router.push("/");
    }
  },
});
</script>
