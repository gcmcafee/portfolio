"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Footer() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        id: "footer",
        className: "text-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "aside py-1",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "mb-1",
                        children: [
                            "* Produced while employed with Teneleven\xa0Interactive. \xa9\xa02022 Teneleven\xa0Interactive. Third party trademarks are registered trademarks of their respective\xa0owners.",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-nowrap",
                                children: "All Rights Reserved."
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "main py-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container-fluid",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "m-0",
                        children: "\xa9\xa02022 Cody McAfee. All Rights\xa0Reserved."
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-bootstrap/Navbar"
const Navbar_namespaceObject = require("react-bootstrap/Navbar");
var Navbar_default = /*#__PURE__*/__webpack_require__.n(Navbar_namespaceObject);
;// CONCATENATED MODULE: external "react-scroll"
const external_react_scroll_namespaceObject = require("react-scroll");
;// CONCATENATED MODULE: ./components/Header.tsx





function Header() {
    const { 0: expanded , 1: setExpanded  } = (0,external_react_.useState)(false);
    // ESC key pressed -> close open full page navigation
    const detectKeyDown = (e)=>{
        if (e.key === "Escape") {
            setExpanded(false);
        }
    };
    (0,external_react_.useEffect)(()=>{
        // Fires: ESC key pressed -> close open full page navigation
        document.addEventListener("keydown", detectKeyDown, true);
    }, []);
    const { 0: scroll , 1: setScroll  } = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", ()=>{
            setScroll(window.scrollY > 50);
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Cody McAfee | Front End Developer"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "UX-minded front end development with a focus on fluid, lightweight and intuitive web experiences."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "favicon.ico",
                        type: "image/x-icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "favicon.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        sizes: "32x32",
                        href: "favicon-32x32.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        sizes: "57x57",
                        href: "favicon-57x57.png"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        sizes: "72x72",
                        href: "favicon-72x72.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "skip-to-content",
                href: "#main",
                children: "Skip to Content"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()), {
                    expanded: expanded,
                    collapseOnSelect: true,
                    expand: "lg",
                    variant: "dark",
                    id: "navbar",
                    fixed: "top",
                    className: scroll ? "not-top" : "top",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "container-fluid",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "navbar-text me-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_scroll_namespaceObject.Link, {
                                    to: "hello",
                                    smooth: true,
                                    offset: -54,
                                    duration: 500,
                                    href: "/",
                                    children: [
                                        "UX-Minded",
                                        /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                        "Front End Development"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((Navbar_default()).Toggle, {
                                "aria-controls": "navbarTogglee",
                                onClick: ()=>setExpanded(!expanded)
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Navbar_default()).Collapse, {
                                className: "text-center",
                                id: "navbarTogglee",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "overlay",
                                        onClick: ()=>setExpanded(false)
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        id: "nav",
                                        className: "spy-active navbar-nav mx-auto ms-lg-auto me-lg-0 mb-2 mb-lg-0",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                className: "nav-item",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        id: "active-bar",
                                                        className: "d-none d-lg-block"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                                        className: "nav-link justify-content-center flex-fill",
                                                        activeClass: "active",
                                                        to: "hello",
                                                        spy: true,
                                                        smooth: true,
                                                        offset: -54,
                                                        duration: 500,
                                                        onClick: ()=>setExpanded(false),
                                                        href: "#hello",
                                                        children: "Hello"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                                    className: "nav-link justify-content-center flex-fill",
                                                    activeClass: "active",
                                                    to: "work",
                                                    spy: true,
                                                    smooth: true,
                                                    offset: -54,
                                                    duration: 500,
                                                    onClick: ()=>setExpanded(false),
                                                    href: "#work",
                                                    children: "Work"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                                    className: "nav-link justify-content-center flex-fill",
                                                    activeClass: "active",
                                                    to: "about",
                                                    spy: true,
                                                    smooth: true,
                                                    offset: -54,
                                                    duration: 500,
                                                    onClick: ()=>setExpanded(false),
                                                    href: "#about",
                                                    children: "About"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                                    className: "nav-link justify-content-center flex-fill",
                                                    activeClass: "active",
                                                    to: "clients",
                                                    spy: true,
                                                    smooth: true,
                                                    offset: -54,
                                                    duration: 500,
                                                    onClick: ()=>setExpanded(false),
                                                    href: "#clients",
                                                    children: "Clients"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item mt-3 mt-lg-0 ms-lg-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_namespaceObject.Link, {
                                                    className: "nav-link navbar-btn btn btn-primary",
                                                    activeClass: "active",
                                                    to: "contact",
                                                    spy: true,
                                                    smooth: true,
                                                    offset: -54,
                                                    duration: 1000,
                                                    onClick: ()=>setExpanded(false),
                                                    href: "#contact",
                                                    children: "Contact"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};


/***/ }),

/***/ 919:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(591);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(118);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(877);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(879);
/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_sanity__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_3__, swiper__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable react/jsx-key */ /* eslint-disable @next/next/no-img-element */ 







function Home({ clients  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                id: "main",
                className: "main",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "hello",
                        className: "hello d-flex align-items-center bg-secondary text-white h-lg-80",
                        "data-overlay": "7g",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "title-wrapper",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "title position-absolute rotate",
                                    children: "Hello"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "pt-6 pb-5 pt-md-7 pb-md-6 container-fluid content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: "mb-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-uppercase major d-block",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "ms-2",
                                                    children: "Cody"
                                                }),
                                                " McAfee"
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "lead mb-4 mb-sm-5 ml-3",
                                        children: "UX-minded front end development with a focus on fluid, lightweight and intuitive web\xa0experiences."
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                        href: "https://www.linkedin.com/in/codymcafee",
                                        target: "_blank",
                                        className: "btn btn-primary btn-linkedin d-inline-flex align-items-center mb-2",
                                        rel: "noreferrer",
                                        children: [
                                            "View",
                                            " ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "devicon-linkedin-plain-wordmark",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "visually-hidden",
                                                    children: "LinkedIn"
                                                })
                                            }),
                                            "Profile"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "#contact",
                                        className: "btn btn-outline-secondary ms-3 mb-2",
                                        children: "Let’s Talk"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "work",
                        className: "work d-flex align-items-center position-relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "title-wrapper",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "title position-absolute rotate",
                                    children: "Work"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "py-5 pt-lg-7 w-100",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "container-fluid text-center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: "h1 mb-5",
                                            children: "Some Featured\xa0Projects"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "work-body d-flex justify-content-center",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                            modules: [
                                                swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation,
                                                swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination,
                                                swiper__WEBPACK_IMPORTED_MODULE_4__.Controller
                                            ],
                                            initialSlide: 2,
                                            slidesPerView: 3,
                                            centeredSlides: true,
                                            loop: true,
                                            loopedSlides: 2,
                                            touchRatio: 0.001,
                                            className: "swiper-container swiper--carousel--work overflow-visible",
                                            createElements: true,
                                            navigation: {
                                                nextEl: ".swiper-button-next",
                                                prevEl: ".swiper-button-prev"
                                            },
                                            pagination: {
                                                el: ".swiper-pagination",
                                                type: "bullets",
                                                clickable: true
                                            },
                                            keyboard: {
                                                enabled: true
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "swiper-slide-inner",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "content content--foresight w-100 d-lg-flex position-relative",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "images mt-4 mt-lg-0 d-flex justify-content-center align-items-center flex-fill w-100",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "image-set"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "text m-3 mt-lg-4 m-xl-5 d-flex flex-column order-first",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                            children: "Foresight Sports"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "lead mb-4",
                                                                            children: "Makers of the world’s most advanced and trusted golf launch monitors, simulators, and range solutions – including the award‑winning\xa0GCQuad™."
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "tech mt-auto mb-3",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                    className: "h5 mb-3",
                                                                                    children: "Front End Development, UX\xa0Development"
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                    className: "systems list-unstyled d-inline-flex",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-inline-flex justify-content-center me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "devicon-drupal-plain",
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Drupal",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Drupal"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-inline-flex justify-content-center me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "",
                                                                                                "data-bs-original-title": "Shopify",
                                                                                                className: "d-inline-flex justify-content-center",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                                    fill: "#212529",
                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                    viewBox: "0 0 448 512",
                                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                        d: "M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-inline-flex justify-content-center me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "fab fa-bootstrap",
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Bootstrap",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Bootstrap"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-inline-flex justify-content-center me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "devicon-git-plain",
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Git",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Git"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-inline-flex justify-content-center me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "devicon-photoshop-plain",
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Photoshop",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Photoshop"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-inline-flex justify-content-center me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "devicon-figma-plain",
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Figma",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Figma"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-inline-flex justify-content-center me-2",
                                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                                className: "d-flex",
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "RESTful APIs",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                                                        fill: "#212529",
                                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                                        viewBox: "0 0 640 512",
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                                                            d: "M286.3 155.1C287.4 161.9 288 168.9 288 175.1C288 183.1 287.4 190.1 286.3 196.9L308.5 216.7C315.5 223 318.4 232.1 314.7 241.7C312.4 246.1 309.9 252.2 307.1 257.2L304 262.6C300.1 267.6 297.7 272.4 294.2 277.1C288.5 284.7 278.5 287.2 269.5 284.2L241.2 274.9C230.5 283.8 218.3 290.9 205 295.9L198.1 324.9C197 334.2 189.8 341.6 180.4 342.8C173.7 343.6 166.9 344 160 344C153.1 344 146.3 343.6 139.6 342.8C130.2 341.6 122.1 334.2 121 324.9L114.1 295.9C101.7 290.9 89.5 283.8 78.75 274.9L50.53 284.2C41.54 287.2 31.52 284.7 25.82 277.1C22.28 272.4 18.98 267.5 15.94 262.5L12.92 257.2C10.13 252.2 7.592 247 5.324 241.7C1.62 232.1 4.458 223 11.52 216.7L33.7 196.9C32.58 190.1 31.1 183.1 31.1 175.1C31.1 168.9 32.58 161.9 33.7 155.1L11.52 135.3C4.458 128.1 1.62 119 5.324 110.3C7.592 104.1 10.13 99.79 12.91 94.76L15.95 89.51C18.98 84.46 22.28 79.58 25.82 74.89C31.52 67.34 41.54 64.83 50.53 67.79L78.75 77.09C89.5 68.25 101.7 61.13 114.1 56.15L121 27.08C122.1 17.8 130.2 10.37 139.6 9.231C146.3 8.418 153.1 8 160 8C166.9 8 173.7 8.418 180.4 9.23C189.8 10.37 197 17.8 198.1 27.08L205 56.15C218.3 61.13 230.5 68.25 241.2 77.09L269.5 67.79C278.5 64.83 288.5 67.34 294.2 74.89C297.7 79.56 300.1 84.42 304 89.44L307.1 94.83C309.9 99.84 312.4 105 314.7 110.3C318.4 119 315.5 128.1 308.5 135.3L286.3 155.1zM160 127.1C133.5 127.1 112 149.5 112 175.1C112 202.5 133.5 223.1 160 223.1C186.5 223.1 208 202.5 208 175.1C208 149.5 186.5 127.1 160 127.1zM484.9 478.3C478.1 479.4 471.1 480 464 480C456.9 480 449.9 479.4 443.1 478.3L423.3 500.5C416.1 507.5 407 510.4 398.3 506.7C393 504.4 387.8 501.9 382.8 499.1L377.4 496C372.4 492.1 367.6 489.7 362.9 486.2C355.3 480.5 352.8 470.5 355.8 461.5L365.1 433.2C356.2 422.5 349.1 410.3 344.1 397L315.1 390.1C305.8 389 298.4 381.8 297.2 372.4C296.4 365.7 296 358.9 296 352C296 345.1 296.4 338.3 297.2 331.6C298.4 322.2 305.8 314.1 315.1 313L344.1 306.1C349.1 293.7 356.2 281.5 365.1 270.8L355.8 242.5C352.8 233.5 355.3 223.5 362.9 217.8C367.6 214.3 372.5 210.1 377.5 207.9L382.8 204.9C387.8 202.1 392.1 199.6 398.3 197.3C407 193.6 416.1 196.5 423.3 203.5L443.1 225.7C449.9 224.6 456.9 224 464 224C471.1 224 478.1 224.6 484.9 225.7L504.7 203.5C511 196.5 520.1 193.6 529.7 197.3C535 199.6 540.2 202.1 545.2 204.9L550.5 207.9C555.5 210.1 560.4 214.3 565.1 217.8C572.7 223.5 575.2 233.5 572.2 242.5L562.9 270.8C571.8 281.5 578.9 293.7 583.9 306.1L612.9 313C622.2 314.1 629.6 322.2 630.8 331.6C631.6 338.3 632 345.1 632 352C632 358.9 631.6 365.7 630.8 372.4C629.6 381.8 622.2 389 612.9 390.1L583.9 397C578.9 410.3 571.8 422.5 562.9 433.2L572.2 461.5C575.2 470.5 572.7 480.5 565.1 486.2C560.4 489.7 555.6 492.1 550.6 496L545.2 499.1C540.2 501.9 534.1 504.4 529.7 506.7C520.1 510.4 511 507.5 504.7 500.5L484.9 478.3zM512 352C512 325.5 490.5 304 464 304C437.5 304 416 325.5 416 352C416 378.5 437.5 400 464 400C490.5 400 512 378.5 512 352z"
                                                                                                        })
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                        className: "visually-hidden",
                                                                                                        children: "RESTful APIs"
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                    className: "languages-libraries list-unstyled d-inline-flex",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-inline-flex justify-content-center me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "HTML",
                                                                                                className: "devicon-html5-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "HTML5"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-inline-flex justify-content-center me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "CSS",
                                                                                                className: "devicon-css3-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "CSS"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-inline-flex justify-content-center me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Sass",
                                                                                                className: "devicon-sass-original",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Sass"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-inline-flex justify-content-center me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "JavaScript",
                                                                                                className: "devicon-javascript-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "JavaScript"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-inline-flex justify-content-center me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "jQuery",
                                                                                                className: "devicon-jquery-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "jQuery"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-inline-flex justify-content-center me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Handlebars",
                                                                                                className: "devicon-handlebars-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Handlebars"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-inline-flex justify-content-center me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "PHP",
                                                                                                className: "devicon-php-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "PHP"
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                className: "btn btn-outline-secondary link-overlay-after",
                                                                                href: "https://foresightsports.com",
                                                                                target: "blank",
                                                                                children: "View Website"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "swiper-slide-inner",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "content content--flagship w-100 d-lg-flex position-relative",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "images mt-4 mt-lg-0 d-flex justify-content-center align-items-center flex-fill w-100",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "image-set"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "text m-3 mt-lg-4 m-xl-5 d-flex flex-column order-first",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                            children: "Flagship Cruises & Events"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "lead mb-4",
                                                                            children: "Founded in 1915, Flagship Cruises & Events is San Diego’s only locally - and family-owned yacht charter, cruise, and event\xa0company."
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "tech mt-auto mb-3",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                    className: "h5 mb-3",
                                                                                    children: "Front End Development, UX\xa0Development"
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                    className: "systems list-unstyled d-flex",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "devicon-drupal-plain",
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Drupal",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Drupal"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "fab fa-bootstrap",
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Bootstrap",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Bootstrap"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "devicon-git-plain",
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Git",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Git"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "devicon-photoshop-plain",
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Photoshop",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Photoshop"
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                    className: "languages-libraries list-unstyled d-flex",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "HTML",
                                                                                                className: "devicon-html5-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "HTML5"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "CSS",
                                                                                                className: "devicon-css3-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "CSS"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Less",
                                                                                                className: "devicon-less-plain-wordmark",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Less"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "JavaScript",
                                                                                                className: "devicon-javascript-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "JavaScript"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "jQuery",
                                                                                                className: "devicon-jquery-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "jQuery"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "PHP",
                                                                                                className: "devicon-php-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "PHP"
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                className: "btn btn-outline-secondary link-overlay-after",
                                                                                href: "https://flagshipsd.com/",
                                                                                target: "blank",
                                                                                children: "View Website"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "swiper-slide-inner",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "content content--georges w-100 d-lg-flex position-relative",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "images mt-4 mt-lg-0 d-flex justify-content-center align-items-center flex-fill w-100",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "image-set"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "text m-3 mt-lg-4 m-xl-5 d-flex flex-column order-first",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                            children: "George’s at the Cove"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                            className: "lead mb-4",
                                                                            children: "George’s at the Cove is an award-winning three-level dining destination located in the heart of La Jolla overlooking the Pacific\xa0Ocean."
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "tech mt-auto mb-3",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                    className: "h5 mb-3",
                                                                                    children: "Front End Development, UX\xa0Development"
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                    className: "systems list-unstyled d-flex",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "devicon-drupal-plain",
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Drupal",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Drupal"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "fab fa-bootstrap",
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Bootstrap",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Bootstrap"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "devicon-git-plain",
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Git",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Git"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                className: "devicon-photoshop-plain",
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Photoshop",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Photoshop"
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                                    className: "languages-libraries list-unstyled d-flex",
                                                                                    children: [
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "HTML",
                                                                                                className: "devicon-html5-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "HTML5"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "CSS",
                                                                                                className: "devicon-css3-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "CSS"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "Less",
                                                                                                className: "devicon-less-plain-wordmark",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "Less"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "JavaScript",
                                                                                                className: "devicon-javascript-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "JavaScript"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "jQuery",
                                                                                                className: "devicon-jquery-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "jQuery"
                                                                                                })
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                                            className: "d-flex me-2",
                                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                                                "data-bs-toggle": "tooltip",
                                                                                                "data-bs-placement": "top",
                                                                                                title: "PHP",
                                                                                                className: "devicon-php-plain",
                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                    className: "visually-hidden",
                                                                                                    children: "PHP"
                                                                                                })
                                                                                            })
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                className: "btn btn-outline-secondary link-overlay-after",
                                                                                href: "https://georgesatthecove.com/",
                                                                                target: "blank",
                                                                                children: "View Website"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "swiper-pagination"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "swiper-button-prev"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "swiper-button-next"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "about",
                        className: "about d-flex align-items-center position-relative",
                        style: {
                            border: "#999999"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "title-wrapper",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "title position-absolute rotate",
                                    children: "About"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "pt-3 pb-5 pt-lg-5 pb-lg-7 container-fluid content",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "row flex-column flex-lg-row align-items-center justify-content-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-auto text-center p-2 rounded-circle border border-dark border-1 mb-4 mb-lg-0",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: "profile rounded-circle",
                                                src: "https://res.cloudinary.com/gcmcafee/image/upload/v1641259859/portfolio/cody-mcafee.webp",
                                                alt: "Cody McAfee"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col d-flex justify-content-center",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "text",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "mb-3 h1",
                                                        children: "A Bit About\xa0Myself"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "lead mb-4",
                                                        children: "I’m a Front End Developer and UX advocate with over 10\xa0years experience in the field. Through freelance and agency work, I’ve had the pleasure of working with a great deal of people and organizations on a wide variety of projects. Originally from Seattle, I lived in Phoenix for 5 years before relocating to San Diego. Beyond the web I’m a big fan of off-roading, gardening and the National\xa0Park\xa0system."
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                        href: "https://www.linkedin.com/in/codymcafee",
                                                        target: "_blank",
                                                        className: "btn btn-primary btn-linkedin d-inline-flex align-items-center",
                                                        rel: "noreferrer",
                                                        children: [
                                                            "View",
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                className: "devicon-linkedin-plain-wordmark",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "visually-hidden",
                                                                    children: "LinkedIn"
                                                                })
                                                            }),
                                                            " ",
                                                            "Profile"
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    clients.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "clients",
                        className: "clients bg-white position-relative overflow-hidden py-lg-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "title-wrapper",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "title rotate",
                                    children: "Clients"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "py-5",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
                                    modules: [
                                        swiper__WEBPACK_IMPORTED_MODULE_4__.Autoplay
                                    ],
                                    spaceBetween: 100,
                                    speed: 5500,
                                    slidesPerView: "auto",
                                    loop: true,
                                    className: "swiper swiper-container swiper--linear swiper--carousel--clients",
                                    allowTouchMove: false,
                                    autoplay: {
                                        delay: 0
                                    },
                                    children: clients.map((client)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                                            className: "swiper-slide flex-shrink-1 align-self-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                className: client?.class,
                                                src: client?.url,
                                                alt: client?.alt
                                            }, client?._id)
                                        }))
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                        id: "contact",
                        className: "contact d-Flex align-items-center text-center border-bottom border-1 border-dark position-relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "title-wrapper",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: "title position-absolute rotate",
                                    children: "Contact"
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "py-5 py-lg-7 container-fluid content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "h1 mb-2",
                                        children: "Get In Touch"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        className: "lead mb-4",
                                        children: [
                                            "Got a question, proposal or just want to say hello?",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
                                                className: "d-none d-lg-inline-block"
                                            }),
                                            " Kindly fill out the form below and I will get back to you\xa0shortly."
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                                        action: "https://formspree.io/f/mpzkvljk",
                                        method: "POST",
                                        className: "text-start",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-floating mb-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        name: "name",
                                                        type: "text",
                                                        className: "form-control rounded-0",
                                                        id: "full-name",
                                                        placeholder: "Name",
                                                        required: true
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        htmlFor: "full-name",
                                                        children: [
                                                            "Name",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "required",
                                                                children: "*"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-floating mb-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        name: "_replyto",
                                                        type: "email",
                                                        className: "form-control rounded-0",
                                                        id: "email-address",
                                                        placeholder: "name@example.com"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        htmlFor: "email-address",
                                                        children: [
                                                            "Email",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "required",
                                                                children: "*"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-floating mb-3",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        name: "message",
                                                        // @ts-ignore
                                                        rows: "5",
                                                        className: "form-control rounded-0",
                                                        placeholder: "Leave a comment here",
                                                        id: "message",
                                                        style: {
                                                            height: "200px"
                                                        }
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        htmlFor: "message",
                                                        children: [
                                                            "Message",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "required",
                                                                children: "*"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "d-grid",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "submit",
                                                    className: "btn btn-lg btn-primary btn-block",
                                                    children: "Send Message"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "social mt-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            target: "_blank",
                                            href: "https://www.linkedin.com/in/codymcafee",
                                            rel: "noreferrer",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                className: "fab fa-linkedin-in"
                                            })
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
const clientSanity = (0,next_sanity__WEBPACK_IMPORTED_MODULE_5__.createClient)({
    projectId: "vtohm48w",
    dataset: "production",
    apiVersion: "2022-10-01",
    useCdn: false
});
async function getStaticProps() {
    const clients = await clientSanity.fetch(`*[_type == "client"]`);
    return {
        props: {
            clients
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 879:
/***/ ((module) => {

module.exports = require("next-sanity");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 15:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(919));
module.exports = __webpack_exports__;

})();