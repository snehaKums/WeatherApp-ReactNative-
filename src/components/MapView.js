import React from 'react';
import {TouchableOpacity,View,Text } from 'react-native';
import MapView from 'react-native-maps';

const MyMapView = (props) => {
    return (
        <MapView
            style={{ width:'90%',marginLeft:'5%',height:'100%'}}
            region={props.region}
            showsUserLocation={true}
            onRegionChange={(reg) => props.onRegionChange(reg)}>

                 <MapView.Marker
                                coordinate={props.region}
                                >
                                  <MapView.Callout tooltip style={{width: 130,height: 100,}}>
                                      <TouchableOpacity>
                                          <View style={{backgroundColor:'white',borderColor:'red',borderWidth:2}}>
                                              <Text >{'Temperature: '+props.temperature +'°C'}{"\n"}{'Weather: '+props.weather}{"\n"}{'Wind: '+props.wind+'km/hr'}{"\n"}{'Humidity: '+props.humidity+'%'}</Text>
                                          </View>
                                      </TouchableOpacity>
                                    </MapView.Callout>
                </MapView.Marker>
        </MapView>
    )
}
export default MyMapView;