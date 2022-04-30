<template>
    <div>
        <button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
        >
            Eliminar
        </button>
        <!-- Modal -->
        <div
            class="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabindex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">
                            Estas a punto de eliminar un registro
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        Estas seguro que quieres eliminar el registro?
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            Cancelar
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            @click="deleteRegister"
                            data-bs-dismiss="modal"
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        deleteRegister: function () {
            this.$emit("deleteConfirm", true);
        },
    },
};
</script>
<style scoped>
.btn-danger {
    font-size: 20px;
    font-weight: 400;
    font-family: "Barlow";
    text-transform: uppercase;
    border-radius: 35px;
    padding: 5px 20px;
}
</style>
