import { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import { LanguageContext } from "./LanguageContext";

export default function ImageCarousel() {
    const { language } = useContext(LanguageContext) as {
        language: string;
        setLanguage: (language: string) => void;
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
                        <img src="gallery1.png" alt="" />
                        {/* <p className="legend">
                            {language === "fi" ? "Mehiläiset" : "Bees"}
                        </p> */}
                    </div>
                    <div>
                        <img src="gallery2.png" alt="" />
                    </div>
                    <div>
                        <img src="gallery3.png" alt="" />
                    </div>
                    <div>
                        <img src="gallery4.png" alt="" />
                    </div>
                    <div>
                        <img src="gallery5.png" alt="" />
                    </div>
                    <div>
                        <img src="gallery6.png" alt="" />
                    </div>
                    <div>
                        <img src="gallery7.png" alt="" />
                    </div>
                    <div>
                        <img src="gallery8.png" alt="" />
                    </div>
                    <div>
                        <img src="gallery9.png" alt="" />
                    </div>
                    <div>
                        <img src="gallery10.png" alt="" />
                    </div>
                    <div>
                        <img src="HHkuva5.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
        </>
    );
}
