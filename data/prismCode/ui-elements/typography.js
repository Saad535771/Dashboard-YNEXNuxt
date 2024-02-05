export let
    headingsHtags = {
        script: `
    &lt;h1 class="mb-3">h1. Bootstrap heading&lt;/h1>
    &lt;h2 class="mb-3">h2. Bootstrap heading&lt;/h2>
    &lt;h3 class="mb-3">h3. Bootstrap heading&lt;/h3>
    &lt;h4 class="mb-3">h4. Bootstrap heading&lt;/h4>
    &lt;h5 class="mb-3">h5. Bootstrap heading&lt;/h5>
    &lt;h6 class="mb-0">h6. Bootstrap heading&lt;/h6>` },
    headingClassNames = {
        script: `
    &lt;p class="h1 mb-3">h1. Bootstrap heading&lt;/p>
    &lt;p class="h2 mb-3">h2. Bootstrap heading&lt;/p>
    &lt;p class="h3 mb-3">h3. Bootstrap heading&lt;/p>
    &lt;p class="h4 mb-3">h4. Bootstrap heading&lt;/p>
    &lt;p class="h5 mb-3">h5. Bootstrap heading&lt;/p>
    &lt;p class="h6 mb-0">h6. Bootstrap heading&lt;/p>` },
    displayHeadings = {
        script: `
    &lt;h1 class="display-1">Display 1&lt;/h1>
    &lt;h1 class="display-2">Display 2&lt;/h1>
    &lt;h1 class="display-3">Display 3&lt;/h1>
    &lt;h1 class="display-4">Display 4&lt;/h1>
    &lt;h1 class="display-5">Display 5&lt;/h1>
    &lt;h1 class="display-6">Display 6&lt;/h1>` },
    customizingHeadings = {
        script: `
    &lt;h3>
        Fancy display heading
        &lt;small class="text-muted">With faded secondary text&lt;/small>
    &lt;/h3>` },
    inlineTextElements = {
        script: `
    &lt;p>You can use the mark tag to &lt;mark>highlight&lt;/mark> text.&lt;/p>
    &lt;p>&lt;del>This line of text is meant to be treated as deleted text.&lt;/del>
    &lt;/p>
    &lt;p>&lt;s>This line of text is meant to be treated as no longer
            accurate.&lt;/s>
    &lt;/p>
    &lt;p>&lt;ins>This line of text is meant to be treated as an addition to the
            document.&lt;/ins>&lt;/p>
    &lt;p>&lt;u>This line of text will render as underlined.&lt;/u>&lt;/p>
    &lt;p>&lt;small>This line of text is meant to be treated as fine
            print.&lt;/small>
    &lt;/p>
    &lt;p>&lt;strong>This line rendered as bold text.&lt;/strong>&lt;/p>
    &lt;p class="mb-0">&lt;em>This line rendered as italicized text.&lt;/em>&lt;/p>` },
    fontSizes = {
        script: `
    &lt;p class="fs-1 mb-2">.fs-1 text&lt;/p>
    &lt;p class="fs-2 mb-2">.fs-2 text&lt;/p>
    &lt;p class="fs-3 mb-2">.fs-3 text&lt;/p>
    &lt;p class="fs-4 mb-2">.fs-4 text&lt;/p>
    &lt;p class="fs-5 mb-2">.fs-5 text&lt;/p>
    &lt;p class="fs-6 mb-0">.fs-6 text&lt;/p>` },
    leadParagraph = {
        script: `
    &lt;p class="lead mb-0">
        &lt;b>This is a lead paragraph. It stands out from regular paragraphs&lt;/b>.There are many variations
        of
        passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by
        injected humour, or randomised words which don't look even slightly believable. If you are going
        to
        use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
        the
        middle of text.
    &lt;/p>` },
    leftAligned = {
        script: `
    &lt;figure class="blockquote-container">
        &lt;blockquote class="blockquote mb-2">
            &lt;h6>The greatest glory in living lies not in never falling, but in rising every time we
                fall.
            &lt;/h6>
        &lt;/blockquote>
        &lt;figcaption class="blockquote-footer mt-0 mb-0 text-muted op-7">&lt;cite title="Source Title">Nelson
                Mandela&lt;/cite>
        &lt;/figcaption>
    &lt;/figure>` },
    rightAligned = {
        script: `
    &lt;figure class="blockquote-container text-end">
        &lt;blockquote class="blockquote mb-2">
            &lt;h6>The greatest glory in living lies not in never falling, but in rising every time we
                fall.
            &lt;/h6>
        &lt;/blockquote>
        &lt;figcaption class="blockquote-footer mt-0 mb-0 text-muted op-7">&lt;cite title="Source Title">Nelson
                Mandela&lt;/cite>
        &lt;/figcaption>
    &lt;/figure>` },
    primaryBlockquote = {
        script: `
    &lt;blockquote class="blockquote custom-blockquote primary mb-0 text-center">
        &lt;h6>The future belongs to those who believe in the beauty of their dreams..&lt;/h6>
        &lt;footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as &lt;cite
                title="Source Title">-Eleanor Roosevelt&lt;/cite>&lt;/footer>
        &lt;span class="quote-icon">&lt;i class="ri-information-line">&lt;/i>&lt;/span>
    &lt;/blockquote>` },
    secondaryBlockquote = {
        script: `
    &lt;blockquote class="blockquote custom-blockquote secondary mb-0 text-center">
        &lt;h6>The future belongs to those who believe in the beauty of their dreams..&lt;/h6>
        &lt;footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as &lt;cite
                title="Source Title">-Eleanor Roosevelt&lt;/cite>&lt;/footer>
        &lt;span class="quote-icon">&lt;i class="ri-information-line">&lt;/i>&lt;/span>
    &lt;/blockquote>` },
    warningBlockquote = {
        script: `
    &lt;blockquote class="blockquote custom-blockquote warning mb-0 text-center">
        &lt;h6>The future belongs to those who believe in the beauty of their dreams..&lt;/h6>
        &lt;footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as &lt;cite
                title="Source Title">-Eleanor Roosevelt&lt;/cite>&lt;/footer>
        &lt;span class="quote-icon">&lt;i class="ri-information-line">&lt;/i>&lt;/span>
    &lt;/blockquote>` },
    successBlockquote = {
        script: `
    &lt;blockquote class="blockquote custom-blockquote success mb-0 text-center">
        &lt;h6>The future belongs to those who believe in the beauty of their dreams..&lt;/h6>
        &lt;footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as &lt;cite
                title="Source Title">-Eleanor Roosevelt&lt;/cite>&lt;/footer>
        &lt;span class="quote-icon">&lt;i class="ri-information-line">&lt;/i>&lt;/span>
    &lt;/blockquote>` },
    inofBlockquote = {
        script: `
    &lt;blockquote class="blockquote custom-blockquote info mb-0 text-center">
        &lt;h6>The future belongs to those who believe in the beauty of their dreams..&lt;/h6>
        &lt;footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as &lt;cite
                title="Source Title">-Eleanor Roosevelt&lt;/cite>&lt;/footer>
        &lt;span class="quote-icon">&lt;i class="ri-information-line">&lt;/i>&lt;/span>
    &lt;/blockquote>` },
    dangerBlockquote = {
        script: `
    &lt;blockquote class="blockquote custom-blockquote danger mb-0 text-center">
        &lt;h6>The future belongs to those who believe in the beauty of their dreams..&lt;/h6>
        &lt;footer class="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as &lt;cite
                title="Source Title">-Eleanor Roosevelt&lt;/cite>&lt;/footer>
        &lt;span class="quote-icon">&lt;i class="ri-information-line">&lt;/i>&lt;/span>
    &lt;/blockquote>` },
    descriptionListAlignment = {
        script: `
    &lt;dl class="row mb-0">
        &lt;dt class="col-sm-3">Description lists&lt;/dt>
        &lt;dd class="col-sm-9">A description list is perfect for defining terms.&lt;/dd>

        &lt;dt class="col-sm-3">Term&lt;/dt>
        &lt;dd class="col-sm-9">
            &lt;p>Definition for the term.&lt;/p>
            &lt;p>And some more placeholder definition text.&lt;/p>
        &lt;/dd>

        &lt;dt class="col-sm-3">Another term&lt;/dt>
        &lt;dd class="col-sm-9">This definition is short, so no extra paragraphs or
            anything.&lt;/dd>

        &lt;dt class="col-sm-3 text-truncate">Truncated term is truncated&lt;/dt>
        &lt;dd class="col-sm-9">This can be useful when space is tight. Adds an
            ellipsis at
            the end.&lt;/dd>

        &lt;dt class="col-sm-3">Nesting&lt;/dt>
        &lt;dd class="col-sm-9 mb-0">
            &lt;dl class="row mb-0">
                &lt;dt class="col-sm-4">Nested definition list&lt;/dt>
                &lt;dd class="col-sm-8 mb-0">I heard you like definition lists. Let me put a
                    definition list inside your definition list.&lt;/dd>
            &lt;/dl>
        &lt;/dd>
    &lt;/dl>` },
    listUnstyled = {
        script: `&lt;ul class="list-unstyled">
    &lt;li>This is a list.&lt;/li>
    &lt;li>It appears completely unstyled.&lt;/li>
    &lt;li>Structurally, it's still a list.&lt;/li>
    &lt;li>However, this style only applies to immediate child elements.&lt;/li>
    &lt;li class="mb-2">Nested lists:
        &lt;ul>
            &lt;li>are unaffected by this style&lt;/li>
            &lt;li>will still show a bullet&lt;/li>
            &lt;li>and have appropriate left margin&lt;/li>
        &lt;/ul>
    &lt;/li>
    &lt;li>This may still come in handy in some situations.&lt;/li>
&lt;/ul>` },
    sbbreviations = {
        script: `&lt;p>&lt;abbr title="attribute">attr&lt;/abbr>&lt;/p>
    &lt;p class="mb-0">&lt;abbr title="HyperText Markup Language" class="initialism">HTML&lt;/abbr>&lt;/p>` },
    listinline = {
        script: `&lt;ul class="list-inline mb-0">
    &lt;li class="list-inline-item">This is a list item.&lt;/li>
    &lt;li class="list-inline-item">And another one.&lt;/li>
    &lt;li class="list-inline-item">But they're displayed inline.&lt;/li>
&lt;/ul>` },
    horizontalrules = {
        script: `&lt;p class="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem fuga iste
    obcaecati natus eos officiis adipisci voluptatibus ipsum, architecto veniam delectus vel dolor
    magni
    a vero sunt ut harum.&lt;/p>
&lt;div class="text-success">
    &lt;hr>
&lt;/div>
&lt;p class=" mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis, magni
    numquam quos perferendis nulla magnam odit amet excepturi quisquam provident.&lt;/p>

&lt;hr class="text-danger border-2 opacity-50">
&lt;p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid
    consequatur
    aut doloremque assumenda voluptatem, id qui vero adipisci! Nostrum ipsam praesentium!&lt;/p>
&lt;hr class="border-primary border-3 opacity-75">` },
    texttransform = {
        script: `&lt;p class="text-lowercase">Lowercased text.&lt;/p>
    &lt;p class="text-uppercase">Uppercased text.&lt;/p>
    &lt;p class="text-capitalize mb-0">CapiTaliZed text.&lt;/p>` },
    textDecoration = {
        script: ` &lt;p class="text-decoration-underline">This text has a line underneath it.
    &lt;/p>
    &lt;p class="text-decoration-line-through">This text has a line going
        through
        it.
    &lt;/p>
    &lt;a href="javascript:void(0);" class="text-decoration-none">This link has its text
        decoration
        removed
    &lt;/a>` },
    fontWeightAndItalics = {
        script: `&lt;p class="fw-bold">Bold text.&lt;/p>
    &lt;p class="fw-bolder">Bolder weight text (relative to the parent element).&lt;/p>
    &lt;p class="fw-semibold">Semibold weight text.&lt;/p>
    &lt;p class="fw-normal">Normal weight text.&lt;/p>
    &lt;p class="fw-light">Light weight text.&lt;/p>
    &lt;p class="fw-lighter">Lighter weight text (relative to the parent element).&lt;/p>
    &lt;p class="fst-italic">Italic text.&lt;/p>
    &lt;p class="fst-normal mb-0">Text with normal font style&lt;/p>` },
    lineHeight = {
        script: `&lt;p class="lh-1">This is a long paragraph written to show how the line-height of
    an
    element is affected by our utilities. Classes are applied to the element
    itself
    or sometimes the parent element. These classes can be customized as needed
    with
    our utility API.
&lt;/p>
&lt;p class="lh-sm">This is a long paragraph written to show how the line-height of
    an
    element is affected by our utilities. Classes are applied to the element
    itself
    or sometimes the parent element. These classes can be customized as needed
    with
    our utility API.
&lt;/p>
&lt;p class="lh-base">This is a long paragraph written to show how the line-height
    of
    an element is affected by our utilities. Classes are applied to the element
    itself or sometimes the parent element. These classes can be customized as
    needed with our utility API.
&lt;/p>
&lt;p class="lh-lg mb-0">This is a long paragraph written to show how the
    line-height
    of an
    element is affected by our utilities. Classes are applied to the element
    itself
    or sometimes the parent element. These classes can be customized as needed
    with
    our utility API.
&lt;/p>` },
    monospace = {
        script: `
    &lt;p class="font-monospace mb-0">This is in monospace&lt;/p>` },
    resetColor = {
        script: `
    &lt;p class="text-muted mb-0">
        Muted text with a &lt;a href="javascript:void(0);"
            class="text-reset text-decoration-underline text-dark">reset link&lt;/a>.
    &lt;/p>` },
    visibleText = { script: ` &lt;p class="visible mb-0">This is visible text&lt;/p>` },
    invisibleText = { script: `&lt;p class="invisible mb-0">This is invisible text&lt;/p>` },
    textAlignment = {
        script: `&lt;p class="text-start">Start aligned text on all viewport sizes.&lt;/p>
    &lt;p class="text-center">Center aligned text on all viewport sizes.&lt;/p>
    &lt;p class="text-end">End aligned text on all viewport sizes.&lt;/p>
    &lt;p class="text-sm-start">Start aligned text on viewports sized SM (small) or wider.
    &lt;/p>
    &lt;p class="text-md-start">Start aligned text on viewports sized MD (medium) or wider.
    &lt;/p>
    &lt;p class="text-lg-start">Start aligned text on viewports sized LG (large) or wider.
    &lt;/p>
    &lt;p class="text-xl-start">Start aligned text on viewports sized XL (extra-large)or wider.&lt;/p>` },
    textWrappingAndOverflow = {
        script: `&lt;div class="badge bg-primary text-wrap mb-3" style="width: 6rem;">
    This text should wrap.
&lt;/div>
&lt;p class="text-muted mb-2"> use class &lt;code>.text-nowrap&lt;/code> to prevent text from wrapping&lt;/p>
&lt;div class="text-nowrap bg-light border" style="width: 8rem;">
    This text should overflow the parent.
&lt;/div>` },
    wordBreak = {
        script: `&lt;p class="text-break mb-0">
    mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
&lt;/p>` };