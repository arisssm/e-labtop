<template>
    <div id="KatalogPage">
        <HeaderComp/>
        <BreadcrumbComp/>
        <SearchComp/>
        <ProductComp :produk='produk' :title="'Pilihan Produk Untukmu'"/>
        <div class="container">
            <div class="row">
                <div class="col">
                    <img class="promo2" src="../assets/promo2.png" alt="Promotion Lenovo">
                </div>
            </div>
        </div>
        <ProductComp :produk='rekomendasiProduk' :title="'Rekomendasi Untukmu'"/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BreadcrumbComp from '@/components/BreadcrumbComp.vue';
import SearchComp from '@/components/SearchComp.vue';
import ProductComp from '@/components/ProductComp.vue'; 
import FooterComp from '@/components/FooterComp.vue';
import axios from 'axios';

export default{
    name :"KatalogPage",
    components:{
        HeaderComp, 
        BreadcrumbComp,
        SearchComp,
        ProductComp,
        FooterComp,
    },
    data() {
        return {
            produk: [],
            rekomendasiProduk: [],
        }
    },
    methods: {
        getProduk(){
            axios
            .get("http://127.0.0.1:8000/api/produk")
            .then((response) => {
                this.produk = response.data.data;
                // console.log(this.produk);//debug
            })
            .catch((error) => {
                alert('Maaf, silahkan check koneksi anda!' + error );
                //console.log(error);
            })
        },   
        getProdukRec(){
            axios
            .get('http://127.0.0.1:8000/api/produk?rekomendasi=recommended')
            .then((response) => {
                this.rekomendasiProduk = response.data.data;
                // console.log(this.produk);//debug
            })
            .catch((error) => {
                alert('Maaf, silahkan check koneksi anda!' + error );
                //console.log(error);
            })
        },     
    },

    mounted() {
        this.getProduk();
        this.getProdukRec();
    },
};
</script>