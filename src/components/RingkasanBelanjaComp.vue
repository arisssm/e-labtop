<template>
    <div id="RingkasanBelanjaComp">
        <div class="container mb-5">
            <div class="row mt-5">
                <h4 style="font-weight:600">Ringkasan Belanja</h4>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <p class="pe-5 text-custom">Total Harga (1 Barang)<span class="ps-5 ms-3">Rp. 21.000.000</span></p>
                    <p class="pe-5 text-custom">Total Ongkos Kirim<span class="ps-5 ms-5 ">Rp. 20.000</span></p>
                    <p class="me-5 text-custom mt-5" style="font-weight:600;">Total Tagihan<span class="ps-5 ms-4"
                            style="color:#ff0000">Rp. 21.000.000</span></p>
                            <!-- font-weight 400 -->
                    <router-link to="/konfirmasipage" class="btn mt-3 me-5 btn-byr-sekarang text-custom">Bayar Sekarang <i class="fa fa-chevron-right"
                            aria-hidden="true"></i></router-link>
                    <!-- <button type="button" class="btn mt-3 me-5 btn-byr-sekarang">Checkout <i class="fa fa-chevron-right"
                            aria-hidden="true"></i> </button> -->
                    <router-link to="/suksespage" type="button" class="btn mt-3 btn-btl-konfirmasi text-custom">Batalkan Pesanan</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RingkasanBelanjaComp",
    };
    </script>