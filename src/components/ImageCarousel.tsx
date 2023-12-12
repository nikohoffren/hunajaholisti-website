import { useContext, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { LanguageContext } from "./LanguageContext";
import Spinner from "../components/Spinner";

export default function Gallery() {
  // const { language } = useContext(LanguageContext) as {
  //     language: string;
  //     setLanguage: (language: string) => void;
  // };
  const [isLoading, setIsLoading] = useState(true);
  const imageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <Carousel
          showThumbs={true}
          infiniteLoop={true}
          autoPlay={true}
          className="image-carousel-img"
        >
          <div>
            {isLoading && <Spinner />}
            <img src="gallery7.png" alt="" />
            {/* <p className="legend">
                            {language === "fi" ? "Mehiläiset" : "Bees"}
                        </p> */}
          </div>
          <div>
            {isLoading && <Spinner />}
            <img src="gallery2.png" alt="" onLoad={imageLoaded} />
          </div>
          <div>
            {isLoading && <Spinner />}
            <img src="gallery3.png" alt="" onLoad={imageLoaded} />
          </div>
          <div>
            {isLoading && <Spinner />}
            <img src="gallery4.png" alt="" onLoad={imageLoaded} />
          </div>
          <div>
            {isLoading && <Spinner />}
            <img src="gallery5.png" alt="" onLoad={imageLoaded} />
          </div>
          <div>
            {isLoading && <Spinner />}
            <img src="gallery6.png" alt="" onLoad={imageLoaded} />
          </div>
          <div>
            {isLoading && <Spinner />}
            <img src="gallery1.png" alt="" onLoad={imageLoaded} />
          </div>
          <div>
            {isLoading && <Spinner />}
            <img src="gallery8.png" alt="" onLoad={imageLoaded} />
          </div>
          <div>
            {isLoading && <Spinner />}
            <img src="gallery9.png" alt="" onLoad={imageLoaded} />
          </div>
          <div>
            {isLoading && <Spinner />}
            <img src="gallery10.png" alt="" onLoad={imageLoaded} />
          </div>
          <div>
            {isLoading && <Spinner />}
            <img src="HHkuva5.jpg" alt="" onLoad={imageLoaded} />
          </div>
        </Carousel>
      </div>
    </>
  );
}
