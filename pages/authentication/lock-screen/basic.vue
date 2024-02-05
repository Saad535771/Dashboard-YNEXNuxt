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
        <div class="row justify-content-center authentication authentication-basic align-items-center h-100">
            <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-6 col-sm-8 col-12">
                <div class="my-5 d-flex justify-content-center">
                    <NuxtLink to='/'>
                        <img src="/images/brand-logos/desktop-logo.png" alt="logo" class="desktop-logo">
                        <img src="/images/brand-logos/desktop-dark.png" alt="logo" class="desktop-dark">
                    </NuxtLink>
                </div>
                <div class="card custom-card">
                    <div class="card-body p-5">
                        <p class="h5 fw-semibold mb-2 text-center">Lock Screen</p>
                        <p class="mb-3 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
                        <div class="d-flex align-items-center mb-3">
                            <div class="lh-1">
                                <span class="avatar avatar-md avatar-rounded">
                                    <img src="/images/faces/15.jpg" alt="">
                                </span>
                            </div>
                            <div class="ms-3">
                                <p class="mb-0 fw-semibold text-dark">jhonslicer21@gmail.com</p>
                            </div>
                        </div>
                        <div class="row gy-3">
                            <div class="col-xl-12 mb-2">
                                <label for="lockscreen-password" class="form-label text-default">Password</label>
                                <div class="input-group">
                                    <passwordInput initialValue="" name="password" id="password" placeholder="Password" />
                                </div>
                                <div class="mt-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                        <label class="form-check-label text-muted fw-normal" for="defaultCheck1">
                                            Remember password ?
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-12 d-grid mt-2">
                                <NuxtLink to='/' class="btn btn-lg btn-primary">Unlock</NuxtLink>
                            </div>
                        </div>
                        <div class="text-center">
                            <p class="fs-12 text-muted mt-3 mb-0">Try unlock with different methods <a class="text-success"
                                    href="javascript:void(0);"><u>Finger print</u></a> / <a class="text-success"
                                    href="javascript:void(0);"><u>Face Id</u></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
