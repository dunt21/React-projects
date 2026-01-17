import { useState } from "react";
import { useEffect } from "react";
import GetIPAddressInfo from "../config";

import Header, { Input, LocationDetails } from "./Header";
import MapDisplay from "./Map";
import Map from "./Map";

export default function App() {
  const [userInput, setUserInput] = useState("");
  const [locData, setlocData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  console.log(locData);

  useEffect(() => {
    async function getLocDetails() {
      const locationDetails = await GetIPAddressInfo("", setIsLoading);

      setlocData(locationDetails);
    }

    getLocDetails();
  }, [setlocData]);

  return (
    <>
      <Header>
        <Input
          setUserInput={setUserInput}
          userInput={userInput}
          input={userInput}
          setLocData={setlocData}
          setIsLoading={setIsLoading}
        />
        <LocationDetails obj={locData} isLoading={isLoading} />
      </Header>
      <MapDisplay setlocData={setlocData} locData={locData} input={userInput} />
    </>
  );
}
