import Head from "next/head";
import Script from "next/script";
import '@/styles/globals.css'
import Navbar from "@/Components/Navbar";
import '../styles/style.css'
import Topbar from "@/Components/Topbar";
import Footer from "@/Components/Footer";


export default function App({ Component, pageProps }) {
  return(
  <>
  <Head>





				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
					crossOrigin="anonymous"
				/>





			</Head>
			<Script
				src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
				integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3"
				crossorigin="anonymous"
			/>
			<Script src="https://cdn.tailwindcss.com" />

<Script async src="https://www.googletagmanager.com/gtag/js?id=G-TG8B8CSK66"></Script>
<Script src="../Components/Analytics.js"></Script>


			
			

  
  <Component {...pageProps} />
 
  </>
  )

}
