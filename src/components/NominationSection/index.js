import MovieCard from "../MovieCard";
import { useSelector, useDispatch } from "react-redux";
import {
  removeNomination,
  selectNomination,
} from "../../features/nomination/nominationSlice";
import { useState, useEffect } from "react";
import EmptyState from "../EmptyState";
import "./style.css";
import { getById } from "../../api";
import axios from "axios";
import toast from "react-hot-toast";

const NominationSection = ({ isShared, data }) => {
  const nomination = useSelector(selectNomination);
  const dispatch = useDispatch();

  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isShared) {
      setLoading(true);
      let idArray = [];
      let dataArray = [];
      data.map((value) => idArray.push(getById(value)));

      axios
        .all(idArray)
        .then(
          axios.spread((...responses) => {
            responses.map((value) => {
              return dataArray.push(value.data);
            });
            setMovieData(dataArray);
          })
        )
        .catch((errors) => {
          console.log(errors);
        });
      setLoading(false);
    }
  }, [data, isShared]);

  if (isShared) {
    return loading ? (
      <p>Loading...</p>
    ) : (
      <div className="movie-cards">
        {movieData.map((value, index) => (
          <MovieCard
            key={index}
            title={value.Title}
            imageSource={value.Poster}
            year={value.Year}
            isShared
          />
        ))}
      </div>
    );
  } else {
    return nomination.length > 0 ? (
      <div className="movie-cards">
        {nomination.map((value, index) => (
          <MovieCard
            key={index}
            title={value.Title}
            imageSource={value.Poster}
            year={value.Year}
            isShared={false}
            onClick={() => {
              dispatch(removeNomination(value.imdbID));
              toast("Successfully deleted your nomination!", { icon: "🗑️" });
            }}
          />
        ))}
      </div>
    ) : (
      <EmptyState />
    );
  }
};

export default NominationSection;
