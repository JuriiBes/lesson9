<template>
    <div class="home__list">
        <ul class="home__items">
            <li class="home__item">При отриманні.</li>
            <li class="home__item">Переказ на карту.</li>
            <li class="home__item">Записати у зошит.</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PayPage',
}
</script>

<style lang="scss" scoped>
.home {
    // .home__list
    &__list {
        max-width: 500px;
        min-height: 350px;
        margin: 0 auto;
        padding: 20px 15px;
        background-color: #fce9e9;
        text-align: center;
        font-size: 18px;
        color: darkcyan;
    }
    // .home__items
    &__items {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        margin-top: 10px;
    }
    // .home__item
    &__item {
        padding-left: 20px;
    }
}
</style>
