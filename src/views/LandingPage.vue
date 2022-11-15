<template>
    <div id="LandingPage">
        <HeaderComp/>
        <BannerComp/>
        <LogoComp/>
        <ProductComp/>
        <div class="container">
            <div class="row">
                <div class="col">
                    <img class="promo1" src="../assets/promo1.png" alt="">
                </div>
            </div>
        </div>
        <AccessoriesComp/>
        <FooterComp/>
    </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';
import BannerComp from '@/components/BannerComp.vue';
import LogoComp from '@/components/LogoComp.vue';
import ProductComp from '@/components/ProductComp.vue';
import AccessoriesComp from '@/components/AccessoriesComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default{
    name :"LandingPage",
    components:{
        HeaderComp, 
        BannerComp, 
        LogoComp,
        ProductComp,
        AccessoriesComp,
        FooterComp,
    },
};
</script>