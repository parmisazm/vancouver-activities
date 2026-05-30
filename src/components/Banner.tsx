import Link from "next/link";

export default function Banner() {
  return (
    <div className="bg-gradient-to-r from-[#2d5016] to-[#3b5429] text-white text-center py-2.5 px-5 text-sm z-50">
      <strong>Find Family Activities This Weekend!</strong>{" "}
      Events, outdoor fun, and free things to do in Vancouver.{" "}
      <Link href="/events" className="text-gray-200 underline font-medium hover:text-white">
        Browse Events
      </Link>
    </div>
  );
}
