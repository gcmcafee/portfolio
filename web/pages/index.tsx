/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import clientSanity from '../lib/sanity';
import Clients from '../components/Clients';
import { Link, animateScroll as scroll } from 'react-scroll';

export default function Home({ clients }) {
  return (
    <main
      id="main"
      className="main before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[12.5rem] before:z-[1] before:transition-[all_.5s_ease] before:bg-gradient-to-b before:from-[rgba(20,20,26,.8)] before:to-[rgba(20,20,26,0)] "
    >
      <section
        id="hello"
        className="hello relative flex items-center text-white bg-cover md:h-[80vh] md:max-h-[1000px] bg-[url('https://res.cloudinary.com/gcmcafee/image/upload/q_60/v1641259859/portfolio/hero.webp')] before:absolute before:opacity-40 sm:before:opacity-60  lg:before:opacity-60 before:w-full sm:before:w-1/2 before:top-0 before:bottom-0 before:left-0 before:bg-[rgb(20,20,26)] lg:before:w-1/4 after:hidden sm:after:block after:absolute lg:after:w-3/4 after:w-1/2 after:h-full after:top-0 after:left-1/2 lg:after:left-1/4 after:z-[1] after:opacity-40 sm:after:opacity-60 after:bg-[linear-gradient(to_right,rgb(20,20,26)0%,rgba(20,20,26,0.99)9.4%,rgba(20,20,26,0.95)17.6%,rgba(20,20,26,0.9)24.9%,rgba(20,20,26,0.83)31.4%,rgba(20,20,26,0.74)37.3%,rgba(20,20,26,0.65)42.7%,rgba(20,20,26,0.55)47.8%,rgba(20,20,26,0.45)52.9%,rgba(20,20,26,0.35)58%,rgba(20,20,26,0.26)63.4%,rgba(20,20,26,0.18)69.2%,rgba(20,20,26,0.1)75.6%,rgba(20,20,26,0.05)82.7%,rgba(20,20,26,0.01)90.8%,rgba(20,20,26,0)100%)]"
      >
        <h2 className="top-1/2 z-10 absolute uppercase space-x-0 font-medium tracking-[4px] text-xl -rotate-90 origin-center w-0 overflow-visible flex justify-center whitespace-nowrap h-0 ml-1">
          Hello
        </h2>

        <div className="pt-24 pb-12 md:pt-32 md:pb-24 relative z-[2] mx-auto px-4 w-6xl max-w-[calc(100%-3.25rem)]">
          <h1 className="max-w-xl mb-4 -ml-2 uppercase font-extralight text-[17.5vw] leading-none sm:text-8xl tracking-wider drop-shadow-md shadow-black font-['Montserrat']">
            <span className="block">
              <span className="ml-2">Cody</span> McAfee
            </span>
          </h1>
          <p className="max-w-lg mb-8 sm:mb-12 lg:text-2xl text-[1.35rem] font-light leading-9 lg:leading-10">
            UX-minded front end development with a focus on fluid, lightweight
            and intuitive web experiences.
          </p>

          <a
            href="https://www.linkedin.com/in/codymcafee"
            className="focus:outline-none inline-flex items-center py-3 mb-2 mr-4 text-center transition duration-300 ease-in-out border rounded-full border-sky-400 bg-sky-400 px-9 text-slate-900 hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600"
          >
            View{' '}
            <i className="text-7xl devicon-linkedin-plain-wordmark leading-0 mx-1 relative  top-[1px]">
              <span className="sr-only">LinkedIn</span>
            </i>
            Profile
          </a>
          <Link
            to="contact"
            smooth={true}
            offset={-54}
            duration={1000}
            href="#contact"
            className="focus:outline-none inline-flex items-center py-3 mb-2 text-center transition duration-300 ease-in-out border border-[inherit] rounded-full px-9 hover:bg-white hover:border-white focus:bg-white focus:border-white hover:text-black focus:text-black"
          >
            Let’s Talk
          </Link>
        </div>
      </section>

      <section
        id="work"
        className="relative flex items-center overflow-hidden text-center work text-slate-800"
      >
        <h2 className="top-1/2 z-10 absolute uppercase space-x-0 font-medium tracking-[4px] text-xl -rotate-90 origin-center w-0 overflow-visible flex justify-center whitespace-nowrap h-0 ml-1">
          Work
        </h2>
        <div className="lg:py-32 mx-auto w-3xl max-w-[calc(100%-3.25rem)] px-2 py-10">
          <h3 className="mb-12 text-4xl sm:text-5xl tracking-wide font-extralight">
            Some Featured&nbsp;Projects
          </h3>
          <div className="flex justify-center pb-10 text-left">
            <Swiper
              modules={[Navigation, Pagination, Controller]}
              initialSlide={1}
              slidesPerView={3}
              centeredSlides={true}
              loop
              loopedSlides={2}
              touchRatio={0.001}
              className="overflow-visible swiper-container swiper--carousel--work relative w-[226vw] max-w-[270.25rem] lg:h-[28.125rem] xl:h-[37.5rem] mx-[-75vw]"
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
              }}
              keyboard={{
                enabled: true,
              }}
            >
              <SwiperSlide
                key="1"
                className="[&>.swiper-slide-inner>.content]:opacity-30 [&>.swiper-slide-inner>.content]:transition-opacity  [&>.swiper-slide-inner>.content]:duration-200 [&.swiper-slide-active>.swiper-slide-inner]:scale-100 [&.swiper-slide-active>.swiper-slide-inner]:bg-[#fc0] [&.swiper-slide-active>.swiper-slide-inner>.content]:opacity-100 [&.swiper-slide-active:hover_.image-set:after]:opacity-100 [&>.swiper-slide-inner]:transition-all [&>.swiper-slide-inner]:ease-linear [&>.swiper-slide-inner]:duration-200 [&.swiper-slide-active>.swiper-slide-inner]:delay-500"
              >
                <div className="swiper-slide-inner scale-90 flex bg-white overflow-hidden lg:h-[28.125rem] xl:h-[37.5rem]">
                  <div className="relative w-full content content--flagship lg:flex ">
                    <div className="mt-6 images relative lg:mt-0 flex justify-center items-center flex-fill w-full before:content-[''] before:pb-[calc(606_/_1056_*_100%)]">
                      <div
                        className="
                        image-set
                        before:overlay
                        after:overlay

                        before:z-10
                        after:z-10

                        before:bg-[url('https://res.cloudinary.com/gcmcafee/image/upload/f_auto/v1659859248/portfolio/projects/devices-flagship.png')] 
                        after:bg-[url('https://res.cloudinary.com/gcmcafee/image/upload/f_auto/v1659859248/portfolio/projects/devices-flagship.png')]
                        
                        
                        before:bg-no-repeat
                        after:bg-no-repeat
                        
                        before:bg-center
                        after:bg-center

                        
                        after:opacity-0
                        after:hidden
                        after:transition-opacity
                        

                        lg:before:bg-left
                        lg:after:bg-left
                        
                        lg:before:mix-blend-multiply
                        lg:before:filter
                        lg:before:grayscale
                        
                        lg:after:block

                        before:bg-[95%_auto]
                        after:bg-[95%_auto]

                        lg:before:bg-[40.625rem_auto]
                        lg:after:bg-[40.625rem_auto]

                        xl:before:bg-[53.125rem_auto]
                        xl:after:bg-[53.125rem_auto]

                      
                      
                      
                      "
                      ></div>
                    </div>
                    <div className="flex flex-col order-first max-w-sm m-4 lg:mt-6 xl:m-12">
                      <h4 className="mb-2 text-3xl">
                        Flagship Cruises & Events
                      </h4>
                      <p className="mb-6 text-xl font-light">
                        Founded in 1915, Flagship Cruises & Events is San
                        Diego’s only locally - and family-owned yacht charter,
                        cruise, and event&nbsp;company.
                      </p>
                      <div className="mt-auto mb-4 tech">
                        <h5 className="mb-4 text-xl h5">
                          Front End Development, UX&nbsp;Development
                        </h5>
                        <ul className="systems list-none flex text-[2.25rem] mb-3">
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="drupal"
                              placement="top"
                              overlay={<Tooltip id="drupal">Drupal</Tooltip>}
                            >
                              <i className="devicon-drupal-plain">
                                <span className="sr-only">Drupal</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="bootstrap"
                              placement="top"
                              overlay={
                                <Tooltip id="bootstrap">Bootstrap</Tooltip>
                              }
                            >
                              <i className="fab fa-bootstrap">
                                <span className="sr-only">Bootstrap</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="git"
                              placement="top"
                              overlay={<Tooltip id="git">Git</Tooltip>}
                            >
                              <i className="devicon-git-plain">
                                <span className="sr-only">Git</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="photoshop"
                              placement="top"
                              overlay={
                                <Tooltip id="photoshop">Photoshop</Tooltip>
                              }
                            >
                              <i className="devicon-photoshop-plain">
                                <span className="sr-only">Photoshop</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                        </ul>
                        <ul className="languages-libraries list-none flex text-[2.25rem] mb-3">
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="html5"
                              placement="top"
                              overlay={<Tooltip id="html5">HTML</Tooltip>}
                            >
                              <i className="devicon-html5-plain">
                                <span className="sr-only">HTML5</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="css"
                              placement="top"
                              overlay={<Tooltip id="css">CSS</Tooltip>}
                            >
                              <i className="devicon-css3-plain">
                                <span className="sr-only">CSS</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="less"
                              placement="top"
                              overlay={<Tooltip id="less">Less</Tooltip>}
                            >
                              <i className="devicon-less-plain-wordmark">
                                <span className="sr-only">Less</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="javascript"
                              placement="top"
                              overlay={
                                <Tooltip id="javascript">JavaScript</Tooltip>
                              }
                            >
                              <i className="devicon-javascript-plain">
                                <span className="sr-only">JavaScript</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="jquery"
                              placement="top"
                              overlay={<Tooltip id="jquery">jQuery</Tooltip>}
                            >
                              <i className="devicon-jquery-plain">
                                <span className="sr-only">jQuery</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="php"
                              placement="top"
                              overlay={<Tooltip id="php">PHP</Tooltip>}
                            >
                              <i className="devicon-php-plain">
                                <span className="sr-only">PHP</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <a
                          className="link-overlay-after after:overlay after:z-20 after:left-0 after:top-6 after:bottom-auto after:pb-[calc(606_/_1056_*_100%)] lg:after:left-[calc(400px_+_6rem)] lg:after:top-0 lg:after:pb-0 lg:after:bottom-0 hover:after:opacity-100 hover:cursor hover:cursor-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2048%2048%22%20width%3D%2248px%22%20height%3D%2248px%22%3E%0A%3Cg%20id%3D%22surface18184158%22%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3Argb(100%25%2C100%25%2C100%25)%3Bfill-opacity%3A1%3B%22%20d%3D%22M%2024%2042%20C%2014.058594%2042%206%2033.941406%206%2024%20C%206%2014.058594%2014.058594%206%2024%206%20C%2033.941406%206%2042%2014.058594%2042%2024%20C%2042%2033.941406%2033.941406%2042%2024%2042%20Z%20M%2024%2042%20%22%2F%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3A%23212529%3Bfill-opacity%3A1%3B%22%20d%3D%22M%2024%204%20C%2012.953125%204%204%2012.953125%204%2024%20C%204%2035.046875%2012.953125%2044%2024%2044%20C%2035.046875%2044%2044%2035.046875%2044%2024%20C%2044%2012.953125%2035.046875%204%2024%204%20Z%20M%2034%2026%20L%2026%2026%20L%2026%2034%20L%2022%2034%20L%2022%2026%20L%2014%2026%20L%2014%2022%20L%2022%2022%20L%2022%2014%20L%2026%2014%20L%2026%2022%20L%2034%2022%20Z%20M%2034%2026%20%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E')_16_16,_pointer] inline-flex items-center py-3 mb-2 text-center transition duration-300 ease-in-out border border-black rounded-full px-9 hover:bg-white hover:border-white focus:bg-white focus:border-white focus:outline-none"
                          href="https://flagshipsd.com/"
                        >
                          View Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide
                key="2"
                className="[&>.swiper-slide-inner>.content]:opacity-30 [&>.swiper-slide-inner>.content]:transition-opacity  [&>.swiper-slide-inner>.content]:duration-200 [&.swiper-slide-active>.swiper-slide-inner]:scale-100 [&.swiper-slide-active>.swiper-slide-inner]:bg-[#fc0] [&.swiper-slide-active>.swiper-slide-inner>.content]:opacity-100 [&.swiper-slide-active:hover_.image-set:after]:opacity-100 [&>.swiper-slide-inner]:transition-all [&>.swiper-slide-inner]:ease-linear [&>.swiper-slide-inner]:duration-200  [&.swiper-slide-active>.swiper-slide-inner]:delay-500"
              >
                <div className="swiper-slide-inner scale-90 flex bg-white overflow-hidden lg:h-[28.125rem] xl:h-[37.5rem]">
                  <div className="relative w-full content content--foresight lg:flex">
                    <div className="mt-6 images relative lg:mt-0 flex justify-center items-center flex-fill w-full before:content-[''] before:pb-[calc(606_/_1056_*_100%)]">
                      <div
                        className="
                          image-set
                          before:overlay
                          after:overlay

                          before:z-10
                          after:z-10

                          before:bg-[url('https://res.cloudinary.com/gcmcafee/image/upload/f_auto/v1659859248/portfolio/projects/devices-foresight.png')]
                          after:bg-[url('https://res.cloudinary.com/gcmcafee/image/upload/f_auto/v1659859248/portfolio/projects/devices-foresight.png')]
                          
                          
                          before:bg-no-repeat
                          after:bg-no-repeat
                          
                          before:bg-center
                          after:bg-center

                          
                          after:opacity-0
                          after:hidden
                          after:transition-opacity
                          
                      
                          lg:before:bg-left
                          lg:after:bg-left
                          
                          lg:before:mix-blend-multiply
                          lg:before:filter
                          lg:before:grayscale
                          lg:before:contrast-90
                          
                          lg:after:block

                          before:bg-[95%_auto]
                          after:bg-[95%_auto]

                          lg:before:bg-[40.625rem_auto]
                          lg:after:bg-[40.625rem_auto]

                          xl:before:bg-[53.125rem_auto]
                          xl:after:bg-[53.125rem_auto]

                          
                       "
                      ></div>
                    </div>
                    <div className="flex flex-col order-first max-w-sm m-4 filter lg:mt-6 xl:m-12">
                      <h4 className="mb-2 text-3xl">Foresight Sports</h4>
                      <p className="mb-6 text-xl font-light">
                        Makers of the world’s most advanced and trusted golf
                        launch monitors, simulators, and range solutions –
                        including the award‑winning&nbsp;GCQuad™.
                      </p>
                      <div className="mt-auto mb-4 tech">
                        <h5 className="mb-4 text-xl h5">
                          Front End Development, UX&nbsp;Development
                        </h5>

                        <ul className="systems list-none flex text-[2.25rem] mb-3">
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="drupal"
                              placement="top"
                              overlay={<Tooltip id="drupal">Drupal</Tooltip>}
                            >
                              <i className="devicon-drupal-plain">
                                <span className="sr-only">Drupal</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="shopify"
                              placement="top"
                              overlay={<Tooltip id="shopify">Shopify</Tooltip>}
                            >
                              <span className="inline-flex justify-center">
                                <svg
                                  className="h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"></path>
                                </svg>
                              </span>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="bootstrap"
                              placement="top"
                              overlay={
                                <Tooltip id="bootstrap">Bootstrap</Tooltip>
                              }
                            >
                              <i className="fab fa-bootstrap">
                                <span className="sr-only">Bootstrap</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="git"
                              placement="top"
                              overlay={<Tooltip id="git">Git</Tooltip>}
                            >
                              <i className="devicon-git-plain">
                                <span className="sr-only">Git</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="photoshop"
                              placement="top"
                              overlay={
                                <Tooltip id="photoshop">Photoshop</Tooltip>
                              }
                            >
                              <i className="devicon-photoshop-plain">
                                <span className="sr-only">Photoshop</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="figma"
                              placement="top"
                              overlay={<Tooltip id="figma">Figma</Tooltip>}
                            >
                              <i
                                className="devicon-figma-plain"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Figma"
                              >
                                <span className="sr-only">Figma</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="api"
                              placement="top"
                              overlay={<Tooltip id="api">RESTful APIs</Tooltip>}
                            >
                              <span
                                className="flex"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="RESTful APIs"
                              >
                                <svg
                                  className="h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9 fill-current"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 640 512"
                                >
                                  <path d="M286.3 155.1C287.4 161.9 288 168.9 288 175.1C288 183.1 287.4 190.1 286.3 196.9L308.5 216.7C315.5 223 318.4 232.1 314.7 241.7C312.4 246.1 309.9 252.2 307.1 257.2L304 262.6C300.1 267.6 297.7 272.4 294.2 277.1C288.5 284.7 278.5 287.2 269.5 284.2L241.2 274.9C230.5 283.8 218.3 290.9 205 295.9L198.1 324.9C197 334.2 189.8 341.6 180.4 342.8C173.7 343.6 166.9 344 160 344C153.1 344 146.3 343.6 139.6 342.8C130.2 341.6 122.1 334.2 121 324.9L114.1 295.9C101.7 290.9 89.5 283.8 78.75 274.9L50.53 284.2C41.54 287.2 31.52 284.7 25.82 277.1C22.28 272.4 18.98 267.5 15.94 262.5L12.92 257.2C10.13 252.2 7.592 247 5.324 241.7C1.62 232.1 4.458 223 11.52 216.7L33.7 196.9C32.58 190.1 31.1 183.1 31.1 175.1C31.1 168.9 32.58 161.9 33.7 155.1L11.52 135.3C4.458 128.1 1.62 119 5.324 110.3C7.592 104.1 10.13 99.79 12.91 94.76L15.95 89.51C18.98 84.46 22.28 79.58 25.82 74.89C31.52 67.34 41.54 64.83 50.53 67.79L78.75 77.09C89.5 68.25 101.7 61.13 114.1 56.15L121 27.08C122.1 17.8 130.2 10.37 139.6 9.231C146.3 8.418 153.1 8 160 8C166.9 8 173.7 8.418 180.4 9.23C189.8 10.37 197 17.8 198.1 27.08L205 56.15C218.3 61.13 230.5 68.25 241.2 77.09L269.5 67.79C278.5 64.83 288.5 67.34 294.2 74.89C297.7 79.56 300.1 84.42 304 89.44L307.1 94.83C309.9 99.84 312.4 105 314.7 110.3C318.4 119 315.5 128.1 308.5 135.3L286.3 155.1zM160 127.1C133.5 127.1 112 149.5 112 175.1C112 202.5 133.5 223.1 160 223.1C186.5 223.1 208 202.5 208 175.1C208 149.5 186.5 127.1 160 127.1zM484.9 478.3C478.1 479.4 471.1 480 464 480C456.9 480 449.9 479.4 443.1 478.3L423.3 500.5C416.1 507.5 407 510.4 398.3 506.7C393 504.4 387.8 501.9 382.8 499.1L377.4 496C372.4 492.1 367.6 489.7 362.9 486.2C355.3 480.5 352.8 470.5 355.8 461.5L365.1 433.2C356.2 422.5 349.1 410.3 344.1 397L315.1 390.1C305.8 389 298.4 381.8 297.2 372.4C296.4 365.7 296 358.9 296 352C296 345.1 296.4 338.3 297.2 331.6C298.4 322.2 305.8 314.1 315.1 313L344.1 306.1C349.1 293.7 356.2 281.5 365.1 270.8L355.8 242.5C352.8 233.5 355.3 223.5 362.9 217.8C367.6 214.3 372.5 210.1 377.5 207.9L382.8 204.9C387.8 202.1 392.1 199.6 398.3 197.3C407 193.6 416.1 196.5 423.3 203.5L443.1 225.7C449.9 224.6 456.9 224 464 224C471.1 224 478.1 224.6 484.9 225.7L504.7 203.5C511 196.5 520.1 193.6 529.7 197.3C535 199.6 540.2 202.1 545.2 204.9L550.5 207.9C555.5 210.1 560.4 214.3 565.1 217.8C572.7 223.5 575.2 233.5 572.2 242.5L562.9 270.8C571.8 281.5 578.9 293.7 583.9 306.1L612.9 313C622.2 314.1 629.6 322.2 630.8 331.6C631.6 338.3 632 345.1 632 352C632 358.9 631.6 365.7 630.8 372.4C629.6 381.8 622.2 389 612.9 390.1L583.9 397C578.9 410.3 571.8 422.5 562.9 433.2L572.2 461.5C575.2 470.5 572.7 480.5 565.1 486.2C560.4 489.7 555.6 492.1 550.6 496L545.2 499.1C540.2 501.9 534.1 504.4 529.7 506.7C520.1 510.4 511 507.5 504.7 500.5L484.9 478.3zM512 352C512 325.5 490.5 304 464 304C437.5 304 416 325.5 416 352C416 378.5 437.5 400 464 400C490.5 400 512 378.5 512 352z"></path>
                                </svg>
                                <span className="sr-only">RESTful APIs</span>
                              </span>
                            </OverlayTrigger>
                          </li>
                        </ul>
                        <ul className="languages-libraries list-none flex text-[2.25rem] mb-3">
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="html5"
                              placement="top"
                              overlay={<Tooltip id="html5">HTML</Tooltip>}
                            >
                              <i className="devicon-html5-plain">
                                <span className="sr-only">HTML5</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="css"
                              placement="top"
                              overlay={<Tooltip id="css">CSS</Tooltip>}
                            >
                              <i className="devicon-css3-plain">
                                <span className="sr-only">CSS</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="sass"
                              placement="top"
                              overlay={<Tooltip id="sass">Sass</Tooltip>}
                            >
                              <i className="devicon-sass-original">
                                <span className="sr-only">Sass</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="javascript"
                              placement="top"
                              overlay={
                                <Tooltip id="javascript">JavaScript</Tooltip>
                              }
                            >
                              <i className="devicon-javascript-plain">
                                <span className="sr-only">JavaScript</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="jquery"
                              placement="top"
                              overlay={<Tooltip id="jquery">jQuery</Tooltip>}
                            >
                              <i className="devicon-jquery-plain">
                                <span className="sr-only">jQuery</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="handlebars"
                              placement="top"
                              overlay={
                                <Tooltip id="handlebars">Handlebars</Tooltip>
                              }
                            >
                              <i
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Handlebars"
                                className="devicon-handlebars-plain"
                              >
                                <span className="sr-only">Handlebars</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="php"
                              placement="top"
                              overlay={<Tooltip id="php">PHP</Tooltip>}
                            >
                              <i className="devicon-php-plain">
                                <span className="sr-only">PHP</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <a
                          className="link-overlay-after after:overlay after:z-20 after:left-0 after:top-6 after:bottom-auto after:pb-[calc(606_/_1056_*_100%)] lg:after:left-[calc(400px_+_6rem)] lg:after:top-0 lg:after:pb-0 lg:after:bottom-0 hover:after:opacity-100 hover:cursor hover:cursor-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2048%2048%22%20width%3D%2248px%22%20height%3D%2248px%22%3E%0A%3Cg%20id%3D%22surface18184158%22%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3Argb(100%25%2C100%25%2C100%25)%3Bfill-opacity%3A1%3B%22%20d%3D%22M%2024%2042%20C%2014.058594%2042%206%2033.941406%206%2024%20C%206%2014.058594%2014.058594%206%2024%206%20C%2033.941406%206%2042%2014.058594%2042%2024%20C%2042%2033.941406%2033.941406%2042%2024%2042%20Z%20M%2024%2042%20%22%2F%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3A%23212529%3Bfill-opacity%3A1%3B%22%20d%3D%22M%2024%204%20C%2012.953125%204%204%2012.953125%204%2024%20C%204%2035.046875%2012.953125%2044%2024%2044%20C%2035.046875%2044%2044%2035.046875%2044%2024%20C%2044%2012.953125%2035.046875%204%2024%204%20Z%20M%2034%2026%20L%2026%2026%20L%2026%2034%20L%2022%2034%20L%2022%2026%20L%2014%2026%20L%2014%2022%20L%2022%2022%20L%2022%2014%20L%2026%2014%20L%2026%2022%20L%2034%2022%20Z%20M%2034%2026%20%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E')_16_16,_pointer] inline-flex items-center py-3 mb-2 text-center transition duration-300 ease-in-out border border-black rounded-full px-9 hover:bg-white hover:border-white focus:bg-white focus:border-white focus:outline-none"
                          href="https://foresightsports.com"
                        >
                          View Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide
                key="3"
                className="[&>.swiper-slide-inner>.content]:opacity-30 [&>.swiper-slide-inner>.content]:transition-opacity  [&>.swiper-slide-inner>.content]:duration-200 [&.swiper-slide-active>.swiper-slide-inner]:scale-100 [&.swiper-slide-active>.swiper-slide-inner]:bg-[#fc0] [&.swiper-slide-active>.swiper-slide-inner>.content]:opacity-100 [&.swiper-slide-active:hover_.image-set:after]:opacity-100 [&>.swiper-slide-inner]:transition-all [&>.swiper-slide-inner]:ease-linear [&>.swiper-slide-inner]:duration-200  [&.swiper-slide-active>.swiper-slide-inner]:delay-500"
              >
                <div className="swiper-slide-inner scale-90 flex bg-white overflow-hidden lg:h-[28.125rem] xl:h-[37.5rem]">
                  <div className="relative w-full content content--georges lg:flex">
                    <div className="mt-6 images relative lg:mt-0 flex justify-center items-center flex-fill w-full before:content-[''] before:pb-[calc(606_/_1056_*_100%)]">
                      <div
                        className="                  
                      
                      
                      image-set
                      before:overlay
                      after:overlay

                      before:z-10
                      after:z-10

                      before:bg-[url('https://res.cloudinary.com/gcmcafee/image/upload/f_auto/v1659859248/portfolio/projects/devices-georges.png')] 
                      after:bg-[url('https://res.cloudinary.com/gcmcafee/image/upload/f_auto/v1659859248/portfolio/projects/devices-georges.png')]
                      
                      
                      before:bg-no-repeat
                      after:bg-no-repeat
                      
                      before:bg-center
                      after:bg-center

                      
                      after:opacity-0
                      after:hidden
                      after:transition-opacity
                      
                  
                      lg:before:bg-left
                      lg:after:bg-left
                      lg:before:transition-none
                      
                      lg:before:mix-blend-multiply
                      lg:before:filter
                      lg:before:grayscale
                      lg:before:contrast-90
                      
                      lg:after:block

                      before:bg-[95%_auto]
                      after:bg-[95%_auto]

                      lg:before:bg-[40.625rem_auto]
                      lg:after:bg-[40.625rem_auto]

                      xl:before:bg-[53.125rem_auto]
                      xl:after:bg-[53.125rem_auto]

                    
                    
                    
                    
                      
                      
                      "
                      ></div>
                    </div>
                    <div className="flex flex-col order-first max-w-sm m-4 lg:mt-6 xl:m-12">
                      <h4 className="mb-2 text-3xl">George’s at the Cove</h4>
                      <p className="mb-6 text-xl font-light">
                        George’s at the Cove is an award-winning three-level
                        dining destination located in the heart of La Jolla
                        overlooking the Pacific&nbsp;Ocean.
                      </p>
                      <div className="mt-auto mb-4 tech">
                        <h5 className="mb-4 text-xl h5">
                          Front End Development, UX&nbsp;Development
                        </h5>
                        <ul className="systems list-none flex text-[2.25rem] mb-3">
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="drupal"
                              placement="top"
                              overlay={<Tooltip id="drupal">Drupal</Tooltip>}
                            >
                              <i className="devicon-drupal-plain">
                                <span className="sr-only">Drupal</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="bootstrap"
                              placement="top"
                              overlay={
                                <Tooltip id="bootstrap">Bootstrap</Tooltip>
                              }
                            >
                              <i className="fab fa-bootstrap">
                                <span className="sr-only">Bootstrap</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="git"
                              placement="top"
                              overlay={<Tooltip id="git">Git</Tooltip>}
                            >
                              <i className="devicon-git-plain">
                                <span className="sr-only">Git</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="photoshop"
                              placement="top"
                              overlay={
                                <Tooltip id="photoshop">Photoshop</Tooltip>
                              }
                            >
                              <i className="devicon-photoshop-plain">
                                <span className="sr-only">Photoshop</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                        </ul>
                        <ul className="languages-libraries list-none flex text-[2.25rem] mb-3">
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="html5"
                              placement="top"
                              overlay={<Tooltip id="html5">HTML</Tooltip>}
                            >
                              <i className="devicon-html5-plain">
                                <span className="sr-only">HTML5</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="css"
                              placement="top"
                              overlay={<Tooltip id="css">CSS</Tooltip>}
                            >
                              <i className="devicon-css3-plain">
                                <span className="sr-only">CSS</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="less"
                              placement="top"
                              overlay={<Tooltip id="less">Less</Tooltip>}
                            >
                              <i className="devicon-less-plain-wordmark">
                                <span className="sr-only">Less</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="javascript"
                              placement="top"
                              overlay={
                                <Tooltip id="javascript">JavaScript</Tooltip>
                              }
                            >
                              <i className="devicon-javascript-plain">
                                <span className="sr-only">JavaScript</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="jquery"
                              placement="top"
                              overlay={<Tooltip id="jquery">jQuery</Tooltip>}
                            >
                              <i className="devicon-jquery-plain">
                                <span className="sr-only">jQuery</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                          <li className="inline-flex justify-center mr-2 h-7 w-7 text-3xl sm:text-4xl sm:w-9 sm:h-9">
                            <OverlayTrigger
                              key="php"
                              placement="top"
                              overlay={<Tooltip id="php">PHP</Tooltip>}
                            >
                              <i className="devicon-php-plain">
                                <span className="sr-only">PHP</span>
                              </i>
                            </OverlayTrigger>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <a
                          className="link-overlay-after after:overlay after:z-20 after:left-0 after:top-6 after:bottom-auto after:pb-[calc(606_/_1056_*_100%)] lg:after:left-[calc(400px_+_6rem)] lg:after:top-0 lg:after:pb-0 lg:after:bottom-0 hover:after:opacity-100 hover:cursor hover:cursor-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2048%2048%22%20width%3D%2248px%22%20height%3D%2248px%22%3E%0A%3Cg%20id%3D%22surface18184158%22%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3Argb(100%25%2C100%25%2C100%25)%3Bfill-opacity%3A1%3B%22%20d%3D%22M%2024%2042%20C%2014.058594%2042%206%2033.941406%206%2024%20C%206%2014.058594%2014.058594%206%2024%206%20C%2033.941406%206%2042%2014.058594%2042%2024%20C%2042%2033.941406%2033.941406%2042%2024%2042%20Z%20M%2024%2042%20%22%2F%3E%0A%3Cpath%20style%3D%22%20stroke%3Anone%3Bfill-rule%3Anonzero%3Bfill%3A%23212529%3Bfill-opacity%3A1%3B%22%20d%3D%22M%2024%204%20C%2012.953125%204%204%2012.953125%204%2024%20C%204%2035.046875%2012.953125%2044%2024%2044%20C%2035.046875%2044%2044%2035.046875%2044%2024%20C%2044%2012.953125%2035.046875%204%2024%204%20Z%20M%2034%2026%20L%2026%2026%20L%2026%2034%20L%2022%2034%20L%2022%2026%20L%2014%2026%20L%2014%2022%20L%2022%2022%20L%2022%2014%20L%2026%2014%20L%2026%2022%20L%2034%2022%20Z%20M%2034%2026%20%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E')_16_16,_pointer] inline-flex items-center py-3 mb-2 text-center transition duration-300 ease-in-out border border-black rounded-full px-9 hover:bg-white hover:border-white focus:bg-white focus:border-white focus:outline-none"
                          href="https://georgesatthecove.com/"
                        >
                          View Website
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <div
                className="absolute left-0 z-10 w-full text-center transition-opacity duration-300 swiper-pagination mt-4 lg:mt-7 transform-gpu flex items-center justify-center
               
                [&>.swiper-pagination-bullet]:w-0
                [&>.swiper-pagination-bullet]:h-0
                [&>.swiper-pagination-bullet]:mx-[.6875rem]
                [&>.swiper-pagination-bullet]:inline-flex   
                [&>.swiper-pagination-bullet]:justify-center   
                [&>.swiper-pagination-bullet]:items-center

                [&>.swiper-pagination-bullet:hover]:cursor-pointer
                [&>.swiper-pagination-bullet:hover]:after:bg-sky-400
                [&>.swiper-pagination-bullet:focus]:after:bg-sky-400
                [&>.swiper-pagination-bullet:hover]:after:shadow-none
                [&>.swiper-pagination-bullet:focus]:after:shadow-none
             
                
                [&>.swiper-pagination-bullet]:after:content-['']
                [&>.swiper-pagination-bullet]:after:inline-flex
                [&>.swiper-pagination-bullet]:after:h-[.625rem]
                [&>.swiper-pagination-bullet]:after:w-[.625rem]
                [&>.swiper-pagination-bullet]:after:bg-[rgba(255,255,255,0.4)]
                [&>.swiper-pagination-bullet]:after:transition-all
                [&>.swiper-pagination-bullet]:after:duration-300
                [&>.swiper-pagination-bullet]:after:shadow-[0_0_0_.0625rem_rgba(0,0,0,0.2)]
                [&>.swiper-pagination-bullet]:after:rounded-full
                [&>.swiper-pagination-bullet]:after:absolute


                [&>.swiper-pagination-bullet.swiper-pagination-bullet-active]:after:bg-sky-400
                [&>.swiper-pagination-bullet.swiper-pagination-bullet-active]:after:shadow-none
                [&>.swiper-pagination-bullet.swiper-pagination-bullet-active]:after:w-4
                [&>.swiper-pagination-bullet.swiper-pagination-bullet-active]:after:h-4
              "
              ></div>
              <div className="swiper-button-prev absolute top-1/2 flex items-center justify-center z-10 text-4xl cursor-pointer before:content-['←'] left-[calc(33%_-_20px)]"></div>
              <div className="swiper-button-next absolute top-1/2 flex items-center justify-center z-10 text-4xl cursor-pointer before:content-['→'] right-[calc(33%_-_20px)]"></div>
            </Swiper>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative about text-slate-800 bg-slate-900/10"
      >
        <h2 className="top-1/2 z-10 absolute uppercase space-x-0 font-medium tracking-[4px] text-xl -rotate-90 origin-center w-0 overflow-visible flex justify-center whitespace-nowrap h-0 ml-1">
          About
        </h2>
        <div className="lg:py-32 mx-auto w-6xl max-w-[calc(100%-3.25rem)] py-10 px-3">
          <div className="flex flex-col items-center justify-center lg:flex-row item-center gap-x-16">
            <div className="inline-flex justify-center flex-shrink p-2 mx-auto mb-8 text-center border border-gray-400 rounded-full lg:mb-0">
              <img
                className="rounded-full w-80 lg:w-96 h-auto max-w-[64vw]"
                src="https://res.cloudinary.com/gcmcafee/image/upload/v1641259859/portfolio/cody-mcafee.webp"
                alt="Headshot Cody McAfee"
              />
            </div>
            <div className="flex justify-center flex-grow">
              <div className="max-w-xl lg:max-w-2xl">
                <h3 className="mb-5 text-4xl sm:text-5xl tracking-wide font-extralight">
                  A Bit About Myself
                </h3>
                <p className="text-[1.35rem] font-light leading-8 mb-7 ">
                  I’m a Front End Developer and UX advocate with over 10 years
                  experience in the field. Through freelance and agency work,
                  I’ve had the pleasure of working with a great deal of people
                  and organizations on a wide variety of projects. Originally
                  from Seattle, I lived in Phoenix for 5 years before relocating
                  to San Diego. Beyond the web I’m a big fan of off-roading,
                  gardening and the{' '}
                  <span className="inline-block">National Park system</span>.
                </p>
                <a
                  href="https://www.linkedin.com/in/codymcafee"
                  className="focus:outline-none inline-flex items-center py-3 mb-2 mr-4 text-center transition duration-300 ease-in-out border rounded-full border-sky-400 bg-sky-400 px-9 text-slate-900 hover:text-white hover:bg-sky-600 hover:border-sky-600 focus:text-white focus:bg-sky-600 focus:border-sky-600"
                >
                  View{' '}
                  <i className="text-7xl devicon-linkedin-plain-wordmark leading-0 mx-1 relative  top-[1px]">
                    <span className="sr-only">LinkedIn</span>
                  </i>
                  Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {clients.length > 0 && <Clients clients={clients} />}

      <section
        id="contact"
        className="relative flex items-center text-center contact text-slate-800"
      >
        <h2 className="top-1/2 z-10 absolute uppercase space-x-0 font-medium tracking-[.25rem] text-xl -rotate-90 origin-center w-0 overflow-visible flex justify-center whitespace-nowrap h-0 ml-1">
          Contact
        </h2>
        <div className="lg:py-32 mx-auto w-3xl max-w-[calc(100%-3.25rem)] px-3 py-10 ">
          <h3 className="mb-5 text-4xl sm:text-5xl tracking-wide font-extralight">
            Get In Touch
          </h3>
          <p className="text-[1.35rem] font-light leading-8 mb-7">
            Got a question, proposal or just want to say hello?
            <br className="block" /> Kindly fill out the form below and I will
            get back to you&nbsp;shortly.
          </p>
          <form
            action="https://formspree.io/f/mpzkvljk"
            method="POST"
            className="text-left"
          >
            <div className="relative mb-4">
              <input
                name="name"
                type="text"
                className="w-full px-5 pb-3 border border-slate-300 pt-7 peer focus:pt-7 focus:px-5 focus:pb-3 placeholder:text-transparent placeholder-shown:p-5 focus:ring-sky-400 focus:border-sky-400 focus:outline-none "
                id="full-name"
                placeholder="Name"
                required
              />
              <label
                className="p-5 absolute h-full w-full overflow-hidden whitespace-nowrap pointer-events-none transition-all duration-100 ease-in-out -top-1 left-1.5 opacity-60 scale-75 peer-focus:-top-1 peer-focus:left-1.5 peer-focus:opacity-60 peer-focus:scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:top-0 peer-placeholder-shown:left-0 peer-placeholder-shown:opacity-100 "
                htmlFor="full-name"
              >
                Name
                <span className="text-xs text-red-500 relative -top-1 ml-[2px]">
                  *
                </span>
              </label>
            </div>
            <div className="relative mb-4">
              <input
                name="_replyto"
                type="email"
                className="w-full px-5 pb-3 border border-slate-300 pt-7 peer focus:pt-7 focus:px-5 focus:pb-3 placeholder:text-transparent placeholder-shown:p-5 focus:ring-sky-400 focus:border-sky-400 focus:outline-none "
                id="email-address"
                placeholder="name@example.com"
              />
              <label
                className="p-5 absolute h-full w-full overflow-hidden whitespace-nowrap pointer-events-none transition-all duration-100 ease-in-out -top-1 left-1.5 opacity-60 scale-75 peer-focus:-top-1 peer-focus:left-1.5 peer-focus:opacity-60 peer-focus:scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:top-0 peer-placeholder-shown:left-0 peer-placeholder-shown:opacity-100"
                htmlFor="email-address"
              >
                Email
                <span className="text-xs text-red-500 relative -top-1 ml-[2px]">
                  *
                </span>
              </label>
            </div>
            <div className="relative mb-4">
              <textarea
                name="message"
                // @ts-ignore
                rows="5"
                className="w-full px-5 pb-3 border border-slate-300 pt-7 peer focus:pt-7 focus:px-5 focus:pb-3 placeholder:text-transparent placeholder-shown:p-5 focus:ring-sky-400 focus:border-sky-400 focus:outline-none"
                placeholder="Leave a comment here"
                id="message"
                style={{ height: '200px' }}
              ></textarea>
              <label
                className="p-5 absolute h-full w-full overflow-hidden whitespace-nowrap pointer-events-none transition-all duration-100 ease-in-out -top-1 left-1.5 opacity-60 scale-75 peer-focus:-top-1 peer-focus:left-1.5 peer-focus:opacity-60 peer-focus:scale-75 origin-top-left peer-placeholder-shown:scale-100 peer-placeholder-shown:top-0 peer-placeholder-shown:left-0 peer-placeholder-shown:opacity-100"
                htmlFor="message"
              >
                Message
                <span className="text-xs text-red-500 relative -top-1 ml-[2px]">
                  *
                </span>
              </label>
            </div>
            {/* your other form fields go here */}
            <button
              type="submit"
              className="flex items-center justify-center w-full py-3 mb-2 mr-4 text-lg text-center transition duration-300 ease-in-out border rounded-full border-sky-400 bg-sky-400 px-9 text-slate-900 hover:text-white hover:bg-sky-600 hover:border-sky-600 font-semibold focus:outline-none focus:text-white focus:bg-sky-600 focus:border-sky-600 "
            >
              Send Message
            </button>
          </form>
          <div className="mt-6 social">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/codymcafee"
              rel="noreferrer"
              className="hover:bg-white focus:bg-white focus:outline-none rounded-full inline-flex justify-center items-center w-0 h-0 p-6"
            >
              <i className="inline-flex justify-center w-0 h-0 text-[1.35rem] fab fa-linkedin-in items-center">
                <span className="sr-only">LinkedIn</span>
              </i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  const clients = await clientSanity.fetch(`*[_type == "client"]`);

  return {
    props: {
      clients,
    },
  };
}
