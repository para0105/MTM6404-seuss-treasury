<template>
  <main>
    <header>
      <nav>
        <router-link to="/"><a>Books</a></router-link>
        <router-link to="/Quotes/"><a>Quotes</a></router-link>
      </nav>
      <h1>Seuss Treasury</h1>
    </header>
    <div>
      <!-- the virtual pages goes here -->
      <router-view />
    </div>
  </main>
</template>

<style scoped>
  main {
    width: 90%;
    margin: 20px auto;
  }
  header {
    font-family: 'Open Sans', sans-serif;
  }
  nav {
    display: flex;
  }
  a {
    margin: 5px;
    text-decoration: none;
  }
  a:link, a:visited {
    color: black;
  }
  a:hover, a:active {
    color: #A6A6A6;
  }
  h1 {
    margin-bottom: 100px;
    text-align: center;
  }
</style>