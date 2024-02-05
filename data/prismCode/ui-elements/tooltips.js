export let

    TooltipDirections = {
        script: `
    &lt;div class="btn-list">
        &lt;v-btn class="primary"> Tooltip on left
            &lt;v-tooltip activator="parent" location="left" content-class="btn btn-primary btn-wave">
                Tooltip
                on left&lt;/v-tooltip>
        &lt;/v-btn>
        &lt;v-btn class="primary"> Tooltip on top
            &lt;v-tooltip activator="parent" location="top" content-class="btn btn-primary btn-wave">
                Tooltip
                on top&lt;/v-tooltip>
        &lt;/v-btn>
        &lt;v-btn class="primary"> Tooltip on bottom
            &lt;v-tooltip activator="parent" location="bottom" content-class="btn btn-primary btn-wave">
                Tooltip on bottom&lt;/v-tooltip>
        &lt;/v-btn>
        &lt;v-btn class="primary"> Tooltip on right
            &lt;v-tooltip activator="parent" location="right" content-class="btn btn-primary btn-wave">
                Tooltip
                on right&lt;/v-tooltip>
        &lt;/v-btn>
    &lt;/div>` },
    ColoredTooltips = {
        script: `&lt;div class="btn-list">

    &lt;v-btn color="primary"> Primary Tooltip
        &lt;v-tooltip activator="parent" location="top" content-class="btn btn-primary btn-wave">
            Primary
            Tooltip&lt;/v-tooltip>
    &lt;/v-btn>
    &lt;v-btn color="secondary"> Secondary Tooltip
        &lt;v-tooltip activator="parent" location="right" content-class="btn btn-secondary btn-wave">
            Secondary Tooltip&lt;/v-tooltip>
    &lt;/v-btn>
    &lt;v-btn color="warning"> Warning Tooltip
        &lt;v-tooltip activator="parent" location="bottom" content-class="btn btn-warning btn-wave">
            Warning Tooltip&lt;/v-tooltip>
    &lt;/v-btn>
    &lt;v-btn color="info"> Info Tooltip
        &lt;v-tooltip activator="parent" location="left" content-class="btn btn-info btn-wave"> Info
            Tooltip&lt;/v-tooltip>
    &lt;/v-btn>
    &lt;v-btn color="success"> Success Tooltip
        &lt;v-tooltip activator="parent" location="top" content-class="btn btn-success btn-wave">
            Success
            Tooltip&lt;/v-tooltip>
    &lt;/v-btn>
    &lt;v-btn color="danger"> Danger Tooltip
        &lt;v-tooltip activator="parent" location="right" content-class="btn btn-danger btn-wave">
            Danger
            Tooltip&lt;/v-tooltip>
    &lt;/v-btn>
    &lt;v-btn color="light"> Light Tooltip
        &lt;v-tooltip activator="parent" location="bottom" content-class="btn btn-light btn-wave">
            Light
            Tooltip&lt;/v-tooltip>
    &lt;/v-btn>
    &lt;v-btn color="dark"> Dark Tooltip
        &lt;v-tooltip activator="parent" location="left" content-class="btn btn-dark btn-wave"> Dark
            Tooltip&lt;/v-tooltip>
    &lt;/v-btn>
&lt;/div>` },
    TooltipsOnLinks = {
        script: `
    &lt;p class="text-muted mb-0">
        Hover on the link to view the &lt;a href="javascript:void(0);" class="text-primary">
            Tooltip
            &lt;v-tooltip activator="parent" location="top" content-class="btn btn-primary btn-wave"> Link
                Tooltip&lt;/v-tooltip>
        &lt;/a>
    &lt;/p>` },
    WithAnSVGs = {
        script: `
&lt;a href="javascript:void(0);" class="me-3">
    &lt;v-tooltip activator="parent" location="top" content-class="btn btn-primary btn-wave">Home&lt;/v-tooltip>
    &lt;svg xmlns="http://www.w3.org/2000/svg" class="svg-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">&lt;path d="M0 0h24v24H0V0z" fill="none" />&lt;path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" />&lt;/svg>
&lt;/a>
&lt;a href="javascript:void(0);" class="me-3">
    &lt;v-tooltip activator="parent" location="top" content-class="btn btn-secondary btn-wave"> Message&lt;/v-tooltip>
    &lt;svg xmlns="http://www.w3.org/2000/svg" class="svg-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">&lt;path d="M0 0h24v24H0V0z" fill="none" />&lt;path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />&lt;/svg>
&lt;/a>
&lt;a href="javascript:void(0);" class="me-3">
    &lt;v-tooltip activator="parent" location="top" content-class="btn btn-warning btn-wave">Add&lt;/v-tooltip>
    &lt;svg xmlns="http://www.w3.org/2000/svg" class="svg-warning" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"> &lt;g>&lt;rect fill="none" height="24" width="24" />&lt;/g>&lt;g>&lt;path d="M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56 C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z" />&lt;/g>&lt;/svg>
&lt;/a>
&lt;a href="javascript:void(0);" class="me-3">
    &lt;v-tooltip activator="parent" location="top" content-class="btn btn-info btn-wave">Send&lt;/v-tooltip>
    &lt;svg xmlns="http://www.w3.org/2000/svg" class="svg-info" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">&lt;path d="M0 0h24v24H0V0z" fill="none" />&lt;path d="M4.01 6.03l7.51 3.22-7.52-1 .01-2.22m7.5 8.72L4 17.97v-2.22l7.51-1M2.01 3L2 10l15 2-15 2 .01 7L23 12 2.01 3z" />&lt;/svg>
&lt;/a>
&lt;a href="javascript:void(0);" class="me-3">
    &lt;v-tooltip activator="parent" location="top" content-class="btn btn-success btn-wave">Action&lt;/v-tooltip>
    &lt;svg xmlns="http://www.w3.org/2000/svg" class="svg-success" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">&lt;path d="M0 0h24v24H0V0z" fill="none" />&lt;path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />&lt;/svg>
&lt;/a>` },
    DisabledElements = {
        script: `
&lt;span class="d-inline-block" tabindex="0">
    &lt;v-tooltip activator="parent" location="top" content-class="btn btn-dark btn-wave"> Disabled
        tooltip&lt;/v-tooltip>
    &lt;button class="btn btn-primary" type="button" disabled>Disabled
        button
    &lt;/button>
&lt;/span>` },
    TooltipForImages = {
        script: `
&lt;a href="javascript:void(0);" class="avatar avatar-md me-2 online avatar-rounded">
    &lt;v-tooltip activator="parent" location="top" content-class="btn btn-primary btn-wave">Alex
        Carey&lt;/v-tooltip>
    &lt;img src="/images/faces/12.jpg" alt="img">
&lt;/a>
&lt;a href="javascript:void(0);" class="avatar avatar-lg me-2 online avatar-rounded">
    &lt;v-tooltip activator="parent" location="top" content-class="btn btn-primary btn-wave">Marina
        Kai&lt;/v-tooltip>
    &lt;img src="/images/faces/3.jpg" alt="img">
&lt;/a>
&lt;a href="javascript:void(0);" class="avatar avatar-xl me-2 offline avatar-rounded">
    &lt;v-tooltip activator="parent" location="top" content-class="btn btn-primary btn-wave">Tim
        Cook&lt;/v-tooltip>
    &lt;img src="/images/faces/15.jpg" alt="img">
&lt;/a>` };