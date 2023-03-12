import { mapState, mapMutations } from "vuex"
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState(['cartList', 'cartCounter']),
    },
    methods:{
        ...mapMutations(['increaseQuantity', 'decreaseQuantity', 'removeItemFromCart']),
    }
}