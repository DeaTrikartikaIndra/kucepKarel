<template>
<v-content>
<v-container>
  <v-card
    class="overflow-hidden-center"
  >
    <v-toolbar
      flat
      color="white"
    >
      <v-icon>mdi-account</v-icon>
      <v-toolbar-title class="font-weight-light">
        Login
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      <v-text-field
        color="white"
        label="Username"
      ></v-text-field>
      <v-text-field
        color="white"
        label="Password"
        :type="showPassword ? 'text' : 'Password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      ></v-text-field>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        @click="Login"
      >
        Login
      </v-btn>
    </v-card-actions>
    <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      left
    >
      Login success
    </v-snackbar>
  </v-card>
  </v-container>
  </v-content>
</template>

<script>
 export default {
    dt()
    {
        return{
            showPaasword:false
        }
    },
    name: 'Login',
 }
</script>
