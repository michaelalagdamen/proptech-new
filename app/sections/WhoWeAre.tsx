import Image from "next/image";
import Link from "next/link"; // Import Link component for routing

export default function WhoWeAre() {
  return (
    <section className="py-16 grid md:grid-cols-2 items-start w-full bg-white">
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <Image
          src="/images/who-we-are.png"
          alt="PropTech Innovation"
          width={700}
          height={600}
        />
      </div>

      <div className="flex flex-col md:pl-12">
        <h2
          className="text-4xl md:text-6xl font-extrabold text-purple-800"
          style={{ marginTop: "30px" }}
        >
          Who We Are
        </h2>
        <h3 className="text-2xl md:text-3xl font-semibold mt-6 mb-4">
          <span className="text-blue-700 font-bold">PropTech</span> sparks
          innovation through collaboration
        </h3>
        <p className="text-gray-700 mb-4">
          We are a community of forward-thinkers, innovators, and creators
          working together to transform ideas into impactful solutions. By
          fostering collaboration, we empower individuals and organizations to
          push boundaries and unlock new possibilities.
        </p>
        <p className="text-gray-700 mb-6">
          We also help businesses bring their digital products to market and
          sell with impact.
        </p>

        <h4 className="text-4xl md:text-5xl text-purple-800 font-signature mt-8 mb-2">
          Anthony Leuterio
        </h4>
        <p className="text-gray-600 text-sm mb-4">
          Founder of PropTech PH • CEO/ Founder of Filipino Homes
        </p>
        <Link href="#" className="text-blue-700 hover:text-blue-500 font-bold">
          View Certificate
        </Link>
      </div>
    </section>
  );
}
