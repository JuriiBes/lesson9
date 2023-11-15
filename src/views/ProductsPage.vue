<template>
    <div class="product__container">
        <div v-for="product in filterResult" :key="product.id" class="product__item">
            <div class="product__image">
                <img :src="product.image" alt="img" />
            </div>
            <div class="product__info">
                <div class="product__name">{{ product.name }}</div>
                <div class="product__price">{{ product.price }} <span>₴</span></div>
            </div>
        </div>
        <router-link class="product__button" :to="'/shop'">до магазину</router-link>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { products } from '../data/products.json'

export default {
    name: 'ProductsPage',
    data() {
        return {
            dataProduct: products,
        }
    },
    computed: {
        ...mapGetters(['gFilteredProductList']),
        category() {
            return this.$route.params.category
        },
        filterResult() {
            return this.gFilteredProductList(this.category)
        },
    },
}
</script>

<style lang="scss" scoped>
.product {
    // .product__container
    &__container {
        max-width: 500px;
        min-height: 350px;
        margin: 0 auto;
        padding: 20px 15px;
        background-color: #fce9e9;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
    // .product__item
    &__item {
        display: flex;
        column-gap: 10px;
        padding: 10px;
        background-color: white;
        border-radius: 10px;
        border: 1px solid #ecc3c3;
    }
    // .product__image
    &__image {
        flex: 0 0 45%;
        position: relative;
        height: 150px;
        overflow: hidden;

        & img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
    // .product__info
    &__info {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        text-align: start;
    }
    // .product__name
    &__name {
        flex: 1 1 auto;
        font-size: 16px;
        font-weight: 600;
        color: rgb(45, 146, 141);
    }
    // .product__price
    &__price {
        font-size: 22px;
        color: red;
        text-align: end;
        font-weight: 800;
        & span {
            font-size: 18px;
        }
    }
    // .product__button
    &__button {
        padding: 7px 20px;
        border-radius: 10px;
        border: 1px solid #ecc3c3;
        background-color: rgb(45, 146, 141);
        color: white;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 2px;
    }
}
</style>
