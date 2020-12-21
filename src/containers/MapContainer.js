import React from 'react';
import { View ,StyleSheet} from 'react-native';
import MapInput from '../components/MapInput';
import MyMapView from '../components/MapView';
import { getLocation } from '../services/location-service';

class MapContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        region: {},
        temperature: 0,
        weatherCondition: null,
        humidity:0,
        windSpeed:0,
        error: null,
}}

    componentDidMount() {
        this.getInitialState();
    }

    getInitialState() {
        getLocation().then(
            (data) => {
                this.setState({
                    region: {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003
                    }
                });
            }
        );
    }

    getCoordsFromName(loc) {
        this.setState({
            region: {
                latitude: loc.lat,
                longitude: loc.lng,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003
            }
        });
    }

    onMapRegionChange(region) {
        this.setState({ region });
        this.fetchWeather(this.state.region.latitude,this.state.region.longitude);
    }
    fetchWeather(lat, lon) {
        fetch(
          `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=56771d66cfb3b5b3b6a6145e7544bb98&units=metric`
        )
          .then(res => res.json())
          .then(json => {
            this.setState({
              temperature: json.main.temp,
              weatherCondition: json.weather[0].main,
              humidity:json.main.humidity,
              windSpeed:json.wind.speed
            });
          });
      }
    render() {
        return (
            <View style={{ flex: 1,backgroundColor:' #e0e0eb' }}>
                <View style={{flex:0.2}}>
                    <MapInput notifyChange={(loc) => this.getCoordsFromName(loc)} />
                </View>
                {
                    this.state.region['latitude'] ?
                        <View style={{flex:0.8}}>
                            <MyMapView
                                region={this.state.region}
                                onClick={this.state.onClick}
                                temperature={this.state.temperature}
                                weather={this.state.weatherCondition}
                                wind={this.state.windSpeed}
                                humidity={this.state.humidity}
                                onRegionChange={(reg) => this.onMapRegionChange(reg)} />
                        </View> : null}
            </View>
        );
    }
}

export default MapContainer;

