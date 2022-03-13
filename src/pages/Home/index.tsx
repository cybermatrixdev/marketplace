import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import SvgIcons from "../../components/SvgIcons";
import BG from "../../images/Home-BG.png";
import Post from "../../images/Home-Post.png";

const fakePhotos = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
  "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1342&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
  "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1429704658776-3d38c9990511?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1379&q=80",
  "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1213&q=80",
  "https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1490604001847-b712b0c2f967?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80",
  "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
  "https://images.unsplash.com/photo-1413752362258-7af2a667b590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  "https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80",
  "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1433477155337-9aea4e790195?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1220&q=80",
  "https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "https://images.unsplash.com/photo-1513875528452-39400945934d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1502786129293-79981df4e689?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  "https://images.unsplash.com/photo-1438786657495-640937046d18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1203&q=80",
];

const SlopLineIcon = () => {
  return (
    <svg width="38" height="33" viewBox="0 0 38 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line
        y1="-1"
        x2="46.9056"
        y2="-1"
        transform="matrix(-0.750472 0.660902 -0.750472 -0.660902 35.9778 0)"
        stroke="#E0E0E0"
        strokeWidth="2"
      />
    </svg>
  );
};

function PostsSlider() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    className: "w-1/2 bg-base-100 mt-[20%] mb-[20%] ml-[30%] rounded-3xl",
    dotsClass: "bottom-0 slick-dots ",
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="card ">
          <figure>
            <img src={Post} className="w-full" />
          </figure>
          <div className="card-body pt-0">
            <h2 className="card-title">Josh</h2>
            <p>The NFT in Arab was amazing!</p>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src={Post} className="w-full" />
          </figure>
          <div className="card-body pt-0">
            <h2 className="card-title">Ryan</h2>
            <p>The NFT in USA was amazing!</p>
          </div>
        </div>
        <div className="card">
          <figure>
            <img src={Post} className="w-full" />
          </figure>
          <div className="card-body pt-0">
            <h2 className="card-title">Olivia</h2>
            <p>The NFT in China was amazing!</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

function LandingSection() {
  return (
    <div className="bg-cover bg-no-repeat min-h-screen flex flex-row" style={{ backgroundImage: `url(${BG})` }}>
      <div className="flex-none order-1 basis-1/2">
        <div className="card w-1/2 ml-[10%] mt-[15%]">
          <div className="card-body">
            <h2 className="card-title font-medium text-white text-4xl">Trending</h2>
            <p className="font-normal text-white text-2xl">
              Radical fairness and transparency drive our approach to funding the future of Web3
            </p>
          </div>
        </div>
      </div>
      <div className="flex-none order-2 basis-1/2 min-w-0	">
        <PostsSlider />
      </div>
    </div>
  );
}
export function GallerySection() {
  const sliderRef = useRef<Slider | null>(null);
  const [pageCount, setpageCount] = useState(1);
  const settings = {
    className: "ml-[5%] mr-[5%] mt-[3%] mb-[2%]",
    // dotsClass: "slick-dots",
    // centerMode: true,
    infinite: true,
    // centerPadding: "10px",
    slidesToScroll: 1,
    speed: 500,
    rows: 3,
    slidesPerRow: 3,
    dots: false,
    arrows: false,
    // autoplay: true,
    // autoplaySpeed: 1500,
    // cssEase: "linear",
  };
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-none order-1">
        <h1 className="text-4xl font-semibold leading-10	text-[#092C4C] mt-[5%] ml-[8%] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          NFTs Gallery
        </h1>
      </div>
      <div className="flex-none order-2">
        <Slider ref={(slider) => (sliderRef.current = slider)} {...settings}>
          {fakePhotos.map((photo, index) => (
            <div key={index}>
              <img src={photo} className="object-cover p-[2%] h-48 w-96" />
            </div>
          ))}
        </Slider>
        <div className="inline-grid grid-cols-10 ml-[8%] mt-[0.5%] gap-2">
          <div className="text-lg">0{pageCount}</div>
          <div className="">
            <SlopLineIcon />
          </div>
          <div className="text-lg">04</div>
          <div>
            <button
              onClick={() => {
                if (pageCount > 1) setpageCount(pageCount - 1);
                sliderRef?.current?.slickPrev();
              }}
              disabled={pageCount == 1}
              className="btn btn-square hover:bg-slate-200  btn-sm btn-ghost disabled:bg-[#F9F9F9]"
            >
              <SvgIcons.LeftArrowIcon />
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                if (pageCount < 4) setpageCount(pageCount + 1);
                sliderRef?.current?.slickNext();
              }}
              disabled={pageCount == 4}
              className="btn btn-square hover:bg-slate-200  btn-sm btn-ghost disabled:bg-[#F9F9F9]"
            >
              <SvgIcons.RightArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="flex-none order-1">
        <LandingSection />
      </div>
      <div className="flex-none order-2">
        <GallerySection />
      </div>
    </div>
  );
}
