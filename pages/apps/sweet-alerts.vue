<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
import 'sweetalert2/dist/sweetalert2.min.css';
import auth from '@/middleware/auth';

export default {
    setup() {
        definePageMeta({
            middleware: [auth],
        })

    },
    components: {
        PageHeader,
    },
    data() {
        return {
            dataToPass: {
                current: "Sweet Alerts",
                list: [
                    'Apps', 'Sweet Alerts'
                ]
            },
        };
    }, methods: {
        basicSwal: function () {
            this.$swal('Hello Vue world!!!');
        },
        titleSwal() {
            this.$swal('The Internet?',
                'That thing is still around?',
                'question');
        },
        footerSwal() {
            this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            });
        },
        longContaneSwal() {
            this.$swal({
                imageUrl: 'https://placeholder.pics/svg/300x1500',
                imageHeight: 1500,
                imageAlt: 'A tall image'
            });
        },
        customHTMLSwal() {
            this.$swal({
                title: '<strong>HTML <u>example</u></strong>',
                icon: 'info',
                html:
                    'You can use <b>bold text</b>, ' +
                    '<a target="_blank" href="//sweetalert2.github.io">links</a> ' +
                    'and other HTML tags',
                showCloseButton: true,
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText:
                    '<i class="fe fe-thumbs-up"></i> Great!',
                confirmButtonAriaLabel: 'Thumbs up, great!',
                cancelButtonText:
                    '<i class="fe fe-thumbs-down"></i>',
                cancelButtonAriaLabel: 'Thumbs down'
            });
        },
        multipleButtonsSwal() {
            this.$swal({
                title: 'Do you want to save the changes?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't save`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    this.$swal.fire('Saved!', '', 'success')
                } else if (result.isDenied) {
                    this.$swal.fire('Changes are not saved', '', 'info')
                }
            });
        },
        customPositionedSwal() {
            this.$swal({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
            });
        },
        customAlertSwal() {
            this.$swal({
                title: 'Custom animation with Animate.css',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });
        },
        alserWithParametersSwal() {
            this.$swal({
                title: 'A wild Pikachu appeared! What do you want to do?',
                showCancelButton: true,
                showDenyButton: true,
                denyButtonText: 'run away!',
                confirmButtonText: 'Throw Pokéball!',
                confirmButtonColor: '#4466f2',
                cancelButtonText: 'Defeat',
                cancelButtonColor: '#4466f2',

            }).then((result) => {
                if (result.value) {
                    this.$swal({
                        title: 'Gotcha!',
                        text: 'Pikachu was caught!',
                        type: 'success'
                    });
                }
                else if (result.isDenied) {
                    this.$swal({
                        title: 'Go away Safely',
                    })
                }
                else {
                    this.$swal({
                        title: 'Pikachu fainted! You gained 500 XP!'
                    });
                }
            });
        },
        AlertImageSwal() {
            this.$swal({
                title: 'Sweet!',
                text: 'Modal with a custom image.',
                imageUrl: 'https://unsplash.it/400/200',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            });
        },
        AutoCloseAlertSwal() {
            let timerInterval: any;
            this.$swal({
                title: 'Auto close alert!',
                html: 'I will close in <b></b> milliseconds.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    this.$swal.showLoading()
                    const b = this.$swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = this.$swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result: any) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === this.$swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            });
        },
        ajaxRequestSwal() {
            this.$swal({
                title: 'Submit your Github username',
                input: 'text',
                inputAttributes: {
                    autocapitalize: 'off'
                },
                showCancelButton: true,
                confirmButtonText: 'Look up',
                showLoaderOnConfirm: true,
                preConfirm: (login: any) => {
                    return fetch(`//api.github.com/users/${login}`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(response.statusText)
                            }
                            return response.json()
                        })
                        .catch(error => {
                            this.$swal.showValidationMessage(
                                `Request failed: ${error}`
                            )
                        })
                },
                allowOutsideClick: () => !this.$swal.isLoading()
            }).then((result: any) => {
                if (result.isConfirmed) {
                    this.$swal.fire({
                        title: `${result.value.login}'s avatar`,
                        imageUrl: result.value.avatar_url
                    })
                }
            });
        }
    }
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Basic Alert
                    </div>
                </div>
                <div class="card-body text-center">
                    <button class="btn btn-primary" @click="basicSwal" id="basic-alert">Basic Alert</button>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Title With Text Under
                    </div>
                </div>
                <div class="card-body text-center">
                    <button class="btn btn-primary" @click="titleSwal" id="alert-text">Title With Text</button>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        With Text,Error Icon & Footer
                    </div>
                </div>
                <div class="card-body text-center">
                    <button class="btn btn-primary" @click="footerSwal" id="alert-footer">Alert Footer</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Alert With Long Window
                    </div>
                </div>
                <div class="card-body text-center">
                    <button class="btn btn-primary" @click="longContaneSwal" id="long-window">Long Window Here</button>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Custom HTML Description
                    </div>
                </div>
                <div class="card-body text-center">
                    <button class="btn btn-primary" @click="customHTMLSwal" id="alert-description">Custom HTML
                        Alert</button>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Alert With Multiple Buttons
                    </div>
                </div>
                <div class="card-body text-center">
                    <button class="btn btn-primary" @click="multipleButtonsSwal" id="three-buttons">Multiple
                        Buttons</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Custom Positioned Dialog Alert
                    </div>
                </div>
                <div class="card-body text-center">
                    <button class="btn btn-primary" @click="customPositionedSwal" id="alert-dialog">Alert Dialog</button>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Confirm Alert
                    </div>
                </div>
                <div class="card-body text-center">
                    <button class="btn btn-primary" @click="customAlertSwal" id="alert-confirm">Confirm Alert</button>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Alert With Parameters
                    </div>
                </div>
                <div class="card-body text-center">
                    <button class="btn btn-primary" @click="alserWithParametersSwal" id="alert-parameter">Alert
                        Parameters</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Alert With Image
                    </div>
                </div>
                <div class="card-body text-center">
                    <button class="btn btn-primary" @click="AlertImageSwal" id="alert-image">Image Alert</button>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Auto Close Alert
                    </div>
                </div>
                <div class="card-body text-center">
                    <button class="btn btn-primary" @click="AutoCloseAlertSwal" id="alert-auto-close">Auto Close</button>
                </div>
            </div>
        </div>
        <div class="col-xl-4">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Ajax Request Alert
                    </div>
                </div>
                <div class="card-body text-center">
                    <button class="btn btn-primary" @click="ajaxRequestSwal" id="alert-ajax">Ajax Request</button>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-4 -->
</template>

<style scoped></style>

