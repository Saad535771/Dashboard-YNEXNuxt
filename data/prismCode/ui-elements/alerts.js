export let basic = {
    script: `&lt;div class="alert alert-warning alert-dismissible fade show" role="alert">
      &lt;strong>Holy guacamole!</strong> You should check in on some of those fields below.
      &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
        &lt;i class="bi bi-x"></i>
      &lt;/button>
    &lt;/div>`
},
    live = {
        script: `&lt;div v-if="showLive" class="alert alert-warning alert-dismissible fade show" role="alert">
    &lt;strong>Holy guacamole!</strong> You should check in on some of those fields
    below.
</div>
&lt;button type="button" class="btn btn-primary" id="liveAlertBtn" @click="showLive = !showLive;">Show live
    alert
</button>`
    },
    defaultAlerts = {
        script: `
    &lt;div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
    </div>
    &lt;div class="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
    </div>
    &lt;div class="alert alert-success" role="alert">
        A simple success alert—check it out!
    </div>
    &lt;div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
    </div>
    &lt;div class="alert alert-warning" role="alert">
        A simple warning alert—check it out!
    </div>
    &lt;div class="alert alert-info" role="alert">
        A simple info alert—check it out!
    </div>
    &lt;div class="alert alert-light" role="alert">
        A simple light alert—check it out!
    </div>
    &lt;div class="alert alert-dark" role="alert">
        A simple dark alert—check it out!
    </div>` },
    linksInAlerts = {
        script: `
    &lt;div class="alert alert-primary" role="alert">
        A simple primary alert with &lt;a href="javascript:void(0);" class="alert-link">an example
            link</a>.
        Give it a click if you like.
    </div>
    &lt;div class="alert alert-secondary" role="alert">
        A simple secondary alert with &lt;a href="javascript:void(0);" class="alert-link">an example
            link</a>. Give it a click if you like.
    </div>
    &lt;div class="alert alert-success" role="alert">
        A simple success alert with &lt;a href="javascript:void(0);" class="alert-link">an example
            link</a>.
        Give it a click if you like.
    </div>
    &lt;div class="alert alert-danger" role="alert">
        A simple danger alert with &lt;a href="javascript:void(0);" class="alert-link">an example
            link</a>.
        Give it a click if you like.
    </div>
    &lt;div class="alert alert-warning" role="alert">
        A simple warning alert with &lt;a href="javascript:void(0);" class="alert-link">an example
            link</a>.
        Give it a click if you like.
    </div>
    &lt;div class="alert alert-info" role="alert">
        A simple info alert with &lt;a href="javascript:void(0);" class="alert-link">an example link</a>.
        Give it a click if you like.
    </div>
    &lt;div class="alert alert-light" role="alert">
        A simple light alert with &lt;a href="javascript:void(0);" class="alert-link">an example
            link</a>.
        Give it a click if you like.
    </div>
    &lt;div class="alert alert-dark" role="alert">
        A simple dark alert with &lt;a href="javascript:void(0);" class="alert-link">an example link</a>.
        Give it a click if you like.
    </div>` },
    solidColoredAlerts = {
        script: `
    &lt;div class="card custom-card">
        &lt;div class="card-header justify-content-between">
            &lt;div class="card-title">
                Solid Colored Alerts
            </div>
            &lt;div class="prism-toggle">
                &lt;button class="btn btn-sm btn-primary-light">Show Code&lt;i
                        class="ri-code-line ms-2 d-inline-block align-middle"></i></button>
            </div>
        </div>
        &lt;div class="card-body">
            &lt;div class="alert alert-solid-primary alert-dismissible fade show">
                A simple solid primary alert—check it out!
                &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                        class="bi bi-x"></i></button>
            </div>
            &lt;div class="alert alert-solid-secondary alert-dismissible fade show">
                A simple solid secondary alert—check it out!
                &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                        class="bi bi-x"></i></button>
            </div>
            &lt;div class="alert alert-solid-info alert-dismissible fade show">
                A simple solid info alert—check it out!
                &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                        class="bi bi-x"></i></button>
            </div>
            &lt;div class="alert alert-solid-warning alert-dismissible fade show">
                A simple solid warning alert—check it out!
                &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                        class="bi bi-x"></i></button>
            </div>
            &lt;div class="alert alert-solid-success alert-dismissible fade show">
                A simple solid success alert—check it out!
                &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                        class="bi bi-x"></i></button>
            </div>
            &lt;div class="alert alert-solid-danger alert-dismissible fade show">
                A simple solid danger alert—check it out!
                &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                        class="bi bi-x"></i></button>
            </div>
            &lt;div class="alert alert-solid-light alert-dismissible fade show">
                A simple solid light alert—check it out!
                &lt;button type="button" class="btn-close text-default" data-bs-dismiss="alert"
                    aria-label="Close">&lt;i class="bi bi-x"></i></button>
            </div>
            &lt;div class="alert alert-solid-dark alert-dismissible fade show text-white">
                A simple solid dark alert—check it out!
                &lt;button type="button" class="btn-close text-white" data-bs-dismiss="alert" aria-label="Close">&lt;i
                        class="bi bi-x"></i></button>
            </div>
        </div>
    </div>` },
    outlineAlerts = {
        script: `
    &lt;div class="alert alert-outline-primary alert-dismissible fade show">
        A simple outline primary alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-outline-secondary alert-dismissible fade show">
        A simple outline secondary alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-outline-info alert-dismissible fade show">
        A simple outline info alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-outline-warning alert-dismissible fade show">
        A simple outline warning alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-outline-success alert-dismissible fade show">
        A simple outline success alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-outline-danger alert-dismissible fade show">
        A simple outline danger alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-outline-light alert-dismissible fade show">
        A simple outline light alert—check it out!
        &lt;button type="button" class="btn-close text-default" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-outline-dark alert-dismissible fade show">
        A simple outline dark alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>` },
    solidAlertsWithDifferentShadows = {
        script: `
    &lt;div class="alert alert-solid-primary shadow-sm alert-dismissible fade show">
        A simple solid primary alert with small shadow—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-solid-primary shadow alert-dismissible fade show">
        A simple solid primary alert with normal shadow—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-solid-primary shadow-lg alert-dismissible fade show">
        A simple solid primary alert with large shadow—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-solid-secondary shadow-sm alert-dismissible fade show">
        A simple solid secondary alert with small shadow—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-solid-secondary shadow alert-dismissible fade show">
        A simple solid secondary alert with normal shadow—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-solid-secondary shadow-lg alert-dismissible fade show">
        A simple solid secondary alert with large shadow—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>` },
    defaultAlertsWithDifferentShadows = {
        script: `
    &lt;div class="alert alert-primary shadow-sm">A simple primary alert with small shadow—check it out!
    </div>
    &lt;div class="alert alert-primary shadow">A simple primary alert with normal shadow—check it out!
    </div>
    &lt;div class="alert alert-primary shadow-lg">A simple primary alert with large shadow—check it out!
    </div>
    &lt;div class="alert alert-secondary shadow-sm">A simple secondary alert with small shadow—check it
        out!
    </div>
    &lt;div class="alert alert-secondary shadow">A simple secondary alert with normal shadow—check it out!
    </div>
    &lt;div class="alert alert-secondary shadow-lg">A simple secondary alert with large shadow—check it
        out!
    </div>` },
    roundedSolidAlerts = {
        script: `
    &lt;div class="alert alert-solid-primary rounded-pill alert-dismissible fade show">
        A simple solid rounded primary alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-solid-secondary rounded-pill alert-dismissible fade show">
        A simple solid rounded secondary alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-solid-warning rounded-pill alert-dismissible fade show">
        A simple solid rounded warning alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-solid-danger rounded-pill alert-dismissible fade show">
        A simple solid rounded danger alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>` },
    roundedOutlineAlerts = {
        script: `
    <showcodeCard title="Rounded Outline Alerts">
        &lt;div class="alert alert-outline-primary rounded-pill alert-dismissible fade show">
            A simple outline rounded primary alert—check it out!
            &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                    class="bi bi-x"></i></button>
        </div>
        &lt;div class="alert alert-outline-secondary rounded-pill alert-dismissible fade show">
            A simple outline rounded secondary alert—check it out!
            &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                    class="bi bi-x"></i></button>
        </div>
        &lt;div class="alert alert-outline-warning rounded-pill alert-dismissible fade show">
            A simple outline rounded warning alert—check it out!
            &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                    class="bi bi-x"></i></button>
        </div>
        &lt;div class="alert alert-outline-danger rounded-pill alert-dismissible fade show">
            A simple outline rounded danger alert—check it out!
            &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                    class="bi bi-x"></i></button>
        </div>` },
    roundedDefaultAlerts = {
        script: `
    &lt;div class="alert alert-primary rounded-pill alert-dismissible fade show">
        A simple rounded primary alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-secondary rounded-pill alert-dismissible fade show">
        A simple rounded secondary alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-warning rounded-pill alert-dismissible fade show">
        A simple rounded warning alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-danger rounded-pill alert-dismissible fade show">
        A simple rounded danger alert—check it out!
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>` },
    roundedAlertsWithCustomCloseButton = {
        script: `
    &lt;div class="alert alert-primary rounded-pill alert-dismissible fade show">
        A simple rounded primary alert—check it out!
        &lt;button type="button" class="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-secondary rounded-pill alert-dismissible fade show">
        A simple rounded secondary alert—check it out!
        &lt;button type="button" class="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-warning rounded-pill alert-dismissible fade show">
        A simple rounded warning alert—check it out!
        &lt;button type="button" class="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-danger rounded-pill alert-dismissible fade show">
        A simple rounded danger &nbsp; alert—check it out!
        &lt;button type="button" class="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>` },
    alertsWithIcons = {
        script: `
    &lt;div class="alert alert-primary d-flex align-items-center" role="alert">
        &lt;svg class="flex-shrink-0 me-2 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>&lt;div>An example alert with an icon
        </div>
    </div>
    &lt;div class="alert alert-success d-flex align-items-center" role="alert">
        &lt;svg class="flex-shrink-0 me-2 svg-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path
                d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>&lt;div>
            An example success alert with an icon
        </div>
    </div>
    &lt;div class="alert alert-warning d-flex align-items-center" role="alert">
        &lt;svg class="flex-shrink-0 me-2 svg-warning" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" /><polygon points="13,16 11,16 11,18 13,18" /><polygon points="13,10 11,10 11,15 13,15" /></g></g></g></svg>
        &lt;div>
            An example warning alert with an icon
        </div>
    </div>
    &lt;div class="alert alert-danger d-flex align-items-center" role="alert">
        &lt;svg class="flex-shrink-0 me-2 svg-danger" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" /> <rect height="6" width="2" x="11" y="7" /><rect height="2" width="2" x="11" y="15" /></g></g></g></svg>
        &lt;div>
            An example danger alert with an icon
        </div>
    </div>` },
    customizedAlertsWithSVGs = {
        script: `
    &lt;div class="alert alert-primary alert-dismissible fade show custom-alert-icon shadow-sm" role="alert">
        &lt;svg class="svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
            width="1.5rem" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
        A customized primary alert with an icon
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-secondary alert-dismissible fade show custom-alert-icon shadow-sm" role="alert">
        &lt;svg class="svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
            width="1.5rem" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
        A customized secondary alert with an icon
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-warning alert-dismissible fade show custom-alert-icon shadow-sm" role="alert">
        &lt;svg class="svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
            width="1.5rem" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
        </svg>
        A customized warning alert with an icon
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-danger alert-dismissible fade show custom-alert-icon shadow-sm" role="alert">
        &lt;svg class="svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
            width="1.5rem" fill="#000000">
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" />
        </svg>
        A customized danger alert with an icon
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>` },
    alertsWithImages = {
        script: `
    &lt;div class="alert alert-img alert-primary alert-dismissible fase show rounded-pill flex-wrap" role="alert">
        &lt;div class="avatar avatar-sm me-3 avatar-rounded">
            &lt;img src="/images/faces/3.jpg" alt="img">
        </div>
        &lt;div>A simple primary alert with image—check it out!</div>
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-img alert-secondary alert-dismissible fase show rounded-pill flex-wrap"
        role="alert">
        &lt;div class="avatar avatar-sm me-3 avatar-rounded">
            &lt;img src="/images/faces/5.jpg" alt="img">
        </div>
        &lt;div>A simple secondary alert with image—check it out!</div>
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-img alert-warning alert-dismissible fase show rounded-pill flex-wrap" role="alert">
        &lt;div class="avatar avatar-sm me-3 avatar-rounded">
            &lt;img src="/images/faces/8.jpg" alt="img">
        </div>
        &lt;div>A simple warning alert with image—check it out!</div>
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-img alert-danger alert-dismissible fase show rounded-pill flex-wrap" role="alert">
        &lt;div class="avatar avatar-sm me-3 avatar-rounded">
            &lt;img src="/images/faces/11.jpg" alt="img">
        </div>
        &lt;div>A simple danger alert with image—check it out!</div>
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-img alert-info alert-dismissible fase show rounded-pill flex-wrap" role="alert">
        &lt;div class="avatar avatar-sm me-3 avatar-rounded">
            &lt;img src="/images/faces/13.jpg" alt="img">
        </div>
        &lt;div>A simple info alert with image—check it out!</div>
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-img alert-light alert-dismissible fase show rounded-pill flex-wrap" role="alert">
        &lt;div class="avatar avatar-sm me-3 avatar-rounded">
            &lt;img src="/images/faces/10.jpg" alt="img">
        </div>
        &lt;div>A simple light alert with image—check it out!</div>
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-img alert-dark alert-dismissible fase show rounded-pill flex-wrap" role="alert">
        &lt;div class="avatar avatar-sm me-3 avatar-rounded">
            &lt;img src="/images/faces/15.jpg" alt="img">
        </div>
        &lt;div>A simple dark alert with image—check it out!</div>
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x text-muted"></i></button>
    </div>` },
    alertsWithDifferentSizeImages = {
        script: `
    &lt;div class="alert alert-img alert-primary alert-dismissible fase show flex-wrap" role="alert">
        &lt;div class="avatar avatar-xs me-3">
            &lt;img src="/images/faces/3.jpg" alt="img">
        </div>
        &lt;div>A simple primary alert with image—check it out!</div>
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-img alert-secondary alert-dismissible fase show flex-wrap" role="alert">
        &lt;div class="avatar avatar-sm me-3">
            &lt;img src="/images/faces/5.jpg" alt="img">
        </div>
        &lt;div>A simple secondary alert with image—check it out!</div>
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-img alert-warning alert-dismissible fase show flex-wrap" role="alert">
        &lt;div class="avatar me-3">
            &lt;img src="/images/faces/8.jpg" alt="img">
        </div>
        &lt;div>A simple warning alert with image—check it out!</div>
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-img alert-danger alert-dismissible fase show flex-wrap" role="alert">
        &lt;div class="avatar avatar-md me-3">
            &lt;img src="/images/faces/11.jpg" alt="img">
        </div>
        &lt;div>A simple danger alert with image—check it out!</div>
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-img alert-info alert-dismissible fase show flex-wrap" role="alert">
        &lt;div class="avatar avatar-lg me-3">
            &lt;img src="/images/faces/13.jpg" alt="img">
        </div>
        &lt;div>A simple info alert with image—check it out!</div>
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x"></i></button>
    </div>
    &lt;div class="alert alert-img alert-dark alert-dismissible fase show flex-wrap" role="alert">
        &lt;div class="avatar avatar-xl me-3">
            &lt;img src="/images/faces/14.jpg" alt="img">
        </div>
        &lt;div>A simple info alert with image—check it out!</div>
        &lt;button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">&lt;i
                class="bi bi-x text-muted"></i></button>
    </div>` },
    additionalContent = {
        script: `
        &lt;div class="row gy-3">
            &lt;div class="col-xl-6">
                &lt;div class="alert alert-primary overflow-hidden p-0" role="alert">
                    &lt;div class="p-3 bg-primary text-fixed-white d-flex justify-content-between">
                        &lt;h6 class="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                        &lt;button type="button" class="btn-close p-0 text-fixed-white" data-bs-dismiss="alert"
                            aria-label="Close">&lt;i class="bi bi-x"></i></button>
                    </div>
                    $lt;hr class="my-0">
                    &lt;div class="p-3">
                        <p class="mb-0">We appreciate you to let us know the bug in the template and for warning us about future consequences &lt;a ="javascript:void(0);" class="fw-semibold -decoration-underline">Visit for support for queries?</a></p></div>
                </div>
            </div>
            &lt;div class="col-xl-6">
                &lt;div class="alert alert-secondary overflow-hidden p-0" role="alert">
                    &lt;div class="p-3 bg-secondary text-fixed-white d-flex justify-content-between">
                        &lt;h6 class="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                        &lt;button type="button" class="btn-close p-0 text-fixed-white" data-bs-dismiss="alert"
                            aria-label="Close">&lt;i class="bi bi-x"></i></button>
                    </div>
                    $lt;hr class="my-0">
                    &lt;div class="p-3">
                        <p class="mb-0">We appreciate you to let us know the bug in the template and for warning us about future &lt;a href="javascript:void(0);" class="fw-semibold text-decoration-underline">Visit for support for queries?</a></p>
                    </div>
                </div>
            </div>
            &lt;div class="col-xl-6">
                &lt;div class="alert alert-success overflow-hidden p-0" role="alert">
                    &lt;div class="p-3 bg-success text-fixed-white d-flex justify-content-between">
                        &lt;h6 class="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                        &lt;button type="button" class="btn-close p-0 text-fixed-white" data-bs-dismiss="alert"
                            aria-label="Close">&lt;i class="bi bi-x"></i></button>
                    </div>
                    $lt;hr class="my-0">
                    &lt;div class="p-3">
                        <p class="mb-0">We appreciate you to let us know the bug in the template and for warning us about future  &lt;a href="javascript:void(0);" class="fw-semibold text-decoration-underline">Visit for support for queries?</a></p>
                    </div>
                </div>
            </div>
            &lt;div class="col-xl-6">
                &lt;div class="alert alert-warning overflow-hidden p-0" role="alert">
                    &lt;div class="p-3 bg-warning text-fixed-white d-flex justify-content-between">
                        &lt;h6 class="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
                        &lt;button type="button" class="btn-close p-0 text-fixed-white" data-bs-dismiss="alert"
                            aria-label="Close">&lt;i class="bi bi-x"></i></button>
                    </div>
                    $lt;hr class="my-0">
                    &lt;div class="p-3">
                        <p class="mb-0">We appreciate you to let us know the bug in the template and for warning us about future  &lt;a href="javascript:void(0);"class="fw-semibold text-decoration-underline">Visit for support for queries?</a></p>
                    </div>
                </div>
            </div>
        </div>`
    };
