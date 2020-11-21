/*global google*/

import React, { Component } from 'react';
import axios from 'axios';

//Powered by Google Map 
class Getnearbyplace extends Component {

    componentWillMount() {
        const proxyurl ="https://cors-anywhere.herokuapp.com/";
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'+
                    'location=37.495061,127.1219948&type=restaurant&language=ko'+
                    '&rankby=prominence'+
                    '&keyword=restaurant'+
                    '&key=AIzaSyAOlwv3uagzsGWXsysKw8vQAejkVpwR1as&radius=600';
        axios.get(proxyurl+url)
            //.then((response) => response.data.json())
            .then((JsonResponse) => {
            console.log('from Google Map with REST API');
            console.log(JsonResponse)
        })
        .catch((error) => {
            alert('error')
            console.log(error)
        });
/*        const songpaITtower = new google.maps.LatLng(37.495061,127.1219948);

        //google map nearby search
        const request = {
            location: songpaITtower,
            radius : 600,
            type: ['restaurant']
        }

        const googlecallback = function(result, status){
            if(status === google.maps.places.PlacesServiceStatus.OK){
                console.log(result);
            }
        }

        const service = new google.maps.places.PlacesService();
        service.nearbySearch(request, googlecallback);*/
    }

    render() {
        return (<></>) //지도는 안쓰니까.. Fragment만 리턴
    }
}

export default Getnearbyplace;