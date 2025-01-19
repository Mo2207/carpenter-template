import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import SectionContainer from "../layout/SectionContainer";
import { imgToSvg } from "../utils";
// import { urlFor } from "@/libs/sanity";
// import { PortableText } from "@portabletext/react";

const Service = () => {

  useEffect(() => {
    imgToSvg();
  }, []);

  const services = [
    {
      img: "/assets/img/service/custom-furniture.jpg",
      icon: "/assets/img/service/table.svg",
      text: "Transform your home with our custom furniture design services.",
      date: "Updated: January 3, 2025",
      title: "Custom Furniture Design",
      text1:
        "At Haven Woodworks, we specialize in creating bespoke furniture tailored to your style and needs. Each piece is crafted with precision and care to suit your space perfectly.",
      text2:
        "Whether you’re looking for a statement piece or functional furniture, our expert craftsmen bring your vision to life.",
      text3:
        "From modern designs to timeless classics, let us craft furniture that reflects your unique taste.",
    },
    {
      img: "/assets/img/service/custom-cabinetry.jpg",
      icon: "/assets/img/service/cabinet.svg",
      text: "Enhance your home with expertly crafted cabinetry and storage solutions.",
      date: "Updated: January 3, 2025",
      title: "Custom Cabinetry",
      text1:
        "Our custom cabinetry services provide beautiful and functional storage solutions tailored to your home.",
      text2:
        "We work with you to design and build cabinets that match your style while maximizing storage space.",
      text3:
        "From kitchens to bathrooms, every cabinet is crafted with meticulous attention to detail.",
    },
    {
      img: "/assets/img/service/rustic-door.jpg",
      icon: "/assets/img/service/door.svg",
      text: "Add character to your space with handcrafted rustic barn doors.",
      date: "Updated: January 3, 2025",
      title: "Custom Rustic Doors",
      text1:
        "Our custom rustic doors are crafted with premium materials, offering durability and timeless elegance.",
      text2:
        "Whether you're looking for barn doors, sliding doors, or traditional hinged doors, our designs bring character and charm to any space.",
      text3:
        "Select from a variety of styles and finishes to create the perfect door that complements your home’s aesthetic.",
    },
    {
      img: "/assets/img/service/custom-shelving.jpg",
      icon: "/assets/img/service/bookshelf.svg",
      text: "Showcase your style with custom shelving solutions.",
      date: "Updated: January 3, 2025",
      title: "Custom Shelving",
      text1:
        "Create functional and stylish displays with our custom shelving options, tailored to fit your space.",
      text2:
        "From floating shelves to built-ins, we craft designs that are both practical and visually appealing.",
      text3:
        "Let us help you organize and enhance your home with personalized shelving solutions.",
    },
    {
      img: "/assets/img/service/custom-deck.jpg",
      icon: "/assets/img/service/bbq.svg",
      text: "Elevate your outdoor space with custom wood structures.",
      date: "Updated: January 3, 2025",
      title: "Outdoor Wood Structures",
      text1:
        "Transform your outdoor living areas with custom wood designs like pergolas, decks, and gazebos.",
      text2:
        "Our team creates durable structures that combine functionality with aesthetic appeal.",
      text3:
        "Enjoy outdoor spaces that are perfect for relaxation and entertainment, built to last.",
    },
    {
      img: "/assets/img/service/custom-woodwork.jpg",
      icon: "/assets/img/service/tools.svg",
      text: "Bring your woodworking vision to life with our custom project services.",
      date: "Updated: January 3, 2025",
      title: "Bespoke Woodworking",
      text1:
        "Our bespoke woodworking services turn your unique ideas into beautifully crafted realities.",
      text2:
        "From intricate designs to practical solutions, we work closely with you to achieve your goals.",
      text3:
        "No matter the project, our craftsmanship ensures exceptional quality and attention to detail.",
    },
  ];

  const [isOpen7, setIsOpen7] = useState(false);
  const [modalContent, setModalContent] = useState({});

  function toggleModalFour() {
    setIsOpen7(!isOpen7);
  }

  return (
    <Fragment>
      <SectionContainer className="cavani_tm_section" navName="service">
        <div className="section_inner">
          <div className="cavani_tm_service w-full h-auto clear-both float-left mb-[70px]">
            <div className="cavani_tm_title w-full h-auto clear-both float-left overflow-hidden">
              <span className="inline-block relative font-poppins text-[#333] uppercase font-bold tracking-[8px]">
                Services
              </span>
            </div>
            <div className="service_list w-full h-auto clear-both float-left mt-[60px]">
              <ul className="ml-[-50px] flex flex-wrap">
                {services?.map((item, i) => (
                  <li className="mb-[50px] w-1/2 pl-[50px]" key={i}>
                    <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333] rounded-xl">
                      <Image
                        // className="svg inline-block max-w-[60px] max-h-[60px] w-full h-full text-[#333] mb-[27px] transition-all duration-300"
                        className="inline-block w-[60px] h-[60px] text-[#333] mb-[27px] transition-all duration-300 mx-auto"
                        src={item.icon}
                        alt={true.toString()}
                        width={60}
                        height={60}
                      />
                      <h3 className="title font-medium text-[24px] text-[#333] mb-[15px] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text transition-all duration-300">
                        {item.text1}
                      </p>
                      <a
                        className="cavani_tm_full_link"
                        href="#"
                        onClick={() => {
                          setModalContent(item);
                          toggleModalFour();
                        }}
                      />
                      {/* Modalbox Info Start */}
                      {/* <img
                        className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                        src={urlFor(item?.image)?.url()}
                        alt={true.toString()}
                      /> */}
                    </div>
                  </li>
                ))}
                {/* {services.map((item, i) => (
                  <li className="mb-[50px] w-1/2 pl-[50px]" key={i}>
                    <div className="list_inner w-full h-auto clear-both float-left relative border-solid border-[#b9b8c3] border py-[70px] px-[40px] text-center transition-all duration-300 hover:bg-[#333]">
                      <img
                        className="svg inline-block w-[60px] h-[60px] text-[#333] mb-[27px] transition-all duration-300"
                        src={item.icon}
                        alt={true.toString()}
                      />
                      <h3 className="title font-medium text-[24px] text-[#333] mb-[15px] transition-all duration-300">
                        {item.title}
                      </h3>
                      <p className="text transition-all duration-300">
                        {item.text}
                      </p>
                      <a
                        className="cavani_tm_full_link"
                        href="#"
                        onClick={() => {
                          setModalContent(item);
                          toggleModalFour();
                        }}
                      />
                      <img
                        className="popup_service_image opacity-0 invisible hidden absolute z-[-111]"
                        src={item.img}
                        alt={true.toString()}
                      />
                    </div>
                  </li>
                ))} */}
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      {modalContent?.title && (
        <Modal
          isOpen={isOpen7}
          onRequestClose={toggleModalFour}
          contentLabel="My dialog"
          className="mymodal"
          overlayClassName="myoverlay"
          closeTimeoutMS={300}
          openTimeoutMS={300}
        >
          <div className="cavani_tm_modalbox opened">
            <div className="box_inner">
              <div className="close">
                <a href="#" onClick={toggleModalFour}>
                  <i className="icon-cancel" />
                </a>
              </div>
              <div className="description_wrap">
                <div className="service_popup_informations w-full h-auto clear-both float-left">
                  <div className="image">
                    <img src="assets/img/thumbs/4-2.jpg" alt={true.toString()} />
                    {modalContent?.img && (
                      <div
                        className="main"
                        // data-img-url={urlFor(modalContent?.image)?.url()}
                        style={{
                          backgroundImage: `url(${modalContent.img})`,
                        }} // hard-coded background image
                      />
                    )}
                  </div>
                  <div className="main_title">
                    <h3>{modalContent.title}</h3>
                  </div>
                  <div className="descriptions w-full float-left">
                    <p className="mb-[15px]">{modalContent.text1}</p>
                    <p className="mb-[15px]">{modalContent.text2}</p>
                    <p>{modalContent.text3}</p>
                    {/* <PortableText
                      value={modalContent?.content}
                    /> */}
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
export default Service;
