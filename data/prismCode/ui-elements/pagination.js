export let
    BasicPagination = {
        script: `
    &lt;nav aria-label="Page navigation">
        &lt;ul class="pagination mb-0">
            &lt;li class="page-item disabled">&lt;a class="page-link" href="javascript:void(0);">Previous&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">1&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">2&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">Next&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/nav>` },
    PaginationWithIcons = {
        script: `
    &lt;nav aria-label="Page navigation">
        &lt;ul class="pagination mb-0">
            &lt;li class="page-item">
                &lt;a class="page-link" href="javascript:void(0);" aria-label="Previous">
                    &lt;span aria-hidden="true">&lt;i class="bx bx-chevron-left">&lt;/i>&lt;/span>
                &lt;/a>
            &lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">1&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">2&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">3&lt;/a>&lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link" href="javascript:void(0);" aria-label="Next">
                    &lt;span aria-hidden="true">&lt;i class="bx bx-chevron-right">&lt;/i>&lt;/span>
                &lt;/a>
            &lt;/li>
        &lt;/ul>
    &lt;/nav>` },
    PaginationSizing = {
        script: `
    &lt;nav aria-label="...">
        &lt;ul class="pagination pagination-sm mb-0">
            &lt;li class="page-item active" aria-current="page">
                &lt;span class="page-link">1&lt;/span>
            &lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">2&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">3&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/nav>
    &lt;nav aria-label="...">
        &lt;ul class="pagination mb-0">
            &lt;li class="page-item active" aria-current="page">
                &lt;span class="page-link">1&lt;/span>
            &lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">2&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">3&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/nav>
    &lt;nav aria-label="...">
        &lt;ul class="pagination pagination-lg mb-0">
            &lt;li class="page-item active" aria-current="page">
                &lt;span class="page-link">1&lt;/span>
            &lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">2&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">3&lt;/a>&lt;/li>
        &lt;/ul>
    &lt;/nav>` },
    CenterRightAlignedPagination = {
        script: `
    &lt;nav aria-label="Page navigation">
        &lt;ul class="pagination justify-content-center">
            &lt;li class="page-item disabled">
                &lt;a class="page-link">Previous&lt;/a>
            &lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">1&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">2&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">3&lt;/a>&lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link" href="javascript:void(0);">Next&lt;/a>
            &lt;/li>
        &lt;/ul>
    &lt;/nav>
    &lt;nav aria-label="Page navigation">
        &lt;ul class="pagination justify-content-end mb-0">
            &lt;li class="page-item disabled">
                &lt;a class="page-link">Previous&lt;/a>
            &lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">1&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">2&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">3&lt;/a>&lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link" href="javascript:void(0);">Next&lt;/a>
            &lt;/li>
        &lt;/ul>
    &lt;/nav>` },
    ActiveAndDisabledStates = {
        script: `
    &lt;nav aria-label="..." class="me-3">
        &lt;ul class="pagination">
            &lt;li class="page-item disabled">
                &lt;a class="page-link">Previous&lt;/a>
            &lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">1&lt;/a>&lt;/li>
            &lt;li class="page-item active" aria-current="page">
                &lt;a class="page-link" href="javascript:void(0);">2&lt;/a>
            &lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link" href="javascript:void(0);">Next&lt;/a>
            &lt;/li>
        &lt;/ul>
    &lt;/nav>
    &lt;nav aria-label="...">
        &lt;ul class="pagination">
            &lt;li class="page-item disabled">
                &lt;span class="page-link">Previous&lt;/span>
            &lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">1&lt;/a>&lt;/li>
            &lt;li class="page-item active" aria-current="page">
                &lt;span class="page-link">2&lt;/span>
            &lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link" href="javascript:void(0);">Next&lt;/a>
            &lt;/li>
        &lt;/ul>
    &lt;/nav>` },
    PaginationStyle1 = {
        script: `
    &lt;nav aria-label="Page navigation" class="pagination-style-1">
        &lt;ul class="pagination mb-0 flex-wrap">
            &lt;li class="page-item disabled">
                &lt;a class="page-link" href="javascript:void(0);">
                    &lt;i class="ri-arrow-left-s-line align-middle">&lt;/i>
                &lt;/a>
            &lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">1&lt;/a>&lt;/li>
            &lt;li class="page-item active">&lt;a class="page-link" href="javascript:void(0);">2&lt;/a>&lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link" href="javascript:void(0);">
                    &lt;i class="bi bi-three-dots">&lt;/i>
                &lt;/a>
            &lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">21&lt;/a>&lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link" href="javascript:void(0);">
                    &lt;i class="ri-arrow-right-s-line align-middle">&lt;/i>
                &lt;/a>
            &lt;/li>
        &lt;/ul>
    &lt;/nav>` },
    PaginationStyle2 = {
        script: `
    &lt;nav aria-label="Page navigation" class="pagination-style-2">
        &lt;ul class="pagination mb-0 flex-wrap">
            &lt;li class="page-item disabled">
                &lt;a class="page-link" href="javascript:void(0);">
                    Prev
                &lt;/a>
            &lt;/li>
            &lt;li class="page-item active">&lt;a class="page-link" href="javascript:void(0);">1&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">2&lt;/a>&lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link" href="javascript:void(0);">
                    &lt;i class="bi bi-three-dots">&lt;/i>
                &lt;/a>
            &lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">17&lt;/a>&lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link text-primary" href="javascript:void(0);">
                    next
                &lt;/a>
            &lt;/li>
        &lt;/ul>
    &lt;/nav>` },
    PaginationStyle3 = {
        script: `
    &lt;nav aria-label="Page navigation" class="pagination-style-3">
        &lt;ul class="pagination mb-0 flex-wrap">
            &lt;li class="page-item disabled">
                &lt;a class="page-link" href="javascript:void(0);">
                    Prev
                &lt;/a>
            &lt;/li>
            &lt;li class="page-item active">&lt;a class="page-link" href="javascript:void(0);">1&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">2&lt;/a>&lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link" href="javascript:void(0);">
                    &lt;i class="bi bi-three-dots">&lt;/i>
                &lt;/a>
            &lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">16&lt;/a>&lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link text-primary" href="javascript:void(0);">
                    next
                &lt;/a>
            &lt;/li>
        &lt;/ul>
    &lt;/nav>` },
    PaginationStyle4 = {
        script: `
    &lt;nav aria-label="Page navigation" class="pagination-style-4">
        &lt;ul class="pagination mb-0 flex-wrap">
            &lt;li class="page-item disabled">
                &lt;a class="page-link" href="javascript:void(0);">
                    Prev
                &lt;/a>
            &lt;/li>
            &lt;li class="page-item active">&lt;a class="page-link" href="javascript:void(0);">1&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">2&lt;/a>&lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link" href="javascript:void(0);">
                    &lt;i class="bi bi-three-dots">&lt;/i>
                &lt;/a>
            &lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">16&lt;/a>&lt;/li>
            &lt;li class="page-item">&lt;a class="page-link" href="javascript:void(0);">17&lt;/a>&lt;/li>
            &lt;li class="page-item">
                &lt;a class="page-link text-primary" href="javascript:void(0);">
                    next
                &lt;/a>
            &lt;/li>
        &lt;/ul>
    &lt;/nav>` };