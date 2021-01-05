import Button from "../Button";
import "./style.css";

const MovieCard = ({ imageSource, title, year }) => {
  return (
    <div className="movie-card-container">
      <img className="movie-card-image" src={imageSource} alt={title} />
      <div className="movie-card-detail">
        <h2>{title}</h2>
        <p>({year})</p>
        <Button danger>Remove</Button>
      </div>
    </div>
  );
};

export default MovieCard;
