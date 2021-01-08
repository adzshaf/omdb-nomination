import Button from "../Button";
import "./style.css";

const MovieCard = ({ imageSource, title, year, onClick, isShared }) => {
  return (
    <div className="movie-card-container">
      <img className="movie-card-image" src={imageSource} alt={title} />
      <div className="movie-card-detail">
        <h2>{title}</h2>
        <p>({year})</p>
        {!isShared && (
          <Button danger onClick={onClick}>
            Remove
          </Button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
