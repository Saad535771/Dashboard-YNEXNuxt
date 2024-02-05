<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import fullscreen_closableCard from '@/components/UI/fullscreen_closableCard.vue'
import auth from '@/middleware/auth';


export default {
  setup() {
    definePageMeta({
      middleware: [auth],
    })
  },
  components: {
    PageHeader,
    fullscreen_closableCard
  },
  data() {
    return {
      BASE_URL: '/',
      dataToPass: {
        current: "Terms and Conditions",
        list: [
          'Pages', 'Terms and Conditions'
        ]
      },
      title: '',
    };
  },
  methods: {
    handleResize() {
      // Update PerfectScrollbar on resize
      if (this.$refs.termsScrollbar) {
        this.$refs.termsScrollbar.update();
      }
    },

  },
  mounted() {
    this.BASE_URL = import.meta.env.BASE_URL;
    this.title = '<div class="terms-heading-cover d-flex align-items-center text-fixed-white h5 fw-semibold mb-0"><span class="avatar avatar-md me-3"><img src=' + this.BASE_URL + '/images/media/media-67.png alt=""></span> YNEX - Terms & Conditions</div>';
    window.addEventListener('resize', this.handleResize);
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<template>
  <PageHeader :propData="dataToPass" />

  <div class="container-lg">
    <!-- Start::row-1 -->
    <div class="row justify-content-center">
      <div class="col-xl-8">

        <fullscreen_closableCard :showCardVal="true"
          customCardBodyClass="p-0"
          customCardFooterClass="d-sm-flex d-block align-items-center justify-content-between shadow-lg"
          customCardHeaderClass="p-3 text-fixed-white bg-primary h5" :title="title" :hasFullScreen=true>
          <PerfectScrollbar ref="termsScrollbar" class="p-4 text-muted terms-conditions" id="terms-scroll">
            <div class="mb-5">
              <p class="mb-3 op-7">
                <span class="fw-bold text-default op-8">If you stay in the USA </span>the ynex <a class="text-primary"
                  href="javascript:void(0);"><u>Terms and Conditions</u></a> consists of below rules and <a
                  class="text-primary" href="javascript:void(0);"><u>User Agreements</u></a> consists of below
                policies
                <a class="text-primary" href="javascript:void(0);"><u>Ynex Rules & Privacy Policies</u></a>
                incorporated
                with the below conditions.
              </p>
              <p class="mb-0 op-7">
                <span class="fw-bold text-default op-8">If you stay any where in the world other than USA </span>the
                ynex <a class="text-primary" href="javascript:void(0);"><u>Terms and Conditions</u></a> consists of
                below rules and <a class="text-primary" href="javascript:void(0);"><u>User Agreements</u></a> consists
                of below policies <a class="text-primary" href="javascript:void(0);"><u>Ynex Rules & Privacy
                    Policies</u></a> incorporated with the below conditions.
              </p>
            </div>
            <h6 class="fw-bold pb-3 text-default op-7"><span class="terms-heading">Terms & Services :</span></h6>
            <div class="mb-4">
              <p class="fw-semibold text-muted mb-2 fs-14">1 - Lorem ipsum dolor sit amet.</p>
              <p class="op-7 mb-0">
                Note that you'll sometimes see this agreement referred to as a Terms of Use, User Agreement or Terms
                of
                Service agreement. These terms are interchangeable and refer to the same type of agreement
              </p>
            </div>
            <div class="mb-4">
              <p class="fw-semibold text-muted mb-2 fs-14">2 - Consectetur adipisicing elit.</p>
              <p class="op-7 mb-2">
                While they are not legally required, terms and conditions set the stage for any successful business
                relationship. By making it clear and putting these guidelines in writing, business owners can avoid
                misunderstandings with their customers.
              </p>
              <p class="op-7">
                It also allows you to decide what you consider acceptable and which type of conduct could lead you to
                terminate a relationship with a user.
              </p>
            </div>
            <div class="mb-4">
              <p class="fw-semibold text-muted mb-2 fs-14">3 - There are many variations.</p>
              <p class="op-7">
                Limitation of liability disclaimers is one of the main reasons why business owners take the time to
                include terms and conditions on their websites. When reasonable and drafted adequately, such clauses
                can
                help protect your business against claims and lawsuits and limit the amount of money that you would
                have
                to pay in damages.
              </p>
            </div>
            <div class="mb-4">
              <p class="fw-semibold text-muted mb-2 fs-14">4 - If you allow your users to share.</p>
              <p class="op-7 mb-2">
                If you allow your users to share comments or photos on your website or leave reviews of the products
                that you sell, you will want to have a section in your terms that governs their conduct and sets out
                what is acceptable and what isn’t.
              </p>
              <p class="op-7 mb-2">
                In this clause, you could reserve the right to monitor the user-generated content shared on your
                website
                and remove anything that goes against your guidelines. You could expressly ask your users not to post
                anything that contains obscene language or any material that could be considered harmful or violent or
                infringes on someone else’s copyright.
              </p>
            </div>
            <div class="mb-0">
              <p class="fw-semibold text-muted mb-2 fs-14">5 - You could also make it clear.</p>
              <p class="op-7 mb-2">
                You could also make it clear that you reserve the right to suspend or delete the accounts of repeat
                infringers. This will help you make your website a safe space where people can feel comfortable
                sharing
                their opinions, which is especially important if you operate a news site, blog, or forum.
              </p>
              <p class="op-7 mb-0">
                From a business point of view, you could reserve the right to use the submitted content for marketing
                purposes which a lot of big box stores and eCommerce retailers do in order to promote products that
                get
                rave reviews. It’s important for your customers to know that you plan on doing so, otherwise they
                could
                be surprised to see their words or photo used in a commercial!
              </p>
            </div>

          </PerfectScrollbar>
          <template #footer>
            <div>
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="privacy-policy">
                <label class="form-check-label text-muted" for="privacy-policy">
                  I agree with the
                </label><a href="javascript:void(0);" class="fw-semibold text-muted ms-1"><u>Privacy Policy</u></a>
              </div>
              <div class="form-check d-block">
                <input class="form-check-input" type="checkbox" value="" id="terms_conditions">
                <label class="form-check-label text-muted" for="terms_conditions">
                  I agree with the
                </label><a href="javascript:void(0);" class="fw-semibold text-muted ms-1"><u>Terms &amp;
                    Conditions</u></a>
              </div>
            </div>
            <div class="btn-list mt-sm-0 mt-2">
              <button class="btn btn-outline-danger btn-wave waves-effect waves-light">DECLINE</button>
              <button class="btn btn-primary btn-wave waves-effect waves-light">ACCEPT</button>
            </div>
          </template>
        </fullscreen_closableCard>
      </div>
    </div>
    <!--End::row-1 -->
  </div>
</template>

<style scoped></style>

