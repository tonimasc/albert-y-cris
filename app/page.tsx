interface PageProps {
  searchParams: Promise<{ name?: string }>;
}

export default async function Home({ searchParams }: PageProps) {
  const { name } = await searchParams;
  const guestName = name || "";

  return (
    <main className="relative min-h-dvh w-full overflow-hidden bg-paper flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-[5] pointer-events-none bg-[url('/texture.png')] bg-repeat mix-blend-multiply opacity-50 dark:mix-blend-multiply"></div>

      <div>
        <h1 className="text-6xl text-center max-w-[800px] font-normal">Toni, queremos que nos acompañes</h1>
      </div>

      <div className="max-w-2xl w-full px-6 pt-12 text-xl flex flex-col gap-12">
        <div>
          <p>
            Nos conocimos en Toulouse, hace seis años.
            Estudiando un máster.
            Soñando con viajar lejos.
          </p>
          <p>
            Desde entonces hemos recorrido 27 países juntos.
            Y en uno de ellos,
            en un barco en medio del Mar Rojo,
            tomamos la decisión más importante:
            seguir así para siempre.
          </p>
          <p>
            Ahora nos casamos.
            Y no tendría sentido celebrarlo sin ti.
          </p>
        </div>


        <div>
          <h2>Donde y cuando</h2>
          <p>Sábado, 6 de Junio de 2026 a las 18:00h</p>
          <p>Te esperamos en</p>
          <h2>Palacio de la Margarita</h2>
          <p>Collado Villalba, Madrid</p>
          <p>A partir de las 18:00h</p>
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
          <h2>¿Y después de la fiesta?</h2>
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
          <h2>Pero antes...</h2>
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

        <div>
          <p>
            {guestName}, te queremos ahí.
          </p>
          <p>
            Con mucho cariño,
            <br />
            Albert y Cris
          </p>
        </div>
      </div>
    </main >
  );
}
