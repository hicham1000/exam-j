import './series.css'; 
import Ajoutedefavoris from './Ajoutedefavoris';
export default function Series(props) {
  const { series } = props;
  return ( 
  <div className="container">

        <h1 className=" justify-content-center" role="presentation">
        {series.title}<i className=" " /></h1>
        <div className="justify-content-center">  <Ajoutedefavoris series = {series} favorit={series.user.favorited} />
        </div>
        <div class="clearfix"></div>
        <div className="clearbetweensections">
        </div>
        <div className="justify-content-center"><p>{series.description}</p></div>
        <div className="clearbetweensections">
        </div>
        <div className="" role="presentation">
        <div>
            <img className="g-5 img-fluid " src={series.images.poster} alt=""></img>
            <img className="img-fluid"src={series.images.banner} alt=""></img>  
        </div>
    </div>
  </div>   
  )
}