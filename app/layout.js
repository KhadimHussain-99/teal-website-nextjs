"use client";
import "react-toastify/dist/ReactToastify.css";
import "simplebar-react/dist/simplebar.min.css";
import "flatpickr/dist/themes/light.css";
import "leaflet/dist/leaflet.css";
import "./scss/app.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/websitePartials/header/Header";
import Footer from "../components/websitePartials/footer/Footer";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import store from "../store";
export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <>
      <html lang="en">
        <body className="font-inter  custom-tippy dashcode-app">
          <div
            className={`bg-black-50 relative${
              path === "/" ? "" : "pt-[56px] lg:pt-[66px]"
            }`}
          >
            <Header />
            <Provider store={store}>{children}</Provider>
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}
