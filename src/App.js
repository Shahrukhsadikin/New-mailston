import logo from './logo.svg';
import './App.css';
import { ButtonGroup,Button, Spinner, Row, Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import News from './component/News/News';

function App() {
  const[news,setnews]=useState([]);
  useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-27&sortBy=publishedAt&apiKey=f8d39e70d2dd43a5896b64a43da7f67b')
    .then(res =>res.json())
    .then(data =>setnews(data.articles))
  },[])
  return (
    <div className="App">

       { 
       news.length ===0 ?
       <Spinner animation="border" /> 
       :
        <Row xs={1} md={3} className="g-4">
         {
           news.map(nw=> <News news={nw}>

           </News>)
         }
        </Row>
        }
    </div>
  );
}

export default App;
