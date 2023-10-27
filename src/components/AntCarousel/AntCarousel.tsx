import React from "react";
import { Carousel } from 'antd';

export type AntCarouselProps ={
    children: React.ReactNode;
}

export function AntCarousel({children}:AntCarouselProps) {
    return (
        <Carousel autoplay={true}>{children}</Carousel>
    );
}