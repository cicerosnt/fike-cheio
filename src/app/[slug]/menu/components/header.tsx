"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, "name" | "coverImageUrl">;
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  const { slug } = useParams<{ slug: string }>();
  const router = useRouter();
  const handleBackClick = () => router.back();
  const handleOrdersClick = () => router.push(`/${slug}/orders`);

  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <picture>
        {/* Imagem para telas menores */}
        <source
          media="(max-width: 768px)"
          srcSet="https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXaFOIPiDD1Om7Y0JQZ3j4NFA68cthpsRxkuHz"
        />
        {/* Imagem para telas maiores */}
        <source
          media="(min-width: 769px)"
          srcSet="https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjX8ELlbkbGkgeK7LBbXtyURoDY94Em3pPAfNjs"
        />
        {/* Fallback para navegadores que não suportam <picture> */}
        <img
          src="https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjX8ELlbkbGkgeK7LBbXtyURoDY94Em3pPAfNjs"
          alt={restaurant.name}
          className="w-full h-full object-cover object-center"
        />
      </picture>
      <Button
        variant="secondary"
        size="icon"
        className="absolute right-4 top-4 z-50 rounded-full"
        onClick={handleOrdersClick}
      >
        <ScrollTextIcon />
      </Button>
    </div>
  );
};

export default RestaurantHeader;
