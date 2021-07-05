import './series.css'; 
import Ajoutedefavoris from './Ajoutedefavoris';
export default function Series(props) {
  const { series } = props;
  return ( 
  <div className="container ">
        <div className="clearbetweensections"></div>
                <h1  role="presentation">{series.title}<i/>
                </h1>
        <div> 
                <Ajoutedefavoris series = {series}favorit={series.user.favorited} />
        </div>

        <div className="clearfix"></div>
        <div className="clearbetweensections">
        </div>

        <div >
                <p className="text"> {series.description} </p>
        </div>
        <div className="clearbetweensections">
        </div>
        
        <div  role="presentation">
        <div>
            <img className="img-fluid"src={series.images.show} alt=""></img>  
        </div>
    </div>
  </div>   
  )
}