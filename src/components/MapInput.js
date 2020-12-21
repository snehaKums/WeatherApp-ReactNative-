import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class MapInput extends React.Component {

    render() {
        return (

            <GooglePlacesAutocomplete
                placeholder='Search here...'
                minLength={4} 
                autoFocus={true}
                returnKeyType={'search'} 
                listViewDisplayed="auto"    
                fetchDetails={true}
                onPress={(data, details = null) => { 
                    this.props.notifyChange(details.geometry.location);
                }
                }

                query={{
                    key: 'AIzaSyBSMpnempk7AVRGebOq-p_NvadinsdkSec',
                    language: 'en'
                }}

                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={300}
            />
        );
    }
}
export default MapInput;