import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';


export type HeaderProps = {
    children: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
    return (
        <>
            <header className="m-0 h-48 border-t-4 border-tiffany font-thin text-xl font-custom tracking-normal leading-normal flex flex-col items-center justify-around md:flex-row md:items-center px-4">
                <h1 className="text-2xl font-extra text-center">{children}</h1>
                <div className="flex flex-col md:mt-0 gap-1">
                    <div className="flex justify-center items-center space-x-4 mt-4 md:mt-0">
                        <a href=" https://instagram.com/svadebnyii_salon_zhemchuzhina?utm_source=qr&igshid=MzNlNGNkZWQ4Mg=="><i className="fab fa-instagram text-2xl"></i></a>
                        <a href=" https://www.avito.ru/user/ecccf1917dd8c377d99a1d99ef3ff7ce/profile?src=sharing"><i><img className="w-5 h-5" src="/slider%20photos/avito.svg" alt="Avito" /></i></a>
                        <i className="fab fa-whatsapp text-2xl"></i>
                    </div>
                    <p className="text-base text-sm text-gray-500 text-center">Номер телефона: +79289002592</p>
                    <p className="text-base text-sm text-gray-500 text-center">Проспект Победа Революции, 116, Шахты</p>
                </div>
            </header>
        </>
    );
}


