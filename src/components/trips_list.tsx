import { TripDatum } from "../hooks/useFetch";
import TripCard from "./trip_card";

export interface TripsListProps {
  data: TripDatum[] | null;
}
const TripsList: React.FC<TripsListProps> = ({ data }) => {
  return (
    <>
      {data && (
        <ul className="trip-list">
          {data.map((trip, index) => (
            <TripCard key={index} trip={trip} />
          ))}
        </ul>
      )}
    </>
  );
};

export default TripsList;
