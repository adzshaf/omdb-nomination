import MovieCard from "../MovieCard";
import { useSelector, useDispatch } from "react-redux";
import {
  removeNomination,
  selectNomination,
} from "../../features/nomination/nominationSlice";
import EmptyState from "../EmptyState";
import "./style.css";

const NominationSection = () => {
  const nomination = useSelector(selectNomination);
  const dispatch = useDispatch();

  return nomination.length > 0 ? (
    <div className="movie-cards">
      {nomination.map((value, index) => (
        <MovieCard
          key={index}
          title={value.Title}
          imageSource={value.Poster}
          year={value.Year}
          onClick={() => dispatch(removeNomination(value.imdbID))}
        />
      ))}
    </div>
  ) : (
    <EmptyState />
  );
};

export default NominationSection;
