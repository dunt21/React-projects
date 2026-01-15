import next from "../assets/images/icon-arrow.svg";

export default function Header() {
  return (
    <div
      className="bg-cover bg-center text-center  pt-10 space-y-7 w-screen relative h-[17rem] "
      style={{
        backgroundImage: "url(/src/assets/images/pattern-bg-desktop.png)",
      }}
    >
      <p className="text-white font-bold text-3xl">IP Address Tracker</p>

      <Input />
      <LocationDetails />
    </div>
  );
}

function Input() {
  return (
    <form>
      <div className=" h-full flex items-center justify-center ">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          className="text-gray-400 py-3 border-0 rounded-xl rounded-r-none px-5 bg-white w-[30%] "
        />
        <button
          type="submit"
          className="bg-gray-950 px-5 h-12 border-0 rounded-r-xl"
        >
          <img src={next} alt="next-arrow" />
        </button>
      </div>
    </form>
  );
}

const details = [
  { title: "IP ADDRESS", data: "192.212.174.101" },
  { title: "LOCATION", data: "Brooklyn, NY 10001" },
  { title: "TIMEZONE", data: "UTC -05:00" },
  { title: "ISP", data: "SpaceX Starlink" },
];

function LocationDetails() {
  return (
    <div className="bg-white flex divide-x gap-5 divide-gray-400 text-left justify-between p-8 border-0 rounded-2xl w-[70%] mx-auto absolute left-1/2 -translate-x-1/2">
      {details.map((obj) => (
        <DetailList key={obj.title} obj={obj} />
      ))}
    </div>
  );
}

function DetailList({ obj }) {
  return (
    <div className="space-y-3 basis-1/4">
      <p className="text-xs font-bold text-gray-400">{obj.title}</p>
      <p className="text-gray-950 font-bold text-2xl">{obj.data}</p>
    </div>
  );
}
