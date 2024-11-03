// https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=9QxBs438BziSAWOYE4NoGDmay3nATPbW
// img{
//     height: 400px;
//     object-fit: contain;
// }

import React from 'react';
import Navbarothers from '../Homepage/Navbarothers.js';

export default function news() {
  return (
    <>
    <Navbarothers></Navbarothers>
    <div class="container">
        <h1>News App</h1>
        <div id="output"></div>
        <p id="copyright"></p>
    </div>
    </>
  )
  
}
async function getNews(){
    await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=9QxBs438BziSAWOYE4NoGDmay3nATPbW')
    .then(d => d.json())
    .then(response => {
        // console.log(response.results);
    for (var i = 0; i < response.results.length; i++) {
            // console.log(response.results[i].title);
            const output = document.getElementById('output');

            try {
                output.innerHTML += `
                <div class="card">
                <div class="card-body">
                <img src="${response.results[i]['media'][0]['media-metadata'][2].url}"
                alt="${response.results[i]['media'][0].caption}" title="${response.results[i]['media'][0].caption}" />
                <h2>${response.results[i].title}</h2>
                <div class="card-text">
                    <p>${response.results[i].abstract}</p>
                </div>
                </div>
                </div>
                <br> 
                `
                // console.log(response.results[i]['media'][0].caption);
            } catch (err) {
                // console.log(err);
            }
        }
        document.getElementById('copyright').innerHTML = response.copyright;
    })
  }
  getNews()
