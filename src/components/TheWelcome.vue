<template>
    <div class="container-fluid min-vh-100 d-flex">
        <div class="row align-items-center d-flex justify-content-center w-100">
            <div class="col-6">
                <h1 class="text-center mb-5">Arma tu Menú Digital</h1>
                <div class="row align-items-center text-center mt-5">
                    <div class="col">
                        <RouterLink to="/login" class="nav-link btn-especial">
                            Ingresa
                        </RouterLink>
                    </div>
                    <div class="col">
                        <RouterLink
                            to="/register"
                            class="nav-link btn-especial"
                        >
                            Regitrate
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
h1.text-center {
    font-family: "Barlow";
    font-weight: 900;
    text-transform: uppercase;
}
.btn-especial {
    font-family: "Permanent Marker", cursive;
    color: #fff;
    font-size: 25px;
    background: #54595f;
    border-radius: 30px;
}
.btn-especial:hover {
    color: #fff;
    background: #333539;
}
.section {
    margin-bottom: 30px;
}
</style>
