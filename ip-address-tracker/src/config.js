export default async function GetIPAddressInfo(input, setIsLoading) {
  try {
    const url = import.meta.env.VITE_IP_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    let domainInp = "";
    let addressInp = "";

    if (input) {
      const cleaned = input
        .replace(/^https?:\/\//, "")
        .replace(/\/$/, "")
        .split("/")[0];

      const domainRegex =
        /^(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;

      console.log(input);
      console.log(domainRegex.test(cleaned));
      console.log(cleaned);

      if (domainRegex.test(cleaned)) domainInp = cleaned;
      else addressInp = cleaned;
    }

    setIsLoading(true);

    const res = await fetch(
      `${url}apiKey=${apiKey}&ipAddress=${addressInp}&domain=${domainInp}`,
    );

    if (!res.ok) throw new Error("Something went wrong. Try again!");

    const data = await res.json();

    const testRegion = data.location.region.split(" ");

    const region =
      testRegion.length > 1
        ? testRegion.map((el) => el[0]).join("")
        : testRegion.join("").slice(0, 2).toUpperCase();

    console.log(data);

    const orgData = {
      ipAddress: data.ip || "",
      city: data.location.city || "",

      region,
      serviceProvider: data.isp || "",
      timeZone: data.location.timezone || "",
      coords: [data.location.lat, data.location.lng],
    };

    console.log(orgData);
    return orgData;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    setIsLoading(false);
  }
}

// export function mapView(el, coords = "") {

// }

// function cleanInputValue(input, domainInp, addressInp){

// }
