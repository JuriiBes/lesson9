<template>
    <div class="home__list">
        Нас дуже легко знайти:
        <ul class="home__items">
            <li class="home__item">Потягом до Ужгорода.</li>
            <li class="home__item">Знайти бабу Галю. Вона дорогу покаже.</li>
        </ul>
        До зустрічі!!!
    </div>
</template>

<script>
export default {
    name: 'ContactsShop',
}
</script>

<style lang="scss" scoped>
.home {
    // .home__list
    &__list {
        max-width: 500px;
        min-height: 350px;
        margin: 0 auto;
        padding: 20px 50px;
        background-color: #fce9e9;
        text-align: start;
        font-size: 18px;
        color: darkcyan;
        font-weight: 600;
    }
    // .home__items
    &__items {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
        margin-top: 15px;
        margin-bottom: 15px;
        font-weight: 400;
    }
    // .home__item
    &__item {
        padding-left: 20px;
    }
}
</style>
