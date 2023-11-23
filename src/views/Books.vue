<template>
    <div>
        <router-link
            v-for="(book, id) in books" 
            :key="id" 
            :to="'/Book/' + book.id">
            <img :src="book.image">
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Books',
    data: function () {
        return {
            books: []
        }
    },
    created: function () {
        fetch('https://seussology.info/api/books')
            .then(response => response.json())
            .then(json => {this.books = json})   
    }
}
</script>

<style scoped>
    div {
        display: grid;
        grid-template-columns: auto auto auto auto;
    }
    img {
        width: 85%;
    }


</style>