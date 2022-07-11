<template>
  <div class="wrapper">
    <Navbar></Navbar>

    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="container">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>Details News</h1>
              </div>
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">News</a></li>
                  <li class="breadcrumb-item active">{{ this.$route.params.id }}</li>
                </ol>
              </div>
            </div>
          </div>
          <!-- /.container-fluid -->
        </section>

        <!-- Main content -->
        <section class="content">
          <!-- Default box -->
          <div class="card card-solid">
            <div class="card-body">
              <div class="row">
                <div class="col-12 col-sm-6">
                  <h3 class="d-inline-block d-sm-none">{{ news.title }}</h3>
                  <div class="col-12">
                    <img :src="news.imgUrl" class="product-image" :alt="news.title" />
                  </div>
                  <div class="col-12 mt-4">
                    <div class="btn btn-danger btn-lg" @click.prevent="handleClick">
                      <i class="fas fa-heart fa-lg mr-2"></i>
                      Add to Bookmark
                    </div>
                  </div>
                </div>
                <div class="col-12 col-sm-6">
                  <h3 class="my-3">{{ news.title }}</h3>
                  <p>{{ news.content }}</p>

                  <hr />
                  <div id="accordion">
                    <div class="card card-primary">
                      <div class="card-header">
                        <h4 class="card-title w-100">
                          <a class="d-block w-100" data-toggle="collapse" href="#collapseOne"> News Category </a>
                        </h4>
                      </div>
                      <div id="collapseOne" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                          {{ news.Category.name }}
                        </div>
                      </div>
                    </div>

                    <div class="card card-primary">
                      <div class="card-header">
                        <h4 class="card-title w-100">
                          <a class="d-block w-100" data-toggle="collapse" href="#collapseOne"> Author </a>
                        </h4>
                      </div>
                      <div id="collapseOne" class="collapse" data-parent="#accordion">
                        <div class="card-body">
                          {{ news.User.username }}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-lime color-palette py-2 px-3 mt-4">
                    <h2 class="mb-0 text-center">{{ news.status }}</h2>
                  </div>
                  <div class="info-box col-md-12 col-sm-6 col-12 mt-4">
                    <div>
                      <p class="text-monospace">Scan This QRCode</p>

                      <img :src="qrcode" alt="data qrcode" />
                    </div>

                    <div class="product-share d-flex align-items-center mx-auto">
                      <a href="#" class="text-gray">
                        <i class="fab fa-facebook-square fa-2x"></i>
                      </a>
                      <a href="#" class="text-gray">
                        <i class="fab fa-twitter-square fa-2x"></i>
                      </a>
                      <a href="#" class="text-gray">
                        <i class="fas fa-envelope-square fa-2x"></i>
                      </a>
                      <a href="#" class="text-gray">
                        <i class="fas fa-rss-square fa-2x"></i>
                      </a>
                    </div>
                    <!-- /.info-box-content -->
                  </div>
                  <!-- /.info-box -->
                </div>
              </div>
              <div class="row mt-4">
                <nav class="w-100">
                  <div class="nav nav-tabs" id="product-tab" role="tablist">
                    <a class="nav-item nav-link active" id="product-desc-tab" data-toggle="tab" href="#product-desc" role="tab" aria-controls="product-desc" aria-selected="true">Description</a>
                    <a class="nav-item nav-link" id="product-comments-tab" data-toggle="tab" href="#product-comments" role="tab" aria-controls="product-comments" aria-selected="false">Comments</a>
                    <a class="nav-item nav-link" id="product-rating-tab" data-toggle="tab" href="#product-rating" role="tab" aria-controls="product-rating" aria-selected="false">Rating</a>
                  </div>
                </nav>
                <div class="tab-content p-3" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="product-desc" role="tabpanel" aria-labelledby="product-desc-tab">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae condimentum erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed posuere, purus at efficitur hendrerit,
                    augue elit lacinia arcu, a eleifend sem elit et nunc. Sed rutrum vestibulum est, sit amet cursus dolor fermentum vel. Suspendisse mi nibh, congue et ante et, commodo mattis lacus. Duis varius finibus purus sed venenatis.
                    Vivamus varius metus quam, id dapibus velit mattis eu. Praesent et semper risus. Vestibulum erat erat, condimentum at elit at, bibendum placerat orci. Nullam gravida velit mauris, in pellentesque urna pellentesque
                    viverra. Nullam non pellentesque justo, et ultricies neque. Praesent vel metus rutrum, tempus erat a, rutrum ante. Quisque interdum efficitur nunc vitae consectetur. Suspendisse venenatis, tortor non convallis interdum,
                    urna mi molestie eros, vel tempor justo lacus ac justo. Fusce id enim a erat fringilla sollicitudin ultrices vel metus.
                  </div>
                  <div class="tab-pane fade" id="product-comments" role="tabpanel" aria-labelledby="product-comments-tab">
                    Vivamus rhoncus nisl sed venenatis luctus. Sed condimentum risus ut tortor feugiat laoreet. Suspendisse potenti. Donec et finibus sem, ut commodo lectus. Cras eget neque dignissim, placerat orci interdum, venenatis odio.
                    Nulla turpis elit, consequat eu eros ac, consectetur fringilla urna. Duis gravida ex pulvinar mauris ornare, eget porttitor enim vulputate. Mauris hendrerit, massa nec aliquam cursus, ex elit euismod lorem, vehicula
                    rhoncus nisl dui sit amet eros. Nulla turpis lorem, dignissim a sapien eget, ultrices venenatis dolor. Curabitur vel turpis at magna elementum hendrerit vel id dui. Curabitur a ex ullamcorper, ornare velit vel, tincidunt
                    ipsum.
                  </div>
                  <div class="tab-pane fade" id="product-rating" role="tabpanel" aria-labelledby="product-rating-tab">
                    Cras ut ipsum ornare, aliquam ipsum non, posuere elit. In hac habitasse platea dictumst. Aenean elementum leo augue, id fermentum risus efficitur vel. Nulla iaculis malesuada scelerisque. Praesent vel ipsum felis. Ut
                    molestie, purus aliquam placerat sollicitudin, mi ligula euismod neque, non bibendum nibh neque et erat. Etiam dignissim aliquam ligula, aliquet feugiat nibh rhoncus ut. Aliquam efficitur lacinia lacinia. Morbi ac
                    molestie lectus, vitae hendrerit nisl. Nullam metus odio, malesuada in vehicula at, consectetur nec justo. Quisque suscipit odio velit, at accumsan urna vestibulum a. Proin dictum, urna ut varius consectetur, sapien
                    justo porta lectus, at mollis nisi orci et nulla. Donec pellentesque tortor vel nisl commodo ullamcorper. Donec varius massa at semper posuere. Integer finibus orci vitae vehicula placerat.
                  </div>
                </div>
              </div>
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->
        </section>
      </div>
      <!-- /.content -->
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import Swal from "sweetalert2";
export default {
  name: "DetailNewsPage",

  data() {
    return {
      qrcode: "",
    };
  },

  components: {
    Navbar,
    Footer,
  },

  methods: {
    handleClick() {
      if (!localStorage.getItem("access_token")) {
        Swal.fire({
          title: "Oops!",
          text: `Please, Login First`,
          icon: "info",
          showConfirmButton: false,
        });
        this.$router.push({ name: "Login" });
      } else {
        this.$store
          .dispatch("addToBookmark", this.$route.params.id)
          .then(() => {
            Swal.fire({
              title: "Yeay!",
              text: `Successful Add News to Bookmark`,
              icon: "success",
              showConfirmButton: false,
            });
            this.$router.push({ name: "Home" });
          })
          .catch((err) => {
            console.log(err.message);
          });
      }
    },

    getQrCode() {
      fetch(`https://api.happi.dev/v1/qrcode?data=${this.news.imgUrl}&width=150&dots=000000&bg=FFFFFF&apikey=73d5eeaqu5asuzWkaiskn9ToDWM3Hmg5Let9nd72k6DkeKOihpe5yc3l`)
        .then((resp) => {
          return resp.json();
        })
        .then(({ qrcode }) => {
          this.qrcode = qrcode;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  computed: {
    news() {
      return this.$store.state.news;
    },
  },

  async created() {
    await this.$store.dispatch("getNewsById", await this.$route.params.id);
    await this.getQrCode();
  },
};
</script>

<style></style>
