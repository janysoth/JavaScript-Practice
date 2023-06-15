// Creating a Vue App
// Similar to creating an object
const app = Vue.createApp({
  // data functions
  // template: '<h2>I am a template</h2>'

  // Create function and must return an object:
  // Then you can call the object properties in HTML using {{}}
  data() {
    return {
      url: 'https://www.google.com',
      showBooks: true,
      // title: "The Final Empire",
      // author: "Jonny Vorn Soth",
      // age: 45,
      // x: 0,
      // y: 0,

      books: [
        { title: 'Name of the Wind', author: 'Patrick Rothfuss', isFave: true },
        { title: 'The Way of Kings', author: 'Brandon Sanderson', isFave: false },
        { title: 'The Final Empire', author: 'Brandon Sanderson', isFave: true },

      ],
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

    toggleFave(book) {
      book.isFave = !book.isFave;
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

// Challenge - Add to Favs
// - attach a click event to each li tag (for each book)
// @click="toggleFave(book)"
// - when a user clicks an li, toggle the 'isFave' property of that book
// Create a function toggleFave(book) then book.isFave = !book.isFave

