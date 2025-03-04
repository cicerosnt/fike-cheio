import Image from "next/image";

//import { useRouter } from "next/navigation";
import ConsumptionMethodOptionButton from "./[slug]/components/consumption-method-option-button";
import { ListFoodHome } from "./[slug]/components/list-food-home";

// import { redirect } from "next/navigation";
// redirect("/fike-cheio");

const HomePage = () => {
  //const router = useRouter();

  //const handleConsumLocal = () => router.push(`/${slug}/orders`);
  //const handleConsumeDelivery = () => router.push(`/${slug}/orders`);

  return (
    <>
      {/* Header */}
      <header className="rounded-b-lg bg-gradient-to-r from-[#AC4425] to-[#AC4425] py-8 text-center text-white">
        <div className="mb-10 flex items-center justify-center">
          <Image
            width={316}
            height={138}
            alt="Logo - Fike Cheio"
            src="https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXv2L6ebj2tHXqcC3ZfwMsplLQSI8WzDj57oKO"
          />
        </div>
        <p className="mb-8 text-lg">
          A mió <i>cumida</i>, o mió preço!
        </p>
      </header>

      {/* Sobre o Restaurante */}
      <section className="py-24">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-zinc-700">
              Sobre Nós
            </h2>
            <p className="leading-relaxed text-gray-700">
              O Restaurante Regional nasceu do amor pela culinária brasileira.
              Localizado no coração da cidade, somos especializados em pratos
              tradicionais que trazem o sabor e a essência das regiões do
              Brasil. Nosso compromisso é oferecer refeições feitas com
              ingredientes frescos e receitas autênticas, preparadas com carinho
              por nossa equipe de chefs experientes.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Venha nos visitar para uma experiência gastronômica única ou peça
              sua refeição para entrega e desfrute do melhor da comida
              brasileira na sua casa!
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjX8mD3kdGkgeK7LBbXtyURoDY94Em3pPAfNjsr"
              width={500}
              height={300}
              alt="Imagem do Restaurante"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="rounded-lg bg-gradient-to-r from-green-600 to-yellow-500 py-16 text-center text-zinc-700 shadow-lg">
        <h2 className="mb-6 text-3xl font-bold">Pronto para saborear?</h2>
        <p className="mb-8 text-lg">
          A mió <i>cumida</i>, o mió preço, apois deixe de <i>arrudeio</i> e
          peça logo a sua:
        </p>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <ConsumptionMethodOptionButton
            slug="fike-cheio"
            option="DINE_IN"
            buttonText="Consumo local"
            imageAlt="Comer aqui"
            imageUrl="/dine_in.png"
            buttonType="outline"
          />
          <ConsumptionMethodOptionButton
            slug="fike-cheio"
            option="TAKEAWAY"
            buttonText="Para levar"
            imageAlt="Para levar"
            imageUrl="/takeaway.png"
            buttonType="default"
          />
        </div>
      </section>

      {/* Destaques do Cardápio */}
      <section className="py-24">
        <h2 className="mb-8 text-center text-3xl font-bold text-zinc-700">
          Destaques do Cardápio
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Prato 4 */}
          <ListFoodHome />
        </div>
      </section>

      {/* Rodapé */}
      <footer className=" rounded-t-lg bg-[#AC4425] py-12 text-white">
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold">Pronto para saborear?</h2>
          <p className="text-lg">
            Menino, menina. Pense numa <i>cumida</i> boa, viu! Bora peça logo a sua:
          </p>
          <div className="flex flex-col items-center justify-center gap-4 py-10 md:flex-row">
            <ConsumptionMethodOptionButton
              slug="fike-cheio"
              option="DINE_IN"
              buttonText="Consumo local"
              imageAlt="Comer aqui"
              imageUrl="/dine_in.png"
              buttonType="outline"
            />
            <ConsumptionMethodOptionButton
              slug="fike-cheio"
              option="TAKEAWAY"
              buttonText="Para levar"
              imageAlt="Para levar"
              imageUrl="/takeaway.png"
              buttonType="default"
            />
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="fb.com/cicerosnt"
              target="_blank"
              className="transition hover:text-yellow-300"
            >
              Facebook
            </a>
            <a
              href="instagram.com/cicerosnt"
              target="_blank"
              className="transition hover:text-yellow-300"
            >
              Instagram
            </a>
          </div>

          <p className="mt-6 text-sm">
            Rua dos Sabores, 123 - Centro | (99) 99999-9999
          </p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
