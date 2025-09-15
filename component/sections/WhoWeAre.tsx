import Image from "next/image";
import Link from "next/link";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white py-16">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        <div className="flex-1 flex justify-center mb-8 md:mb-0 translate-x-3">
          <Image
            src="/images/who-we-are.png"
            alt="PropTech Innovation"
            width={630}
            height={350}
          />
        </div>

        <div className="flex flex-col justify-center md:pl-3  translate-x-10">
          <h2 className="text-4xl md:text-6xl font-semibold text-[#672361]">
            Who We Are
          </h2>

          <h3 className="text-2xl md:text-4xl mt-6 mb-4 font-outfit">
            <span className="text-[#222959] font-bold">PropTech</span>{" "}
            <span className="font-normal text-[#222959]">
              sparks innovation through collaboration
            </span>
          </h3>

          <p className="text-[#222959] text-2xl  mb-4 font-outfit">
            We are a community of forward-thinkers, innovators, and creators
            working together to transform ideas into impactful solutions. By
            fostering collaboration, we empower individuals and organizations to
            push boundaries and unlock new possibilities.
          </p>

          <p className="text-[#222959] text-2xl mb-6 font-outfit">
            We also help businesses bring their digital products to market and
            sell with impact.
          </p>

          <h4 className="text-4xl md:text-5xl text-[#672361] font-whisper mt-8 mb-2">
            Anthony Leuterio
          </h4>

          <p className="text-gray-600 text-sm mb-4">
            Founder of PropTech PH • CEO/ Founder of Filipino Homes
          </p>

          <Link
            href="#"
            className="text-[#672361] hover:text-[#222959] font-medium"
          >
            View Certificate
          </Link>
        </div>
      </div>
    </section>
  );
}
