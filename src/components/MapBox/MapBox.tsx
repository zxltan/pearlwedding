'use client'
import {Map, YMaps, Placemark} from "@pbe/react-yandex-maps";
import React from "react";

export function MapBox (){
    return(
        <YMaps>
            <div className="rounded-lg overflow-hidden drop-shadow-2xl">
                <Map
                    defaultState={{
                        center: [47.710831, 40.218303],
                        zoom: 9,
                        controls: ["zoomControl", "fullscreenControl"],
                    }}
                    modules={["control.ZoomControl", "control.FullscreenControl"]}
                >
                    <Placemark defaultGeometry={[47.710831, 40.218303]} />
                </Map>
                <p className="mt-4 text-base text-sm text-gray-500 text-center">Проспект Победа Революции, 116, Шахты</p>
            </div>
        </YMaps>
    )
}