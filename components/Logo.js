import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex justify-center items-center mx-4 my-auto">
      <div className="p-2">
        <Image
          src="/images/black-logo.png"
          alt="logo"
          height={32}
          width={104}
          className="object-contain"
        />
      </div>
    </div>
  );
}
