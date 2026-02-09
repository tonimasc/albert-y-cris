import Image from "next/image";
import type { Metadata } from "next";
import image2 from "@/public/image-2.jpeg";
import image3 from "@/public/image-3.jpeg";
import image4 from "@/public/image-4.jpeg";
import image5 from "@/public/image-5.jpeg";
import image6 from "@/public/image-6.jpeg";

import palacio2 from "@/public/house-2.png";

import flower3 from "@/public/flower/flower-3.png";
import flower2 from "@/public/flower/flower-2.png";
import flower4 from "@/public/flower/flower-4.png";

import Link from "next/link";

interface PageProps {
  searchParams: Promise<{ name?: string }>;
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const { name } = await searchParams;
  const guestName = name || "";

  const title = guestName
    ? `${guestName}, nos casamos y queremos que estés allí`
    : "Nos casamos y queremos que estés allí";

  const description =
    "El sábado 6 de junio de 2026, a las 18:00 h, nos casamos en el Palacio de la Margarita, en Collado Villalba (Madrid). Nos haría mucha ilusión celebrarlo contigo.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function Home({ searchParams }: PageProps) {
  const { name } = await searchParams;
  const title = name
    ? `${name}, queremos que nos acompañes`
    : "Queremos que nos acompañes";

  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden bg-paper">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[url('/texture.png')] bg-repeat opacity-50 mix-blend-multiply dark:mix-blend-multiply"></div>
      <div className="relative flex flex-col items-center gap-5 pt-20">
        <Image
          src={flower3}
          alt="Flower"
          width={680}
          height={233}
          className="w-full max-w-[680px] px-5"
          placeholder="blur"
        />
        <h1 className="max-w-[664px] px-5 text-center font-serif text-5xl leading-[1.1] text-balance text-chocolate italic sm:text-6xl">
          {title}
        </h1>
      </div>

      <div className="flex flex-col items-center gap-14 pt-12 font-serif text-2xl leading-normal">
        <div className="flex w-full max-w-[496px] flex-col gap-4 px-5">
          <p>
            Hace ocho años, en Toulouse, llenos de sueños y ganas de comernos el
            mundo, nuestros caminos se cruzaron por primera vez.
          </p>
          <p>
            Esta historia nació con kilómetros de por medio, pero con una
            certeza muy clara: siempre merecía la pena.
          </p>
          <p>
            Entre incontables «ya he aterrizado», maletas hechas y deshechas,
            despedidas y reencuentros, nuestras ganas de estar juntos fueron
            creciendo.
          </p>
          <p>
            Tras cinco años, decidimos empezar una nueva vida juntos en Madrid y
            ahora estamos listos para el siguiente paso.
          </p>
          <p>¡Sí, nos casamos! Y no tendría sentido celebrarlo sin ti.</p>
        </div>

        <div className="flex w-full flex-row gap-3 overflow-x-auto px-5">
          <Image
            src={image6}
            alt="Albert y Cris"
            width={300}
            height={300}
            className="h-[300px] w-[300px] rounded-md object-cover"
            placeholder="blur"
          />
          <Image
            src={image2}
            alt="Albert y Cris"
            width={300}
            height={300}
            className="h-[300px] w-[300px] rounded-md object-cover"
            placeholder="blur"
          />
          <Image
            src={image3}
            alt="Albert y Cris"
            width={300}
            height={300}
            className="h-[300px] w-[300px] rounded-md object-cover"
            placeholder="blur"
            objectFit="cover"
          />
          <Image
            src={image4}
            alt="Albert y Cris"
            width={300}
            height={300}
            className="h-[300px] w-[300px] rounded-md object-cover"
            placeholder="blur"
          />
          <Image
            src={image5}
            alt="Albert y Cris"
            width={300}
            height={300}
            className="h-[300px] w-[300px] rounded-md object-cover"
            objectFit="cover"
            placeholder="blur"
          />
        </div>

        <div className="text-charcoal flex w-full max-w-[558px] flex-col gap-12 px-5">
          <h2 className="text-center text-4xl text-chocolate italic">
            ¿Dónde y cuándo?
          </h2>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col items-center">
              <p className="mb-2 text-center font-sans text-xs font-medium text-gold uppercase">
                Fecha
              </p>
              <p className="text-2x text-center italic">Sábado, 6 de Junio</p>
              <p className="text-center font-sans text-sm">
                2026, a las 18:00 h
              </p>
            </div>

            <div className="flex flex-col items-center">
              <p className="mb-2 text-center font-sans text-xs font-medium text-gold uppercase">
                Lugar
              </p>
              <p className="text-2x text-center italic">
                Palacio de la Margarita
              </p>
              <p className="mb-2 text-center font-sans text-sm">
                Collado Villalba (Madrid)
              </p>
              <Link
                className="font-sans text-sm text-gold uppercase underline hover:opacity-70"
                href="https://maps.google.com/?q=Palacio+de+la+Margarita+Collado+Villalba"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mapa
              </Link>
            </div>

            <Image
              src={palacio2}
              alt="Palacio de la Margarita"
              width={558}
              height={558}
              className="-mt-10 w-full [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)] object-contain opacity-95 [-webkit-mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)]"
              placeholder="blur"
            />
          </div>
        </div>

        <div className="flex w-full max-w-[558px] flex-col gap-6 px-5">
          <h2 className="text-center text-4xl text-chocolate">Cómo llegar</h2>
          <p>Si vienes en coche, no te preocupes, hay parking en la finca.</p>
          <p>También habrá autobuses de ida y vuelta desde:</p>
          <ul className="list-inside list-disc">
            <li>Madrid (zona Intercambiador de Moncloa)</li>
            <li>Las Rozas de Madrid</li>
          </ul>
          <p>Compartiremos los detalles del autobús más adelante.</p>
        </div>

        <div className="flex w-full max-w-[558px] flex-col gap-6 px-5">
          <h2 className="text-center text-4xl text-chocolate">Alojamiento</h2>
          <p>
            La propia finca cuenta con habitaciones para alojarse la noche de la
            boda si queréis despreocuparos.
            <Link
              className="underline opacity-70"
              href="https://palaciodelamargarita.com/habitaciones/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver habitaciones
            </Link>
          </p>
          <p>Escríbenos y te contamos cómo reservar.</p>

          <p>
            En Madrid o en las Rozas ya que contaran con servicio de autobus.
          </p>
          <p>
            Como no hay tanta oferta como en Madrid, a continuación os listamos
            algunos hoteles en las Rozas (tened en cuenta que es una zona más
            residencial si no vais en coche propio):
          </p>
          <ul className="list-inside list-disc">
            <li>B&B Hotel Madrid Las Rozas</li>
            <li>Hotel Attica 21 — código: BODAS10</li>
            <li>Exe Gran Hotel Almenar — código: BODAAYC</li>
            <li>B&B Hotel Pinar de las Rozas</li>
            <li>Hotel Plaza Las Matas</li>
            <li>Hotel Monte Rozas</li>
          </ul>
        </div>
        <Image
          src={flower4}
          alt="Flower"
          width={680}
          height={233}
          className="w-full max-w-[680px] px-5"
          placeholder="blur"
        />
        <div className="flex w-full max-w-[558px] flex-col gap-6 px-5">
          <h2 className="text-center text-4xl text-chocolate italic">
            Pero antes… la preboda
          </h2>
          <p>
            El{" "}
            <span className="font-medium">
              viernes 5 de junio, a las 20:00 h
            </span>
            , empezamos a celebrar juntos en
            <span className="font-medium"> Ingenio Club</span>, en Villanueva de
            la Cañada, con un cocktail en la mano y ganas de pasarlo bien.
            <Link
              className="underline opacity-70"
              href="https://maps.google.com/?q=Ingenio+Club+Villanueva+de+la+Cañada"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en Google Maps
            </Link>
          </p>
        </div>

        <Image
          src={flower2}
          alt="Flower"
          width={680}
          height={233}
          className="w-full max-w-[680px] px-5"
          placeholder="blur"
        />

        <div className="flex w-full justify-center border-t border-black/5 bg-black/2 pt-14">
          <div className="flex w-full max-w-[558px] flex-col gap-6 px-5">
            <h2 className="text-center text-4xl text-chocolate italic">
              Ahora solo falta tu respuesta
            </h2>
            <p className="text-center">
              Ayúdanos rellenando este formulario a lo largo de Febreropara
              poder preparar la fiesta como se merece.
            </p>
            <iframe
              src="https://tally.so/embed/RGDVgj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              height="800"
              width="100%"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
