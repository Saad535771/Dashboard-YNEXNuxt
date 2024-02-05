export let
    inputGroups = {
        script: `
&lt;div class="input-group mb-3">
    &lt;span class="input-group-text" id="basic-addon1">@&lt;/span>
    &lt;input type="text" class="form-control" placeholder="Username" aria-label="Username"
        aria-describedby="basic-addon1">
&lt;/div>
&lt;div class="input-group mb-3">
    &lt;input type="text" class="form-control" placeholder="Recipient's username"
        aria-label="Recipient's username" aria-describedby="basic-addon2">
    &lt;span class="input-group-text" id="basic-addon2">@example.com&lt;/span>
&lt;/div>
&lt;label for="basic-url" class="form-label">Your vanity URL&lt;/label>
&lt;div class="input-group mb-3">
    &lt;span class="input-group-text" id="basic-addon3">https://example.com/users/&lt;/span>
    &lt;input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
&lt;/div>
&lt;div class="input-group mb-3">
    &lt;span class="input-group-text">$&lt;/span>
    &lt;input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
    &lt;span class="input-group-text">.00&lt;/span>
&lt;/div>
&lt;div class="input-group mb-3">
    &lt;input type="text" class="form-control" placeholder="Username" aria-label="Username">
    &lt;span class="input-group-text">@&lt;/span>
    &lt;input type="text" class="form-control" placeholder="Server" aria-label="Server">
&lt;/div>
&lt;div class="input-group">
    &lt;span class="input-group-text">With textarea&lt;/span>
    &lt;textarea class="form-control" aria-label="With textarea">&lt;/textarea>
&lt;/div>` },
    warpping = {
        script: `&lt;div class="input-group flex-nowrap">
    &lt;span class="input-group-text" id="addon-wrapping">@&lt;/span>
    &lt;input type="text" class="form-control" placeholder="Username" aria-label="Username"
        aria-describedby="addon-wrapping">
&lt;/div>` },
    sizing = {
        script: `&lt;div class="input-group input-group-sm mb-3">
    &lt;span class="input-group-text" id="inputGroup-sizing-sm">Small&lt;/span>
    &lt;input type="text" class="form-control" aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm">
&lt;/div>
&lt;div class="input-group mb-3">
    &lt;span class="input-group-text" id="inputGroup-sizing-default">Default&lt;/span>
    &lt;input type="text" class="form-control" aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default">
&lt;/div>
&lt;div class="input-group input-group-lg">
    &lt;span class="input-group-text" id="inputGroup-sizing-lg">Large&lt;/span>
    &lt;input type="text" class="form-control" aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-lg">
&lt;/div>` },
    buttonswithDropdowns = {
        script: `&lt;div class="input-group mb-3">
    &lt;button class="btn btn-primary" type="button" id="button-addon1">Button&lt;/button>
    &lt;input type="text" class="form-control" placeholder=""
        aria-label="Example text with button addon" aria-describedby="button-addon1">
&lt;/div>
&lt;div class="input-group mb-3">
    &lt;input type="text" class="form-control" placeholder="Recipient's username"
        aria-label="Recipient's username" aria-describedby="button-addon2">
    &lt;button class="btn btn-primary" type="button" id="button-addon2">Button&lt;/button>
&lt;/div>
&lt;div class="input-group mb-3">
    &lt;button class="btn btn-primary" type="button">Button&lt;/button>
    &lt;button class="btn btn-primary" type="button">Button&lt;/button>
    &lt;input type="text" class="form-control" placeholder=""
        aria-label="Example text with two button addons">
&lt;/div>
&lt;div class="input-group">
    &lt;input type="text" class="form-control" placeholder="Recipient's username"
        aria-label="Recipient's username with two button addons">
    &lt;button class="btn btn-primary" type="button">Button&lt;/button>
    &lt;button class="btn btn-primary" type="button">Button&lt;/button>
&lt;/div>` },
    buttonsAddons = {
        script: `&lt;div class="input-group mb-3">
    &lt;button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
        aria-expanded="false">Dropdown&lt;/button>
    &lt;ul class="dropdown-menu">
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
        &lt;li>
            &lt;hr class="dropdown-divider">
        &lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
    &lt;/ul>
    &lt;input type="text" class="form-control" aria-label="Text input with dropdown button">
&lt;/div>
&lt;div class="input-group input-btn-outline mb-3">
    &lt;input type="text" class="form-control" aria-label="Text input with dropdown button">
    &lt;button class="btn btn-outline-primary dropdown-toggle" type="button" data-bs-toggle="dropdown"
        aria-expanded="false">Dropdown&lt;/button>
    &lt;ul class="dropdown-menu dropdown-menu-end">
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
        &lt;li>
            &lt;hr class="dropdown-divider">
        &lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
    &lt;/ul>
&lt;/div>
&lt;div class="input-group flex-nowrap">
    &lt;button class="btn btn-primary-transparent dropdown-toggle" type="button"
        data-bs-toggle="dropdown" aria-expanded="false">Dropdown&lt;/button>
    &lt;ul class="dropdown-menu">
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action before&lt;/a>&lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action before&lt;/a>
        &lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
        &lt;li>
            &lt;hr class="dropdown-divider">
        &lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
    &lt;/ul>
    &lt;input type="text" class="form-control" aria-label="Text input with 2 dropdown buttons">
    &lt;button class="btn btn-primary-transparent dropdown-toggle" type="button"
        data-bs-toggle="dropdown" aria-expanded="false">Dropdown&lt;/button>
    &lt;ul class="dropdown-menu dropdown-menu-end">
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
        &lt;li>
            &lt;hr class="dropdown-divider">
        &lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
    &lt;/ul>
&lt;/div>` },
    customfileInput = {
        script: `
    &lt;div class="input-group mb-3">
        &lt;label class="input-group-text" for="inputGroupFile01">Upload&lt;/label>
        &lt;input type="file" class="form-control" id="inputGroupFile01">
    &lt;/div>
    &lt;div class="input-group mb-3">
        &lt;input type="file" class="form-control" id="inputGroupFile02">
        &lt;label class="input-group-text" for="inputGroupFile02">Upload&lt;/label>
    &lt;/div>
    &lt;div class="input-group mb-3">
        &lt;button class="btn btn-primary" type="button" id="inputGroupFileAddon03">Button&lt;/button>
        &lt;input type="file" class="form-control" id="inputGroupFile03"
            aria-describedby="inputGroupFileAddon03" aria-label="Upload">
    &lt;/div>
    &lt;div class="input-group">
        &lt;input type="file" class="form-control" id="inputGroupFile04"
            aria-describedby="inputGroupFileAddon04" aria-label="Upload">
        &lt;button class="btn btn-primary" type="button" id="inputGroupFileAddon04">Button&lt;/button>
    &lt;/div>` },
    MultipleInputs = {
        script: `&lt;div class="input-group">
    &lt;span class="input-group-text">First and last name&lt;/span>
    &lt;input type="text" aria-label="First name" class="form-control">
    &lt;input type="text" aria-label="Last name" class="form-control">
&lt;/div>` },
    checkboxesandRadios = {
        script: `&lt;div class="input-group mb-3">
    &lt;div class="input-group-text">
        &lt;input class="form-check-input mt-0" type="checkbox" value=""
            aria-label="Checkbox for following text input">
    &lt;/div>
    &lt;input type="text" class="form-control" aria-label="Text input with checkbox">
&lt;/div>
&lt;div class="input-group">
    &lt;div class="input-group-text">
        &lt;input class="form-check-input mt-0" type="radio" value=""
            aria-label="Radio button for following text input">
    &lt;/div>
    &lt;input type="text" class="form-control" aria-label="Text input with radio button">
&lt;/div>` },
    multipleAddons = {
        script: `&lt;div class="input-group mb-3">
    &lt;div class="input-group-text">
        &lt;input class="form-check-input mt-0" type="checkbox" value=""
            aria-label="Checkbox for following text input">
    &lt;/div>
    &lt;input type="text" class="form-control" aria-label="Text input with checkbox">
&lt;/div>
&lt;div class="input-group">
    &lt;div class="input-group-text">
        &lt;input class="form-check-input mt-0" type="radio" value=""
            aria-label="Radio button for following text input">
    &lt;/div>
    &lt;input type="text" class="form-control" aria-label="Text input with radio button">
&lt;/div>` },
    segmentedButtons = {
        script: `&lt;div class="input-group mb-3">
    &lt;button type="button" class="btn btn-primary">Action&lt;/button>
    &lt;button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-expanded="false">
        &lt;span class="visually-hidden">Toggle Dropdown&lt;/span>
    &lt;/button>
    &lt;ul class="dropdown-menu">
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
        &lt;li>
            &lt;hr class="dropdown-divider">
        &lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
    &lt;/ul>
    &lt;input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
&lt;/div>
&lt;div class="input-group">
    &lt;input type="text" class="form-control" aria-label="Text input with segmented dropdown button">
    &lt;button type="button" class="btn btn-primary">Action&lt;/button>
    &lt;button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-expanded="false">
        &lt;span class="visually-hidden">Toggle Dropdown&lt;/span>
    &lt;/button>
    &lt;ul class="dropdown-menu dropdown-menu-end">
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Action&lt;/a>&lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Another action&lt;/a>&lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Something else here&lt;/a>&lt;/li>
        &lt;li>
            &lt;hr class="dropdown-divider">
        &lt;/li>
        &lt;li>&lt;a class="dropdown-item" href="javascript:void(0);">Separated link&lt;/a>&lt;/li>
    &lt;/ul>
&lt;/div>` },
    customSelect = {
        script: `&lt;div class="input-group mb-3">
    &lt;label class="input-group-text" for="inputGroupSelect01">Options&lt;/label>
    &lt;select class="form-select" id="inputGroupSelect01">
        &lt;option selected>Choose...&lt;/option>
        &lt;option value="1">One&lt;/option>
        &lt;option value="2">Two&lt;/option>
        &lt;option value="3">Three&lt;/option>
    &lt;/select>
&lt;/div>
&lt;div class="input-group mb-3">
    &lt;select class="form-select" id="inputGroupSelect02">
        &lt;option selected>Choose...&lt;/option>
        &lt;option value="1">One&lt;/option>
        &lt;option value="2">Two&lt;/option>
        &lt;option value="3">Three&lt;/option>
    &lt;/select>
    &lt;label class="input-group-text" for="inputGroupSelect02">Options&lt;/label>
&lt;/div>
&lt;div class="input-group mb-3">
    &lt;button class="btn btn-primary" type="button">Button&lt;/button>
    &lt;select class="form-select" id="inputGroupSelect03"
        aria-label="Example select with button addon">
        &lt;option selected>Choose...&lt;/option>
        &lt;option value="1">One&lt;/option>
        &lt;option value="2">Two&lt;/option>
        &lt;option value="3">Three&lt;/option>
    &lt;/select>
&lt;/div>
&lt;div class="input-group">
    &lt;select class="form-select" id="inputGroupSelect04"
        aria-label="Example select with button addon">
        &lt;option selected>Choose...&lt;/option>
        &lt;option value="1">One&lt;/option>
        &lt;option value="2">Two&lt;/option>
        &lt;option value="3">Three&lt;/option>
    &lt;/select>
    &lt;button class="btn btn-primary" type="button">Button&lt;/button>
&lt;/div>` };