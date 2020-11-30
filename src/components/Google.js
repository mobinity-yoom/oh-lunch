/*global google*/
import React from "react"
import { compose, withProps, withHandlers, withState } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const GoogleMapComponent = compose(
    withProps({
        // TODO: 구글맵 api 받아오기
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA0zhl0clnGBKLY46Cbj_Cpw52kk8Ga0YE&v=3.exp&libraries=places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    withState('places', 'updatePlaces', ''),
    withHandlers(() => {
        const refs = {
            map: undefined,
        }
        const songpaITtower = new google.maps.LatLng(37.495061,127.1219948);
        // const gbsa = new google.maps.LatLng();
        // TODO: 경기도 벤처센터 위, 경도 받아오기

        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            fetchPlaces: ({ updatePlaces }) => {
                
                const service = new google.maps.places.PlacesService(refs.map.context.__SECRET_MAP_DO_NOT_USE_OR_YOU_WILL_BE_FIRED);
                const request = {
                    location : songpaITtower,
                    radius:700,
                    type: ['restaurant']
                };
                service.nearbySearch(request, (results, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        console.log(results);
                        console.log("Google map OK");
                    }
                })
            }
        }
    }),
)((props) => {
    return (
        <GoogleMap
            onTilesLoaded={props.fetchPlaces}
            ref={props.onMapMounted}
            onBoundsChanged={props.fetchPlaces}
            defaultZoom={16}
            defaultCenter={{ lat: 37.495061, lng: 127.1219948 }}
        >
        </GoogleMap>
    )
})

export default class MyFancyComponent extends React.PureComponent {
    render() {
        return (
            <GoogleMapComponent />
        )
    }
}