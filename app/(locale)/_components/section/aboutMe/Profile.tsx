"use client";

import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export function Profile() {
  return (
    <div className="w-full flex items-center justify-center ">
      <PinContainer title="Kento Honda：Web Developer" href="#">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[14rem] h-[14rem] ">
          <Image
            src="/assets/myself-picture.png"
            className="rounded-md"
            fill
            alt="test-image"
          />
        </div>
        <div className="">{/* TODO: Add text later? */}</div>
      </PinContainer>
    </div>
  );
}
