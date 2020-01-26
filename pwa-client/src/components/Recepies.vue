<template>
  <div class="recepies">
    <h1>Recept</h1>
    <div>
      <b-button pill :to="{name: 'NewRecepie'}" class="new-recepie-btn">Nytt Recept</b-button>
    </div>
    <div v-if="recepies.length > 0" class="recepies-wrap">
      <div v-for="recepie in recepies" :key="recepie._id">
        <div class="recepie">
          <a :href="recepie.url">
            <h2>{{ recepie.title }}</h2>
          </a>
        </div>
      </div>
    </div>
    <div v-else>
      Inga recept att visa
    </div>
  </div>
</template>
<script>
import RecepiesService from '@/services/RecepiesService'

export default {
  name: 'recepies',
  data () {
    return {
      recepies: []
    }
  },
  mounted () {
    this.getRecepies()
  },
  methods: {
    async getRecepies () {
      const response = await RecepiesService.fetchRecepies()
      this.recepies = response.data.recepies
    }
  }
}
</script>
