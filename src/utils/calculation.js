import haversineDistance from "haversine-distance";
import jsonData from "./data.json";
import { convertToRad, calculateTimeDifference } from "./helpers";

const Calculation = () => {
  const EarthRadius = 3443;

  const LatRBefore = convertToRad(jsonData.coordinates[0].lat);
  const LongRBefore = convertToRad(jsonData.coordinates[0].long);
  const LatRAfter = convertToRad(jsonData.coordinates[1].lat);
  const LongRAfter = convertToRad(jsonData.coordinates[1].long);

  const distanceM = haversineDistance(
    [LatRBefore, LongRBefore],
    [LatRAfter, LongRAfter]
  );
  const time = calculateTimeDifference(
    jsonData.checkpoints[0],
    jsonData.checkpoints[1]
  );
  const distanceNm = distanceM / 1852;
  const vesselSpeedKnot = distanceNm / time;
  const vesselSpeedMs = distanceM / time;
};

export default Calculation;
