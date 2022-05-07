import React from 'react'
import "./HomeScreen.css"
import Nav from '../Nav'
import Banner from '../Banner'
import requests from '../request'
import Row from "../Row"

function HomeScreen(){
    return(
<div>
    <Nav/>
    <Banner/>
    <Row title="Netflix Original" fetchUrl={requests.fetchnetflixoriginal} isLargeRow/>
    <Row title="Trending Now" fetchUrl={requests.fetchtrending} />
    <Row  title="Top Rated" fetchUrl={requests.fetchtoprated} />
    

</div>
    )
}
export default HomeScreen