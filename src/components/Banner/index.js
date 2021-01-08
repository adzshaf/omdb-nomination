import "./style.css";
import Button from "../Button";
import { useSelector } from "react-redux";
import { selectNominationId } from "../../features/nomination/nominationSlice";
import toast from "react-hot-toast";

const Banner = () => {
  const id = useSelector(selectNominationId);

  return (
    <div className="banner-container">
      <h2>You have nominated 5 movies</h2>
      <Button
        onClick={() => {
          toast("Link is copied to your clipboard!", { icon: "🔗" });
          navigator.clipboard.writeText(
            window.location.href + "share/" + id.join("-")
          );
        }}
      >
        Share link
      </Button>
    </div>
  );
};

export default Banner;
