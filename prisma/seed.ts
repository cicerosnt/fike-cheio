/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();

const main = async () => {
  await prismaClient.$transaction(async (tx: any) => {
    await tx.restaurant.deleteMany();
    const restaurant = await tx.restaurant.create({
      data: {
        name: "Fike Cheio",
        slug: "fike-cheio",
        description: "A mió comida, o mió preço.",
        avatarImageUrl:
          "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXDY9CyKEL8PuU3onwvF6pxsbHlL4TRV5ick0d",
        coverImageUrl:
          "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjX8mD3kdGkgeK7LBbXtyURoDY94Em3pPAfNjsr",
      },
    });
    const combosCategory = await tx.menuCategory.create({
      data: {
        name: "Combos",
        restaurantId: restaurant.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Moqueca",
          description:
            "Uma das maravilhas da culinária brasileira, a Moqueca é um cozido à base de peixe ou frutos do mar, preparado com leite de coco, azeite de dendê e temperos frescos. Servida tradicionalmente com arroz e farofa, essa iguaria traz o sabor e a essência do litoral brasileiro.",
          price: 39.9,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXRCq7dBE2qicsIYaFwAS7WdnEoCxTLy5Xgp4P",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "peixe",
            "leite de coco",
            "azeite de dendê",
            "tomate",
            "coentro",
          ],
        },
        {
          name: "Vatapá",
          description:
            "Um prato icônico da Bahia, o Vatapá é uma mistura rica e cremosa de pão, camarão, leite de coco, amendoim e castanha de caju, temperada com azeite de dendê e coentro. Sua textura única e sabor marcante fazem dele uma experiência inesquecível para os amantes da culinária regional.",
          price: 41.5,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXYQ2ScWTfrVapEhj2nFQN8cUCt0WTASP5gwz6",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "camarão",
            "leite de coco",
            "amendoim",
            "castanha de caju",
            "pão",
          ],
        },
        {
          name: "Baião de Dois",
          description:
            "Uma combinação perfeita entre feijão verde e arroz, o Baião de Dois é um prato típico do Nordeste brasileiro. Enriquecido com queijo coalho e carne-seca, ele é uma celebração da simplicidade e dos sabores autênticos da comida nordestina.",
          price: 39.9,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXekxLPwrEewJmScfHB1DlsvOrF6tMuToKxXQn",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "feijão verde",
            "arroz",
            "queijo coalho",
            "carne-seca",
            "cebola",
          ],
        },
        {
          name: "Acarajé",
          description:
            "Uma verdadeira joia da cultura baiana, o Acarajé é uma bolinho frito feito com massa de feijão-fradinho, recheado com vatapá, caruru e camarão seco. Este prato tradicional é um símbolo de resistência cultural e um convite ao sabor vibrante da Bahia.",
          price: 36.2,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXeGjilkrEewJmScfHB1DlsvOrF6tMuToKxXQn",
          menuCategoryId: combosCategory.id,
          restaurantId: restaurant.id,
          ingredients: [
            "feijão-fradinho",
            "azeite de dendê",
            "vatapá",
            "camarão seco",
            "pimentão",
          ],
        },
      ],
    });
    const hamburguersCategory = await tx.menuCategory.create({
      data: {
        name: "Acompanhamento",
        restaurantId: restaurant.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Arroz de Cuxá",
          description:
            "Um prato tradicional da culinária maranhense, o Arroz de Cuxá é uma combinação irresistível de arroz com vinagreira, camarão seco e temperos especiais. Sua textura leve e sabor marcante fazem dele uma verdadeira celebração da cultura local.",
          ingredients: [
            "vinagreira",
            "camarão seco",
            "arroz",
            "alho",
            "azeite",
          ],
          price: 39.9,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjX2t4l1nKxtjg1k3rIfwaoKT9ROysFvSGMqV2u",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Arroz do Mar",
          description:
            "Um clássico dos frutos do mar, o Arroz do Mar traz o frescor do mar em cada garfada. Com ingredientes como camarão, lula e polvo, este prato é perfeito para quem busca uma refeição sofisticada e cheia de sabor.",
          ingredients: ["camarão", "lula", "polvo", "arroz", "limão"],
          price: 41.5,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjX52Yc8yudbhK3k9oxniy5M81mf0OlNY72gzrI",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Feijão Tropeiro",
          description:
            "Uma receita tradicional do interior brasileiro, o Feijão Tropeiro é um prato robusto e cheio de personalidade. Com feijão, farofa crocante, torresmo e ovos, ele é a escolha ideal para quem aprecia a autenticidade da comida caseira.",
          ingredients: [
            "feijão carioca",
            "farinha de mandioca",
            "torresmo",
            "ovo",
            "couve",
          ],
          price: 39.9,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXVleqkpM3z5IFWlN2HcU1EJwXkuSAi8Z4oRKO",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Buchada",
          description:
            "Um prato típico da culinária nordestina, a Buchada é preparada com miúdos de carneiro ou cabrito, cozidos lentamente com temperos especiais. Seu sabor intenso e sua história rica fazem dela uma experiência única para os amantes de sabores tradicionais.",
          ingredients: [
            "miúdos de carneiro",
            "pimentão",
            "coentro",
            "cebola",
            "alho",
          ],
          price: 36.2,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXVleqkpM3z5IFWlN2HcU1EJwXkuSAi8Z4oRKO",
          menuCategoryId: hamburguersCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });
    const frenchFriesCategory = await tx.menuCategory.create({
      data: {
        name: "Fritas",
        restaurantId: restaurant.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Fritas Grande",
          description:
            "Porção generosa de batatas fritas crocantes e sequinhas, perfeita para compartilhar ou para quem ama uma porção bem servida. Acompanha qualquer refeição com sabor e estilo!",
          ingredients: ["batata", "óleo vegetal", "sal"],
          price: 10.9,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXEZvYJNkKwvT84ncOhX9UR7BLHsDYJpt20QfP",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Fritas Média",
          description:
            "Uma porção equilibrada de batatas fritas crocantes e sequinhas, ideal para quem quer aproveitar sem exageros. Combina perfeitamente com lanches e momentos descontraídos.",
          ingredients: ["batata", "óleo vegetal", "sal"],
          price: 9.9,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXKkYEaN5DVFZwyodJ90BxsuWLt6NkvqMQl34i",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Fritas Pequena",
          description:
            "Uma porção pequena e irresistível de batatas fritas crocantes e sequinhas. Ideal para quem quer matar a vontade sem comprometer a dieta. Pouquinho, mas delicioso!",
          ingredients: ["batata", "óleo vegetal", "sal"],
          price: 5.9,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXB57jT8X2nYyjXmhW2MuF13JZ6IDQTxSbdog4",
          menuCategoryId: frenchFriesCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });
    const drinksCategory = await tx.menuCategory.create({
      data: {
        name: "Bebidas",
        restaurantId: restaurant.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Refri Jesus",
          description:
            "Uma clássica refrigerante Jesus gelada, perfeita para acompanhar seu lanche. Com sua refrescância única e sabor inconfundível, essa bebida é ideal para quem busca uma experiência tradicional e deliciosa.",
          ingredients: ["água gaseificada", "açúcar", "extrato de guaraná"],
          price: 5.9,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXRCq7dBE2qicsIYaFwAS7WdnEoCxTLy5Xgp4P",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Cachaça",
          description:
            "Uma cachaça artesanal de alta qualidade, feita para apreciadores de bebidas autênticas. Seja pura ou em drinks, esta cachaça traz o verdadeiro sabor do Brasil em cada gole.",
          ingredients: ["álcool de cana-de-açúcar", "água"],
          price: 5.9,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXwODkHzFyCR1kxh2b93jPB0tpV5Ol7EzMDSrA",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Água Mineral",
          description:
            "A escolha saudável e refrescante para acompanhar qualquer refeição. Diretamente da fonte mais pura, esta água mineral é a favorita até mesmo do Cristiano Ronaldo!",
          ingredients: ["água mineral natural"],
          price: 2.9,
          imageUrl:
            "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ7i05S5tkc0L9oMIXZsFJtwnBh2KCz3y6uSW1",
          menuCategoryId: drinksCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });
    const desertsCategory = await tx.menuCategory.create({
      data: {
        name: "Sobremesas",
        restaurantId: restaurant.id,
      },
    });
    await tx.product.createMany({
      data: [
        {
          name: "Pudim de Tapioca",
          description:
            "Uma deliciosa releitura do clássico pudim, feita com tapioca para uma textura única e cremosa. Perfeito para quem busca uma sobremesa tradicional com um toque especial.",
          ingredients: ["tapioca", "leite condensado", "coco ralado"],
          price: 3.9,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXctgkPQaa5Re7K4fZHXq1SChUxv9DtJzsNWgM",
          menuCategoryId: desertsCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Canjica",
          description:
            "Um doce típico das festas juninas, preparado com milho verde, leite de coco e especiarias. Sua combinação de sabores rústicos e doces encanta qualquer paladar.",
          ingredients: ["milho verde", "leite de coco", "canela", "açúcar"],
          price: 3.9,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXB50I7fj2nYyjXmhW2MuF13JZ6IDQTxSbdog4",
          menuCategoryId: desertsCategory.id,
          restaurantId: restaurant.id,
        },
        {
          name: "Bolo de Rolo",
          description:
            "Uma iguaria nordestina feita em camadas finas de massa recheada com goiabada. Sua delicadeza e sabor marcante fazem deste bolo uma verdadeira obra-prima da culinária brasileira.",
          ingredients: ["massa de trigo", "goiabada", "manteiga"],
          price: 2.9,
          imageUrl:
            "https://gl2f90e9s5.ufs.sh/f/BWjjPa2nYyjXXMeveE5CZbfu6TqdgD8AkJ7Yntc9ErNSiQew",
          menuCategoryId: desertsCategory.id,
          restaurantId: restaurant.id,
        },
      ],
    });
  });
};

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });
