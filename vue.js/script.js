// Creating a Vue App
const app = Vue.createApp({
    // data functions
    // template: '<h2>I am a template</h2>'

    // Create function and must return an object:
    // Then you can call the object properties in HTML using {{}}
    data() {
        return {
            title: 'The Final Empire',
            author: 'Jonny Vorn Soth',
            age: 45
        }
    }

})

// Create another Vue app and mount to a different div#
const car = Vue.createApp({
    data() {
        return {
            make: 'Honda',
            model: 'Civic',
            year: '2012'
        }
    }
}).mount('#car')

// To mount the Vue app to #app
// And control everything inside the div #app
app.mount('#app')