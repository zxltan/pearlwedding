import React from "react";
import { Carousel } from 'antd';

export type CarouselProps ={
    children: React.ReactNode
}

export function CarouselBox({children}:CarouselProps) {
    return (
        <Carousel>{children}</Carousel>
    );
}