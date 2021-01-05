import MovieCard from "../MovieCard";
import { useSelector, useDispatch } from "react-redux";
import {
  removeNomination,
  selectNomination,
} from "../../features/nomination/nominationSlice";
import EmptyState from "../EmptyState";

const NominationSection = () => {
  const nomination = useSelector(selectNomination);
  const dispatch = useDispatch();

  return nomination.length > 0 ? (
    nomination.map((value, index) => (
      <MovieCard
        key={index}
        title={value.Title}
        imageSource={value.Poster}
        year={value.Year}
      />
    ))
  ) : (
    <EmptyState />
  );
};

export default NominationSection;
