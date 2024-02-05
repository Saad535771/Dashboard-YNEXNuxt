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
                        <p class="h5 fw-semibold mb-2 text-center">Reset Password</p>
                        <p class="mb-4 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
                        <div class="row gy-3">
                            <div class="col-xl-12">
                                <label for="reset-password" class="form-label text-default">Current Password</label>
                                <div class="input-group">
                                    <passwordInput initialValue="" name="currentpassword" id="currentpassword"
                                        placeholder="Current Password" />
                                </div>
                            </div>
                            <div class="col-xl-12">
                                <label for="reset-newpassword" class="form-label text-default">New Password</label>
                                <div class="input-group">
                                    <passwordInput initialValue="" name="newpassword" id="newpassword"
                                        placeholder="New Password" />
                                </div>
                            </div>
                            <div class="col-xl-12 mb-2">
                                <label for="reset-confirmpassword" class="form-label text-default">Confirm Password</label>
                                <div class="input-group">
                                    <passwordInput initialValue="" name="confirmpassword" id="confirmpassword"
                                        placeholder="Confirm Password" />
                                </div>
                                <div class="mt-3">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                        <label class="form-check-label text-muted fw-normal" for="defaultCheck1">
                                            Remember password ?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 d-grid mt-2">
                                <NuxtLink to="/authentication/sign-in/basic" class="btn btn-lg btn-primary">Create
                                </NuxtLink>
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
