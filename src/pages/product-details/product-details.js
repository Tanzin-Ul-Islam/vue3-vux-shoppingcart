import data from "@/data"
import { mapMutations } from "vuex";
export default {
    data() {
        return {
            productName: this.$route.params.productName,
            productData: {},
            dataList: data,
            quantity: 1,
        }
    },
    created() {
        this.getProduct();
    },
    methods: {
        ...mapMutations(['addToCart']),
        getProduct() {
            let filteredProduct = this.dataList.filter((el) => (el.rname == this.productName));
            this.productData = filteredProduct[0];
        },
        increaseQuantity() {
            this.quantity = this.quantity + 1;
        },
        decreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity = this.quantity - 1;
            }
        },
        handleAddtoCart(){
            this.addToCart({ data: this.productData, quantity: this.quantity })
            this.quantity = 1;
        }
    }
}