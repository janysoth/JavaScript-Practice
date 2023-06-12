// Creating a Vue App
// Similar to creating an object
const app = Vue.createApp({
  // data functions
  // template: '<h2>I am a template</h2>'

  // Create function and must return an object:
  // Then you can call the object properties in HTML using {{}}
  data() {
    return {
      showBooks: true,
      title: "The Final Empire",
      author: "Jonny Vorn Soth",
      age: 45,
      x: 0,
      y: 0,
    }
  },
  // Functions Properties
  methods: {
    changeTitle(title) {
      // this.title = 'Words of Randiance'
      this.title = title
    },

    // Change showBooks Boolean \
    // This method being called in index.html
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },

    handleEvent(e, data) {
      console.log(e, e.type)
      if (data)
        console.log(data)
    },

    handleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  },
})

// // Create another Vue app and mount to a different div#
// const car = Vue.createApp({
//   data() {
//     return {
//       showCars: true,
//       make: "Honda",
//       model: "Civic",
//       year: "2012",
//     }
//   },

//   methods: {
//     toggleShowCars() {
//       this.showCars = !this.showCars
//     },
//   },
// }).mount("#car")

// To mount the Vue app to #app
// And control everything inside the div #app
app.mount("#app")
