import Head from "next/head";
import Image from "next/image";
import Link from "next/link";


// import Link from "next/link";

import Logo from '../img/whitelogo.png'
import Home2 from "./Home2";



export default function Home() {
	

		
		
	return (
		<>
			<Head>
				<title>Car Window Tinting Sharjah | Storm Car Accessories</title>
				<meta
					name="description"
					content="Car Tinting Sharjah - Window Tinting And Paint Protection Film Offers In Sharjah, Superior Quality Authorized Car Tinting In Sharjah & Window Tint Solution."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/whitelogo.png" sizes="32x32" />
			</Head>

			<Home2 />
		</>
	);
}
