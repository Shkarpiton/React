import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';
import './style.css';

class Map extends React.Component {
  map = null ;
  exampleRef = React.createRef();
  componentDidMount () {
    
  mapboxgl.accessToken = 'pk.eyJ1Ijoic2hrYXJwIiwiYSI6ImNrcDg5c3k2NjAwNTkybmxiNGdneDJrc20ifQ.QpIU5bEu9vHw5ezbFWINhg';
  
  this.map = new mapboxgl.Map({
    container: this.exampleRef.current,
    style: 'mapbox://styles/mapbox/streets-v9',
    center: [30.3141300 , 59.9386300],
    zoom: 11,
    
  }) 
 }
 componentWillUnmount () {
   this.map.remove()
 }
 
render() {
    return <div className="map-wrapper">
     <div className="map" ref={this.exampleRef} />
     </div>
}


    
    
    /* Given a query in the form "lng, lat" or "lat, lng"
    * returns the matching geographic coordinate(s)
    * as search results in carmen geojson format,
    * https://github.com/mapbox/carmen/blob/master/carmen-geojson.md */
   /*  var coordinatesGeocoder = function (query) {
    // Match anything which looks like
    // decimal degrees coordinate pair.
    var matches = query.match(
    /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
    );
    if (!matches) {
    return null;
    }
     
    function coordinateFeature(lng, lat) {
    return {
    center: [lng, lat],
    geometry: {
    type: 'Point',
    coordinates: [lng, lat]
    },
    place_name: 'Lat: ' + lat + ' Lng: ' + lng,
    place_type: ['coordinate'],
    properties: {},
    type: 'Feature'
    };
    }
    var coord1 = Number(30.3160677 , 59.9421696)
    var coord2 = Number(30.315785000000 , 59.939039000000);
    var coord3 = Number(30,339251 , 59,934046);
    var coord4 = Number(30.2975893 , 59.925919);
    var geocodes = [];
    map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coord1,
              },
            },
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#ffc617",
            "line-width": 8,
          },
        });
      };
    
     
    /*if (coord1 < -90 || coord1 > 90) {
    // must be lng, lat
    geocodes.push(coordinateFeature(coord1, coord2));
    }
     
    if (coord2 < -90 || coord2 > 90) {
    // must be lat, lng
    geocodes.push(coordinateFeature(coord2, coord1));
    }
     
    if (geocodes.length === 0) {
    // else could be either lng, lat or lat, lng
    geocodes.push(coordinateFeature(coord1, coord2));
    geocodes.push(coordinateFeature(coord2, coord1));
    }
     
    return geocodes;*/
    ;
     
    // Add the control to the map.
   /* map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    localGeocoder: coordinatesGeocoder,
    zoom: 11,
    placeholder: 'Пулково,Эрмитаж,Кинотеатр Аврора,Мирианский театр',
    
    mapboxgl: mapboxgl
    })
    );
    map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    localGeocoder: coordinatesGeocoder,
    zoom: 11,
    placeholder: 'Пулково,Эрмитаж,Кинотеатр Аврора,Мирианский театр',
    
    mapboxgl: mapboxgl
    })
    );*/
  }


  export default Map;
