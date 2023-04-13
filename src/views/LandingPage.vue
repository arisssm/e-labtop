<template>
    <div id="LandingPage">
        <HeaderComp/>
        <BannerComp/>
        <LogoComp :merek='merek'/>
        <ProductComp :produk='produk'/>
        <BannersatuComp :bannersatu='bannersatu'/>
        <AccessoriesComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BannerComp from '@/components/BannerComp.vue';
import LogoComp from '@/components/LogoComp.vue';
import ProductComp from '@/components/ProductComp.vue';
import BannersatuComp from '@/components/BannersatuComp.vue';
import AccessoriesComp from '@/components/AccessoriesComp.vue';
import FooterComp from '@/components/FooterComp.vue';
import axios from 'axios';


export default{
    name :"LandingPage",
    components:{
        HeaderComp, 
        BannerComp, 
        LogoComp,
        ProductComp,
        BannersatuComp,
        AccessoriesComp,
        FooterComp,
    },

    data(){
        return {
            merek: [],
            produk: [],
            bannersatu: {}
        }
    },

    methods: {
        getMerek(){
            axios
            .get("http://127.0.0.1:8000/api/merek")
            .then((response) => {
                this.merek = response.data.data;
                //console.log(this.merek);//debug
            })
            .catch((error) => {
                alert('Maaf, silahkan check koneksi anda!' + error );
                // console.log(error);
            })
        },
        getBannersatu(){
            axios
            .get("http://127.0.0.1:8000/api/banner/satu")
            .then((response) => {
                this.bannersatu = response.data.data;
                console.log(this.bannersatu);//debug
            })
            .catch((error) => {
                alert('Maaf, silahkan check koneksi anda!' + error );
                // console.log(error);
            })
        },
        getProdukRec(){
            axios
            .get("http://127.0.0.1:8000/api/produk?rekomendasi=recommended")
            .then((response) => {
                this.produk = response.data.data;
                // console.log(this.produk);//debug
            })
            .catch((error) => {
                alert('Maaf, silahkan check koneksi anda!' + error );
                //console.log(error);
            })
        },

    },

    mounted() {
        //fungsi yang langsung dijalanin saat halaman load;
        this.getMerek();
        this.getBannersatu();
        this.getProdukRec();
        
    }
};
</script>