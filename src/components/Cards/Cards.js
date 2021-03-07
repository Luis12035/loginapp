import Login from '../Login/Login';


function Cards (){
  //JSX 
  return (
    <section className="Cards">
      <div className="border-2 border-black text-2xl text-center font-bold">
        <h2>Ingresar</h2>
      </div>
      <div className=" w-96 ml-96 border-red-700 border-2 mt-10">
        <Login></Login>
      </div>
    </section>
  );
}

export default Cards;
