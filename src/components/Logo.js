import logo from "../images/black-logo.png";
export default function Logo() {
  return (
    <div className="flex justify-center items-center mx-4 my-auto">
      <div className="p-2">
        <img
          src={logo}
          alt="logo"
          height={32}
          width={104}
          className="object-contain"
        />
      </div>
    </div>
  );
}
