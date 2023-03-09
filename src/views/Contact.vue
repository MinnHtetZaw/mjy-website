<template>
<Master>
  <div class="my-5">
    <div class="row">
      <div class="col-8 m-auto">
        <div class="card shadow border-0 rounded">
          <div class="row">
            <div class="col-6">
              <div class="p-4">
                <p class="contact-title">Contact Us</p>
                <p class="">
                  Welcome to the Contact Us page of Our Network. Our team of dedicated professionals is here to answer any questions you may have about our pharmacy material distribution services. We strive to provide fast and friendly service, so don't hesitate to reach out to us today.                </p>

                <div>
                  <div class="mb-3">
                    <label class="form-label text-success">Name</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label class="form-label text-success">Email</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="mb-3">
                    <label class="form-label text-success">Message</label>
                    <textarea name="" rows="5" class="form-control"></textarea>
                  </div>
                  <div>
                    <button class="btn btn-success">Send Message</button>
                  </div>
                </div>
              </div>

            </div>
            <div class="col-6">
              <img src="../assets/factory.jpg" class="contact-img" alt="">
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

<!--  office information-->
  <div class="row mb-5">
    <div class="col-8 m-auto">
      <div class="card p-3 shadow border-0">
        <p class="contact-title">Office information</p>
        <div class="row">
          <div class="col-4">
            <p class="contact-text">Address</p>
          </div>
          <div class="col-8">
            <p class="contact-text">: No. 216/222,8 Floor, Room No. 8B,8C & 8D, Corner of Bo Myat Hun Road & Mahabandoola Road,</p>
          </div>
        </div>

        <div class="row">
          <div class="col-4">
            <p class="contact-text">Tel</p>
          </div>
          <div class="col-8">
            <p class="contact-text">: (95) 1-8202578, (95) 1-8293891, (95) 9-73041385</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="contact-text">Fax</p>
          </div>
          <div class="col-8">
            <p class="contact-text">: (95) 1-8293875</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="contact-text">Email</p>
          </div>
          <div class="col-8">
            <p class="contact-text">: mjv.disposablesyringe@amail.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>

<!--  factory information-->
  <div class="row mb-5">
    <div class="col-8 m-auto">
      <div class="card p-3 shadow border-0">
        <p class="contact-title">Factory information</p>
        <div class="row">
          <div class="col-4">
            <p class="contact-text">Address</p>
          </div>
          <div class="col-8">
            <p class="contact-text">:No. 41, Min Theikdi Kyaw Swar Street, Industrial Zone(2), Hlaing Tharyar T/S, Yangon, Myanmar.</p>
          </div>
        </div>

        <div class="row">
          <div class="col-4">
            <p class="contact-text">Tel</p>
          </div>
          <div class="col-8">
            <p class="contact-text">: (95) 1-3684561 95) 1-3684681</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <p class="contact-text">Fax</p>
          </div>
          <div class="col-8">
            <p class="contact-text">: (95) 1-3684564.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</Master>
</template>

<script>
import Master from "@/components/Master";
export default {
  name: "Contact",
  components: {Master}
}
</script>

<style scoped>

</style>