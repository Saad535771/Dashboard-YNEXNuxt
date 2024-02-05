<script lang="ts">
import passwordInput from '@/components/UI/passwordInput.vue';

export default {
    setup() {
        definePageMeta({
            layout: 'custom'
        })
    },
    components: {
        passwordInput
    }
}
</script>

<template>
    <div class="container-lg">
        <div class="row justify-content-center align-items-center authentication authentication-basic h-100">
            <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
                <div class="my-5 d-flex justify-content-center">
                    <NuxtLink to='/'>
                        <img src="/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo">
                        <img src="/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark">
                    </NuxtLink>
                </div>
                <div class="card custom-card">
                    <div class="card-body p-5">
                        <p class="h5 fw-semibold mb-2 text-center">Sign Up</p>
                        <p class="mb-4 text-muted op-7 fw-normal text-center">Welcome & Join us by creating a free account !
                        </p>
                        <div class="row gy-3">
                            <div class="col-xl-12">
                                <label for="signup-firstname" class="form-label text-default">First Name</label>
                                <input type="text" class="form-control form-control-lg" id="signup-firstname"
                                    placeholder="first name">
                            </div>
                            <div class="col-xl-12">
                                <label for="signup-lastname" class="form-label text-default">Last Name</label>
                                <input type="text" class="form-control form-control-lg" id="signup-lastname"
                                    placeholder="last name">
                            </div>
                            <div class="col-xl-12">
                                <label for="signup-password" class="form-label text-default">Password</label>
                                <div class="input-group">
                                    <passwordInput initialValue="" name="password" id="password" placeholder="Password" />
                                </div>
                            </div>
                            <div class="col-xl-12 mb-2">
                                <label for="signup-confirmpassword" class="form-label text-default">Confirm Password</label>
                                <div class="input-group">
                                    <passwordInput initialValue="" name="confirmpassword" id="confirmpassword"
                                        placeholder="Confirm Password" />
                                </div>
                                <div class="form-check mt-3">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label text-muted fw-normal" for="defaultCheck1">
                                        By creating a account you agree to our <NuxtLink to="/pages/terms-conditions"
                                            class="text-success"><u>Terms & Conditions</u></NuxtLink> and <a
                                            class="text-success"><u>Privacy Policy</u></a>
                                    </label>
                                </div>
                            </div>
                            <div class="col-xl-12 d-grid mt-2">
                                <button class="btn btn-lg btn-primary">Create Account</button>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="fs-12 text-muted mt-3">Already have an account? <NuxtLink
                                    to="/authentication/sign-in/basic" class="text-primary">Sign In</NuxtLink>
                            </p>
                        </div>
                        <div class="text-center my-3 authentication-barrier">
                            <span>OR</span>
                        </div>
                        <div class="btn-list text-center">
                            <button class="btn btn-icon btn-light">
                                <i class="ri-facebook-line fw-bold text-dark op-7"></i>
                            </button>
                            <button class="btn btn-icon btn-light">
                                <i class="ri-google-line fw-bold text-dark op-7"></i>
                            </button>
                            <button class="btn btn-icon btn-light">
                                <i class="ri-twitter-line fw-bold text-dark op-7"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
