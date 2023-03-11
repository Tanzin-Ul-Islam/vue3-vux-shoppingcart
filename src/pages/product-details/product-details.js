import data from "@/data"
export default {
    data() {
        return {
            productName: this.$route.params.productName,
            productData: {},
            dataList: data,
            quantity:0,
        }
    },
    created() {
        this.getProduct();
    },
    methods: {
        getProduct() {
            let filteredProduct = this.dataList.filter((el)=>(el.rname == this.productName));
            this.productData = filteredProduct[0];
        }
    }
}