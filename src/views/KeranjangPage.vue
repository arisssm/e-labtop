<template>
    <div id="KeranjangPage">
        <HeaderComp/>
        <div class="container my-5">
            <div class="row">
                <div class="col">
                    <router-link to="/katalogpage" style="text-decoration: none;">
                    <h6 style="color:#000000;"><i style="color:#ff0000;" class="fa fa-arrow-circle-left" aria-hidden="true"></i> Keranjang</h6>
                    </router-link>
                </div>
            </div>
        </div>
        <TableComp :keranjang="keranjang" @buttonDelete="hapus($event)"/>
        
    </div>
</template>

<script>

import HeaderComp from '@/components/HeaderComp.vue';
import TableComp from '@/components/TableComp.vue';
import axios from 'axios';

export default{
    name :"KeranjangPage",
    components:{
        HeaderComp, 
        TableComp,
    },

    data(){
        return {
            keranjang: [],
        }
    },
    methods: {
        getKeranjang(){
            axios
            .get('http://127.0.0.1:8000/api/keranjang')
            .then((response) => {
                this.keranjang = response.data.data;
                // console.log(this.keranjang);//debug
            })
            .catch((error) => {
                alert('Maaf, silahkan check koneksi anda!' + error );
                //console.log(error);
            })
        },
        hapus(id) {
            axios
                .delete('http://127.0.0.1:8000/api/keranjang/' + id)
                .then((response) => {
                    this.$toast.success(response.data.message, {
                            position: "top",
                            duration: 3000,
                            type: "success",
                        });
                })
                .catch((error) => {
                    this.$toast.error(error, {
                            position: "top",
                            duration: 3000,
                            type: "error",
                        });
                })
        },
    },
    mounted() {
        this.getKeranjang();
        
    },
};
</script>