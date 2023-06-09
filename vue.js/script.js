// Creating a Vue App
const app = Vue.createApp({
    // data functions
    // template: '<h2>I am a template</h2>'

    // Create function and must return an object:
    data() {
        return {
            title: 'The Final Empire'
        }
    }

})

// To mount the Vue app to #app
// And control everything inside the div #app
app.mount('#app')