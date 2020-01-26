
<template>
  <div class="recepies">
    <h1>Recepten</h1>
    This file will list all the posts.

    <div v-for="recepie in recepies" 
      :key="recepie.title"
    >
      <p>
        <span>{{ recepie.title }}</span>
        <br/>
        <span>{{ recepie.url }}</span>
        
        
      </p>
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
      this.recepies = response.data
    }
  }
}
</script>
