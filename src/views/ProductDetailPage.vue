<template>
    <div id="ProductDetailPage">
        <HeaderComp/>
        <div class="container mt-5">
            <div class="row justify-content-start">
                <router-link to="/katalogpage" style="text-decoration: none;">
                    <h6 style="color:#000000;"><i style="color:#ff0000;" class="fa fa-arrow-circle-left" aria-hidden="true"></i><span class="ms-3">Detail Produk</span> </h6>
                </router-link>
            </div>
        </div>
        <ProductDetailComp/>
        <ProductComp/>
        <FooterComp/>
    </div>
</template>


<script>
import HeaderComp from '@/components/HeaderComp.vue';
import ProductDetailComp from '@/components/ProductDetailComp.vue';
import ProductComp from '@/components/ProductComp.vue';
import FooterComp from '@/components/FooterComp.vue';

export default{
    name :"ProductDetailPage",
    components:{
        HeaderComp, 
        ProductDetailComp,
        ProductComp,                
        FooterComp,
    },
};
</script>


<style>
router-link{
    text-decoration:none;
}
</style>