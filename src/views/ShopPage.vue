<template>
    <div class="shop__container">
        <div class="shop__link" @click="onNotebooksClick">
            <img :src="iconNotebook" alt="" class="shop__image" />
            <div class="shop__subtitle">Ноутбуки</div>
        </div>
        <div class="shop__link" @click="onMonitorsClick">
            <img :src="iconMonitor" alt="" class="shop__image" />
            <div class="shop__subtitle">Монітори</div>
        </div>
        <div class="shop__link" @click="onKeyboardsClick">
            <img :src="iconKeyboard" alt="" class="shop__image" />
            <div class="shop__subtitle">Клавіатури</div>
        </div>
        <div class="shop__link" @click="onTelephonesClick">
            <img :src="iconTelephone" alt="" class="shop__image" />
            <div class="shop__subtitle">Телефони</div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'ShopPage',
    computed: {
        iconNotebook() {
            return require('../assets/image/noutbuki.png')
        },
        iconMonitor() {
            return require('../assets/image/monitory.png')
        },
        iconKeyboard() {
            return require('../assets/image/klaviatury.png')
        },
        iconTelephone() {
            return require('../assets/image/telephone.webp')
        },
    },
    created() {
        this.aProductList()
    },
    methods: {
        ...mapActions(['aProductList']),
        onNotebooksClick() {
            this.$router.push({
                name: 'products',
                params: {
                    category: 'notebooks',
                },
            })
        },
        onMonitorsClick() {
            this.$router.push({
                name: 'products',
                params: {
                    category: 'monitors',
                },
            })
        },
        onKeyboardsClick() {
            this.$router.push({
                name: 'products',
                params: {
                    category: 'keyboards',
                },
            })
        },
        onTelephonesClick() {
            this.$router.push({
                name: 'products',
                params: {
                    category: 'telephones',
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.shop {
    // .shop__container
    &__container {
        max-width: 500px;
        min-height: 350px;
        margin: 0 auto;
        padding: 20px 15px;
        background-color: #fce9e9;
        text-align: center;
        font-size: 18px;
        color: darkcyan;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
        flex-wrap: wrap;
    }
    // .shop__link
    &__link {
        position: relative;
        padding-top: 85%;
        overflow: hidden;
        object-fit: cover;
        background-color: rgb(248, 247, 247);
        border-radius: 40%;
        cursor: pointer;
    }
    // .shop__image
    &__image {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70%;
        height: 70%;
        transform: translate(-50%, -50%);
    }
    // .shop__subtitle
    &__subtitle {
        position: absolute;
        font-weight: 600;
        top: 123%;
        left: 50%;
        width: 70%;
        height: 70%;
        transform: translate(-50%, -50%);
    }
}
</style>
