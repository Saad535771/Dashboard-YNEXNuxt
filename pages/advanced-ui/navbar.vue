<script lang="ts">
import PageHeader from "@/components/common/pageheader.vue";
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
                current: "Navbar",
                list: [
                    'AdvancedUI', 'Navbar'
                ]
            },
        };
    },
};
</script>

<template>
    <PageHeader :propData="dataToPass" />

    <!-- Start:: row-1 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Navbar with sub-component
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar navbar-expand-lg bg-light">
                        <div class="container-fluid">
                            <a aria-label="anchor" class="navbar-brand" href="javascript:void(0);">
                                <img src="/images/brand-logos/toggle-logo.png" alt="" class="d-inline-block align-text-top">
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Link</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="javascript:void(0);" id="navbarDropdown"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                            </li>
                                            <li>
                                                <hr class="dropdown-divider">
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                                    here</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">Disabled</a>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                    <button class="btn btn-primary" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Brand With And Without Links
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar bg-light mb-3">
                        <div class="container-fluid">
                            <a aria-label="anchor" class="navbar-brand" href="javascript:void(0);"><img
                                    src="/images/brand-logos/toggle-logo.png" alt=""></a>
                        </div>
                    </nav>
                    <nav class="navbar bg-light">
                        <div class="container-fluid">
                            <span class="navbar-brand mb-0 h1"><img src="/images/brand-logos/toggle-logo.png" alt=""></span>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-2 -->

    <!-- Start:: row-3 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Image and text
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand text-default" href="javascript:void(0);">
                                <img src="/images/brand-logos/toggle-logo.png" alt="" class="d-inline-block align-text-top">
                                Bootstrap
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-3 -->

    <!-- Start:: row-4 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Nav with lists, links and dropdowns
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar navbar-expand-lg bg-light mb-3">
                        <div class="container-fluid">
                            <a aria-label="anchor" class="navbar-brand" href="javascript:void(0);"><img
                                    src="/images/brand-logos/toggle-logo.png" alt=""></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <nav class="navbar navbar-expand-lg bg-light mb-3">
                        <div class="container-fluid">
                            <a aria-label="anchor" class="navbar-brand" href="javascript:void(0);"><img
                                    src="/images/brand-logos/toggle-logo.png" alt=""></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                    <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    <a class="nav-link" href="javascript:void(0);">Features</a>
                                    <a class="nav-link" href="javascript:void(0);">Pricing</a>
                                    <a class="nav-link disabled">Disabled</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <nav class="navbar navbar-expand-lg bg-light">
                        <div class="container-fluid">
                            <a aria-label="anchor" class="navbar-brand" href="javascript:void(0);"><img
                                    src="/images/brand-logos/toggle-logo.png" alt=""></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Pricing</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="javascript:void(0);"
                                            id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                            Dropdown link
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                                    here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-4 -->

    <!-- Start:: row-5 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Forms In Navbar
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar bg-light mb-3">
                        <div class="container-fluid">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <nav class="navbar bg-light mb-3">
                        <div class="container-fluid">
                            <a aria-label="anchor" class="navbar-brand"><img src="/images/brand-logos/toggle-logo.png"
                                    alt=""></a>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                <button class="btn btn-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <h6 class="mb-3 fw-semibold">Input groups in navbar forms</h6>
                    <nav class="navbar bg-light mb-3">
                        <div class="container-fluid">
                            <div class="input-group">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="text" class="form-control" placeholder="Username" aria-label="Username"
                                    aria-describedby="basic-addon1">
                            </div>
                        </div>
                    </nav>
                    <h6 class="mb-3 fw-semibold"> Variation buttons are supported as part of the navbar forms</h6>
                    <nav class="navbar bg-light">
                        <form class="container-fluid justify-content-start">
                            <button class="btn btn-primary m-1" type="submit">Main
                                button</button>
                            <button class="btn btn-sm btn-outline-secondary m-1" type="button">Smaller
                                button</button>
                        </form>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-5 -->

    <!-- Start:: row-6 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Navbar With Text
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar bg-light mb-3">
                        <div class="container-fluid">
                            <span class="navbar-text">
                                Navbar text with an inline element
                            </span>
                        </div>
                    </nav>
                    <nav class="navbar navbar-expand-lg bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="javascript:void(0);">Navbar with text</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarText">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Pricing</a>
                                    </li>
                                </ul>
                                <span class="navbar-text">
                                    Navbar text with an inline element
                                </span>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-6 -->

    <!-- Start:: row-7 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Transparent Color Schemes
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar navbar-expand-lg navbar-primary-transparent mb-3">
                        <div class="container-fluid">
                            <a aria-label="anchor" class="navbar-brand" href="javascript:void(0);">
                                <img src="/images/brand-logos/toggle-logo.png" alt="">
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarColor01">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">About</a>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                    <button class="btn btn-primary" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <nav class="navbar navbar-expand-lg navbar-secondary-transparent mb-3">
                        <div class="container-fluid">
                            <a aria-label="anchor" class="navbar-brand" href="javascript:void(0);"><img
                                    src="/images/brand-logos/toggle-logo.png" alt=""></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarColor02">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">About</a>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                    <button class="btn btn-secondary" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <nav class="navbar navbar-expand-lg navbar-dark-transparent">
                        <div class="container-fluid">
                            <a aria-label="anchor" class="navbar-brand" href="javascript:void(0);"><img
                                    src="/images/brand-logos/toggle-logo.png" alt=""></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarColor03">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">About</a>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                    <button class="btn btn-dark" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Solid Color Schemes
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar navbar-expand-lg navbar-primary mb-3">
                        <div class="container-fluid">
                            <a aria-label="anchor" class="navbar-brand" href="javascript:void(0);">
                                <img src="/images/brand-logos/toggle-dark.png" alt="">
                            </a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarColor04" aria-controls="navbarColor04" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarColor04">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">About</a>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2 border-0" type="search" placeholder="Search"
                                        aria-label="Search">
                                    <button class="btn btn-light" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <nav class="navbar navbar-expand-lg navbar-secondary mb-3">
                        <div class="container-fluid">
                            <a aria-label="anchor" class="navbar-brand" href="javascript:void(0);"><img
                                    src="/images/brand-logos/toggle-dark.png" alt=""></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarColor05" aria-controls="navbarColor05" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarColor05">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">About</a>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2 border-0" type="search" placeholder="Search"
                                        aria-label="Search">
                                    <button class="btn btn-light" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <nav class="navbar navbar-expand-lg navbar-dark">
                        <div class="container-fluid">
                            <a aria-label="anchor" class="navbar-brand" href="javascript:void(0);"><img
                                    src="/images/brand-logos/toggle-logo.png" alt=""></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarColor06" aria-controls="navbarColor06" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarColor06">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Features</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Pricing</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">About</a>
                                    </li>
                                </ul>
                                <form class="d-flex" role="search">
                                    <input class="form-control me-2 border-0" type="search" placeholder="Search"
                                        aria-label="Search">
                                    <button class="btn btn-light" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-7 -->

    <!-- Start:: row-8 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Containers
                    </div>
                </div>
                <div class="card-body">
                    <h6>Too center</h6>
                    <div class="container">
                        <nav class="navbar navbar-expand-lg bg-light mb-3">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="javascript:void(0);">Navbar</a>
                            </div>
                        </nav>
                    </div>
                    <h6>Change the responsive container to how to wide the content</h6>
                    <nav class="navbar navbar-expand-lg bg-light">
                        <div class="container-md">
                            <a class="navbar-brand" href="javascript:void(0);">Navbar</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-8 -->

    <!-- Start:: row-9 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Placement
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="javascript:void(0);">Default</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-9 -->

    <!-- Start:: row-10 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Placement
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar fixed-top bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="javascript:void(0);">Fixed top</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-10 -->

    <!-- Start:: row-11 -->
    <div class="row">
        <div class="'col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Placement
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar fixed-bottom navbar-light bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="javascript:void(0);">Fixed bottom</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-11 -->

    <!-- Start:: row-12 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Placement
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar sticky-top navbar-light bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="javascript:void(0);">Sticky top</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-12 -->

    <!-- Start:: row-13 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Scrolling
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="javascript:void(0);">Navbar scroll</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarScroll">
                                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                                    style="--bs-scroll-height: 100px;">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Link</a>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="javascript:void(0);"
                                            id="navbarScrollingDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                            Link
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                            <li><a class="dropdown-item" href="javascript:void(0);">Action</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Another action</a>
                                            </li>
                                            <li>
                                                <hr class="dropdown-divider">
                                            </li>
                                            <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                                    here</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="javascript:void(0);" tabindex="-1"
                                            aria-disabled="true">Link</a>
                                    </li>
                                </ul>
                                <form class="d-flex mt-3">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                    <button class="btn btn-primary" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-13 -->

    <!-- Start:: row-14 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Responsive behaviors Toggler
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                                <a class="navbar-brand text-default" href="javascript:void(0);">Hidden brand</a>
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Link</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="javascript:void(0);" tabindex="-1"
                                            aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                    <button class="btn btn-primary" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <h6>With a brand name shown on the left and toggler on the right:</h6>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-3">
                        <div class="container-fluid">
                            <a class="navbar-brand text-default" href="javascript:void(0);">Navbar</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Link</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="javascript:void(0);" tabindex="-1"
                                            aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                    <button class="btn btn-primary" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                    <h6>With a toggler on the left and brand name on the right:</h6>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <a class="navbar-brand text-default" href="javascript:void(0);">Navbar</a>
                            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active" aria-current="page" href="javascript:void(0);">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="javascript:void(0);">Link</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link disabled" href="javascript:void(0);" tabindex="-1"
                                            aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                    <button class="btn btn-primary" type="submit">Search</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-14 -->

    <!-- Start:: row-15 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        External content
                    </div>
                </div>
                <div class="card-body">
                    <div class="collapse" id="navbarToggleExternalContent">
                        <div class="bg-dark p-4">
                            <h5 class="text-white h4">Collapsed content</h5>
                            <span class="text-white op-7">Toggleable via the navbar brand.</span>
                        </div>
                    </div>
                    <nav class="navbar navbar-dark bg-dark rounded-0">
                        <div class="container-fluid">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-15 -->

    <!-- Start:: row-16 -->
    <div class="row">
        <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header">
                    <div class="card-title">
                        Offcanvas
                    </div>
                </div>
                <div class="card-body">
                    <nav class="navbar bg-light fixed-top">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="javascript:void(0);">Offcanvas navbar</a>
                            <button aria-label="button" class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas
                                    </h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page"
                                                href="javascript:void(0);">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="javascript:void(0);">Link</a>
                                        </li>
                                        <li class="nav-item dropdown mb-3">
                                            <a class="nav-link dropdown-toggle" href="javascript:void(0);"
                                                id="offcanvasNavbarDropdown" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                Dropdown
                                            </a>
                                            <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                                                <li><a class="dropdown-item" href="javascript:void(0);">Action</a>
                                                </li>
                                                <li><a class="dropdown-item" href="javascript:void(0);">Another
                                                        action</a>
                                                </li>
                                                <li>
                                                    <hr class="dropdown-divider">
                                                </li>
                                                <li><a class="dropdown-item" href="javascript:void(0);">Something else
                                                        here</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <form class="d-flex" role="search">
                                        <input class="form-control me-2" type="search" placeholder="Search"
                                            aria-label="Search">
                                        <button class="btn btn-primary" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <!-- End:: row-16 -->
</template>

<style scoped></style>

