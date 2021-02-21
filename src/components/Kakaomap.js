/*global kakao*/
import React from "react";

export default function KakaoMap() {
      // 카카오 맵 Place API 불러오기~
      const kakaoplaces = new kakao.maps.services.Places();
    

      const callback = function(result, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            if(pagination.current === 1){console.log('From Kakao Map');} //1페이지라면... 데이터 출처 콘솔에서 보기
            //someofresult += result;
            console.log(result); // 결과를 콘솔에 출력.
            if(pagination.hasNextPage === true){ //만약에 다음 페이지가 있다면...
                pagination.nextPage(); //다음 페이지로 이동
                console.log(pagination.current); //현재 페이지 번호를 콘솔에 로그로!
            }
        }
      };
        // 음식점 코드 검색 (FD6)
      kakaoplaces.categorySearch('FD6', callback, {
      // Map 객체를 지정하지 않았으므로 좌표객체를 생성하여 넘겨준다.
      location: new kakao.maps.LatLng(37.495061,127.1219948),
      radius: 600
      });

      return <></>;
  /*useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {


      //지도 표시
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
     // marker.setMap(map);                                  
    };*/
  
    //return <></>;
    //<div id="map" style={{ width: "50vw", height: "50vh" }}></div>;
  }