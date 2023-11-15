<template>
    <div class="home">
        <div class="home__title">Цей магазин належить програмісту на фрілансі.</div>
        <div class="home__list">
            Тому:
            <ul class="home__items">
                <li class="home__item">магазин працює коли хоче;</li>
                <li class="home__item">товари надсилає швидко;</li>
                <li class="home__item">на запитання відповідає коли висипається;</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
}
</script>
<style lang="scss" scoped>
.home {
    max-width: 500px;
    min-height: 350px;
    margin: 0 auto;
    padding: 20px 15px;
    background-color: #fce9e9;

    // .home__title
    &__title {
        font-size: 18px;
        color: cadetblue;
        margin-bottom: 15px;
        font-weight: 600;
    }
    // .home__list
    &__list {
        text-align: start;
        font-size: 16px;
        color: darkcyan;
    }
    // .home__items
    &__items {
        display: flex;
        flex-direction: column;
        row-gap: 8px;
        margin-top: 10px;
    }
    // .home__item
    &__item {
        padding-left: 20px;

        &::before {
            content: '*';
            padding-right: 10px;
        }
    }
}
</style>
