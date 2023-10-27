import React from "react";

export function ServicesBox() {
    return (
        <div className="flex flex-wrap justify-around">
            <div className="mx-2 my-4 p-6 max-w-[310px]">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <img className="w-36 h-36 mb-2" src="/services%20icons/1.png" alt="Услуга 1" />
                    <h3 className="text-xl font-extra font-bold">Бесплатная примерка</h3>
                    <p className="text-gray-700">Опытные консультаты подберут нужную модель по фигуре и концепции торжества</p>
                </div>
            </div>

            <div className="mx-2 my-4 p-6 max-w-[310px]">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <img className="w-36 h-36 mb-2" src="/services%20icons/2.png" alt="Услуга 2" />
                    <h3 className="text-xl font-extra font-bold">
                        Ателье</h3>
                    <p className="text-gray-700 font-light">В 99% платье необходимо подгонять по фигуре , исходя из высоты каблука, вашего роста, осанки, до детальной посадки</p>
                </div>
            </div>

            <div className="mx-2 my-4 p-6 max-w-[310px]">
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <img className="w-36 h-36 mb-2" src="/services%20icons/3.png" alt="Услуга 3" />
                    <h3 className="text-xl font-extra font-bold">Бесплатное хранение</h3>
                    <p className="text-gray-700">Вы можете воспользоваться услугой хранения платья в нашем салоне</p>
                </div>
            </div>
        </div>
    );
}




