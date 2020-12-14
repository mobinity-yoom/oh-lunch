/*global google*/

import React, { Component } from 'react';
import axios from 'axios';

//Powered by Google Map 
class Getnearbyplace extends Component {

    componentWillMount() {
        const proxyurl ="https://cors-anywhere.herokuapp.com/";
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'+
                    'location=37.384352299999996,126.9330403&type=restaurant&language=ko'+  // gbsa(37.384352299999996, 126.9330403)
                    '&rankby=prominence'+
                    '&keyword=restaurant'+
                    '&key=AIzaSyAOlwv3uagzsGWXsysKw8vQAejkVpwR1as&radius=600';
        axios.get(proxyurl+url)
            .then(response => {
                console.log("Google API 불러오기");
                console.log(response);
                return response.data.results;
            })
            .then(d => {
                this.setState({ results: d });
                // console.log(d);
                console.log("state", this.state.results);
              })
            .catch((error) => {
                alert('error')
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                {this.state == null ? "": this.state.results.map(((result, index) => 
                <th key={`${result}${index}`}>
                    <div>
                        <div>
                            {result.name}
                        </div>
                    </div>
                </th>
                ))}
            </div>
        ); //지도는 안쓰니까.. Fragment만 리턴
    }
}

export default Getnearbyplace;

// const listItems = data.map(item =>
//     <div>
//           <a href={item.url}>
//               <img className="img-fluid" 
//                     src={item.image} 
//                     alt={item.site} />
//                <p>{item.site}</p>
//             </a>
//        </div>
//   );
//   render() {
//       return(
//           <div>
//               { listItems }
//           </div>
//         )
//   }

  /*
  function (response) {
                console.log("Google API 불러오기")
                // console.log(response);
                // const parsedResponse = JSON.parse(response);
                // console.log(response['data']['results'][0]['name']);
                // console.log(response.data.results[0].name);

            }*/