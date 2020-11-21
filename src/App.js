import React from 'react';
import Game from './components/Game/Game';
import Getnearbyplace from './components/Getnearbyplace';
import KakaoMap from './components/Kakaomap';

// css in js 방식
import {createGlobalStyle} from 'styled-components';

// global style 추가
const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const App = () => {
  return (
    <div>
      <GlobalStyle></GlobalStyle>
      <Game></Game>
      <Getnearbyplace></Getnearbyplace>
      <KakaoMap></KakaoMap>
    </div>
  );
}

export default App;

