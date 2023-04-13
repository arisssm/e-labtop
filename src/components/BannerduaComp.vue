<template>
    <div id='BannerduaComp'>
        <div class="container">
            <div class="row">
                <div class="col">
                    <img class="promo2" :src="'http://127.0.0.1:8000/assets/images/banner/dua/' + bannerdua.gambar" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BannerduaComp",
    props: ["bannerdua"],
};
</script>