/*global google*/
import React from "react"
import { compose, withProps, withHandlers, withState } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const GoogleMapComponent = compose(
    withProps({
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
/*
import React, { useEffect } from "react";

export default function GoogleMap() {
    useEffect(() => {
      mapscript();
    }, []);
  
    const mapscript = () => {
      // 카카오 맵 Place API 불러오기~

      const songpaITtower = new google.maps.LatLng(37.495061,127.1219948);

      const service = new google.maps.places.PlacesService();
    
        const callback = function(result, status, pagination) {
          if (status === google.maps.services.Status.OK) {
              if(pagination.current === 1){console.log('From Google Map');} //1페이지라면... 데이터 출처 콘솔에서 보기
              console.log(result); // 결과를 콘솔에 출력.
              if(pagination.hasNextPage === true){ //만약에 다음 페이지가 있다면...
                  pagination.nextPage(); //다음 페이지로 이동
                  console.log(pagination.current); //현재 페이지 번호를 콘솔에 로그로!
              }
          }
        };
          // 음식점 코드 검색 (FD6)
        const request = {
            location: songpaITtower,
            radius : 600,
            type: ['restaurant']
        }
          service.nearbySearch(request, callback);

      /* 지도 표시
      let container = document.getElementById("map");
      let options = {
        center: new kakao.maps.LatLng(37.495061,127.1219948),
        level: 3,
      };
      //const map = new kakao.maps.Map(container, options);
        //마커가 표시 될 위치
      let markerPosition = new kakao.maps.LatLng(
        37.495061,
        127.1219948
      );
        // 마커를 생성
      let marker = new kakao.maps.Marker({
        position: markerPosition,
      });
        // 마커를 지도 위에 표시
     // marker.setMap(map);                                  */
     /*
    };
  
    return <></>;
    //<div id="map" style={{ width: "50vw", height: "50vh" }}></div>;
  }
  */