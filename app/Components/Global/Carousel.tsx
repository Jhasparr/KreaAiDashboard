"use client";
import React from "react";
import PictureCard from "../Global/PictureCard";
import GeneralCarousel from "../Global/GeneralCarousel";
import { Settings } from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


type Service = {
  id: number;
  title: string;
  image: string;
  description: string;
  button?: boolean;
  head: string;
  subtitle: string;
};

const ServicesCarousel: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Wan 2.2",
      image: "/subhero.webp",
      head: "NEW SOURCE MODEL",
      subtitle: "WAN 2.2 Image Generation",
      button: true,
      description:
        "Generate complex images with the brand new and powerful WAN 2.2 Model. Exceptional prompt adherence and ultra realistic features",
    },
    {
      id: 2,
      title: "Flux.1",
      image: "/mainhero.webp",
      head: "NEW SOURCE MODEL",
      button: true,
      description:
        "We're making the weight to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate it with Krea Image.",
      subtitle: "FLUX.1 Krea",
    },
    {
      id: 3,
      title: "Introducing Motion Transfer",
      image: "/hero-01",
      head: "NEW SOURCE MODEL",
      button: true,
      description:
        "Bring motion into your characters. Upload any image, record a video of yourself, and make your characters smile, talk, and dance. Powered by Runway Act 2.",
      subtitle: "Introducing Motion Transfer",
    },
    {
      id: 4,
      title: "Realtime Video – Open Beta",
      image: "/hero-02",
      head: "NEW SOURCE MODEL",
      button: true,
      description:
        "Our ground-breaking Realtime Video is now accessible to all paid plans. Try it in the Realtime tool.",
      subtitle: "Realtime Video – Open Beta",
    },
    {
      id: 5,
      title: "Real-Time Video Generation",
      head: "NEW SOURCE MODEL",
      button: true,
      image: "/hero-3",
      description:
        "Announcing Realtime Video. Generate videos in real-time. Fully frame-consistent, controllable video clips.",
      subtitle: "Real-Time Video Generation",
    },
  ];

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    
    initialSlide: 0,
    responsive: [
        {
        breakpoint: 2024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 720,
        settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 1 },
      },

      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  function generateCards() {
    return services.map((item) => (
      <div key={item.id}>
        <PictureCard
          head={item.head}
          image={item.image}
          text={item.description}
          subtitle={item.subtitle}
          button={item.button}
        />
      </div>
    ));
  }

  return (
    <div className="mt-8 md:mt-12">
      <GeneralCarousel settings={settings} data={generateCards()} />
    </div>
  );
};

export default ServicesCarousel;
