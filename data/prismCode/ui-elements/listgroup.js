export let
    BasicList = {
        script: `
    &lt;ul class="list-group">
        &lt;li class="list-group-item">
            &lt;div class="d-flex align-items-center">
                &lt;span class="avatar avatar-sm">
                    &lt;img src="/images/faces/1.jpg" alt="img">
                &lt;/span>
                &lt;div class="ms-2 fw-semibold">
                    Alicia Sierra
                &lt;/div>
            &lt;/div>
        &lt;/li>
        &lt;li class="list-group-item">
            &lt;div class="d-flex align-items-center">
                &lt;span class="avatar avatar-sm">
                    &lt;img src="/images/faces/3.jpg" alt="img">
                &lt;/span>
                &lt;div class="ms-2 fw-semibold">
                    Samantha Mery
                &lt;/div>
            &lt;/div>
        &lt;/li>
        &lt;li class="list-group-item">
            &lt;div class="d-flex align-items-center">
                &lt;span class="avatar avatar-sm">
                    &lt;img src="/images/faces/6.jpg" alt="img">
                &lt;/span>
                &lt;div class="ms-2 fw-semibold">
                    Juliana Pena
                &lt;/div>
            &lt;/div>
        &lt;/li>
        &lt;li class="list-group-item">
            &lt;div class="d-flex align-items-center">
                &lt;span class="avatar avatar-sm">
                    &lt;img src="/images/faces/15.jpg" alt="img">
                &lt;/span>
                &lt;div class="ms-2 fw-semibold">
                    Adam Smith
                &lt;/div>
            &lt;/div>
        &lt;/li>
        &lt;li class="list-group-item">
            &lt;div class="d-flex align-items-center">
                &lt;span class="avatar avatar-sm">
                    &lt;img src="/images/faces/13.jpg" alt="img">
                &lt;/span>
                &lt;div class="ms-2 fw-semibold">
                    Farhaan Amhed
                &lt;/div>
            &lt;/div>
        &lt;/li>
    &lt;/ul>` },
    ActiveItems = {
        script: `
    &lt;ul class="list-group">
        &lt;li class="list-group-item active" aria-current="true">
            &lt;div class="d-flex align-items-center">
                &lt;div>
                    &lt;span class="fs-15">
                        &lt;i class="bi bi-house-door">&lt;/i>
                    &lt;/span>
                &lt;/div>
                &lt;div class="ms-2">
                    Home
                &lt;/div>
            &lt;/div>
        &lt;/li>
        &lt;li class="list-group-item">
            &lt;div class="d-flex align-items-center">
                &lt;div>
                    &lt;span class="fs-15">
                        &lt;i class="bi bi-bell">&lt;/i>
                    &lt;/span>
                &lt;/div>
                &lt;div class="ms-2">
                    Notifications
                &lt;/div>
            &lt;/div>
        &lt;/li>
        &lt;li class="list-group-item">
            &lt;div class="d-flex align-items-center">
                &lt;div>
                    &lt;span class="fs-15">
                        &lt;i class="bi bi-gift">&lt;/i>
                    &lt;/span>
                &lt;/div>
                &lt;div class="ms-2">
                    Sent Messages
                &lt;/div>
            &lt;/div>
        &lt;/li>
        &lt;li class="list-group-item">
            &lt;div class="d-flex align-items-center">
                &lt;div>
                    &lt;span class="fs-15">
                        &lt;i class="bi bi-person">&lt;/i>
                    &lt;/span>
                &lt;/div>
                &lt;div class="ms-2">
                    New Requests
                &lt;/div>
            &lt;/div>
        &lt;/li>
        &lt;li class="list-group-item">
            &lt;div class="d-flex align-items-center">
                &lt;div>
                    &lt;span class="fs-15">
                        &lt;i class="bi bi-trash3">&lt;/i>
                    &lt;/span>
                &lt;/div>
                &lt;div class="ms-2">
                    Deleted Messages
                &lt;/div>
            &lt;/div>
        &lt;/li>
    &lt;/ul>` },
    DisabledItems = {
        script: `
    &lt;ul class="list-group">
        &lt;li class="list-group-item disabled" aria-disabled="true">A disabled item meant to be disabled
        &lt;/li>
        &lt;li class="list-group-item">Simply dummy text of the printing&lt;/li>
        &lt;li class="list-group-item">There are many variations of passages&lt;/li>
        &lt;li class="list-group-item">All the Lorem Ipsum generators&lt;/li>
        &lt;li class="list-group-item">Written in 45 BC. This book is a treatise on the theory&lt;/li>
    &lt;/ul>` },
    flush = {
        script: `
    &lt;ul class="list-group list-group-flush">
        &lt;li class="list-group-item fw-semibold">&lt;i class="bi bi-envelope align-middle me-2 text-muted">&lt;/i>Asish
            Trivedhi&lt;span class="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)&lt;/span>&lt;/li>
        &lt;li class="list-group-item fw-semibold">&lt;i
                class="bi bi-tiktok align-middle me-2 text-muted">&lt;/i>Alezander Russo&lt;span
                class="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)&lt;/span>&lt;/li>
        &lt;li class="list-group-item fw-semibold">&lt;i class="bi bi-whatsapp align-middle me-2 text-muted">&lt;/i>Karem
            Smith&lt;span class="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)&lt;/span>&lt;/li>
        &lt;li class="list-group-item fw-semibold">&lt;i
                class="bi bi-facebook align-middle me-2 text-muted">&lt;/i>Melissa Brien&lt;span
                class="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)&lt;/span>&lt;/li>
        &lt;li class="list-group-item fw-semibold">&lt;i
                class="bi bi-instagram align-middle me-2 text-muted">&lt;/i>Kamala Harris&lt;span
                class="ms-1 text-muted fw-normal d-inline-block">(+91-63421)&lt;/span>&lt;/li>
    &lt;/ul>` },
    links = {
        script: `
    &lt;div class="list-group">
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action active" aria-current="true">
            &lt;div class="d-flex align-items-center">
                &lt;div>
                    &lt;span class="avatar avatar-xs bg-white text-default avatar-rounded">
                        C
                    &lt;/span>
                &lt;/div>
                &lt;div class="ms-2">California&lt;/div>
            &lt;/div>
        &lt;/a>
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action">
            &lt;div class="d-flex align-items-center">
                &lt;div>
                    &lt;span class="avatar avatar-xs bg-secondary avatar-rounded">
                        N
                    &lt;/span>
                &lt;/div>
                &lt;div class="ms-2">New Jersey&lt;/div>
            &lt;/div>
        &lt;/a>
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action">
            &lt;div class="d-flex align-items-center">
                &lt;div>
                    &lt;span class="avatar avatar-xs bg-info avatar-rounded">
                        L
                    &lt;/span>
                &lt;/div>
                &lt;div class="ms-2">Los Angeles&lt;/div>
            &lt;/div>
        &lt;/a>
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action">
            &lt;div class="d-flex align-items-center">
                &lt;div>
                    &lt;span class="avatar avatar-xs bg-warning avatar-rounded">
                        M
                    &lt;/span>
                &lt;/div>
                &lt;div class="ms-2">Miami Florida&lt;/div>
            &lt;/div>
        &lt;/a>
        &lt;a class="list-group-item list-group-item-action disabled">
            &lt;div class="d-flex align-items-center">
                &lt;div>
                    &lt;span class="avatar avatar-xs bg-success avatar-rounded">
                        W
                    &lt;/span>
                &lt;/div>
                &lt;div class="ms-2">Washington D.C&lt;/div>
            &lt;/div>
        &lt;/a>
    &lt;/div>` },
    buttons = {
        script: `
    &lt;div class="list-group">
        &lt;button type="button" class="list-group-item list-group-item-action active" aria-current="true">Simply
            dummy text of the printing&lt;span class="badge float-end bg-primary">243&lt;/span>&lt;/button>
        &lt;button type="button" class="list-group-item list-group-item-action">There are many variations
            of
            passages&lt;span class="badge float-end bg-secondary-transparent">35&lt;/span>&lt;/button>
        &lt;button type="button" class="list-group-item list-group-item-action">All the Lorem Ipsum
            generators&lt;span class="badge float-end bg-info-transparent">132&lt;/span>&lt;/button>
        &lt;button type="button" class="list-group-item list-group-item-action">All the Lorem Ipsum
            generators&lt;span class="badge float-end bg-success-transparent">2525&lt;/span>&lt;/button>
        &lt;button type="button" class="list-group-item list-group-item-action" disabled>A disabled item
            meant
            to be disabled&lt;span class="badge float-end bg-danger-transparent">21&lt;/span>&lt;/button>
    &lt;/div>` },
    ContextualClasses = {
        script: `
    &lt;ul class="list-group">
        &lt;li class="list-group-item">A simple default list group item&lt;/li>

        &lt;li class="list-group-item list-group-item-primary">A simple primary list
            group
            item&lt;/li>
        &lt;li class="list-group-item list-group-item-secondary">A simple secondary
            list
            group item&lt;/li>
        &lt;li class="list-group-item list-group-item-success">A simple success list
            group
            item&lt;/li>
        &lt;li class="list-group-item list-group-item-danger">A simple danger list
            group
            item&lt;/li>
        &lt;li class="list-group-item list-group-item-warning">A simple warning list
            group
            item&lt;/li>
        &lt;li class="list-group-item list-group-item-info">A simple info list group
            item
        &lt;/li>
        &lt;li class="list-group-item list-group-item-light">A simple light list group
            item
        &lt;/li>
        &lt;li class="list-group-item list-group-item-dark">A simple dark list group
            item
        &lt;/li>
    &lt;/ul>` },
    ContextualClassesWithHoverStyles = {
        script: `
    &lt;div class="list-group">
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action">A simple default
            list
            group item&lt;/a>

        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-primary">A
            simple primary list group item&lt;/a>
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-secondary">A
            simple secondary list group item&lt;/a>
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-success">A
            simple success list group item&lt;/a>
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-danger">A
            simple danger list group item&lt;/a>
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-warning">A
            simple warning list group item&lt;/a>
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-info">A
            simple
            info list group item&lt;/a>
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-light">A
            simple light list group item&lt;/a>
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action list-group-item-dark">A
            simple
            dark list group item&lt;/a>
    &lt;/div>` },
    SolidColoredLists = {
        script: `
    &lt;ul class="list-group">
        &lt;li class="list-group-item">A simple default list group item&lt;/li>

        &lt;li class="list-group-item list-item-solid-primary">A simple primary list
            group
            item&lt;/li>
        &lt;li class="list-group-item list-item-solid-secondary">A simple secondary
            list
            group item&lt;/li>
        &lt;li class="list-group-item list-item-solid-success">A simple success list
            group
            item&lt;/li>
        &lt;li class="list-group-item list-item-solid-danger">A simple danger list
            group
            item&lt;/li>
        &lt;li class="list-group-item list-item-solid-warning">A simple warning list
            group
            item&lt;/li>
        &lt;li class="list-group-item list-item-solid-info">A simple info list group
            item
        &lt;/li>
        &lt;li class="list-group-item list-item-solid-light">A simple light list group
            item
        &lt;/li>
        &lt;li class="list-group-item list-item-solid-dark text-white">A simple dark list group
            item
        &lt;/li>
    &lt;/ul>` },
    CustomContent = {
        script: `
    &lt;div class="list-group">
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action active" aria-current="true">
            &lt;div class="d-flex w-100 justify-content-between">
                &lt;h6 class="mb-1 fw-semibold text-fixed-white">Web page editors now use Lorem Ipsum?&lt;/h6>
                &lt;small>3 days ago&lt;/small>
            &lt;/div>
            &lt;p class="mb-1">There are many variations of passages of Lorem Ipsum available, but the
                majority
                have suffered alteration in some form, by injected humour.&lt;/p>
            &lt;small>24,Nov 2022.&lt;/small>
        &lt;/a>
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action">
            &lt;div class="d-flex w-100 justify-content-between">
                &lt;h6 class="mb-1 fw-semibold">Richard McClintock, a Latin professor?&lt;/h6>
                &lt;small class="text-muted">4 hrs ago&lt;/small>
            &lt;/div>
            &lt;p class="mb-1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has
                roots
                in a piece of classical Latin literature.&lt;/p>
            &lt;small class="text-muted">30,Nov 2022.&lt;/small>
        &lt;/a>
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action">
            &lt;div class="d-flex w-100 justify-content-between">
                &lt;h6 class="mb-1 fw-semibold">It uses a dictionary of over 200 Latin words?&lt;/h6>
                &lt;small class="text-muted">15 hrs ago&lt;/small>
            &lt;/div>
            &lt;p class="mb-1">Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s.
            &lt;/p>
            &lt;small class="text-muted">4,Nov 2022.&lt;/small>
        &lt;/a>
        &lt;a href="javascript:void(0);" class="list-group-item list-group-item-action">
            &lt;div class="d-flex w-100 justify-content-between">
                &lt;h6 class="mb-1 fw-semibold">The standard Lorem Ipsum used since the 1500s?&lt;/h6>
                &lt;small class="text-muted">45 mins ago&lt;/small>
            &lt;/div>
            &lt;p class="mb-1">All the Lorem Ipsum generators on the Internet tend to repeat predefined
                chunks
                as necessary, making this the first true generator on the Internet.&lt;/p>
            &lt;small class="text-muted">28,Oct 2022.&lt;/small>
        &lt;/a>
    &lt;/div>` },
    SubHeadings = {
        script: `
    &lt;ol class="list-group list-group-numbered">
        &lt;li class="list-group-item d-flex justify-content-between align-items-start">
            &lt;div class="ms-2 me-auto text-muted">
                &lt;div class="fw-semibold fs-14 text-default">What Happened?&lt;/div>
                Many experts have recently suggested may exist.
            &lt;/div>
            &lt;span class="badge bg-primary-transparent">32 Views&lt;/span>
        &lt;/li>
        &lt;li class="list-group-item d-flex justify-content-between align-items-start">
            &lt;div class="ms-2 me-auto text-muted">
                &lt;div class="fw-semibold fs-14 text-default">It Was Amazing!&lt;/div>
                His idea involved taking red.
            &lt;/div>
            &lt;span class="badge bg-secondary-transparent">52 Views&lt;/span>
        &lt;/li>
        &lt;li class="list-group-item d-flex justify-content-between align-items-start">
            &lt;div class="ms-2 me-auto text-muted">
                &lt;div class="fw-semibold fs-14 text-default">News Is A Great Weapon.&lt;/div>
                News can influence in many ways.
            &lt;/div>
            &lt;span class="badge bg-success-transparent">1,204 Views&lt;/span>
        &lt;/li>
        &lt;li class="list-group-item d-flex justify-content-between align-items-start">
            &lt;div class="ms-2 me-auto text-muted">
                &lt;div class="fw-semibold fs-14 text-default">majority have suffered.&lt;/div>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                anything.
            &lt;/div>
            &lt;span class="badge bg-danger-transparent">14 Views&lt;/span>
        &lt;/li>
    &lt;/ol>` },
    NumberedLists = {
        script: `
    &lt;ol class="list-group list-group-numbered">
        &lt;li class="list-group-item">Simply dummy text of the printing.&lt;/li>
        &lt;li class="list-group-item">There are many variations of passages.&lt;/li>
        &lt;li class="list-group-item">All the Lorem Ipsum generators.&lt;/li>
        &lt;li class="list-group-item">Written in 45 BC. This book is a treatise on the theory.&lt;/li>
        &lt;li class="list-group-item">Randomised words which don't look.&lt;/li>
        &lt;li class="list-group-item">Always free from repetition, injected humour.&lt;/li>
    &lt;/ol>` },
    ListWithCheckboxes = {
        script: `
    &lt;ul class="list-group">
        &lt;li class="list-group-item">
            &lt;input class="form-check-input me-1 fw-semibold" type="checkbox" value="" aria-label="..." checked>
            Accurate information at any given point.
        &lt;/li>
        &lt;li class="list-group-item">
            &lt;input class="form-check-input me-1 fw-semibold" type="checkbox" value="" aria-label="...">
            Hearing the information and responding.
        &lt;/li>
        &lt;li class="list-group-item">
            &lt;input class="form-check-input me-1 fw-semibold" type="checkbox" value="" aria-label="..." checked>
            Setting up and customizing your own sales.
        &lt;/li>
        &lt;li class="list-group-item">
            &lt;input class="form-check-input me-1 fw-semibold" type="checkbox" value="" aria-label="..." checked>
            New Admin Launched.
        &lt;/li>
        &lt;li class="list-group-item">
            &lt;input class="form-check-input me-1 fw-semibold" type="checkbox" value="" aria-label="...">
            To maximize profits and improve productivity.
        &lt;/li>
        &lt;li class="list-group-item">
            &lt;input class="form-check-input me-1 fw-semibold" type="checkbox" value="" aria-label="...">
            To have a complete 360° overview of sales information, having.
        &lt;/li>
    &lt;/ul>` },
    ListWithRadios = {
        script: `
    &lt;div class="list-group">
        &lt;label class="list-group-item">
            &lt;input class="form-check-input me-1" type="radio" value="" name="list-radio" checked>
            Accurate information at any given point.
        &lt;/label>
        &lt;label class="list-group-item">
            &lt;input class="form-check-input me-1" type="radio" value="" name="list-radio" checked>
            Hearing the information and responding.
        &lt;/label>
        &lt;label class="list-group-item">
            &lt;input class="form-check-input me-1" type="radio" value="" name="list-radio" checked>
            Setting up and customizing your own sales.
        &lt;/label>
        &lt;label class="list-group-item">
            &lt;input class="form-check-input me-1" type="radio" value="" name="list-radio">
            New Admin Launched.
        &lt;/label>
        &lt;label class="list-group-item">
            &lt;input class="form-check-input me-1" type="radio" value="" name="list-radio">
            To maximize profits and improve productivity.
        &lt;/label>
        &lt;label class="list-group-item">
            &lt;input class="form-check-input me-1" type="radio" value="" name="list-radio">
            To have a complete 360° overview of sales information, having.
        &lt;/label>
    &lt;/div>` },
    ListWithBadges = {
        script: `
    &lt;ul class="list-group">
        &lt;li class="list-group-item d-flex justify-content-between align-items-center fw-semibold">
            Groceries
            &lt;span class="badge bg-primary">Available&lt;/span>
        &lt;/li>
        &lt;li class="list-group-item d-flex justify-content-between align-items-center fw-semibold">
            Furniture
            &lt;span class="badge bg-secondary">Buy&lt;/span>
        &lt;/li>
        &lt;li class="list-group-item d-flex justify-content-between align-items-center fw-semibold">
            Beauty
            &lt;span class="badge bg-danger rounded-pill">32&lt;/span>
        &lt;/li>
        &lt;li class="list-group-item d-flex justify-content-between align-items-center fw-semibold">
            Books
            &lt;span class="badge bg-light text-default">New&lt;/span>
        &lt;/li>
        &lt;li class="list-group-item d-flex justify-content-between align-items-center fw-semibold">
            Toys
            &lt;span class="badge bg-info-gradient">Hot&lt;/span>
        &lt;/li>
        &lt;li class="list-group-item d-flex justify-content-between align-items-center fw-semibold">
            Mobiles
            &lt;span class="badge bg-warning">Sold Out&lt;/span>
        &lt;/li>
    &lt;/ul>` },
    Horizontal = {
        script: `
    &lt;ul class="mb-3 list-group list-group-horizontal">
        &lt;li class="list-group-item">An item&lt;/li>
        &lt;li class="list-group-item">A second item&lt;/li>
        &lt;li class="list-group-item">A third item&lt;/li>
    &lt;/ul>
    &lt;ul class="mb-3 list-group list-group-horizontal-sm">
        &lt;li class="list-group-item">An item&lt;/li>
        &lt;li class="list-group-item">A second item&lt;/li>
        &lt;li class="list-group-item">A third item&lt;/li>
    &lt;/ul>
    &lt;ul class="mb-3 list-group list-group-horizontal-md">
        &lt;li class="list-group-item">An item&lt;/li>
        &lt;li class="list-group-item">A second item&lt;/li>
        &lt;li class="list-group-item">A third item&lt;/li>
    &lt;/ul>
    &lt;ul class="mb-3 list-group list-group-horizontal-lg">
        &lt;li class="list-group-item">An item&lt;/li>
        &lt;li class="list-group-item">A second item&lt;/li>
        &lt;li class="list-group-item">A third item&lt;/li>
    &lt;/ul>
    &lt;ul class="mb-3 list-group list-group-horizontal-xl">
        &lt;li class="list-group-item">An item&lt;/li>
        &lt;li class="list-group-item">A second item&lt;/li>
        &lt;li class="list-group-item">A third item&lt;/li>
    &lt;/ul>
    &lt;ul class="mb-3 list-group list-group-horizontal-xxl">
        &lt;li class="list-group-item">An item&lt;/li>
        &lt;li class="list-group-item">A second item&lt;/li>
        &lt;li class="list-group-item">A third item&lt;/li>
    &lt;/ul>` };