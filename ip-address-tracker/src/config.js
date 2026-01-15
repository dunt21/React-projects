export default async function GetIPAddressInfo(ipAddress = "", domain = "") {
  try {
    const url = import.meta.env.VITE_IP_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;

    const data = await fetch(
      `${url}apiKey=${apiKey}&ipAddress=${ipAddress}&domain=${domain}`
    );
    const res = await data.json();

    if (!res) return;

    const region = res.location.region
      .split(" ")
      .map((el) => el[0])
      .join("");

    const orgData = {
      ipAddress: res.ip || "",
      city: res.location.city || "",
      countryCode: res.location.postalCode || "",
      region,
      serviceProvider: res.isp || "",
      timeZone: res.location.timezone || "",
      coords: [res.location.lat, res.location.lng],
    };

    return orgData;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export default function mapView(el, ){

}