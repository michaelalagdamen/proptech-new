import Image from "next/image";
import { Star } from "lucide-react";
import Link from "next/link";
import { Container } from "@mui/material";
const products = [
  {
    id: 1,
    name: "Blink Video Doorbell",
    brand: "DoorSmarty",
    description:
      "Standout features like its 135° field of view, HD resolution, and seamless integration.",
    image: "/images/doorbell.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Smart Vacuum",
    brand: "HomeSmart",
    description:
      "Get Smart & Enhance your cleaning regimen! New era of clean homes.",
    image: "/images/vacuum.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Smart Thermostat",
    brand: "Just Tech Me At",
    description:
      "Regulates heating and cooling systems in a more efficient and user-friendly way.",
    image: "/images/thermostat.png",
    rating: 5,
  },
  {
    id: 4,
    name: "Moon Coffee Maker",
    brand: "Yanko Design",
    description:
      "This machine is very unlike the espresso makers in the market and it’s the aesthetics that set it apart.",
    image: "/images/coffee.png",
    rating: 5,
  },
  {
    id: 5,
    name: "Oculus Quest 2",
    brand: "Meta",
    description:
      "The most popular virtual reality (VR) hardware belongs to Meta’s Oculus (formerly Facebook).",
    image: "/images/vr.png",
    rating: 5,
  },
  {
    id: 6,
    name: "Cordless Knee Massager",
    brand: "BIBIRE",
    description:
      "The knee massager has 9-speed vibration and heating modes (107°F-137°F).",
    image: "/images/knee.png",
    rating: 5,
  },
  {
    id: 7,
    name: "Anti-Gravity Humidifier",
    brand: "Personocare",
    description:
      "Experience the magic, where mist floats upward, creating a calming, almost magical ambiance.",
    image: "/images/humidifier.png",
    rating: 5,
  },
  {
    id: 8,
    name: "iFlight Alpha A85 HD",
    brand: "Caddx",
    description:
      "Compact and versatile Whoop style racing FPV drone. Features DJI-compatible digital FPV system.",
    image: "/images/drone.png",
    rating: 5,
  },
];

export default function ProductsCards() {
  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "1440px",
        maxHeight: "750px",
        position: "relative",
        overflow: "hidden",
        p: 0,
      }}
    >
      <section className="py-16 flex items-center">
        <div className="container px-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="rounded-xl border-3 flex flex-col overflow-hidden"
              >
                <div className="p-6 flex-1">
                  <div className="grid grid-cols-[auto_1fr] gap-5 items-start">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={60}
                      className="rounded-md"
                    />

                    <div>
                      <h3 className="text-lg font-semibold text-[#6E1B5D] mb-1">
                        {product.name}
                      </h3>
                      <div className="flex items-center">
                        {[...Array(product.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-purple-700 fill-purple-700"
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-500">(5)</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pl-4 p-4 flex-1">
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">{product.brand}</span>{" "}
                    {product.description}
                  </p>
                </div>

                <div className="bg-[#672361] hover:bg-[#986393]">
                  <Link
                    href="#"
                    className="block w-full text-center text-white text-sm py-3 font-medium"
                  >
                    Click Here
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
