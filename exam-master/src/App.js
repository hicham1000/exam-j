import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import  React,{useState ,useEffect} from 'react';
import SeriesList from './SeriesList';
import SearchBox from './SearchBox';
function App() {
  const [datas, setDatas] = useState([]);
    useEffect(()=> {
    fetch('http://localhost:4000/rest/shows')
      .then(response => response.json())
      .then(show => setDatas(show))
    }, [])
  return (
  <div>
      <div>
          <SearchBox/>
      </div>
      <div className='container-fluid'> 
        <SeriesList series ={datas}/>
      </div>
  </div>
  );  
};
export default App;