import { TripDatum } from "../hooks/useFetch";
import TripsList from "./trips_list";

export interface PageMainContentProps {
  isLoading: boolean;
  data: TripDatum[] | null;
}

const PageMainContent: React.FC<PageMainContentProps> = ({
  isLoading,
  data,
}) => {
  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      {data && (
        <div className="trips">
          <h3>We found {data.length} trips for you!</h3>{" "}
          <TripsList data={data} />
        </div>
      )}
    </>
  );
};
export default PageMainContent;
