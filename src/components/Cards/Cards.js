import Login from '../Login/Login';

import "./Cards.css";

function Cards (){
  //JSX 
  return (
    <section className="Cards">
      <div className="Tittle">
        <h2>Ingresar</h2>
      </div>
      <div>
        <Login></Login>
      </div>
    </section>
  );
}

export default Cards;