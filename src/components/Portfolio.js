import Isotope from "isotope-layout";
import dynamic from "next/dynamic";
import Modal from "react-modal";
import { Fragment, useEffect, useRef, useState } from "react";
import SectionContainer from "../layout/SectionContainer";
import { dataImage } from "../utils";
import ImageView from "./ImagePopup";
// import { urlFor } from "@/libs/sanity";
import { Detail, Soundcloud } from "./Popup";
// import { PortableText } from "@portabletext/react";

// hard-coded data for portfolio section
const portfolioData = [
  {
    title: "Custom Furniture Design",
    category: "Furniture Crafting",
    image: "/assets/img/portfolio/furniture-design.jpg",
    content: [
      "Transform your space with our bespoke furniture creations, crafted to your specifications.",
      "Our skilled carpenters design and build custom pieces that blend functionality and artistry.",
      "Experience the luxury of furniture tailored perfectly to your style and needs."
    ],
  },
  {
    title: "Precision Cabinetry",
    category: "Cabinetry & Storage",
    image: "/assets/img/portfolio/cabinetry.jpg",
    content: [
      "Maximize your storage solutions with our precision-built cabinetry.",
      "We create custom cabinets for kitchens, bathrooms, and living spaces that are both stylish and practical.",
      "Every piece is crafted to enhance your home's functionality and aesthetic."
    ],
  },
  {
    title: "Rustic Barn Doors",
    category: "Feature Doors",
    image: "/assets/img/portfolio/doors.jpg",
    content: [
      "Add a touch of charm with our handcrafted rustic barn doors.",
      "Our doors are made with premium materials, ensuring durability and a timeless look.",
      "Customize your door to perfectly fit your space and style."
    ],
  },
  {
    title: "Custom Shelving Solutions",
    category: "Shelving & Displays",
    image: "/assets/img/portfolio/shelving.jpg",
    content: [
      "Showcase your favorite items with our custom shelving solutions.",
      "From floating shelves to built-ins, we craft pieces that seamlessly integrate into your space.",
      "Enjoy beautifully designed shelves that combine style and utility."
    ],
  },
  {
    title: "Outdoor Wood Structures",
    category: "Outdoor Living",
    image: "/assets/img/portfolio/deck.jpg",
    content: [
      "Elevate your outdoor spaces with our expertly crafted wood structures.",
      "From pergolas to custom decks, we bring your outdoor living dreams to life.",
      "Our designs are built to withstand the elements while maintaining beauty and functionality."
    ],
  },
  {
    title: "Bespoke Woodworking Projects",
    category: "Custom Projects",
    image: "/assets/img/portfolio/bespoke.jpg",
    content: [
      "Bring your unique woodworking visions to life with our bespoke services.",
      "Our team collaborates with you to design and craft one-of-a-kind pieces tailored to your specifications.",
      "No project is too intricate—let's create something extraordinary together."
    ],
  },
];


const Portfolio = () => {
  const categories = [
    "Furniture Crafting",
    "Cabinetry & Storage",
    "Feature Doors",
    "Shelving & Displays",
    "Outdoor Living",
    "Custom Projects"
  ];

  const ModalVideo = dynamic(
    () => {
      return import("react-modal-video");
    },
    { ssr: false }
  );

  // Isotope
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");
  const [isIsotopeInitialized, setIsIsotopeInitialized] = useState(false);

  useEffect(() => {
    const imagesLoaded = require("imagesloaded");
    const portfolioList = document.querySelector(".gallery_zoom");

    if (portfolioList && !isIsotopeInitialized) {
      // Загружаем изображения перед инициализацией Isotope
      var imgLoad = imagesLoaded(".portfolio_list");
      imgLoad.on("done", function () {
        isotope.current = new Isotope(".gallery_zoom", {
          itemSelector: ".item__",
          masonry: {
            columnWidth: ".item__",
          },
          animationOptions: {
            duration: 750,
            easing: "linear",
            queue: false,
          },
        });
        setIsIsotopeInitialized(true);
      });
    }

    return () => {
      // Очищаем экземпляр Isotope при размонтировании компонента
      if (isotope.current) {
        isotope.current.destroy();
      }
    };
  }, [isIsotopeInitialized]);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };

  const activeBtn = (value) => (value === filterKey ? "active" : "");

  useEffect(() => {
    setTimeout(() => {
      dataImage();
    }, 2000);
  });

  const [modalContent, setModalContent] = useState({});
  const [category, setCategory] = useState(null);
  const filteredData = category ? portfolioData.filter(item => item.category === category) : portfolioData; // replaced sanity {data} with portfolioData
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  // Modal with title, image and content
  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal(value) {
    setIsModalOpen(!isModalOpen);
    setModalContent(value);
  }

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <Fragment>
      <ImageView />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="337293658"
        animationSpeed={300}
        onClose={() => setIsOpen2(false)}
        modalVideoClose="mfp-close"
      />
      <ModalVideo
        channel="youtube"
        autoplay={true}
        isOpen={isOpen}
        videoId="7e90gBu4pas"
        animationSpeed={300}
        onClose={() => setIsOpen(false)}
        modalVideoClose="mfp-close"
      />
      <Soundcloud isOpen3={isOpen3} toggleModalThree={toggleModalThree} />
      <Detail isOpen4={isOpen4} toggleModalFour={toggleModalFour} />
      <SectionContainer navName="portfolio">
        <div className="section_inner">
          <div className="cavani_tm_portfolio w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Creative Portfolio
              </span>
            </div>
            <div className="portfolio_filter w-full h-auto clear-both float-left text-left relative px-0 pt-[55px] pb-[42px]">
              <ul>
                <li className="mr-[40px] inline-block">
                  {/* <a
                    href="#"
                    className={`current text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn("*")}`}
                    data-filter="*"
                    onClick={handleFilterKeyChange("*")}
                  >
                    All
                  </a> */}
                  <button
                    className={`current text-[#333] font-poppins font-medium transition-all duration-300 ${category === null && 'underline'}`}
                    onClick={() => setCategory(null)}
                  >
                    All
                  </button>
                </li>
                {/* <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "eyebrow-wax"
                    )}`}
                    data-filter=".eyebrow-wax"
                    onClick={handleFilterKeyChange("eyebrow-wax")}
                  >
                    Eyebrow Wax
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "youtube"
                    )}`}
                    data-filter=".youtube"
                    onClick={handleFilterKeyChange("youtube")}
                  >
                    Eyebrow Tint & Shape
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "soundcloud"
                    )}`}
                    data-filter=".soundcloud"
                    onClick={handleFilterKeyChange("soundcloud")}
                  >
                    Eyebrows Lamination
                  </a>
                </li>
                <li className="mr-[40px] inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "image"
                    )}`}
                    data-filter=".image"
                    onClick={handleFilterKeyChange("image")}
                  >
                    Eyelash Lift and Tint
                  </a>
                </li>
                <li className="inline-block">
                  <a
                    href="#"
                    className={`text-[#333] font-poppins font-medium transition-all duration-300 ${activeBtn(
                      "detail"
                    )}`}
                    data-filter=".detail"
                    onClick={handleFilterKeyChange("detail")}
                  >
                    Classic Fill
                  </a>
                </li> */}
                {categories.map((item, i) => (
                  <li key={`category-${i}`} className="inline-block">
                    <button
                      key={`category-${i}`}
                      className={`text-[#333] font-poppins font-medium transition-all duration-300 ${category === item && 'underline'}`}
                      onClick={() => setCategory(item)}
                    >{item}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="portfolio_list w-full h-auto clear-both float-left">
              <ul className="flex flex-wrap">
                {filteredData?.map((item, i) => {
                  return (
                    <li key={`portfolio-${i}`} className="youtube mb-[50px] w-1/2 float-left pl-[50px] item__">
                      <button onClick={() => toggleModal(item)}>
                      <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                        <div className="image relative">
                          <img
                            className="relative min-w-full rounded-xl"
                            src={item.image} // hard-coded image
                            alt={item.title}
                          />
                          <div className="details rounded-1xl">
                            <h3 className="text-[16px] mb-[2px] font-semibold">
                              {item.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                      </button>
                    </li> 
                  )
                })}
                {/* <li className="youtube mb-[50px] w-1/2 float-left pl-[50px] item__">
                  <div className="list_inner w-full h-auto clear-both float-left relative overflow-hidden">
                    <div className="image relative">
                      <img
                        className="relative opacity-0 min-w-full"
                        src="assets/img/thumbs/1-1.jpg"
                        alt={true.toString()}
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center"
                        data-img-url="assets/img/portfolio/1.jpg"
                      />
                      <div className="details">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          Ave Brook
                        </h3>
                        <span className="text-[14px]">Youtube</span>
                      </div>
                      <a
                        onClick={() => setIsOpen(true)}
                        className="cavani_tm_full_link popup-youtube"
                        href="#"
                      />
                    </div>
                  </div>
                </li> */}
                {/* Остальные элементы галереи */}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={toggleModal}
          contentLabel="Portfolio"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a href="#" onClick={toggleModal}>
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap rounded-xl">
                <div className="news_popup_informations w-full h-auto clear-both float-left">
                  {modalContent?.image && (
                    <div className="image">
                      <img
                      src={modalContent.image} // hard-coded image
                      alt={modalContent.title} // hard-coded title
                      />
                      <div
                        className="main"
                        style={{ backgroundImage: `url(${modalContent.image})`}} // hard-coded background image
                      />
                    </div>
                  )}
                  <div className="details">
                    <div className="title">
                      <h3>{modalContent.title}</h3>
                    </div>
                    <div />
                  </div>
                  <div className="text w-full float-left">
                    {/* <p className="mb-[15px]">{modalContent.text1}</p>
                    <p className="mb-[15px]">{modalContent.text2}</p>
                    <p>{modalContent.text3}</p> */}
                    {/* <PortableText
                      value={modalContent?.content}
                    /> */}
                    {modalContent.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};
export default Portfolio;
