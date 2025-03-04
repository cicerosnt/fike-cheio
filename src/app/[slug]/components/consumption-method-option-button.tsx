import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

interface ConsumptionMethodOptionButtonProps {
  slug: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  option: ConsumptionMethod;
  buttonType: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined
}

const ConsumptionMethodOptionButton = ({
  slug,
  imageAlt,
  imageUrl,
  buttonText,
  option,
  buttonType,
}: ConsumptionMethodOptionButtonProps) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 sm:flex-row">
        <Button
          className="w-48 rounded-full text-zinc-700"
          variant={buttonType}
          asChild
        >
          <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
            <Image
              width={20}
              height={20}
              src={imageUrl}
              alt={imageAlt}
              className="object-contain"
            />
            {buttonText}
          </Link>
        </Button>
      </div>
    </>
  );
};

export default ConsumptionMethodOptionButton;
