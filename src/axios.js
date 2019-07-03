import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
    headers: {'X-RapidAPI-Key': '9b41523a9amshb596bd84fe92c21p123265jsn1b5353a03779'}
});

export default instance;
