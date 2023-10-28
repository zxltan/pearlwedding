import {Title} from "@/components/Title/Title";
import {AntCarousel} from "@/components/AntCarousel/AntCarousel";
import {Header} from "@/components/Header/Header";
import {Footer} from "@/components/Footer/Footer";
import {ReviewCard} from "@/components/ReviewCard/ReviewCard";
import {ServicesBox} from "@/components/ServicesBox/ServicesBox";
import {PhotoGrid} from "@/components/PhotoGrid/PhotoGrid";
import {MapBox} from "@/components/MapBox/MapBox";

export default function Home() {
  return (
      <>
          <Header>СВАДЕБНЫЙ САЛОН ЖЕМЧУЖИНА</Header>
          <main className="flex-1">
              <AntCarousel><img className="h-auto bg-blue-500" src="/slider%20photos/5.jpg"/> <img  className="h-auto bg-blue-500" src="/slider%20photos/2.jpg"/> <img  className="h-auto bg-blue-500" src="/slider%20photos/1.jpg"/> <img  className="h-auto bg-blue-500" src="/slider%20photos/4.jpg"/> <img className="h-auto bg-blue-500" src="/slider%20photos/6.jpg"/></AntCarousel>
          </main>
          <Title>Услуги салона</Title>
          <main className="min-h-screen flex items-center justify-center bg-gray-100">
              <ServicesBox/>
          </main>
          <Title>Отзывы наших невест</Title>
          <main className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
              <ReviewCard/>
          </main>
          <Title>Свадебные платья</Title>
          <main className="min-h-screen flex items-center justify-center bg-gray-100 p-10">
              <PhotoGrid/>
          </main>
          <Title>Наше местоположение</Title>
          <main className="flex items-center justify-center bg-gray-100 p-24">
              <MapBox/>
          </main>
          <Footer>Свадебный салон Жемчужина</Footer>
      </>
  )
}