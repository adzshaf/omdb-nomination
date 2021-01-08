import { useParams } from "@reach/router";
import NominationSection from "../../components/NominationSection";

const Share = () => {
  const params = useParams();
  const idArray = params.shareId.split("-");
  return (
    <div>
      <h2>Your Friend's Nomination List</h2>
      <NominationSection isShared data={idArray} />
    </div>
  );
};

export default Share;
