import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import UserLayout from "../../components/layout/UserLayout";
import "leaflet/dist/leaflet.css";
import { Select, Flex, Heading, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useShipStore from "../../store/useShipStore";
import markerImg from "../../components/images/marker_icon.png";
import L from "leaflet";

export default function Tracker() {
  const [time, setTime] = useState(0);
  const [coordinates, setCoordinates] = useState([0,0])

  const markerIcon = new L.Icon({
    iconUrl: markerImg,
    iconSize: [32, 32],
  });

  const { ferryCoordinate, kencanaCoordinate, ship, setShip } = useShipStore(
    (state) => ({
      ferryCoordinate: state.ferryCoordinate,
      kencanaCoordinate: state.kencanaCoordinate,
      ship: state.ship,
      setShip: state.setShip
    })
  );

  const currentCoordinates = ship === 'ferry' ? ferryCoordinate : kencanaCoordinate

  useEffect(()=>{
    setCoordinates(currentCoordinates)
    setTime(0)
  }, [ship])

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((now) => now + 1);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time === ferryCoordinate.lat.length - 1) {
      setTime(0);
    }
  }, [time]);

  console.log(currentCoordinates)

  return (
    <UserLayout>
      <MapContainer
        center={[-8.6719, 115.748]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[
            currentCoordinates.lat[time],
            currentCoordinates.long[time],
          ]}
          icon={markerIcon}
        >
          <Popup>
            KMP. Dharma Ferry VIII. <br /> IMO :.
          </Popup>
        </Marker>
      </MapContainer>
      <Flex mt="3rem" direction="column" gap='32px'>
        <Heading>Fuel Prediction: </Heading>
        <Text>23 Litre</Text>
        <Heading>Choose Fleet </Heading>
        <Select onChange={(e) => setShip(e)}>
          <option value="ferry">KM Dharma Ferry VIII</option>
          <option value="kencana">KM Dharma Kencana IX</option>
        </Select>
      </Flex>
    </UserLayout>
  );
}
