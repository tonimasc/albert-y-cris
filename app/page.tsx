import Image from "next/image";
import type { Metadata } from "next";
import image2 from "@/public/image-2.jpeg";
import image3 from "@/public/image-3.jpeg";
import image4 from "@/public/image-4.jpeg";
import image5 from "@/public/image-5.jpeg";
import image6 from "@/public/image-6.jpeg";

import flower3 from "@/public/flower/flower-3.png";
import flower4 from "@/public/flower/flower-4.png";

import Link from "next/link";
import { Countdown } from "./countdown";

interface PageProps {
  searchParams: Promise<{ name?: string; name2?: string }>;
}

function getGuestName(name?: string, name2?: string): string {
  if (name && name2) return `${name} & ${name2}`;

  if (name) return name;

  return "";
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const { name, name2 } = await searchParams;
  const guestName = getGuestName(name, name2);

  const isPlural = !!(name && name2);
  const title = guestName
    ? `${guestName}, nos casamos y queremos que ${isPlural ? "estéis" : "estés"} allí`
    : "Nos casamos y queremos que estés allí";

  const description =
    "El sábado 6 de junio de 2026, a las 18:00 h, nos casamos en el Palacio de la Margarita, en Collado Villalba (Madrid). Nos haría mucha ilusión celebrarlo contigo.";

  return {
    title,
    description,
  };
}

export default async function Home({ searchParams }: PageProps) {
  const { name, name2 } = await searchParams;
  const guestName = getGuestName(name, name2);
  const isPlural = !!(name && name2);
  const title = isPlural
    ? "Queremos que nos acompañéis"
    : "Queremos que nos acompáñes";

  return (
    <main className="relative flex flex-col items-center justify-center overflow-hidden bg-paper text-charcoal">
      <div className="pointer-events-none absolute inset-0 z-10 bg-[url('/texture.png')] bg-repeat opacity-50 mix-blend-multiply dark:mix-blend-multiply"></div>

      <div className="flex w-full max-w-2xl flex-col items-center border-r border-l border-black/5 pt-16">
        <div className="relative flex flex-col items-center gap-5">
          <Image
            src={flower3}
            alt="Flower"
            width={680}
            height={233}
            className="w-full px-5"
          />
          <div className="flex flex-col items-center px-5 text-center">
            {guestName && (
              <div className="-mb-1 font-serif text-lg text-chocolate">
                {guestName}
              </div>
            )}
            <h1 className="font-serif text-5xl tracking-tight text-balance text-chocolate italic sm:text-6xl">
              {title}
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center gap-16 pt-10 font-sans text-base leading-normal">
          <div className="flex w-full max-w-[548px] flex-col gap-5 px-5">
            <p>
              Hace ocho años, en Toulouse, llenos de sueños y ganas de comernos
              el mundo, nuestros caminos se cruzaron por primera vez.
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
              Tras cinco años, decidimos empezar una nueva vida juntos en Madrid
              y ahora estamos listos para el siguiente paso.
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
              placeholder="blur"
            />
          </div>

          <div className="flex w-full flex-col gap-8 px-5">
            <H2 text="¿Dónde y cuándo?" />
            <div className="flex flex-col gap-10">
              <div className="flex flex-col items-center">
                <Label text="Fecha" />
                <p className="mb-0.5 text-center font-serif text-2xl">
                  Sábado, 6 de Junio
                </p>
                <p className="text-center font-sans text-sm">
                  2026, a las 18:00 h
                </p>
              </div>

              <div className="flex flex-col items-center">
                <Label text="Lugar" />
                <p className="mb-0.5 text-center font-serif text-2xl">
                  Palacio de la Margarita
                </p>
                <p className="mb-1 text-center font-sans text-sm">
                  Collado Villalba (Madrid)
                </p>
                <LinkButton
                  text="VER MAPA"
                  href="https://maps.google.com/?q=Palacio+de+la+Margarita+Collado+Villalba"
                />
              </div>
            </div>
          </div>

          <Image
            src="/place.png"
            alt="Palacio de la Margarita"
            width={680}
            height={680}
            className="-mt-12 w-full mask-none object-contain"
            quality={100}
          />

          <div className="flex w-full max-w-[480px] flex-col gap-8 px-5">
            <div className="flex flex-col gap-4">
              <H2 text="Cómo llegar" />
              <p className="text-center">
                Si vienes en coche, hay{" "}
                <span className="font-semibold">parking en la finca</span>.
                También habrá autobuses de ida y vuelta; compartiremos los
                detalles más adelante.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Label text="Autobuses" />
              <div className="mb-6">
                <p className="mb-0.5 text-center font-serif text-2xl">Madrid</p>
                <p className="text-center font-sans text-sm">
                  Zona Intercambiador de Moncloa
                </p>
              </div>
              <p className="mb-0.5 text-center font-serif text-2xl">
                Las Rozas de Madrid
              </p>
              <p className="text-center font-sans text-sm">
                A 20 minutos de la finca
              </p>
            </div>
          </div>

          <Image
            src={flower4}
            alt="Flower"
            width={400}
            height={137}
            className="w-full max-w-[400px] px-5"
          />

          <div className="flex w-full max-w-[480px] flex-col gap-10 px-5">
            <div className="flex flex-col gap-4">
              <H2 text="Alojamiento" />
              <p className="text-center">
                La finca dispone de habitaciones, pero si prefieres alojarte
                cerca, te dejamos algunas recomendaciones.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="mb-2 text-center font-serif text-2xl tracking-tight">
                Palacio de la Margarita
              </h3>
              <p className="mb-2 text-center">
                Si quieres alojarte en la finca, escríbenos y te explicamos cómo
                reservar.
              </p>
              <LinkButton
                text="VER HABITACIONES"
                href="https://palaciodelamargarita.com/habitaciones/"
              />
            </div>

            <div className="flex flex-col items-center gap-1">
              <h3 className="mb-2 text-center font-serif text-2xl tracking-tight">
                Las Rozas
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <HotelCard
                  name="B&B Hotel Madrid Las Rozas"
                  href="https://www.bbhotellaspinar.com/"
                />
                <HotelCard
                  name="Hotel Attica 21"
                  code="BODAS10"
                  href="https://www.hotelatica21.com/"
                />
                <HotelCard
                  name="Exe Gran Hotel Almenar"
                  code="BODAAYC"
                  href="https://www.exehotel.com/"
                />
                <HotelCard
                  name="B&B Hotel Pinar de las Rozas"
                  href="https://www.hotelplazalasmatas.com/"
                />
                <HotelCard
                  name="Hotel Plaza Las Matas"
                  href="https://www.hotelplazalasmatas.com/"
                />
                <HotelCard
                  name="Hotel Monte Rozas"
                  href="https://www.hotelmonterozas.com/"
                />
              </div>
            </div>
          </div>

          <Image
            src={flower4}
            alt="Flower"
            width={400}
            height={137}
            className="w-full max-w-[400px] scale-x-[-1] px-5"
          />

          <div className="flex w-full max-w-[480px] flex-col items-center justify-center gap-8 px-5">
            <div className="flex flex-col gap-4">
              <H2 text="Preboda" />
              <p className="text-center">
                Empezamos a celebrar juntos con un cocktail en la mano y ganas
                de pasarlo bien.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Label text="Lugar" />
              <p className="mb-0.5 text-center font-serif text-2xl">
                Ingenio Club
              </p>
              <p className="mb-2 text-center text-sm">
                viernes 5 de junio, a las 20:00 h
              </p>
              <LinkButton
                text="VER MAPA"
                href="https://maps.app.goo.gl/4zJgCsVh7Ep6h4ms5"
              />
            </div>
          </div>

          <div className="flex w-full max-w-[480px] flex-col items-center justify-center gap-10 px-5">
            <div className="flex flex-col items-center gap-4">
              <H2 text="Regalos" />
              <div className="flex flex-col gap-4">
                <p className="text-center">
                  Vuestra presencia en nuestro gran día es el mejor regalo. Pero
                  si además queréis ayudarnos a empezar esta aventura juntos,
                  podéis hacerlo en esta cuenta.
                </p>
                <p className="text-center">ESXXXXXXXXXXXXXX</p>
              </div>
            </div>
            <div className="flex w-full max-w-[196px] flex-col px-5">
              <Image
                src="/flower/flower-3.png"
                alt="Flower"
                width={680}
                height={233}
                className="h-auto w-full"
              />
              <div className="flex flex-col items-center">
                <p className="text-center font-serif text-xl tracking-tight text-chocolate italic">
                  Albert & Cristina
                </p>
                <Countdown />
              </div>
              <Image
                src="/flower/flower-1.png"
                alt="Flower"
                width={680}
                height={233}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="flex w-full justify-center border-t border-black/5 bg-black/2 pt-14">
            <div className="flex w-full max-w-[558px] flex-col gap-6 px-5">
              <H2 text="Ahora solo falta tu respuesta" />
              <p className="text-center">
                Ayúdanos rellenando este formulario a lo largo de Febrero para
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
      </div>
    </main>
  );
}

function HotelCard({
  name,
  code,
  href,
}: {
  name: string;
  code?: string;
  href: string;
}) {
  return (
    <div className="flex flex-col">
      <li className="list-disc transition-opacity duration-200 marker:text-gold hover:opacity-70">
        <Link href={href} target="_blank" rel="noopener noreferrer">
          {name}
        </Link>
      </li>
      {code && <p className="text-sm text-black/50">Código: {code}</p>}
    </div>
  );
}

function H2({ text }: { text: string }) {
  return (
    <h2 className="text-center font-serif text-4xl tracking-tight text-chocolate italic">
      {text}
    </h2>
  );
}

function Label({ text }: { text: string }) {
  return (
    <p className="mb-1 text-center font-sans text-xs font-medium text-gold uppercase">
      {text}
    </p>
  );
}

function LinkButton({ text, href }: { text: string; href: string }) {
  return (
    <Link
      className="font-sans text-sm text-gold uppercase underline transition-opacity duration-200 hover:opacity-70"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </Link>
  );
}
