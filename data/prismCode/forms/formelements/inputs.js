export let 
inputTypes = { script : `&lt;div class="row gy-4">
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;p class="mb-2 text-muted">Basic Input:&lt;/p>
    &lt;input type="text" class="form-control" id="input">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-label" class="form-label">Form Input With Label&lt;/label>
    &lt;input type="text" class="form-control" id="input-label">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-placeholder" class="form-label">Form Input With Placeholder&lt;/label>
    &lt;input type="text" class="form-control" id="input-placeholder" placeholder="Placeholder">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-text" class="form-label">Type Text&lt;/label>
    &lt;input type="text" class="form-control" id="input-text" placeholder="Text">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-number" class="form-label">Type Number&lt;/label>
    &lt;input type="number" class="form-control" id="input-number" placeholder="Number">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-password" class="form-label">Type Password&lt;/label>
    &lt;input type="password" class="form-control" id="input-password" placeholder="Password">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-email" class="form-label">Type Email&lt;/label>
    &lt;input type="email" class="form-control" id="input-email" placeholder="Email@xyz.com">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-tel" class="form-label">Type Tel&lt;/label>
    &lt;input type="tel" class="form-control" id="input-tel" placeholder="+1100-2031-1233">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-date" class="form-label">Type Date&lt;/label>
    &lt;input type="date" class="form-control" id="input-date">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-week" class="form-label">Type Week&lt;/label>
    &lt;input type="week" class="form-control" id="input-week">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-month" class="form-label">Type Month&lt;/label>
    &lt;input type="month" class="form-control" id="input-month">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-time" class="form-label">Type Time&lt;/label>
    &lt;input type="time" class="form-control" id="input-time">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-datetime-local" class="form-label">Type datetime-local&lt;/label>
    &lt;input type="datetime-local" class="form-control" id="input-datetime-local">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-search" class="form-label">Type Search&lt;/label>
    &lt;input type="search" class="form-control" id="input-search" placeholder="Search">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-submit" class="form-label">Type Submit&lt;/label>
    &lt;input type="submit" class="form-control" id="input-submit" value="Submit">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-reset" class="form-label">Type Reset&lt;/label>
    &lt;input type="reset" class="form-control" id="input-reset">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-button" class="form-label">Type Button&lt;/label>
    &lt;input type="button" class="form-control btn btn-primary" id="input-button" value="Button">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;div class="row gap-2 gap-xl-0">
        &lt;div class="col-xl-3">
            &lt;label class="form-label">Type Color&lt;/label>
            &lt;input class="form-control form-input-color" type="color" value="#136bd0">
        &lt;/div>
        &lt;div class="col-xl-5">
            &lt;div class="form-check ps-xl-3 ps-0">
                &lt;p class="mb-3 px-0 text-muted">Type Checkbox&lt;/p>
                &lt;input class="form-check-input ms-2" type="checkbox" value="" checked>
            &lt;/div>
        &lt;/div>
        &lt;div class="col-xl-4">
            &lt;div class="form-check ps-xl-3 ps-0">
                &lt;p class="mb-3 px-0 text-muted">Type Radio&lt;/p>
                &lt;input class="form-check-input ms-2" type="radio" checked>
            &lt;/div>
        &lt;/div>
    &lt;/div>
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-file" class="form-label">Type File&lt;/label>
    &lt;input class="form-control" type="file" id="input-file">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label class="form-label">Type Url&lt;/label>
    &lt;input class="form-control" type="url" name="website" placeholder="http://example.com">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-disabled" class="form-label">Type Disabled&lt;/label>
    &lt;input type="text" id="input-disabled" class="form-control" placeholder="Disabled input" disabled>
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-readonlytext" class="form-label">Input Readonly Text&lt;/label>
    &lt;input type="text" readonly class="form-control-plaintext" id="input-readonlytext"
        value="email@example.com">
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="disabled-readonlytext" class="form-label">Disabled Readonly Input&lt;/label>
    &lt;input class="form-control" type="text" value="Disabled readonly input" id="disabled-readonlytext"
        aria-label="Disabled input example" disabled readonly>
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label class="form-label">Type Readonly Input&lt;/label>
    &lt;input class="form-control" type="text" value="Readonly input here..."
        aria-label="readonly input example" readonly>
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="text-area" class="form-label">Textarea&lt;/label>
    &lt;textarea class="form-control" id="text-area" rows="1">&lt;/textarea>
&lt;/div>
&lt;div class="col-xl-4 col-lg-6 col-md-6 col-sm-12">
    &lt;label for="input-DataList" class="form-label">Datalist example&lt;/label>
    &lt;input class="form-control" list="datalistOptions" id="input-DataList"
        placeholder="Type to search...">
    &lt;datalist id="datalistOptions">
        &lt;option value="San Francisco">
        &lt;/option>
        &lt;option value="New York">
        &lt;/option>
        &lt;option value="Seattle">
        &lt;/option>
        &lt;option value="Los Angeles">
        &lt;/option>
        &lt;option value="Chicago">
        &lt;/option>
    &lt;/datalist>
&lt;/div>
&lt;/div>`},
inputShapes = { script : `&lt;div class="row gy-3">
&lt;div class="col-xl-12">
    &lt;label for="input-noradius" class="form-label">Input With No Radius&lt;/label>
    &lt;input type="text" class="form-control rounded-0" id="input-noradius" placeholder="No Radius">
&lt;/div>
&lt;div class="col-xl-12">
    &lt;label for="input-rounded" class="form-label">Input With Radius&lt;/label>
    &lt;input type="text" class="form-control" id="input-rounded" placeholder="Default Radius">
&lt;/div>
&lt;div class="col-xl-12">
    &lt;label for="input-rounded-pill" class="form-label">Rounded Input&lt;/label>
    &lt;input type="text" class="form-control rounded-pill" id="input-rounded-pill" placeholder="Rounded">
&lt;/div>
&lt;/div>`},
inputBorderStyles = { script : `&lt;div class="row gy-3">
&lt;div class="col-xl-12">
    &lt;label for="input-rounded1" class="form-label">Default&lt;/label>
    &lt;input type="text" class="form-control" id="input-rounded1" placeholder="Default">
&lt;/div>
&lt;div class="col-xl-12">
    &lt;label for="input-rounded2" class="form-label">Dotted Input&lt;/label>
    &lt;input type="text" class="form-control border-dotted" id="input-rounded2" placeholder="Dotted">
&lt;/div>
&lt;div class="col-xl-12">
    &lt;label for="input-rounded3" class="form-label">Dashed Input&lt;/label>
    &lt;input type="text" class="form-control border-dashed" id="input-rounded3" placeholder="Dashed">
&lt;/div>
&lt;/div>`},
inputSizing = { script : `&lt;input class="form-control form-control-sm mb-3" type="text" placeholder=".form-control-sm"
aria-label=".form-control-sm example">
&lt;input class="form-control mb-3" type="text" placeholder="Default input" aria-label="default input example">
&lt;input class="form-control form-control-lg" type="text" placeholder=".form-control-lg"
aria-label=".form-control-lg example">`},
overview = { script : `&lt;form>
&lt;div class="mb-3">
    &lt;label for="exampleInputEmail1" class="form-label">Email
        address&lt;/label>
    &lt;input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    &lt;div id="emailHelp" class="form-text">We'll
        never share your email
        with
        anyone else.&lt;/div>
&lt;/div>
&lt;div class="mb-3">
    &lt;label for="exampleInputPassword1" class="form-label">Password&lt;/label>
    &lt;input type="password" class="form-control" id="exampleInputPassword1">
&lt;/div>
&lt;div class="mb-3 form-check">
    &lt;input type="checkbox" class="form-check-input" id="exampleCheck1">
    &lt;label class="form-check-label" for="exampleCheck1">Check
        me out&lt;/label>
&lt;/div>
&lt;button type="submit" class="btn btn-primary">Submit&lt;/button>
&lt;/form>`},
formtext = { script : `&lt;label for="inputPassword5" class="form-label">Password&lt;/label>
&lt;input type="password" id="inputPassword5" class="form-control"
    aria-describedby="passwordHelpBlock">
&lt;div id="passwordHelpBlock" class="form-text">
    Your password must be 8-20 characters long, contain letters and
    numbers,
    and
    must not contain spaces, special characters, or emoji.
&lt;/div>`},
inlineText = { script : `&lt;div class="row g-3 align-items-center">
&lt;div class="col-auto">
    &lt;label for="inputPassword6" class="col-form-label">Password&lt;/label>
&lt;/div>
&lt;div class="col-auto">
    &lt;input type="password" id="inputPassword6" class="form-control"
        aria-describedby="passwordHelpInline">
&lt;/div>
&lt;div class="col-auto">
    &lt;span id="passwordHelpInline" class="form-text">
        Must be 8-20 characters long.
    &lt;/span>
&lt;/div>
&lt;/div>`},
disabledForms = { script : `&lt;form>
&lt;fieldset disabled>
    &lt;legend>Disabled fieldset example&lt;/legend>
    &lt;div class="mb-3">
        &lt;label for="disabledTextInput" class="form-label">Disabled
            input&lt;/label>
        &lt;input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    &lt;/div>
    &lt;div class="mb-3">
        &lt;label for="disabledSelect" class="form-label">Disabled select
            menu&lt;/label>
        &lt;select id="disabledSelect" class="form-select">
            &lt;option>Disabled select&lt;/option>
        &lt;/select>
    &lt;/div>
    &lt;div class="mb-3">
        &lt;div class="form-check">
            &lt;input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
            &lt;label class="form-check-label" for="disabledFieldsetCheck">
                Can't check this
            &lt;/label>
        &lt;/div>
    &lt;/div>
    &lt;button type="submit" class="btn btn-primary">Submit&lt;/button>
&lt;/fieldset>
&lt;/form>`};