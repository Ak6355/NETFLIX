export const Seriescard = (props) => {
  console.log(props);
  return (

    <li key={props}>
      <div>

        <img src={props.cureElem.img_url} alt="qot.jpg" width="40%"
          height="40%" />
      </div>
      <h2>Name:{props.cureElem.name} </h2>
      <h3> RATING :{props.cureElem.rating}</h3>
      <p>genre: {props.cureElem.genre}</p>
      <p>Cast : {props.cureElem.cast}</p>
      <h3><i>summary:{props.cureElem.description}</i></h3>
      <a href={props.cureElem.watch_url} target="_blank">
        <button>WATCH NOW</button>
      </a>
    </li>

  );
};