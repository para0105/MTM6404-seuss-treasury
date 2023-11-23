<template>
    <div>
        <div v-for="quote in quotes">
            <p>{{ quote.text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Quotes',
    data: function () {
        return {
            quotes: []
        }
    },
    created: function () {
        fetch('https://seussology.info/api/quotes/random/10')
            .then(response => response.json())
            .then(json => {this.quotes = json})
    }
}
</script>

<style scoped>
    div {
        font-family: 'Open Sans', sans-serif;
        text-align: center;
    }
</style>