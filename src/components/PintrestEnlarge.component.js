export default function PintrestEnlarge({ image }) {
  return (
    <div className="container">
      <div className="card-columns">
        <div className="card">
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-block py-2">
            <span className="card-title ps-3">
              From <b>leading brand</b>
            </span>
            <p className="card-text ps-3">Vestibulum enim quam</p>
          </div>
          <div className="card-footer">
            <small>
              Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
              Industry. Lorem Ipsum Has Been The Industrys Standard Dummy Text E
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
