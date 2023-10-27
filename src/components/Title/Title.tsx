import React from "react";

export type TitleProps = {
    children: React.ReactNode;
};

export function Title({ children }: TitleProps) {
    return (
        <h1 className=" font-extralight text-4xl border-t-2 border-tiffany font-extra tracking-normal leading-normal text-center">
            {children}
        </h1>
    );
}

