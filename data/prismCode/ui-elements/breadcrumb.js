export let
    example = {
        script: `
    &lt;nav aria-label="breadcrumb">
        &lt;ol class="breadcrumb">
            &lt;li class="breadcrumb-item active" aria-current="page">Home&lt;/li>
        &lt;/ol>
    &lt;/nav>

    &lt;nav aria-label="breadcrumb">
        &lt;ol class="breadcrumb">
            &lt;li class="breadcrumb-item">&lt;a href="javascript:void(0);">Home&lt;/a>&lt;/li>
            &lt;li class="breadcrumb-item active" aria-current="page">Library&lt;/li>
        &lt;/ol>
    &lt;/nav>

    &lt;nav aria-label="breadcrumb">
        &lt;ol class="breadcrumb mb-0">
            &lt;li class="breadcrumb-item">&lt;a href="javascript:void(0);">Home&lt;/a>&lt;/li>
            &lt;li class="breadcrumb-item">&lt;a href="javascript:void(0);">Library&lt;/a>&lt;/li>
            &lt;li class="breadcrumb-item active" aria-current="page">Data&lt;/li>
        &lt;/ol>
    &lt;/nav>` },
    example1 = {
        script: `
    &lt;nav aria-label="breadcrumb">
        &lt;ol class="breadcrumb breadcrumb-example1">
            &lt;li class="breadcrumb-item active" aria-current="page">Home&lt;/li>
        &lt;/ol>
    &lt;/nav>

    &lt;nav aria-label="breadcrumb">
        &lt;ol class="breadcrumb breadcrumb-example1">
            &lt;li class="breadcrumb-item">&lt;a href="javascript:void(0);">Home&lt;/a>&lt;/li>
            &lt;li class="breadcrumb-item active" aria-current="page">Library&lt;/li>
        &lt;/ol>
    &lt;/nav>

    &lt;nav aria-label="breadcrumb">
        &lt;ol class="breadcrumb breadcrumb-example1 mb-0">
            &lt;li class="breadcrumb-item">&lt;a href="javascript:void(0);">Home&lt;/a>&lt;/li>
            &lt;li class="breadcrumb-item">&lt;a href="javascript:void(0);">Library&lt;/a>&lt;/li>
            &lt;li class="breadcrumb-item active" aria-current="page">Data&lt;/li>
        &lt;/ol>
    &lt;/nav>` },
    dividers = {
        script: `
    &lt;nav style="--bs-breadcrumb-divider: '~';" aria-label="breadcrumb">
        &lt;ol class="breadcrumb mb-0">
            &lt;li class="breadcrumb-item">&lt;a href="javascript:void(0);">Home&lt;/a>&lt;/li>
            &lt;li class="breadcrumb-item active" aria-current="page">Library&lt;/li>
        &lt;/ol>
    &lt;/nav>` },
    embeddedSVGIcon = {
        script: `
    &lt;nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);"
    aria-label="breadcrumb">
    &lt;ol class="breadcrumb mb-0">
        &lt;li class="breadcrumb-item">&lt;a href="javascript:void(0);">Home&lt;/a>&lt;/li>
        &lt;li class="breadcrumb-item active embedded-breadcrumb" aria-current="page">Library&lt;/li>
    &lt;/ol>
&lt;/nav>` },
    breadcrumbStyle1 = {
        script: `
    &lt;nav aria-label="breadcrumb">
        &lt;ol class="breadcrumb breadcrumb-style1 mb-0">
            &lt;li class="breadcrumb-item">&lt;a href="javascript:void(0);">Home&lt;/a>&lt;/li>
            &lt;li class="breadcrumb-item">&lt;a href="javascript:void(0);">Library&lt;/a>&lt;/li>
            &lt;li class="breadcrumb-item active" aria-current="page">Data&lt;/li>
        &lt;/ol>
    &lt;/nav>` },
    breadcrumbStyle2 = {
        script: `
    &lt;nav aria-label="breadcrumb">
        &lt;ol class="breadcrumb breadcrumb-style2 mb-0">
            &lt;li class="breadcrumb-item">&lt;a href="javascript:void(0);">&lt;i
                        class="ti ti-home-2 me-1 fs-15 d-inline-block">&lt;/i>Home&lt;/a>&lt;/li>
            &lt;li class="breadcrumb-item">&lt;a href="javascript:void(0);">&lt;i
                        class="ti ti-apps me-1 fs-15 d-inline-block">&lt;/i>About&lt;/a>&lt;/li>
            &lt;li class="breadcrumb-item active" aria-current="page">Services&lt;/li>
        &lt;/ol>
    &lt;/nav>` },
    backgroundColors = {
        script: `
    &lt;nav style="--bs-breadcrumb-divider: '';" aria-label="breadcrumb">
        &lt;ol class="breadcrumb mb-0">
            &lt;li class="breadcrumb-item">&lt;a href="javascript:void(0);">Home&lt;/a>&lt;/li>
            &lt;li class="breadcrumb-item active" aria-current="page">Library&lt;/li>
        &lt;/ol>
    &lt;/nav>` };