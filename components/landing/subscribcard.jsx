"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const SubscribCard = ({ amclogos }) => {
  return (
    <div className="section">
    <div className="container">
      <div class="row">
        <div class="col-lg-5 m-auto">
          <div class="heading1 text-center space-margin60">
            <h5 class="vl-section-subtitle">Our Partners</h5>
            <div class="space24"></div>
            <h2 class="vl-section-title text-anime-style-1">
              Trusted Partners Powering Your Financial Growth
            </h2>
          </div>
        </div>
      </div>

      <Carousel
        className="w-full mx-auto"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {amclogos.map((logo, index) => (
            <CarouselItem
              key={index}
              className="pl-1 basis-1/2 md:basis-1/2 lg:basis-1/5"
            >
              <div className="">
                <a
                  href={logo.logourl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={`https://redvisionweb.com/${logo.logo}`}
                    alt={logo.logoname}
                    width={160}
                    height={60}
                    className="opacity-80 hover:opacity-100 transition ease-in-out duration-75"
                  />
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
    </div>
  );
};

export default SubscribCard;
