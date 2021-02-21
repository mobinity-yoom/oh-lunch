/*global google*/

import React, { Component, Fragment } from 'react';
import axios from 'axios';

// const listItems = [];

//Powered by Google Map 
class Getnearbyplace extends Component {
    componentWillMount() {
        console.log("불러오기 시작")
        // const proxyurl ="https://cors-anywhere.herokuapp.com/";
        // const proxyurl = "https://ancient-coast-41461.herokuapp.com/";
        const url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'+
                    'location=37.384352299999996,126.9330403&type=restaurant&language=ko'+  // gbsa(37.384352299999996, 126.9330403)
                    '&rankby=prominence'+
                    '&keyword=restaurant'+
                    '&key=AIzaSyCbrgMaGTqLzjQm5OdQXJSisVMexFNBBqA&radius=3000';

        // const url = 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?'+
        //             'input=식당'+
        //             '&inputtype=textquery'+
        //             '&fields=photos,formatted_address,name,opening_hours,rating,place_id'+
        //             '&locationbias=circle:10000@37.384352299999996,126.9330403'+
        //             '&language=ko'+
        //             '&key=AIzaSyCbrgMaGTqLzjQm5OdQXJSisVMexFNBBqA';
        axios.get(url)
            .then(response => {
                console.log("Google API 불러오기");
                console.log(response);
                return response.data.results;
            })
            .then(d => {
                this.setState({ results: d });
              })
            .catch((error) => {
                alert('error')
                console.log(error)
            });
    }

    render() {
        // return (
        //     <div>
        //     {data.map(function(d, idx){
        //        return (<li key={idx}>{d.name}</li>)
        //      })}
        //     </div>
        //   );
        // renderItems = () => {
        //     const data = this.state.userData;
        
        //     const mapRows = data.map((item, index) => (
        //         <Fragment key={item.id}>
        //             <li>
        //                 {/* Passing unique value to 'key' prop, eases process for virtual DOM to remove specific element and update HTML tree  */}
        //                 <span>Name : {item.name}</span>
        //                 <span>User Type: {item.user_type}</span>
        //                 <button onClick={() => this.deleteUser(item.id)}>
        //                     Delete User
        //                 </button>
        //             </li>
        //         </Fragment>
        //     ));
        //     return mapRows;
        // };
        // return (
        //     <ul>
        //         {this.state == null ? "" : this.state.results.map(((result, index) => 
        //         <li key={`${result}${index}`}>
        //             {result.name}
        //         </li>
        //         ))}
        //     </ul>
        // );
        return (
            <ul>
                {this.state == null? "": this.state.results.map((result, index) => (
                    <Fragment key={`${result}${index}`}>
                        <li>
                            <span>name: {result.name} </span>
                            <span>src: {result.place_id} </span>
                            {/* <span>photo: {result.photos[0].photo_reference} </span> */}
                        </li>
                    </Fragment>
                ))}
            </ul>
        );
    }
}

export default Getnearbyplace;