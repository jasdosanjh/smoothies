<template>
    <div v-if="smoothie" class="edit-smoothie container">
        <h2>Edit {{smoothie.title}} Smoothie</h2>
        <form @submit.prevent="EditSmoothie">
            <div class="field title">
                <label for="title">Smoothie Title</label>
                <input type="text" name="title" v-model="smoothie.title">
            </div>
            <div v-for="(ing, index) in smoothie.ingredients" :key="index" class="field">
                <label for="ingredient">Ingredient:</label>
                <input type="text" name="ingredient" v-model="smoothie.ingredients[index]">
                <i class="material-icons delete" @click="deleteIngredient(ing)">delete</i>
            </div>
            <div class="field add-ingredient">
                <label for="add-ingredient">Add an ingredient:</label>
                <input type="text" name="add-ingredient" @keydown.tab.prevent="addIngredient" v-model="another">
            </div>
            <div class="field center-align">
                <p v-if="feedback" class="red-text">{{ feedback }}</p>
                <button class="btn pink">Update Smoothie</button>
            </div>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init'

export default {
    name: 'EditSmoothie',
    data() {
        return {
            smoothie: null,
            another: null,
            feedback: null
        }
    },
    methods: {
        EditSmoothie() {
            console.log(this.smoothie.title, this.smoothie.ingredients)
        },
        addIngredient() {
            if (this.another) {
                this.smoothie.ingredients.push(this.another)
                this.another = null
                this.feedback = null
            }   else {
                this.feedback = 'You must enter a value to add an ingredient.'
            }
        },
        deleteIngredient(ing) {
            this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
                return ingredient != ing
            })
        }
    },
    created() {
        let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.smoothie = doc.data()
                this.smoothie.id = doc.id
            })
        })
    }
}
</script>

<style>
.edit-smoothie {
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
}
.edit-smoothie h2 {
    margin: 20px auto;
    font-size: 2em;
}
.edit-smoothie .field {
    margin: 20px auto;
    position: relative;
}
.edit-smoothie .delete {
    position: absolute;
    right: 0;
    bottom: 16px;
    color: #AAA;
    font-size: 1.4em;
    cursor: pointer;
}
</style>
