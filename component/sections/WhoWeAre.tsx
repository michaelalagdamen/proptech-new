"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function WhoWeAre() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full bg-white">
      <div className="container mx-auto mt-30 px-6 grid md:grid-cols-2 items-center gap-12">
        <div className="flex-1 flex justify-center mb-8 md:mb-0 translate-x-15">
          <Image
            src="/images/who-we-are.png"
            alt="PropTech Innovation"
            width={680}
            height={0}
          />
        </div>

        <div className="flex flex-col justify-center -pl-6 translate-x-20">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#672361]">
            Who We Are
          </h2>

          <h3 className="text-2xl md:text-4xl mt-6 mb-4 font-outfit">
            <span className="text-[#222959] font-bold">PropTech</span>{" "}
            <span className="font-normal text-[#222959]">
              sparks innovation through collaboration
            </span>
          </h3>

          <p className="text-[#222959] text-2xl  mb-4 font-outfit">
            We are a community of forward-thinkers, innovators, <br /> and
            creators working together to transform ideas <br />
            into impactful solutions. By fostering collaboration,
            <br /> we empower individuals and organizations to push
            <br /> boundaries and unlock new possibilities.
          </p>

          <p className="text-[#222959] text-2xl mb-6 font-outfit">
            We also help businesses bring their digital products to
            <br /> market and sell with impact.
          </p>

          <h4 className="text-4xl md:text-3sm text-[#672361] font-outfit mt-4 mb-2">
            Anthony Leuterio
          </h4>

          <p className="text-gray-600 text-sm mb-4">
            Founder of PropTech PH • CEO/ Founder of Filipino Homes
          </p>

          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setOpen(true);
            }}
            className="text-[#672361] hover:text-[#222959] font-medium"
          >
            View Certificate
          </Link>

          <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md">
            <IconButton
              aria-label="close"
              onClick={() => setOpen(false)}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: "#672361",
                zIndex: 1,
              }}
            >
              <CloseIcon />
            </IconButton>

            <DialogContent sx={{ p: 0 }}>
              <Image
                src="/images/certificate-CJSHc-71.png"
                alt="Certificate"
                width={800}
                height={600}
                style={{ width: "100%", height: "auto" }}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
