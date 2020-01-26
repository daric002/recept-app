<template>
  <div class="new-recepie">
    <div>
      <b-button pill :to="{name: 'Recepies'}">Bakåt</b-button>
    </div>
    <h1>Nytt Recept</h1>
    <div class="form">
      <div>
        <input type="text" name="title" placeholder="TITEL" v-model="title">
      </div>
      <div>
        <input type="text" name="url" placeholder="Hemsida" v-model="url">
      </div>
      <div>
        <b-button pill class="app_post_btn" @click="addRecepie" >Lägg till</b-button>
      </div>
    </div>
  </div>
</template>
<script>
import RecepiesService from '@/services/RecepiesService'

export default {
  name: 'NewRecepie',
  data () {
    return {
      title: '',
      url: ''
    }
  },
  methods: {
    async addRecepie () {
      await RecepiesService.addRecepie({
        title: this.title,
        url: this.url
      })
      this.$router.push({name: 'Recepies'})
    }
  }
}
</script>
<style type="text/css">
.form input{
  width: 50%;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
/* .app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 20%;
  border: none;
  border-radius: 100%;
  cursor: pointer;
} */
</style>
