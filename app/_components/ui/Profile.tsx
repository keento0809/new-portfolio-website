"use client";

import { PinContainer } from "@/components/ui/3d-pin";
import Image from "next/image";

export function Profile() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer title="Kento Honda：Web Developer" href="#">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <Image src="/assets/test-avatar.jpg" fill alt="test-image" />
        </div>
      </PinContainer>
    </div>
  );
}
