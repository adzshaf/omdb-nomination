import { useParams, Link } from "@reach/router";
import NominationSection from "../../components/NominationSection";
import Button from "../../components/Button";
import "./style.css";

const Share = () => {
  const params = useParams();
  const idArray = params.shareId.split("-");
  return (
    <div className="share-container">
      <h2>Your Friend's Nomination List</h2>
      <NominationSection isShared data={idArray} />
      <h2>Nominate your favorite movies!</h2>
      <Link to="/">
        <Button>Nominate</Button>
      </Link>
    </div>
  );
};

export default Share;
