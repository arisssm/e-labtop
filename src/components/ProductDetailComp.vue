<template>
    <div id="ProductDetailComp">
        <div class="container mb-5">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <!-- Carousel -->
                    <div id="product" class="carousel slide" data-bs-ride="carousel">
                        <!-- Indicators/dots -->
                        <div class="carousel-indicators mt-5">
                            <button type="button" data-bs-target="#product" data-bs-slide-to="0" class="active"></button>
                            <button type="button" data-bs-target="#product" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#product" data-bs-slide-to="2"></button>
                            <button type="button" data-bs-target="#product" data-bs-slide-to="3"></button>
                        </div>
                        <!-- The slideshow/carousel -->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img :src="'http://127.0.0.1:8000/assets/images/produk/' + detailProduk.foto" alt=""
                                    class="d-block caraousel-img" style="width:100%">
                            </div>
                        </div>

                        <!-- Left and right controls/icons -->
                        <button class="carousel-control-prev" type="button" data-bs-target="#product" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" style="color:#ff0000;"></span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#product" data-bs-slide="next">
                            <span class="carousel-control-next-icon" style="color:#ff0000;"></span>
                        </button>
                    </div>
                </div>
                <div class="col-lg-6 col-12 mt-4">
                    <h2 style="font-weight:600;">{{ detailProduk.nama }}</h2>
                    <p>Harga:<span style="color:#ff0000;">Rp. {{ detailProduk.harga }}</span></p>
                    <div class="border rounded-3 px-3 pt-3">
                        <h6 class="mb-2">Spesifikasi</h6>
                        <p>
                            {{ detailProduk.spesifikasi }}
                        </p>
                    </div>
                        <div class="row my-3">
                            <div class="col-lg-4 col-2">
                                <button class="btn btn-sm main-btn" v-on:click=kurang()>
                                    <i class="fa fa-minus"></i>
                                </button>
                                <span class="text-center total-item mx-2">{{ banyak }}</span>
                                <button class="btn btn-sm main-btn" v-on:click=tambah()>
                                    <i class="fa fa-plus"></i>
                                </button>
                            </div>
                            <div class="col-lg-8 col-10 text-end">
                                <button class="btn btn-sm" v-on:click="postKeranjang()"
                                    style="border-color:#ff0000; color: #ff0000;">
                                    <i class="fa fa-plus" aria-hidden="true"></i>
                                    Keranjang
                                </button>
                                <router-link to="/keranjangpage" class="btn btn-sm ms-2 main-btn">
                                    Pesan Sekarang
                                    <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </router-link>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "ProductDetailComp",
    props: ["detailProduk"],
    data() {
        return {
            banyak: 1,
            keranjang: {},
        }
    },
    methods: {
        tambah() {
            this.banyak += 1;
            if (this.banyak > this.detailProduk.stok) {
                this.banyak = this.detailProduk.stok
            }
        },
        kurang() {
            this.banyak -= 1;
            if (this.banyak < 1) {
                this.banyak = 1
            }
        },
        postKeranjang() {
            this.keranjang.produk_id = this.detailProduk.id;
            this.keranjang.banyak = this.banyak;
            console.log(this.keranjang);
            axios.post("http://127.0.0.1:8000/api/keranjang", this.keranjang)
                .then((response) => {
                    // alert(response.data.message);
                    // console.log(response.data.message);
                        this.$toast.success(response.data.message, {
                            position: "top",
                            duration: 2000,
                            type: "success",
                        });
                })
                .catch((error) => {
                    // alert('Maaf, silahkan check koneksi anda!' + error);
                    //console.log(error);
                    this.$toast.error(error, {
                            position: "top",
                            duration: 2000,
                            type: "error",
                        });
                })
        }
    },

};
</script>