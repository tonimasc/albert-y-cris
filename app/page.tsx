import Image from "next/image";
import image1 from "@/public/image-1.jpeg";
import image2 from "@/public/image-2.jpeg";
import image3 from "@/public/image-3.jpeg";
import image4 from "@/public/image-4.jpeg";
import image5 from "@/public/image-5.jpeg";
import image6 from "@/public/image-6.jpeg";

interface PageProps {
  searchParams: Promise<{ name?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const { name } = await searchParams;
  const guestName = name || "";

  return (
    <main className="relative overflow-clip bg-paper flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-10 pointer-events-none bg-[url('/texture.png')] bg-repeat mix-blend-multiply opacity-50 dark:mix-blend-multiply"></div>
      <h1 className="pt-[25dvh] text-4xl md:text-6xl text-center max-w-[664px] px-6 leading-[1.1] font-normal">Toni, queremos que nos acompañes</h1>

      <div className="pt-12 text-xl flex flex-col gap-14 leading-normal items-center">
        <div className="max-w-[558px] flex flex-col w-full px-6 gap-6">
          <p>
            Nos conocimos en Toulouse, hace seis años. Estudiando un máster. Soñando con viajar lejos.          Desde entonces hemos recorrido 27 países juntos. Y en uno de ellos, en un barco en medio del Mar Rojo, tomamos la decisión más importante: seguir así para siempre.
          </p>
          <p>
            Ahora nos casamos. Y no tendría sentido celebrarlo sin ti.
          </p>
        </div>

        <div className="flex flex-row gap-3 px-6 overflow-x-scroll">
          <Image
            src={image1}
            alt="Albert y Cris"
            width={300}
            height={300}
            className="object-cover rounded-lg"
            placeholder="blur"
          />
          <Image
            src={image2}
            alt="Albert y Cris"
            width={300}
            height={300}
            className="object-cover rounded-lg"
            placeholder="blur"
          />
          <Image
            src={image3}
            alt="Albert y Cris"
            width={300}
            height={300}
            className="object-cover rounded-lg"
            placeholder="blur"
          />
          <Image
            src={image4}
            alt="Albert y Cris"
            width={300}
            height={300}
            className="object-cover rounded-lg"
            placeholder="blur"
          />
          <Image
            src={image5}
            alt="Albert y Cris"
            width={300}
            height={300}
            className="object-cover rounded-lg"
            placeholder="blur"
          />
          <Image
            src={image6}
            alt="Albert y Cris"
            width={300}
            height={300}
            className="object-cover rounded-lg"
            placeholder="blur"
            objectFit="cover"
          />
        </div>


        <div className="max-w-[558px] flex flex-col w-full px-6 gap-6">
          <h2 className="text-3xl text-center">Donde y cuando</h2>
          <p>Sábado, 6 de Junio de 2026 a las 18:00h Te esperamos en Palacio de la Margarita Collado Villalba, Madrid</p>
          <a href="https://maps.google.com/?q=Palacio+de+la+Margarita+Collado+Villalba" target="_blank" rel="noopener noreferrer">
            Cómo llegar
          </a>
        </div>

        <div>
          <h2>No te preocupes por el coche</h2>
          <p>Habrá autobús de ida y vuelta desde:</p>
          <ul>
            <li>
              <strong>Madrid — Intercambiador de Moncloa</strong>
              <br />
              30 min hasta la finca
            </li>
            <li>
              <strong>Las Rozas de Madrid</strong>
              <br />
              20 min hasta la finca
            </li>
          </ul>
          <p>
            Si vienes en coche, hay parking en la finca.
          </p>
          <p><em>Horarios del autobús próximamente</em></p>
        </div>

        <div>
          <h2 className="text-3xl text-center">¿Y después de la fiesta?</h2>
          <div>
            <h3>Quédate en la finca</h3>
            <p>
              El Palacio tiene habitaciones para dormir allí mismo.
              Así no tienes que preocuparte de nada.
              Escríbenos y te contamos cómo reservar.
            </p>
            <a href="https://palaciolamargarita.es/habitaciones" target="_blank" rel="noopener noreferrer">
              Ver habitaciones
            </a>
          </div>

          <div>
            <h3>Hoteles cercanos</h3>
            <p>
              También puedes alojarte en Las Rozas.
              Todos estos hoteles tienen parada de autobús:
            </p>
            <ul>
              <li>B&B Hotel Madrid Las Rozas</li>
              <li>Hotel Attica 21 — código: BODAS10</li>
              <li>Exe Gran Hotel Almenar — código: BODAAYC</li>
              <li>B&B Hotel Pinar de las Rozas</li>
              <li>Hotel Plaza Las Matas</li>
              <li>Hotel Monte Rozas</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-3xl text-center">Pero antes...</h2>
          <p>
            El viernes por la noche queremos verte en la preboda.
            Para ir entrando en calor.
          </p>
          <p>Viernes 5 de junio, 20:00h</p>
          <h3>Ingenio Club</h3>
          <p>Villanueva de la Cañada</p>
          <a href="https://maps.google.com/?q=Ingenio+Club+Villanueva+de+la+Cañada" target="_blank" rel="noopener noreferrer">
            Cómo llegar
          </a>
        </div>

        <div>
          <h2>{guestName}, ¿te apuntas?</h2>
          <p>
            Dinos que sí para poder preparar la fiesta como merece.
          </p>
          <div id="rsvp-form">
            {/* Form will be implemented later */}
          </div>
        </div>


        <p>
          Con mucho cariño, Albert y Cris
        </p>

      </div>
    </main >
  );
}
