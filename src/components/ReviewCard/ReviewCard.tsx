import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export function ReviewCard() {
    return (
        <div className="flex flex-wrap justify-around gap-10">
            <div className="max-w-[310px] bg-white border p-4 rounded-sm">
                <div className="flex justify-center items-center  w-16 h-16 bg-gray-200 rounded-full mx-auto">
                    <img className="w-16 h-16 object-cover rounded-full" src="https://avatars.mds.yandex.net/get-yapic/60687/enc-37061b72f31b0063f635688feadb81a82b175881ac21a6ce219dcee5bda7b9a4/islands-68" alt="Аватар" />
                </div>
                <div className="p-6">
                    <p className="text-xl font-bold font-extra mb-2">Анна П.</p>
                    <p className="text-gray-700 text-base">Хочу выразить большую благодарность прекрасной Светлане! Невероятно светлая, отзывчивая, доброжелательная, внимательная в работе с клиентами! Было очень легко выбрать именно своё,то самое платье! В самом салоне очень уютно,удобно не только невесте,но и её маме,что не мало важно! Ещё раз большое спасибо за помощь в подготовке к такому важному дню! 'Жемчужина" в моем сердце 🫶</p>
                </div>
            </div>

            <div className=" max-w-[310px] bg-white border p-4 rounded-sm">
                <div className="flex justify-center items-center w-16 h-16 rounded-full mx-auto">
                    <img className="w-16 h-16 object-cover rounded-full" src="https://avatars.mds.yandex.net/get-yapic/54535/Lifs9Q1cjYd0yYu7YFrF6HwRYCI-1/islands-68" alt="Аватар" />
                </div>
                <div className="p-6">
                    <p className="text-xl font-bold font-extra mb-2">Диана Галстян</p>
                    <p className="text-gray-700 text-base">«Жемчужина» - один из лучших салонов Ростовской области! Потрясающие платья, шикарный выбор, новинки, невероятная тёплая атмосфера, обслуживание на самом высоком уровне, а также профессиональная подгонка платья на фигуру … это всё вы найдёте только здесь!  Я брала платье в аренду для выступления и ни разу не пожалела с первого визита в этот салон! Встретили тепло, предложили действительно прекрасные, стоящие, великолепные платья … так, что было трудно определиться и остановиться на одном 😄 Платье из-за необходимости подогнали по фигуре, сделали всё, что было нужно.  Большая благодарность этому салону, его хозяйке! Всем, кто хочет выглядеть, как принцесса, советую выбрать салон «Жемчужина». Таких платьев вы не встретите нигде!</p>
                </div>
            </div>

            <div className="max-w-[310px] bg-white border p-4 rounded-sm">
                <div className="flex justify-center items-center  w-16 h-16 bg-gray-200 rounded-full mx-auto">
                    <img className="w-16 h-16 object-cover rounded-full" src="https://avatars.mds.yandex.net/get-yapic/21377/enc-a1808d77952131f7cf84856ec5217d9775e174156018245c4cfe7b34b4e2e489/islands-68" alt="Аватар" />
                </div>
                <div className="p-6">
                    <p className="text-xl font-bold mb-2 font-extra">Юлия Шихахмедова</p>
                    <p className="text-gray-700 text-base">Отличный свадебный салон,а особенно хозяйка Светлана🤗🤗❤️❤️очень приятная в общении,с легкостью помогает подобрать все именно под вашу фигуру и под желаемый образ))огромный выбор платьев,как свадебных,так и вечерних,множество аксессуаров для свадьбы,даже украшения на машину))  Спасибо вам большое Светочка,ведь вы сделали меня самой красивой невестой!</p>
                </div>
            </div>

        </div>
    );
}
