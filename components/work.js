const Work = (props) => (
  <div>
    <img src={props.photo} alt={`${props.company} snapshot`} />
    <style jsx>{`
      div {
        display: inline-block;
        margin-bottom: 0px;
        margin-right: 0px;
        max-width: 100%;
        width: 280px;
      }
      img {
        border: 10px solid white;
        border-radius: 3px;
        box-shadow: 0 2px 6px rgba(0,0,0,0.09);
        display: block;
        transform: rotateZ(${props.rotation}deg);
        width: 100%;
      }
    `}</style>
  </div>
)

export default Work
