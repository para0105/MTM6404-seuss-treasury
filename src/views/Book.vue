<template>
    <div class="details">
        <img :src="book.image">
        <div>
            <h2>{{ book.title }}</h2>
            <p>{{ book.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Book',
    // id is the dynamic segment that will show up in the url as well as will be used to retrieve the corresponding book's info
    props: ['id'],
    data: function () {
        return {
            book: {
                id: 1,
                title: '',
                image: '',
                description: ''
            }
        }
    },
    created: function () {
        fetch('https://seussology.info/api/books/' + this.id)
            .then(response => response.json())
            .then(json => {
                this.book.id = json.id
                this.book.title = json.title
                this.book.image = json.image
                this.book.description = json.description
            })
    }
}
</script>

<style scoped>
    .details {
        display: grid;
        grid-template-columns: 1fr 2fr;
        font-family: 'Open Sans', sans-serif;
    }
    img {
        width: 80%;
    }
</style>