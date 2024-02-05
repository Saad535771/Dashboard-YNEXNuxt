export let

    basicAccordion = {
        script: `&lt;div class="accordion" id="accordionExample">
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingOne">
        &lt;button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            Accordion Item #1
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
        data-bs-parent="#accordionExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to
            style each element. These classes control the overall appearance, as
            well as
            the
            showing and hiding via CSS transitions. You can modify any of this with
            custom
            CSS or overriding our default variables. It's also worth noting that
            just
            about
            any HTML can go within the &lt;code>.accordion-body&lt;/code>, though the
            transition
            does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingTwo">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Accordion Item #2
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the second item's accordion body.&lt;/strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to
            style each element. These classes control the overall appearance, as
            well as
            the
            showing and hiding via CSS transitions. You can modify any of this with
            custom
            CSS or overriding our default variables. It's also worth noting that
            just
            about
            any HTML can go within the &lt;code>.accordion-body&lt;/code>, though the
            transition
            does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingThree">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
        data-bs-parent="#accordionExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the third item's accordion body.&lt;/strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to
            style each element. These classes control the overall appearance, as
            well as
            the
            showing and hiding via CSS transitions. You can modify any of this with
            custom
            CSS or overriding our default variables. It's also worth noting that
            just
            about
            any HTML can go within the &lt;code>.accordion-body&lt;/code>, though the
            transition
            does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;/div>` },
    alwaysOpenAccordion = {
        script: ` &lt;div class="accordion" id="accordionPanelsStayOpenExample">
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="panelsStayOpen-headingOne">
        &lt;button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne">
            Accordion Item #1
        &lt;/button>
    &lt;/h2>
    &lt;div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
        aria-labelledby="panelsStayOpen-headingOne">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to style each element. These classes control the overall appearance, as
            well
            as the showing and hiding via CSS transitions. It's also worth
            noting
            that just about any HTML can go within the &lt;code>.accordion-body&lt;/code>,
            though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="panelsStayOpen-headingTwo">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
            aria-controls="panelsStayOpen-collapseTwo">
            Accordion Item #2
        &lt;/button>
    &lt;/h2>
    &lt;div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingTwo">
        &lt;div class="accordion-body">
            &lt;strong>This is the second item's accordion body.&lt;/strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to style each element. These classes control the overall appearance, as
            well
            as the showing and hiding via CSS transitions. You can modify any of
            this
            with custom CSS or overriding our default variables. It's also worth
            noting
            that just about any HTML can go within the &lt;code>.accordion-body&lt;/code>,
            though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="panelsStayOpen-headingThree">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
            aria-controls="panelsStayOpen-collapseThree">
            Accordion Item #3
        &lt;/button>
    &lt;/h2>
    &lt;div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
        aria-labelledby="panelsStayOpen-headingThree">
        &lt;div class="accordion-body">
            &lt;strong>This is the third item's accordion body.&lt;/strong> It is hidden
            by
            default, until the collapse plugin adds the appropriate classes that we
            use
            to style each element. These classes control the overall appearance, as
            well
            as the showing and hiding via CSS transitions. You can modify any of
            this
            with custom CSS or overriding our default variables. It's also worth
            noting
            that just about any HTML can go within the &lt;code>.accordion-body&lt;/code>,
            though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;/div>` },
    flushAccordion = {
        script: `&lt;div class="accordion accordion-flush" id="accordionFlushExample">
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="flush-headingOne">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Accordion Item #1
        &lt;/button>
    &lt;/h2>
    &lt;div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
        data-bs-parent="#accordionFlushExample">
        &lt;div class="accordion-body">Placeholder content for this accordion,
            which is
            intended to demonstrate the &lt;code>.accordion-flush&lt;/code> class.
            This is
            the
            first item's accordion body.&lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="flush-headingTwo">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Accordion Item #2
        &lt;/button>
    &lt;/h2>
    &lt;div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
        data-bs-parent="#accordionFlushExample">
        &lt;div class="accordion-body">Placeholder content for this accordion,
            which is
            intended to demonstrate the &lt;code>.accordion-flush&lt;/code> class.
            This is
            the
            second item's accordion body. Let's imagine this being filled
            with
            some
            actual content.&lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="flush-headingThree">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree" aria-expanded="false"
            aria-controls="flush-collapseThree">
            Accordion Item #3
        &lt;/button>
    &lt;/h2>
    &lt;div id="flush-collapseThree" class="accordion-collapse collapse"
        aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
        &lt;div class="accordion-body">Placeholder content for this accordion,
            which is
            intended to demonstrate the &lt;code>.accordion-flush&lt;/code> class.
            This is
            the
            third item's accordion body. Nothing more exciting happening
            here in
            terms
            of content, but just filling up the space to make it look, at
            least
            at
            first
            glance, a bit more representative of how this would look in a
            real-world
            application.&lt;/div>
    &lt;/div>
&lt;/div>
&lt;/div>` },
    lightPrimary = {
        script: `&lt;div class="accordion accordion-primary" id="accordionPrimaryExample">
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingPrimaryOne">
        &lt;button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimaryOne" aria-expanded="true"
            aria-controls="collapsePrimaryOne">
            Accordion Item #1
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapsePrimaryOne" class="accordion-collapse collapse show"
        aria-labelledby="headingPrimaryOne" data-bs-parent="#accordionPrimaryExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingPrimaryTwo">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimaryTwo" aria-expanded="false"
            aria-controls="collapsePrimaryTwo">
            Accordion Item #2
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapsePrimaryTwo" class="accordion-collapse collapse" aria-labelledby="headingPrimaryTwo"
        data-bs-parent="#accordionPrimaryExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingPrimaryThree">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimaryThree" aria-expanded="false"
            aria-controls="collapsePrimaryThree">
            Accordion Item #3
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapsePrimaryThree" class="accordion-collapse collapse"
        aria-labelledby="headingPrimaryThree" data-bs-parent="#accordionPrimaryExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;/div>` },
    lightSecondary = {
        script: `&lt;div class="accordion accordion-secondary" id="accordionSecondaryExample">
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingSecondaryOne">
        &lt;button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondaryOne" aria-expanded="true"
            aria-controls="collapseSecondaryOne">
            Accordion Item #1
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapseSecondaryOne" class="accordion-collapse collapse show"
        aria-labelledby="headingSecondaryOne" data-bs-parent="#accordionSecondaryExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingSecondaryTwo">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondaryTwo" aria-expanded="false"
            aria-controls="collapseSecondaryTwo">
            Accordion Item #2
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapseSecondaryTwo" class="accordion-collapse collapse"
        aria-labelledby="headingSecondaryTwo" data-bs-parent="#accordionSecondaryExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingSecondaryThree">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondaryThree" aria-expanded="false"
            aria-controls="collapseSecondaryThree">
            Accordion Item #3
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapseSecondaryThree" class="accordion-collapse collapse"
        aria-labelledby="headingSecondaryThree" data-bs-parent="#accordionSecondaryExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;/div>` },
    solidPrimary = {
        script: `&lt;div class="accordion accordion-solid-primary" id="accordionPrimarySolidExample">
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingPrimarySolidOne">
        &lt;button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimarySolidOne" aria-expanded="true"
            aria-controls="collapsePrimarySolidOne">
            Accordion Item #1
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapsePrimarySolidOne" class="accordion-collapse collapse show"
        aria-labelledby="headingPrimarySolidOne" data-bs-parent="#accordionPrimarySolidExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingPrimarySolidTwo">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimarySolidTwo" aria-expanded="false"
            aria-controls="collapsePrimarySolidTwo">
            Accordion Item #2
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapsePrimarySolidTwo" class="accordion-collapse collapse"
        aria-labelledby="headingPrimarySolidTwo" data-bs-parent="#accordionPrimarySolidExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingPrimarySolidThree">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsePrimarySolidThree" aria-expanded="false"
            aria-controls="collapsePrimarySolidThree">
            Accordion Item #3
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapsePrimarySolidThree" class="accordion-collapse collapse"
        aria-labelledby="headingPrimarySolidThree" data-bs-parent="#accordionPrimarySolidExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;/div>` },
    solidSecondary = {
        script: `&lt;div class="accordion accordion-solid-secondary" id="accordionSecondarySolidExample">
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingSecondarySolidOne">
        &lt;button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondarySolidOne" aria-expanded="true"
            aria-controls="collapseSecondarySolidOne">
            Accordion Item #1
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapseSecondarySolidOne" class="accordion-collapse collapse show"
        aria-labelledby="headingSecondarySolidOne" data-bs-parent="#accordionSecondarySolidExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingSecondarySolidTwo">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondarySolidTwo" aria-expanded="false"
            aria-controls="collapseSecondarySolidTwo">
            Accordion Item #2
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapseSecondarySolidTwo" class="accordion-collapse collapse"
        aria-labelledby="headingSecondarySolidTwo" data-bs-parent="#accordionSecondarySolidExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingSecondarySolidThree">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseSecondarySolidThree" aria-expanded="false"
            aria-controls="collapseSecondarySolidThree">
            Accordion Item #3
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapseSecondarySolidThree" class="accordion-collapse collapse"
        aria-labelledby="headingSecondarySolidThree" data-bs-parent="#accordionSecondarySolidExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;/div>` },
    coloredPrimary = {
        script: `&lt;div class="accordion accordion-border-primary accordions-items-seperate"
id="accordionprimaryborderExample">
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingborderprimaryOne">
        &lt;button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#primaryBorderOne" aria-expanded="true" aria-controls="primaryBorderOne">
            Accordion Item #1
        &lt;/button>
    &lt;/h2>
    &lt;div id="primaryBorderOne" class="accordion-collapse collapse show"
        aria-labelledby="headingborderprimaryOne" data-bs-parent="#accordionprimaryborderExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingborderprimaryTwo">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#primaryBorderTwo" aria-expanded="false" aria-controls="primaryBorderTwo">
            Accordion Item #2
        &lt;/button>
    &lt;/h2>
    &lt;div id="primaryBorderTwo" class="accordion-collapse collapse"
        aria-labelledby="headingborderprimaryTwo" data-bs-parent="#accordionprimaryborderExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingborderprimaryThree">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#primaryBorderThree" aria-expanded="false"
            aria-controls="primaryBorderThree">
            Accordion Item #3
        &lt;/button>
    &lt;/h2>
    &lt;div id="primaryBorderThree" class="accordion-collapse collapse"
        aria-labelledby="headingborderprimaryThree" data-bs-parent="#accordionprimaryborderExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;/div>` },
    coloredSecondary = {
        script: `&lt;div class="accordion accordion-border-success accordions-items-seperate"
id="accordionsuccessborderExample">
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingbordersuccessOne">
        &lt;button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#successBorderOne" aria-expanded="true" aria-controls="successBorderOne">
            Accordion Item #1
        &lt;/button>
    &lt;/h2>
    &lt;div id="successBorderOne" class="accordion-collapse collapse show"
        aria-labelledby="headingbordersuccessOne" data-bs-parent="#accordionsuccessborderExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingbordersuccessTwo">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#successBorderTwo" aria-expanded="false" aria-controls="successBorderTwo">
            Accordion Item #2
        &lt;/button>
    &lt;/h2>
    &lt;div id="successBorderTwo" class="accordion-collapse collapse"
        aria-labelledby="headingbordersuccessTwo" data-bs-parent="#accordionsuccessborderExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingbordersuccessThree">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#successBorderThree" aria-expanded="false"
            aria-controls="successBorderThree">
            Accordion Item #3
        &lt;/button>
    &lt;/h2>
    &lt;div id="successBorderThree" class="accordion-collapse collapse"
        aria-labelledby="headingbordersuccessThree" data-bs-parent="#accordionsuccessborderExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;/div>` },
    leftAlignedIcons = {
        script: `&lt;div class="accordion accordionicon-left accordions-items-seperate" id="accordioniconLeftExample">
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingleftOne">
        &lt;button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseleftOne" aria-expanded="true" aria-controls="collapseleftOne">
            Accordion Item #1
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapseleftOne" class="accordion-collapse collapse show" aria-labelledby="headingleftOne"
        data-bs-parent="#accordioniconLeftExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingleftTwo">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseLeftTwo" aria-expanded="false" aria-controls="collapseLeftTwo">
            Accordion Item #2
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapseLeftTwo" class="accordion-collapse collapse" aria-labelledby="headingleftTwo"
        data-bs-parent="#accordioniconLeftExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the second item's accordion body.&lt;/strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the &lt;code>.accordion-body&lt;/code>, though the transition does limit
            overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingleftThree">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseLeftThree" aria-expanded="false" aria-controls="collapseLeftThree">
            Accordion Item #3
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapseLeftThree" class="accordion-collapse collapse" aria-labelledby="headingleftThree"
        data-bs-parent="#accordioniconLeftExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the third item's accordion body.&lt;/strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the &lt;code>.accordion-body&lt;/code>, though the transition does limit
            overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;/div>` },
    withoutIcon = {
        script: `&lt;div class="accordion accordionicon-none accordions-items-seperate" id="accordioniconnoIconExample">
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingnoIconOne">
        &lt;button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsenoIconOne" aria-expanded="true" aria-controls="collapsenoIconOne">
            Accordion Item #1
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapsenoIconOne" class="accordion-collapse collapse show"
        aria-labelledby="headingnoIconOne" data-bs-parent="#accordioniconnoIconExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingnoIconTwo">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsenoIconTwo" aria-expanded="false" aria-controls="collapsenoIconTwo">
            Accordion Item #2
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapsenoIconTwo" class="accordion-collapse collapse" aria-labelledby="headingnoIconTwo"
        data-bs-parent="#accordioniconnoIconExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the second item's accordion body.&lt;/strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the &lt;code>.accordion-body&lt;/code>, though the transition does limit
            overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingnoIconThree">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsenoIconThree" aria-expanded="false"
            aria-controls="collapsenoIconThree">
            Accordion Item #3
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapsenoIconThree" class="accordion-collapse collapse"
        aria-labelledby="headingnoIconThree" data-bs-parent="#accordioniconnoIconExample">
        &lt;div class="accordion-body">
            &lt;strong>This is the third item's accordion body.&lt;/strong> It is hidden
            by default, until the collapse plugin adds the appropriate classes that
            we use to style each element. These classes control the overall
            appearance, as well as the showing and hiding via CSS transitions. You
            can modify any of this with custom CSS or overriding our default
            variables. It's also worth noting that just about any HTML can go within
            the &lt;code>.accordion-body&lt;/code>, though the transition does limit
            overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;/div>` },
    customIconAccordion = {
        script: `&lt;div class="accordion accordion-customicon1 accordions-items-seperate" id="accordioncustomicon1Example">
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingcustomicon1One">
        &lt;button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsecustomicon1One" aria-expanded="true"
            aria-controls="collapsecustomicon1One">
            Accordion Item #1
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapsecustomicon1One" class="accordion-collapse collapse show"
        aria-labelledby="headingcustomicon1One" data-bs-parent="#accordioncustomicon1Example">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingcustomicon1Two">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsecustomicon1Two" aria-expanded="false"
            aria-controls="collapsecustomicon1Two">
            Accordion Item #2
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapsecustomicon1Two" class="accordion-collapse collapse"
        aria-labelledby="headingcustomicon1Two" data-bs-parent="#accordioncustomicon1Example">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item">
    &lt;h2 class="accordion-header" id="headingcustomicon1Three">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapsecustomicon1Three" aria-expanded="false"
            aria-controls="collapsecustomicon1Three">
            Accordion Item #3
        &lt;/button>
    &lt;/h2>
    &lt;div id="collapsecustomicon1Three" class="accordion-collapse collapse"
        aria-labelledby="headingcustomicon1Three" data-bs-parent="#accordioncustomicon1Example">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;/div>` },
    customAccordion = {
        script: `&lt;div class="accordion customized-accordion accordions-items-seperate" id="customizedAccordion">
&lt;div class="accordion-item custom-accordion-primary">
    &lt;h2 class="accordion-header" id="customizedAccordionOne">
        &lt;button class="accordion-button" type="button" data-bs-toggle="collapse"
            data-bs-target="#customized-AccordionOne" aria-expanded="true"
            aria-controls="customized-AccordionOne">
            Accordion Item #1
        &lt;/button>
    &lt;/h2>
    &lt;div id="customized-AccordionOne" class="accordion-collapse collapse show"
        aria-labelledby="customizedAccordionOne" data-bs-parent="#customizedAccordion">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item custom-accordion-secondary">
    &lt;h2 class="accordion-header" id="customizedAccordionTwo">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#customized-AccordionTwo" aria-expanded="false"
            aria-controls="customized-AccordionTwo">
            Accordion Item #2
        &lt;/button>
    &lt;/h2>
    &lt;div id="customized-AccordionTwo" class="accordion-collapse collapse"
        aria-labelledby="customizedAccordionTwo" data-bs-parent="#customizedAccordion">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="accordion-item custom-accordion-danger">
    &lt;h2 class="accordion-header" id="customizedAccordionThree">
        &lt;button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#customized-AccordionThree" aria-expanded="false"
            aria-controls="customized-AccordionThree">
            Accordion Item #3
        &lt;/button>
    &lt;/h2>
    &lt;div id="customized-AccordionThree" class="accordion-collapse collapse"
        aria-labelledby="customizedAccordionThree" data-bs-parent="#customizedAccordion">
        &lt;div class="accordion-body">
            &lt;strong>This is the first item's accordion body.&lt;/strong> It is shown by
            default, until the collapse plugin adds the appropriate classes that we
            use to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can modify
            any of this with custom CSS or overriding our default variables. It's
            also worth noting that just about any HTML can go within the
            &lt;code>.accordion-body&lt;/code>, though the transition does limit overflow.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;/div>` },
    example = {
        script: `&lt;p class="mb-0">
&lt;a class="btn btn-primary collapsed mb-2 me-2" data-bs-toggle="collapse" href="#collapseExample"
    role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
&lt;/a>
&lt;button class="btn btn-secondary collapsed mb-2" type="button" data-bs-toggle="collapse"
    data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
&lt;/button>
&lt;/p>
&lt;div class="collapse" id="collapseExample">
&lt;div class="card card-body mb-0">
    Some placeholder content for the collapse component. This panel
    is
    hidden by default but revealed when the user activates the
    relevant
    trigger.
&lt;/div>
&lt;/div>` },
    targetsCollapse = {
        script: `&lt;p class="mb-0">
&lt;a class="btn btn-primary mb-2  me-2" data-bs-toggle="collapse" href="#multiCollapseExample1"
    role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first
    element&lt;/a>
&lt;button class="btn btn-success mb-2 me-2" type="button" data-bs-toggle="collapse"
    data-bs-target="#multiCollapseExample2" aria-expanded="false"
    aria-controls="multiCollapseExample2">Toggle second
    element&lt;/button>
&lt;button class="btn btn-danger mb-2" type="button" data-bs-toggle="collapse"
    data-bs-target=".multi-collapse" aria-expanded="false"
    aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle
    both elements&lt;/button>
&lt;/p>
&lt;div class="row">
&lt;div class="col m-1">
    &lt;div class="collapse multi-collapse" id="multiCollapseExample1">

        &lt;div class="card card-body mb-0">
            Some placeholder content for the first collapse
            component of
            this multi-collapse example. This panel is hidden by
            default
            but revealed when the user activates the relevant
            trigger.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="col m-1">
    &lt;div class="collapse multi-collapse" id="multiCollapseExample2">

        &lt;div class="card card-body mb-0">
            Some placeholder content for the second collapse
            component
            of this multi-collapse example. This panel is hidden by
            default but revealed when the user activates the
            relevant
            trigger.
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;/div>` },
    horizontalCollapse = {
        script: `&lt;p>
&lt;button class="btn btn-primary" type="button" data-bs-toggle="collapse"
    data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
    Toggle width collapse
&lt;/button>
&lt;/p>
&lt;div style="min-height: 120px;">
&lt;div class="collapse collapse-horizontal" id="collapseWidthExample">
    &lt;div class="card card-body" style="width: 230px;">
        This is some placeholder content for a horizontal collapse. It's
        hidden
        by default and shown when triggered.
    &lt;/div>
&lt;/div>
&lt;/div>` };