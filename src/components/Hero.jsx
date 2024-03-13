import React, { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

function Hero() {
    let slides = [
        "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg",
        "https://images.pexels.com/photos/685382/pexels-photo-685382.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3571569/pexels-photo-3571569.jpeg"
    ];

    let [current, setCurrent] = useState(0);
    let [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    const openFullScreen = (index) => {
        setCurrent(index);
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { /* Safari */
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { /* IE11 */
            element.msRequestFullscreen();
        }
    };

    return (
        <div className="w-full h-full absolute top-12 left-0 z-0 mb-20"> {/* Added z-0 here */}
            <div className={`w-full m-auto pt-11 overflow-hidden relative ${windowWidth > 640 ? 'h-screen' : 'h-auto'}`}>
                <div
                    className={`flex transition ease-out duration-4`}
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}
                >
                    {slides.map((s, index) => (
                        <img key={index} src={s} alt={`Slide ${index}`} onClick={() => openFullScreen(index)} style={{ width: windowWidth > 640 ? '100%' : 'auto', height: windowWidth > 640 ? '100%' : 'auto' }} />
                    ))}
                </div>

                <div className="absolute top-0 h-full w-full justify-between items-center flex text-black px-10 text-3xl">
                    <button onClick={previousSlide}>
                        <BsFillArrowLeftCircleFill />
                    </button>
                    <button onClick={nextSlide}>
                        <BsFillArrowRightCircleFill />
                    </button>
                </div>

                <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                    {slides.map((s, i) => (
                        <div
                            key={"circle" + i}
                            className={`rounded-full w-5 h-5 cursor-pointer ${i === current ? "bg-white" : "bg-gray-500"
                                }`}
                            onClick={() => setCurrent(i)}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Hero;
