<template>
  <div id='lunchify-app'>
    <b-navbar toggleable='lg' type='light' variant='light'>
      <b-navbar-brand href='#'><strong>Lunchify</strong> - <i>The app that picks your meals for you!</i>
      </b-navbar-brand>

      <b-navbar-nav class='ml-auto'>
        <b-button v-b-tooltip.hover title='This will pick a random lunch for you' size='lg' v-on:click='pickMyLunch'>
          Pick My Lunch
        </b-button>
      </b-navbar-nav>
    </b-navbar>
    <br />

    <b-container>
      <b-row>
        <b-col>
          <SpinWheel v-if='lunchOptions' :segments='lunchOptions' class='lunchWheel' />
        </b-col>
        <b-col>
          <div v-if='selectedLunch'>
            <b-card :title='selectedLunch.label' :img-src='selectedLunch.img' style='max-width: 30rem; margin: auto;'>
              <b-card-text>{{selectedLunch.info}}</b-card-text>
            </b-card>
          </div>
          <div v-else style='text-align: center; color: rgb(172, 172, 172)'>
            <p>You haven't picked a lunch yet...</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'lunchify-app',
  components: {
    'SpinWheel': () => import ('./components/SpinWheel.vue')
  },
  data: function () {
    return {
      lunchOptions: null,
      selectedLunch: null
    }
  },
  created: async function () {
    await this.fetchData()
  },
  methods: {
    fetchData: async function () {
      const response = await fetch('/api/lunches')
      const jsonData = await response.json()
      this.lunchOptions = jsonData
    },
    pickMyLunch: async function () {
      const response = await fetch('/api/lunches/actions/pick', { method: 'POST' })
      const jsonData = await response.json()
      this.selectedLunch = jsonData
    }
  }
}
</script>

<style>
.lunchWheel {
  width: 30rem;
  height: 30rem;
}
</style>
