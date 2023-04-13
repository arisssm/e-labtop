<template>
    <div id='BannersatuComp'>
        <div class="container">
            <div class="row">
                <div class="col">
                    <!-- {{ bannersatu.gambar }} -->
                    <img class="promo1" :src="'http://127.0.0.1:8000/assets/images/banner/satu/' + bannersatu.gambar" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BannersatuComp",
    props: ["bannersatu"],
    // mounted() {
    //     console.log(this.bannersatu);
    // },
};
</script>