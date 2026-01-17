import next from "../assets/images/icon-arrow.svg";
import GetIPAddressInfo from "../config";

export default function Header({ children }) {
  return (
    <div
      className="bg-cover bg-center text-center  pt-10 space-y-7 w-screen relative h-68"
      style={{
        backgroundImage: "url(/src/assets/images/pattern-bg-desktop.png)",
      }}
    >
      <p className="text-white font-bold text-3xl">IP Address Tracker</p>

      {children}
    </div>
  );
}

export function Input({
  setUserInput,
  userInput,
  input,
  setLocData,
  setIsLoading,
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className=" h-full flex items-center justify-center ">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="text-gray-400 py-3 border-0 rounded-xl rounded-r-none px-5 bg-white w-[30%] "
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <button
          type="submit"
          className="bg-gray-950 px-5 h-12 border-0 rounded-r-xl"
          onClick={async () =>
            setLocData(await GetIPAddressInfo(input, setIsLoading))
          }
        >
          <img src={next} alt="next-arrow" />
        </button>
      </div>
    </form>
  );
}

export function LocationDetails({ obj, isLoading }) {
  const details = [
    { title: "IP ADDRESS", data: obj.ipAddress ? obj.ipAddress : "--" },
    {
      title: "LOCATION",
      data: obj.city && obj.region ? `${obj.city}, ${obj.region}` : "--",
    },
    { title: "TIMEZONE", data: obj.timeZone ? `UTC ${obj.timeZone}` : "--" },
    { title: "ISP", data: obj.serviceProvider ? obj.serviceProvider : "--" },
  ];

  return (
    <div className="bg-white flex divide-x gap-5 divide-gray-400 text-left justify-between p-10 border-0 rounded-2xl w-[70%] mx-auto absolute left-1/2 -translate-x-1/2 top-54 z-1000">
      {details.map((obj) => (
        <DetailList key={obj.title} obj={obj} isLoading={isLoading} />
      ))}
    </div>
  );
}

function DetailList({ obj, isLoading }) {
  return (
    <div className="space-y-3 basis-1/4">
      <p className="text-xs font-bold text-gray-400">{obj.title}</p>
      <p className="text-gray-950 font-bold text-2xl">
        {isLoading ? "--" : obj.data}
      </p>
    </div>
  );
}
