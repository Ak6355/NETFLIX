import seriesData from "../api/seriesData.json"
import { Seriescard } from "./Seriescard";
const Netflix = () => {

  return (
    <ul>
      {
        seriesData.map((cureElem) => (
          <Seriescard key={cureElem.id} cureElem={cureElem} />
        ))
      }

    </ul>


  );
};


export default Netflix;

export const Fotter = () => {
  return (
    <center><p> Copyright @ ANUBHAV</p> </center>

  )

}



export const Header = () => {
  return (
    <center><h1>NETFLIX</h1> </center>

  );

};