<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      smoothies: [
        { title: 'Protein Brew', slug: 'protein-brew', ingredients: ['bananas', 'whey protein', 'milk'], id: '1'},
        { title: 'Morning Boost', slug: 'morning-boost', ingredients: ['mango', 'lime', 'juice'], id: '2'}
      ] 
    }
  }
}
</script>

<style>
.index {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
}

.index h2 {
  margin-top: 0;
  font-size: 1.8em;
  text-align: center;
}

.index .ingredients {
  margin: 30px auto;
}

.index .ingredients li {
  display: inline-block;
}
</style>
