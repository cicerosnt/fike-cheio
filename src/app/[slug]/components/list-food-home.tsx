import Image from "next/image";
import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

export async function ListFoodHome() {
  const products = await db.product.findMany({
    take: 4,
  });
  if (!products) {
    return notFound();
  }
  return (
    <>
      {products ? (
        products.map((product) => (
          <div
            className="overflow-hidden rounded-lg bg-white shadow-md"
            key={product.id}
          >
            <Image
              width={400}
              height={200}
              src={product.imageUrl}
              alt={product.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="mb-2 text-xl font-semibold text-zinc-700">
                {product.name}
              </h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </div>
        ))
      ) : (
        <div>Sem produtos para exibir.</div>
      )}
    </>
  );
}
