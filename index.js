//interacting with an api from rapid api

const axios = require('axios')


axios({
    method: 'GET', 
    url: 'https://shazam.p.rapidapi.com/shazam-events/list',
    params: {
        artistId: '73406786',
        l: 'en-US',
        from: '2022-12-31',
        limit: '50',
        offset: '0'
    },
    headers: {
        'X-RapidAPI-Key': '7000e29599msh7179832891f16eap1a25f1jsne619f8a8fe1b',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }
    // authentication : {
    //     authentication if necessary
    // }
})
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })



