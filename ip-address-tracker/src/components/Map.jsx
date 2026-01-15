import { useEffect, useState } from "react";
import GetIPAddressInfo from "../config";

export default function MapDisplay() {
  // console.log(locationDetails);

  const [locData, setlocData] = useState({});

  useEffect(() => {
    async function getLocDetails() {
      const locationDetails = await GetIPAddressInfo();

      setlocData(locationDetails);
    }

    getLocDetails();
  }, []);

  return <div className="map h-full"></div>;
}
