let autocomplete;

// The Function is called at the End of Google Places API script tag:
function initAutocomplete () {
    // Initialize a New Place Autocomplete & attached to HTML element:
    autocomplete = new google.maps.places.Autocomplete (
        document.getElementById('autocomplete'), 
        {
            types: ['establishment'],
            //componentRestrictions: {'country': ['USA']},
            fields: ['place_id', 'geometry', 'name']
        }
    );

    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
    const place = autocomplete.getPlace();

    if(!place.geometry) {
        // User Did Not Select a Prediction; reset the input field:
        document.getElementById('autocomplete').placeholder = 'Enter A Place...';
    } else {
        // Display details about the valid place:
        document.getElementById('details').innerHTML = place.name;
    }
}