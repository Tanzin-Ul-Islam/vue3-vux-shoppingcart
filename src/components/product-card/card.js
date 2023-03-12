import { mapMutations, mapState } from "vuex"
export default {
    props: ["item"],
    data() {

    },
    mutations:{
        ...mapState(['cartList', 'cartCounter'])
    },
    methods:{
        ...mapMutations(['addToCart']),
    }
}