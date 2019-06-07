const lunchOptions = [
    { label: 'Fries', info: 'Great choice! Fries rule!',        img: 'https://cms.splendidtable.org/sites/default/files/styles/w2000/public/french-fries.jpg?itok=FS-YwUYH' },
    { label: 'Sushi', info: 'A veggie role for me please!',     img: 'https://www.parcelpal.com/wp-content/uploads/2017/06/MomoSushi.jpg' },
    { label: 'Salad', info: 'A very healthy choice.',           img: 'https://www.ndtv.com/cooks/images/tossed-mixed-salad-620.jpg' },
    { label: 'Pizza', info: 'Delecious, yummy, tasty pizza...', img: 'https://recipes.timesofindia.com/photo/53110049.cms' }
]
window.app = new Vue({
    el: '#lunchify-app',
    data: {
        selectedLunch: null
    },
    methods: {
      pickMyLunch: function () {
          this.selectedLunch = lunchOptions[Math.floor(Math.random() * lunchOptions.length)]
      }
    }
})