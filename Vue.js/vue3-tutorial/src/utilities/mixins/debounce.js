export default {
    data() {
        return {
            timeout: "",
        };
    },

    methods: {
        // To Create debounce function 
        // Take in function and timeout as params
        // set 1000 (1 sec) as default wait time
        debounce(func, wait = 1000) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(func, wait);
        },

    },
};