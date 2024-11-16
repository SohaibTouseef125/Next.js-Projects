"use client";
import { Component, ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Silder from "react-slick";
import Image1 from "./../../../public/assest/slideShow1.jpg";
import Image2 from "./../../../public/assest/slideShow2.jpg";
import Image3 from "./../../../public/assest/slideShow3.jpg";
import Image4 from "./../../../public/assest/slideShow4.jpg";
import Image5 from "./../../../public/assest/slideShow5.jpg";
import Image6 from "./../../../public/assest/slideShow6.jpg";
import Image7 from "./../../../public/assest/slideShow7.jpg";
import Image8 from "./../../../public/assest/slideShow8.jpg";

export default class IamgesCaurosel extends Component {
    render(): any{
        let data = [
            {
                img: Image1,
                title: "students learning web basics",
            },
            {
                img: Image2,
                title: "First meeting with president",
            },
            {
                img: Image3,
                title: "students learning web basics",
            },
            {
                img: Image4,
                title: "students learning web basics",
            },
            {
                img: Image5,
                title: "students learning web basics",
            },
            {
                img: Image6,
                title: "students learning web basics",
            },
            {
                img: Image7,
                title: "students learning web basics",
            },
            {
                img: Image8,
                title: "students learning web basics",
            },
        ];

        const settings = {
            dots: true,
            dotsClass: "slick-dots line-indicator",
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            Responsives: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        silinfinite: true,
                        dots: true,
                    },
                },
            ],

            customPaging: (i: number) => (
                <div className="mt-2 text-xs opacity-0"> {i} </div>
            ),
        };
        return (
            <div className="mt-10 w-full">
                <Silder {...settings} className="w-full">
                    {data.map((val, index) => {
                        return (
                            <div
                                className="px-3 xl-lg:px-1 group mb-2 md:mb-5 relative overflow-hidden cursor-pointer outline-none"
                                key={index}
                            >
                                <div className="relative bg-slate-900 rounded-lg overflow-hidden">
                                    <Image
                                        src={val.img}
                                        className="w-full h-[300px] md:h-[600px] object-cover"
                                        alt={val.title}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </Silder>
            </div>
        );
    }
}
