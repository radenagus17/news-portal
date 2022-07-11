<template>
  <div class="hold-transition login-page">
    <h1 style="font-family: times new roman">Welcome Back!</h1>
    <div class="login-box" style="min-height: 369px">
      <div class="card card-outline card-primary">
        <div class="card-body">
          <form action="" @submit.prevent="handleSubmitLogin">
            <div class="input-group mb-3">
              <input type="email" class="form-control" placeholder="Email" v-model="user.email" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div class="input-group mb-3">
              <input type="password" class="form-control" placeholder="Password" v-model="user.password" />
              <div class="input-group-append">
                <div class="input-group-text">
                  <span class="fas fa-lock"></span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-8">
                <div class="icheck-primary">
                  <input type="checkbox" id="remember" />&nbsp;
                  <label for="remember"> Remember Me </label>
                </div>
              </div>
              <!-- /.col -->
              <div class="col-4">
                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
              </div>
              <!-- /.col -->
            </div>
          </form>

          <div class="social-auth-links text-center mt-2 mb-3">
            <p>- OR -</p>

            <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess"></GoogleLogin>
          </div>

          <p class="mb-0">
            <router-link class="text-center" :to="{ name: 'Register' }">Register a new admin</router-link>
          </p>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
    <!-- /.login-box -->
  </div>
  <!-- end login-page -->
</template>
<script>
import GoogleLogin from "vue-google-login";
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "LoginPage",
  data() {
    return {
      params: {
        client_id: "832674730203-e4fud4qgnk2lgcniridl4btkqpek2kff.apps.googleusercontent.com",
        // client_id: "832674730203-2t0l2dopa7l16ot9f22v495k4fejg15a.apps.googleusercontent.com",
      },
      renderParams: {
        width: 318,
        height: 50,
        longtitle: true,
        theme: "dark",
        scope: "profile email",
      },
      user: {
        email: "",
        password: "",
      },
    };
  },
  components: {
    GoogleLogin,
  },

  methods: {
    async onSuccess(user) {
      try {
        const id_token = user.getAuthResponse().id_token;
        const resp = await axios({
          url: "https://backend-menit-com.herokuapp.com/user/pub/sign-in-google",
          method: "POST",
          data: {
            id_token,
          },
        });
        const { access_token, username, role, id } = resp.data;
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("idUser", id);
        localStorage.setItem("role", role);
        localStorage.setItem("username", username);
        this.$store.commit("SET_USERNAME", username);
        this.$router.push({ name: "Home" });
      } catch (error) {
        console.log(error);
      }
    },

    handleSubmitLogin() {
      this.$store
        .dispatch("getUser", { email: this.user.email, password: this.user.password })
        .then(({ access_token, username, role, id }) => {
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("idUser", id);
          localStorage.setItem("role", role);
          localStorage.setItem("username", username);
          this.$store.commit("SET_USERNAME", username);
          Swal.fire({
            title: "Yeay!",
            text: `Welcome Back ${localStorage.getItem("username")}`,
            icon: "success",
            showConfirmButton: false,
          });
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          if (err.message === "Bad Request") {
            Swal.fire({
              title: "Error!",
              text: "Email/Password has been required",
              icon: "error",
            });
            this.user.email = "";
            this.user.password = "";
          } else if (err.message === "Unauthorized") {
            Swal.fire({
              title: "Error!",
              text: "Invalid Email/Password",
              icon: "error",
            });
            this.user.email = "";
            this.user.password = "";
          }
        });
    },
  },
};
</script>

<style></style>
