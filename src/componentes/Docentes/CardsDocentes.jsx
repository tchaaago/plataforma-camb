import { useEffect, useState } from "react";
import "./style.css";
import { DocenteService } from "../../services/docente-service";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function DocentesCAMB() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDocentes = async () => {
      try {
        const data = await DocenteService.findAll();

        setData(data);
      } catch (err) {
        console.error("Erro ao carregar docentes:", err);
      }
    };

    fetchDocentes();
  }, []);

  if (!data || !data.length) return null;

  return (
   <Swiper
      spaceBetween={20} 
      slidesPerView={"auto"}
      grabCursor={true}
      loop={true}
      freeMode={true}
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false,
      }}
      modules={[Autoplay, FreeMode]}
    >
      {data.map((docente) => {
        const { id, name, degree, imageUrl, lattes } = docente;

        return (
          <SwiperSlide key={id} className="swiper-slide-custom">
            <section className="docentes">
              <div className="container_image">
                <img src={imageUrl} alt={name} />
              </div>
              <div className="info">
                <h3 className="nome">{name}</h3>
                <p className="infoDocente">{degree}</p>
                <div className="lattes">
                  <button
                    onClick={() =>
                      window.open(lattes, "_blank", "noopener,noreferrer")
                    }
                    className="lattes-button"
                    type="button"
                  >
                    Currículo Lattes
                  </button>
                </div>
              </div>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default DocentesCAMB;
