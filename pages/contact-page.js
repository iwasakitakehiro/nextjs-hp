import Layout from "../components/Layout";
import Image from "next/image";
export default function Contact() {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 wi-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Contact info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rounded-full"
            src="/icon.PNG"
            width={60}
            height="60"
            alt="avatar"
          ></Image>
        </div>
        <div className="mt-4">
          <p className="font-bold">Address</p>
          <p className="text-xs mt-2 text-gray-600">city-A</p>
        </div>
      </div>
    </Layout>
  );
}
