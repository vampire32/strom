
import { Inter } from "@next/font/google";
import C1 from "../img/window-tinting-2.png";
import Cartint from "../img/car-window-shield-060220210503.jpg";

import {
	GiShakingHands,
	GiAchievement,
	GiCombinationLock,
	GiThreeFriends,
	GiFactory,
	GiMetalDisc,
} from "react-icons/gi";

import { BsWhatsapp } from "react-icons/bs";
import { FcApproval } from "react-icons/fc";
import { BsShieldCheck, BsPeople } from "react-icons/bs";
import { GrUserWorker, GrUnorderedList, GrDeliver } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";

import A1 from "../img/A1.jpg";
import { AiFillPhone, AiOutlineSolution } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import Feature from "../img/mec.jpg";
import Feature2 from "../img/mech2.jpg";
import S1 from "../img/service-1.jpg";
import S2 from "../img/service-2.jpg";
import S3 from "../img/S1.jpeg";
import S4 from "../img/SchoolBuss.jpg";
import S5 from "../img/porch11.webp";
import S6 from "../img/image3.jpg";
import Automotive from "../img/commercial.jpg";
import Res from "../img/res.jpg";
import sec from "../img/sec.webp";
import ContactForm from "@/Components/ContactForm";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Topbar from "@/Components/Topbar";
import Footer from "@/Components/Footer";
import Carmic from "../img/carmeic.webp";
import Mechnic from "../img/mechnic.jpg";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import F1 from '../img/c1-removebg-preview.png'
import F2 from "../img/c2-removebg-preview.png";


const inter = Inter({ subsets: ["latin"] });

export default function Home2() {
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(true);

	const cancelButtonRef = useRef(null);

	return (
		<>
			<Head>
				<title>car Window Tinting Sharjah | Storm Car Accessories</title>
				<meta
					name="description"
					content="Car Tinting Sharjah - Window Tinting And Paint Protection Film Offers In Sharjah, Superior Quality Authorized Car Tinting In Sharjah & Window Tint Solution."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/whitelogo.png" sizes="32x32" />
				<meta name="author" content="Storm" />
				<meta name="Language" content="English" />
				<meta name="Copyright" content="Storm" />
				<meta name="Expires" content="Never" />
				<meta name="Robots" content="Index, Follow"></meta>
				<meta property="og:image" content="" />
				<meta property="og:type" content="website" />
				<meta
					property="og:description"
					content="Car Tinting Sharjah - Window Tinting And Paint Protection Film Offers In Sharjah, Superior Quality Authorized Car Tinting In Sharjah & Window Tint Solution. "
				/>

				<link rel="canonical" href="https://www.stormupholstery.com/" />
			</Head>
			<Topbar />
			<div
				id="carouselExampleControls"
				class="carousel slide"
				data-bs-ride="carousel"
			>
				<div class="carousel-inner">
					<div>
						<div class="carousel-item active h-[100vh]">
							<div>
								<Image style={{ height: "100vh", width: "100%" }} src={A1} />

								<div class="carousel-caption">
									<div class="container-fluid">
										<div class="row ">
											<div class="col-lg-6 pt-5">
												<h1
													style={{ fontWeight: "bold" }}
													class="display-3 text-white mb-4  animated slideInDown text-[35px]"
												>
													Storm Accessories Car Window Tinting Sharjah
												</h1>
												<h2
													style={{ color: "#FFD700", fontSize: "20px" }}
													className="mb-4"
												>
													CERAMIC COATING | PPF | OFFICE & HOME WINDOW TINTING |
													SAFETY & SECURITY FILM
												</h2>
												<h3 className="text-white text-[40px] mb-5 font-bold">
													Seat Upholstery
												</h3>
												{/* <p class=" mb-4 pb-2 mx-sm-5 text-white text-[18px] leading-8 ">
													For high-quality window films that come in a wide
													range of styles and designs to offer privacy, safety,
													and sun protection, Storm Automotive LLC is a
													reputable name in the UAE. according to the UAE
													revised federal traffic law, which permits car windows
													to be tinted up to 50%
												</p> */}
												<button
													style={{
														backgroundColor: "rgba(0,0,0,0.1)",
														borderColor: "#FFB400",
														width: "20%",
													}}
													class="btn btn-primary  animated slideInDown"
												>
													Call Now
												</button>
												<button
													style={{
														backgroundColor: "rgba(0,0,0,0.1)",
														borderColor: "#FFB400",
														width: "20%",
													}}
													class="btn btn-primary animated slideInDown ml-5"
													onClick={() => {
														setOpen(true);
													}}
												>
													Book Now
												</button>

												<Transition.Root show={open} as={Fragment}>
													<Dialog
														as="div"
														className="relative z-10"
														initialFocus={cancelButtonRef}
														onClose={setOpen}
													>
														<Transition.Child
															as={Fragment}
															enter="ease-out duration-300"
															enterFrom="opacity-0"
															enterTo="opacity-100"
															leave="ease-in duration-200"
															leaveFrom="opacity-100"
															leaveTo="opacity-0"
														>
															<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
														</Transition.Child>

														<div className="fixed inset-0 z-10 overflow-y-auto">
															<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
																<Transition.Child
																	as={Fragment}
																	enter="ease-out duration-300"
																	enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
																	enterTo="opacity-100 translate-y-0 sm:scale-100"
																	leave="ease-in duration-200"
																	leaveFrom="opacity-100 translate-y-0 sm:scale-100"
																	leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
																>
																	<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-dark text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
																		<form className="px-12 py-12">
																			<p className="text-white text-center text-[18px] font-bold">
																				BOOK YOUR RESERVATION NOW
																			</p>
																			<div class="mb-6">
																				<label
																					for="text"
																					class="block mb-2 text-sm font-medium text-[#FFD700	]"
																				>
																					Name
																				</label>
																				<input
																					type="text"
																					id="text"
																					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
																					placeholder="name@flowbite.com"
																					required
																				/>
																			</div>
																			<div class="mb-6">
																				<label
																					for="email"
																					class="block mb-2 text-sm font-medium text-[#FFD700]"
																				>
																					Email
																				</label>
																				<input
																					type="email"
																					id="email"
																					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
																					required
																				/>
																			</div>
																			<div class="mb-6">
																				<label
																					for="service"
																					class="block mb-2 text-sm font-medium text-[#FFD700]"
																				>
																					Services
																				</label>
																				<input
																					type="text"
																					id="service"
																					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
																					required
																				/>
																			</div>
																			<div class="mb-6">
																				<label
																					for="number"
																					class="block mb-2 text-sm font-medium text-[#FFD700]"
																				>
																					Phone Number
																				</label>
																				<input
																					type="number"
																					id="number"
																					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
																					required
																				/>
																			</div>
																			<div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
																				<button
																					type="button"
																					style={{
																						backgroundColor: "rgba(0,0,0,0.1)",
																						borderColor: "#FF7276",
																					}}
																					class="btn btn-primary py-3 px-5 animated slideInDown ml-5"
																					onClick={() => setOpen(false)}
																				>
																					Send
																				</button>

																				<button
																					type="button"
																					className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
																					onClick={() => setOpen(false)}
																					ref={cancelButtonRef}
																				>
																					Cancel
																				</button>
																			</div>
																		</form>
																	</Dialog.Panel>
																</Transition.Child>
															</div>
														</div>
													</Dialog>
												</Transition.Root>
											</div>
											<div class="col-lg-2"></div>
											<div class="col-lg-4 pt-5">
												<Image
													src={F2}
													style={{
														width: "70%",
														height: "70%",
														margin: "auto",
													}}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="carousel-item  h-[100vh]">
						<div>
							<div>
								<Image style={{ height: "100vh", width: "100%" }} src={A1} />
								<div class="carousel-caption">
									<div class="container-fluid">
										<div class="row ">
											<div class="col-lg-6 pt-5">
												<h1
													style={{ fontWeight: "bold" }}
													class="display-3 text-white mb-4  animated slideInDown text-[35px]"
												>
													Storm Accessories Car Window Tinting Sharjah
												</h1>
												<h2
													style={{ color: "#FFB400", fontSize: "20px" }}
													className="mb-4"
												>
													CERAMIC COATING | PPF | OFFICE & HOME WINDOW TINTING |
													SAFETY & SECURITY FILM
												</h2>
												<h3 className="text-white text-[40px] mb-5 font-bold">
													Window Tiniting Services
												</h3>
												<button
													style={{
														backgroundColor: "rgba(0,0,0,0.1)",
														borderColor: "#FFB400",
													}}
													class="btn btn-primary animated slideInDown"
												>
													Call Now
												</button>
												<button
													style={{
														backgroundColor: "rgba(0,0,0,0.1)",
														borderColor: "#FFB400",
													}}
													class="btn btn-primary animated slideInDown ml-5 "
													onClick={() => {
														setOpen(true);
													}}
												>
													Book Now
												</button>

												<Transition.Root show={open} as={Fragment}>
													<Dialog
														as="div"
														className="relative z-10"
														initialFocus={cancelButtonRef}
														onClose={setOpen}
													>
														<Transition.Child
															as={Fragment}
															enter="ease-out duration-300"
															enterFrom="opacity-0"
															enterTo="opacity-100"
															leave="ease-in duration-200"
															leaveFrom="opacity-100"
															leaveTo="opacity-0"
														>
															<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
														</Transition.Child>

														<div className="fixed inset-0 z-10 overflow-y-auto">
															<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
																<Transition.Child
																	as={Fragment}
																	enter="ease-out duration-300"
																	enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
																	enterTo="opacity-100 translate-y-0 sm:scale-100"
																	leave="ease-in duration-200"
																	leaveFrom="opacity-100 translate-y-0 sm:scale-100"
																	leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
																>
																	<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-dark text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
																		<form className="px-12 py-12">
																			<p className="text-white text-center text-[18px] font-bold">
																				BOOK YOUR RESERVATION NOW
																			</p>
																			<div class="mb-6">
																				<label
																					for="text"
																					class="block mb-2 text-sm font-medium text-[#FFD700]"
																				>
																					Name
																				</label>
																				<input
																					type="text"
																					id="text"
																					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
																					placeholder="name@flowbite.com"
																					required
																				/>
																			</div>
																			<div class="mb-6">
																				<label
																					for="email"
																					class="block mb-2 text-sm font-medium text-[#FFD700]"
																				>
																					Email
																				</label>
																				<input
																					type="email"
																					id="email"
																					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
																					required
																				/>
																			</div>
																			<div class="mb-6">
																				<label
																					for="service"
																					class="block mb-2 text-sm font-medium text-[#FFD700]"
																				>
																					Services
																				</label>
																				<input
																					type="text"
																					id="service"
																					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
																					required
																				/>
																			</div>
																			<div class="mb-6">
																				<label
																					for="number"
																					class="block mb-2 text-sm font-medium text-[#FFD700]"
																				>
																					Phone Number
																				</label>
																				<input
																					type="number"
																					id="number"
																					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
																					required
																				/>
																			</div>
																			<div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
																				<button
																					type="button"
																					style={{
																						backgroundColor: "rgba(0,0,0,0.1)",
																						borderColor: "#FF7276",
																					}}
																					class="btn btn-primary py-3 px-5 animated slideInDown ml-5"
																					onClick={() => setOpen(false)}
																				>
																					Send
																				</button>

																				<button
																					type="button"
																					className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
																					onClick={() => setOpen(false)}
																					ref={cancelButtonRef}
																				>
																					Cancel
																				</button>
																			</div>
																		</form>
																	</Dialog.Panel>
																</Transition.Child>
															</div>
														</div>
													</Dialog>
												</Transition.Root>
											</div>
											<div class="col-lg-2"></div>
											<div class="col-lg-4 pt-5">
												<Image
													src={F1}
													style={{
														width: "70%",
														height: "70%",
														margin: "auto",
													}}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <div class="carousel-item  h-[120vh]">
						<div>
							<div>
								<Image style={{ height: "120vh" }} src={C1} />
								<div class="carousel-caption">
									<div class="container-fluid">
										<div class="row ">
											<div class="col-lg-6 pt-5">
												<h1
													style={{ fontWeight: "bold" }}
													class="display-3 text-white mb-4  animated slideInDown"
												>
													Storm Accessories Car Window Tinting Sharjah
												</h1>
												<h2
													style={{ color: "#FFD700", fontSize: "20px" }}
													className="mb-4"
												>
													CERAMIC COATING | PPF | OFFICE & HOME WINDOW TINTING |
													SAFETY & SECURITY FILM
												</h2>
												<p class=" mb-4 pb-2 mx-sm-5 text-white text-[18px] leading-8 ">
													For high-quality window films that come in a wide
													range of styles and designs to offer privacy, safety,
													and sun protection, Storm Automotive LLC is a
													reputable name in the UAE. according to the UAE
													revised federal traffic law, which permits car windows
													to be tinted up to 50%
												</p>
												<div>
													<button
														style={{
															backgroundColor: "rgba(0,0,0,0.1)",
															borderColor: "#FF7276",
														}}
														class="btn btn-primary  animated slideInDown"
													>
														Call Now
													</button>
													<button
														style={{
															backgroundColor: "rgba(0,0,0,0.1)",
															borderColor: "#FF7276",
														}}
														class="btn btn-primary  animated slideInDown ml-5 "
														onClick={() => {
															setOpen(true);
														}}
													>
														Book Now
													</button>
												</div>

												<Transition.Root show={open} as={Fragment}>
													<Dialog
														as="div"
														className="relative z-10"
														initialFocus={cancelButtonRef}
														onClose={setOpen}
													>
														<Transition.Child
															as={Fragment}
															enter="ease-out duration-300"
															enterFrom="opacity-0"
															enterTo="opacity-100"
															leave="ease-in duration-200"
															leaveFrom="opacity-100"
															leaveTo="opacity-0"
														>
															<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
														</Transition.Child>

														<div className="fixed inset-0 z-10 overflow-y-auto">
															<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
																<Transition.Child
																	as={Fragment}
																	enter="ease-out duration-300"
																	enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
																	enterTo="opacity-100 translate-y-0 sm:scale-100"
																	leave="ease-in duration-200"
																	leaveFrom="opacity-100 translate-y-0 sm:scale-100"
																	leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
																>
																	<Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-dark text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
																		<form className="px-12 py-12">
																			<p className="text-white text-center text-[18px] font-bold">
																				BOOK YOUR RESERVATION NOW
																			</p>
																			<div class="mb-6">
																				<label
																					for="text"
																					class="block mb-2 text-sm font-medium text-[#FFD700]"
																				>
																					Name
																				</label>
																				<input
																					type="text"
																					id="text"
																					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
																					placeholder="name@flowbite.com"
																					required
																				/>
																			</div>
																			<div class="mb-6">
																				<label
																					for="email"
																					class="block mb-2 text-sm font-medium text-[#FFD700]"
																				>
																					Email
																				</label>
																				<input
																					type="email"
																					id="email"
																					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
																					required
																				/>
																			</div>
																			<div class="mb-6">
																				<label
																					for="service"
																					class="block mb-2 text-sm font-medium text-[#FFD700]"
																				>
																					Services
																				</label>
																				<input
																					type="text"
																					id="service"
																					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
																					required
																				/>
																			</div>
																			<div class="mb-6">
																				<label
																					for="number"
																					class="block mb-2 text-sm font-medium text-[#FFD700]"
																				>
																					Phone Number
																				</label>
																				<input
																					type="number"
																					id="number"
																					class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
																					required
																				/>
																			</div>
																			<div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
																				<button
																					type="button"
																					style={{
																						backgroundColor: "rgba(0,0,0,0.1)",
																						borderColor: "#FF7276",
																					}}
																					class="btn btn-primary py-3 px-5 animated slideInDown ml-5"
																					onClick={() => setOpen(false)}
																				>
																					Send
																				</button>

																				<button
																					type="button"
																					className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
																					onClick={() => setOpen(false)}
																					ref={cancelButtonRef}
																				>
																					Cancel
																				</button>
																			</div>
																		</form>
																	</Dialog.Panel>
																</Transition.Child>
															</div>
														</div>
													</Dialog>
												</Transition.Root>
											</div>
											<div class="col-lg-2"></div>
											<div class="col-lg-4 pt-5">
												<Image
													src={F3}
													style={{
														width: "70%",
														height: "70%",
														margin: "auto",
													}}
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev"

				>
					
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button
					class="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
			<div
				style={{ backgroundColor: "#071E22" }}
				class="container-fluid    py-5"
				data-parallax="scroll"
			>
				<div class="container  py-5">
					<div class="row ">
						<div class="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
							<h4
								style={{ color: "white", textAlign: "center" }}
								class="display-4 "
								data-toggle="counter-up"
							>
								+500 Million
							</h4>
							<p style={{ color: "#ffae42", textAlign: "center" }}>
								Happy Clients
							</p>
						</div>
						<div class="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
							<h4
								style={{ color: "white", textAlign: "center" }}
								class="display-4 "
								data-toggle="counter-up"
							>
								+200
							</h4>
							<p style={{ color: "#ffae42", textAlign: "center" }}>
								Exper Team
							</p>
						</div>
						<div class="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
							<h4
								style={{ color: "white", textAlign: "center" }}
								class="display-4 "
								data-toggle="counter-up"
							>
								+385
							</h4>
							<p style={{ color: "#ffae42", textAlign: "center" }}>
								Ongoing Project
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="pb-10" style={{ backgroundColor: "#071E22" }}>
				<div class="container">
					<div class="row   align-items-center">
						<div class="col-lg-6 wow fadeInUp mt-5" data-wow-delay="0.5s">
							<div class="h-100">
								<h2 style={{ color: "#ffae42" }} class="display-6 mb-5 ">
									BEST Storm Car Accessories Centre In Sharjah
								</h2>

								<p class="mb-4 text-justify text-[white] ">
									excessive UV rays, infrared radiation, sweltering heat, and
									glare by providing a wide range of car tinting in Sharjah.
									Modern Auto Storm window films from us can offer improved
									comfort, security, and privacy. Being one of the top auto
									storm authorized center in the UAE, we are aware of the wide
									range of needs of our clients and offer them cutting-edge auto
									storm window films that satisfy their unique requirements for
									sun protection, lighting ergonomics, and temperature
									regulation.<br></br>
									<br></br> Our premium auto storm car tinting will assist in
									giving your automobile the required appearance and usefulness.
									Additionally, every one of our items has a scratch-resistant
									coating that ensures robustness and a flawless finish. You can
									take advantage of the wonderful health advantages of natural
									light and guard your home against excessive temperature
									changes with the help of our home tinting solution.
									Additionally, our auto storm car tint can enhance the comfort
									and luxury of a vehicle. Additionally, they provide a safe
									driving experience by reducing the excessive glare brought on
									by the sun or other man-made light sources.
								</p>
								<div class="border-top mt-4 pt-4">
									<div class="row">
										<div class="col-sm-6">
											<div class="d-flex align-items-center">
												<div
													style={{ backgroundColor: "#ffae42" }}
													class="btn-lg-square  rounded-circle me-3"
												>
													<AiFillPhone color="#fff" />
												</div>
												<h5 class="mb-0 text-[white]">+971 50 144 4353</h5>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="d-flex align-items-center">
												<div
													style={{ backgroundColor: "#ffae42" }}
													class="btn-lg-square  rounded-circle me-3"
												>
													<BsFillEnvelopeFill color="#ffff" />
												</div>
												<h5 class="mb-0 text-[white] ">
													info@stormupholstery.com
												</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<Image
								src={A1}
								alt="Car Tinting Service Sharjah"
								style={{ borderRadius: 20, marginLeft: 10 }}
							/>
						</div>
					</div>
				</div>
			</div>

			<div
				style={{
					backgroundColor: "#071E22",
					paddingTop: "50px",
					paddingBottom: "50px",
				}}
				class="container-fluid"
			>
				<div
					class="text-center m-auto  wow fadeInUp"
					data-wow-delay="0.1s"
					style={{ maxWidth: "800px" }}
				>
					<span
						style={{ color: "#ffae42", fontWeight: "BOLD" }}
						class="display-4 mb-3 "
					>
						OUR SERVICES
					</span>
					<p className=" leading-6 mb-5 text-white">
						Storm Automotive, a business known for its array of AUTO STORM auto
						tinting services in Sharjah, is firmly committed to sustainability.
						We adopt a comprehensive approach to sun protection, damage
						avoidance, and glare reduction with our high-end window tinting and
						film services.
					</p>
				</div>
			</div>
			<div class="bgimage4">
				<div style={{ padding: "80px" }} class="container-fluid  ">
					<div class="row m-auto  ">
						<div class="col-lg-4 col-md-6 wow fadeInUp " data-wow-delay="0.1s">
							<div class="service-item ">
								<div class="img-fluid res ">
									<Image
										style={{
											border: "5px solid black",
											borderRadius: "15px",
											borderColor: "rgba(0,0,0,0.3)",
											height:"230px",
										}}
										src={S1}
										alt="Car Tinting Service Sharjah"
										className="res"
										
									/>
								</div>
								<div>
									<a
										style={{
											fontSize: "30px",
											color: "#071E22",
											fontWeight: "bold",
										}}
									>
										Automotive
									</a>
								</div>
								<p className="text-left  text-[white] font-extralight text-[18px]  pb-3">
									Car detailing services in Sharjah involve a thorough cleaning
									and polishing of the exterior and interior of the vehicle.
									This includes washing, waxing, and buffing the exterior, as
									well as cleaning and conditioning the interior.
								</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
							<div class="service-item">
								<div class="img-fluid res">
									<Image
										style={{
											border: "5px solid black",
											borderRadius: "15px",
											borderColor: "rgba(0,0,0,0.3)",
										}}
										src={S2}
										alt="Car Tinting Service Sharjah"
										className="res"
									/>
								</div>
								<div>
									<a
										style={{
											color: "#071E22",
											fontSize: "30px",
											fontWeight: "bold",
										}}
									>
										Commercial Window Films
									</a>
								</div>
								<p className="text-left text-[white]  text-[18px] font-extralight   pb-3">
									The damaging UV rays that can fade and ruin furnishings,
									fabrics, and other interior finishes are blocked by these
									coatings to an extent of up to 99%. Also, they shield workers
									from the negative effects of UV radiation.
								</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
							<div class="service-item">
								<div class="img-fluid res">
									<Image
										style={{
											border: "5px solid black",
											borderRadius: "15px",
											borderColor: "rgba(0,0,0,0.3)",
										}}
										className="res"
										src={S3}
										alt="Car Tinting Service Sharjah"
									/>
								</div>
								<div>
									<a
										style={{
											color: "#071E22",
											fontSize: "30px",
											fontWeight: "bold",
										}}
									>
										Seat UpHolstery
									</a>
								</div>
								<p className="text-left text-[white]  text-[18px] font-extralight  pb-3">
									Any damage to the current seat covers, such as tears, burns,
									or stains, can be repaired by seat repair services in Sharjah.
									By providing these services, current seats may last longer and
									clients may avoid having to purchase new ones.
								</p>
							</div>
						</div>

						<div
							class="col-lg-4 col-md-6 wow fadeInUp mt-5"
							data-wow-delay="0.1s"
						>
							<div class="service-item">
								<div class="img-fluid res">
									<Image
										style={{
											border: "5px solid black",
											borderRadius: "15px",
											borderColor: "rgba(0,0,0,0.3)",
										}}
										src={S4}
										alt="Car Tinting Service Sharjah"
										className="res"
									/>
								</div>
								<div>
									<a
										style={{
											color: "#071E22",
											fontSize: "30px",
											fontWeight: "bold",
										}}
									>
										School buses
									</a>
								</div>
								<p className="text-left font-extralight  text-[18px] text-[white]  pb-3">
									The safety of school buses can be increased by using Sharjahs
									window tinting services. In the event of an accident or
									break-in, tinted windows can aid in preventing glass from
									shattering, lowering the possibility of injuries to children
									and bus drivers.
								</p>
							</div>
						</div>
						<div
							class="col-lg-4 col-md-6 wow fadeInUp mt-5"
							data-wow-delay="0.3s"
						>
							<div class="service-item">
								<div class="img-fluid res">
									<Image
										style={{
											border: "5px solid black",
											borderRadius: "15px",
											borderColor: "rgba(0,0,0,0.3)",
										}}
										src={S5}
										alt="Car Tinting Service Sharjah"
										className="res"
									/>
								</div>
								<div>
									<a
										style={{
											color: "#071E22",
											fontSize: "30px",
											fontWeight: "bold",
										}}
									>
										Residential
									</a>
								</div>
								<p className="text-left text-[white]  text-[18px] font-extralight  pb-3">
									Sharjahs residential window tinting services can meet a
									variety of needs for the home at a reasonable price.
									Homeowners can benefit from more privacy, better energy
									efficiency, increased comfort, and increased safety and
									security by installing window tinting films.
								</p>
							</div>
						</div>
						<div
							class="col-lg-4 col-md-6 wow fadeInUp mt-5"
							data-wow-delay="0.5s"
						>
							<div class="service-item">
								<div class="img-fluid res">
									<Image
										style={{
											border: "5px solid black",
											borderRadius: "15px",
											borderColor: "rgba(0,0,0,0.3)",
										}}
										src={S6}
										alt="Car Tinting Service Sharjah"
										className="res"
									/>
								</div>
								<div>
									<a
										style={{
											color: "#071E22",
											fontSize: "30px",
											fontWeight: "bold",
										}}
									>
										Safety & Security
									</a>
								</div>
								<p className="text-left font-extralight  text-[18px] text-[white]  pb-3">
									Security and safety Sharjahs window tinting services can meet
									a variety of property requirements affordably. Property owners
									can benefit from higher safety and security, better energy
									efficiency, increased privacy, and greater protection against
									the damaging effects of UV radiation by installing window
									tinting films.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<div class="bgimage3">
					<section class=" container-fluid body-font pb-5">
						<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
							<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
								<h2 class=" text-[35px] font-bold text-[#ffae42]">
									car window tinting Sharjah | Storm upholstery
								</h2>
								<h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white divide-dashed > * + *">
									Automotive
								</h3>

								<p class="mb-8 leading-relaxed text-justify text-white">
									Searching for the finest automobile protection options? We
									provide a wide selection of top-notch automobile protection
									equipment to assist you to protect your vehicle from numerous
									exterior factors, like the sun, dust, and dirt, and weather.
									We at storm auto accessories offer everything you need to make
									your automobile appear like new, including detailing services,
									nano ceramic coating, car polishing, sun control films, and
									detailing services. We have a lot of knowledge and skill in
									giving your automobile all-around protection since we are the
									authorised car-care centre in Sharjah. We are accountable for
									the safety of your car.
								</p>
							</div>

							<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
								<div
									style={{
										borderLeft: "10px solid #ffae42 ",
										borderRadius: "20px",
									}}
									class="object-cover object-center  "
								>
									<Image
										alt="hero"
										src={Automotive}
										style={{  borderRadius: "20px" }}
									/>
								</div>
							</div>
						</div>
						<div className="row m-auto">
							<div className="col-md-4">
								<div
									class="card"
									style={{
										width: "20rem",
										border: "2px solid #ffae42",
										borderRadius: "10px",
										height: "30rem",
										backgroundColor: "#504f4d00",
									}}
								>
									<div class="card-img-top ">
										<Image
											style={{ borderRadius: "10px", height: "15rem" }}
											src={Cartint}
											alt="..."
										/>
									</div>

									<div class="card-body">
										<h5 class="text-[#ffae42] text-[24px]">
											Car Window Tinting Sharjah
										</h5>
										<p class="card-text text-justify text-white">
											We provide an exceptional selection of storm auto
											accessories and sun protection window films that are
											fitted on your cars windows to make you conformable and
											save the inside of your vehicle from being damaged by
											excessive heat and sunshine.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div
									class="card"
									style={{
										width: "20rem",
										border: "2px solid #ffae42",
										borderRadius: "10px",
										height: "30rem",
										backgroundColor: "#Ffb400",
									}}
								>
									<div class="card-img-top">
										<Image
											style={{ borderRadius: "10px", height: "15rem" }}
											src={Carmic}
											alt="..."
										/>
									</div>
									<div class="card-body">
										<h2 class=" text-[#071E22] text-[24px]">Ceramic Coating</h2>
										<p class="card-text text-justify text-white">
											We provide the best nano ceramic coating to protect your
											automobile from dents and other exterior damage. It is
											used on the paint, bumpers, and plastic trim to provide
											long-lasting general protection.
										</p>
									</div>
								</div>
							</div>
							<div className="col-md-4">
								<div
									class="card"
									style={{
										width: "20rem",
										border: "2px solid #ffae42",
										borderRadius: "10px",
										height: "30rem",
										backgroundColor: "#504f4d00",
									}}
								>
									<div class="card-img-top">
										<Image
											style={{ borderRadius: "10px", height: "15rem" }}
											src={Mechnic}
											alt="..."
										/>
									</div>
									<div class="card-body">
										<h5 class=" text-[#ffae42] text-[24px]">
											Mechanical Service
										</h5>
										<p class="card-text text-justify text-white">
											Storm upholstery has been in the automotive industry since
											2003. We are Sharjahs experts in luxury automobile
											repairs. Repairing Rolls Royce, Mercedes, Porsche, Land
											Rover, Bentley, and Audi is our area of competence.
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>

				<section
					style={{ backgroundColor: "#071E22" }}
					class=" container-fluid body-font"
				>
					<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
						<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
							<div
								style={{
									borderRadius: "20px",
									borderRight: "10px solid #ffae42 ",
									borderRadius: "20px",
								}}
								class="object-cover object-center"
							>
								<Image
									alt="hero"
									src={Automotive}
									style={{ borderRadius: "20px",  }}
								/>
							</div>
						</div>
						<div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
							<h2 class=" text-[30px] font-bold text-[#ffae42] text-left">
								WINDOW FILMS INSTALLATION SERVICES IN SHARJAH - COMMERCIAL USAGE
							</h2>
							<h3 class=" title-font sm:text-4xl text-3xl mb-4 font-medium text-white divide-dashed">
								Commercial Window Films
							</h3>

							<p class="mb-8 leading-relaxed text-justify text-white">
								In the present, commercial window films in Sharjah are essential
								for offering a high degree of privacy, heat protection, and of
								course a pleasant working environment. It may be quite difficult
								to work in a hot, unpleasant workplace, and if you cant provide
								your workers appropriate working circumstances, your brand value
								will undoubtedly suffer. Storm auto accessories has world-class
								Storm auto accessories window film solutions for your commercial
								spaces to help you create the perfect working environment. Storm
								auto accessories recognises the necessity for the best-quality
								heat protection and safety window films in the commercial
								buildings.
							</p>
						</div>
					</div>
				</section>
				<div class="bgimage3">
					<section class=" container-fluid body-font">
						<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
							<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
								<h2 class=" text-[30px] font-bold text-[#ffae42]">
									RESIDENTIAL WINDOW FILM - PROVIDING COMPLETE PROTECTION
								</h2>
								<h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
									Residential
								</h3>

								<p class="mb-8 leading-relaxed text-justify text-white">
									such things in your living quarters, adjustments need to be
									made. Glass in windows and doors of homes let in natural
									light, but the night also brings with it an excessive amount
									of heat that saps energy. With the top-of-the-line window
									film, its time to rethink your homes interior. The variety of
									window films offered by Storm Auto Accessories will not only
									help you protect the inside of your home but also improve the
									spaces attractiveness and décor in a classy way.
								</p>
							</div>

							<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
								<div
									style={{
										borderRadius: "20px",
										borderLeft: "10px solid #ffae42 ",
									}}
									class="object-cover object-center "
								>
									<Image
										alt="hero"
										src={Res}
										style={{ borderRadius: "20",  }}
									/>
								</div>
							</div>
						</div>
					</section>
				</div>
				<section
					style={{ backgroundColor: "#071E22" }}
					on
					class=" container-fluid body-font"
				>
					<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
						<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
							<div
								style={{
									borderRadius: "20px",
									borderRight: "10px solid #ffae42 ",
									borderRadius: "20px",
								}}
								class="object-cover object-center "
							>
								<Image
									alt="hero"
									src={sec}
									style={{ borderRadius: 20,}}
								/>
							</div>
						</div>
						<div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
							<h2 class=" text-[30px] font-bold text-[#ffae42] text-left">
								SAFEGUARDING COMMERCIAL & RESIDENTIAL GLASS WINDOWS
							</h2>
							<h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
								Safety & Security
							</h3>
							<h2 className="text-[22px] mb-3 font-semibold"></h2>
							<p class="mb-8 leading-relaxed text-justify text-white">
								Its always crucial to take all necessary precautions to provide
								the areas where we reside or spend the majority of our time the
								highest degree of safety. The goal of our premium selection of
								safety and security films is to keep your personal and business
								environments secure. With this, we want to safeguard you against
								unforeseen events that might seriously harm your life or
								property. The business complexes glass windows, doors, and
								towering glass-structured walls all have safety and security
								films put on them to safeguard them from physical harm and other
								environmental problems. To ensure that your style is not
								compromised while placing safety films on the windows, the whole
								line of commercial and residential safety windows offers unique
								colours and patterns to coordinate with the styling and décor of
								your area.
							</p>
							<button
								style={{
									backgroundColor: "rgba(0,0,0,0.1)",
									borderColor: "#ffae42",
									backgroundColor: "#F3961a",
									width: "150px",
									height: "50px",
								}}
								class="btn btn-primary"
							>
								Call Now
							</button>
						</div>
					</div>
					<div class="bgimage3">
						<div class="container w-[60%] pb-5 pt-5">
							<h2 class=" text-[30px] font-bold text-[#ffae42] text-center">
								WHY DO YOU NEED TO INSTALL SAFETY & SECURITY WINDOW FILMS IN
								Sharjah?
							</h2>
							<p class=" leading-7 pt-2 text-justify text-white">
								It goes without saying that you must make your household or
								business place safe and secure. In Sharjah, there are
								unfavourable weather patterns and extreme climate changes, which
								have a significant negative influence on the buildings and
								structures. In certain disaster-prone places, other natural
								catastrophes like earthquakes and fast-blow wind bursts like
								hurricanes are also rather prevalent. Installing protective
								shields on glass windows and doors is necessary since they are
								vulnerable to breaking, which may result in many forms of
								property and life harm. Additionally, there are unforeseen
								incidental damages brought on by theft and other criminal
								activity, therefore you should maintain tight security to
								prevent them. The safety and security window films may provide
								you excellent protection in this regard. These films are
								intended to prevent window and door glass from breaking as a
								result of different outside pressures or accidents.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div className="bgimage1 ">
				<div class="container-fluid py-5 ">
					<div class="">
						<div class="row ">
							<div class=" wow fadeInUp" data-wow-delay="0.1s">
								<div
									class="text-center mx-auto wow fadeInUp"
									data-wow-delay="0.1s"
									style={{ maxWidth: "900px" }}
								>
									<h2
										style={{ color: "#071E22", fontWeight: "bold" }}
										class="display-4 mb-3 "
									>
										Why To Choose Storm AUTOMOTIVE ?
									</h2>
									<h3
										style={{ color: "#071E22", fontWeight: "normal" }}
										className="font-bold text-[24px]"
									>
										CAR TINTING IN Sharjah
									</h3>
									<p class="mt-3 text-center text-white  ">
										With its excellent quality auto storm car tinting in
										Sharjah, window film, Storm Automotive LLC has improved and
										transformed many vehicles and structures since its founding
										in 2010. To improve energy efficiency, safety, and general
										privacy, our highly qualified team of professionals can
										offer efficient window tinting services for cars and homes.
										Customers have the highest faith in us for a number of
										reasons. Several of them are listed below.
									</p>
								</div>
								<br></br>
								<br></br>
								<br></br>
								<div className="row">
									<div className="col-md-6">
										<div class="d-flex mb-5">
											<div
												class="flex-shrink-0 btn-square  rounded-circle"
												style={{
													width: "90px",
													height: "90px",
													background: "#071E22",
												}}
											>
												<div class="img-fluid">
													<GiShakingHands size={40} color="#ffff" />
												</div>
											</div>
											<div class="ms-4">
												<h5
													style={{ color: "#071E22", fontWeight: "normal" }}
													class="mb-3 "
												>
													World-class products
												</h5>
												<p className="text-justify text-white ">
													Storm Automotive offers a wide selection of window
													films as an authorised Storm accessories tinting
													centre in Sharjah. All of our goods come from a
													high-quality company that is the industry leader in
													window film production. Additionally, they have
													completed a number of quality analysis procedures to
													guarantee unrivalled quality. These window tinting
													options seek to provide a safer driving environment by
													minimising glare. Additionally, they can offer the
													required level of safety and defence against damaging
													sunrays when used on a window.
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-6"></div>

									<div className="col-md-6">
										<div class="d-flex mb-5">
											<div
												class="flex-shrink-0 btn-square  rounded-circle"
												style={{
													width: "90px",
													height: "90px",
													background: "#071E22",
												}}
											>
												<div class="img-fluid">
													<GiAchievement size={40} color="#ffff" />
												</div>
											</div>
											<div class="ms-4">
												<h5
													style={{ color: "#071E22", fontWeight: "normal" }}
													class="mb-3 "
												>
													Extensive Industry Experience
												</h5>
												<p className="text-justify text-white ">
													With around 20 years of car-tinting experience in
													Sharjah, we aim to continually provide perfection. All
													window tinting services can be performed by our
													skilled personnel with the utmost precision. These
													professionals can polish and detail any vehicle to a
													high standard and within the allotted time thanks to
													their attention to detail. Additionally, they continue
													to expand their knowledge and skills as automobile
													tinting technology advances.
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<Image
											style={{
												width: "60%",
												margin: "auto",
												border: "2px solid black",
												borderRadius: "15px",
											}}
											src={Feature}
											alt="Car Tinting Service Sharjah"
										/>
									</div>

									<div className="col-md-6">
										<div class="d-flex mb-5">
											<div
												class="flex-shrink-0 btn-square  rounded-circle"
												style={{
													width: "90px",
													height: "90px",
													background: "#071E22",
												}}
											>
												<div class="img-fluid">
													<GiCombinationLock size={40} color="#ffff" />
												</div>
											</div>
											<div class="ms-4">
												<h5
													style={{ color: "#071E22", fontWeight: "normal" }}
													class="mb-3"
												>
													Authorization
												</h5>
												<p className="text-justify text-white">
													Storm Automotive relies on ethical business practises
													and standards because it is an authorised partner of
													the top manufacturer of sun control window films in
													the world. We go above and above to establish a
													connection of trust with our customers. Therefore,
													each car tinting service or product provided by our
													business includes an authenticity certificate.
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-6"></div>

									<div className="col-md-6"></div>
									<div className="col-md-6">
										<div class="d-flex mb-5">
											<div
												class="flex-shrink-0 btn-square  rounded-circle"
												style={{
													width: "90px",
													height: "90px",
													background: "#071E22",
												}}
											>
												<div class="img-fluid">
													<FcApproval size={40} color="#ffff" />
												</div>
											</div>
											<div class="ms-4">
												<h5
													style={{ color: "#071E22", fontWeight: "normal" }}
													class="mb-3 "
												>
													Scientifically-approved window films
												</h5>
												<p className="text-justify text-white">
													As a licenced window film dealer, storm Automotive
													offers premium automobile tinting products with some
													known health advantages. These cutting-edge storm car
													tints have been validated by science and can block up
													to 99% of UV and infrared rays. As a result of their
													prolonged sun exposure, they shield themselves from
													prevalent ailments.
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<Image
											style={{
												width: "60%",
												margin: "auto",
												border: "2px solid black",
												borderRadius: "15px",
											}}
											src={Feature2}
											alt="Car Tinting Service Sharjah"
										/>
									</div>
									<div className="col-md-6">
										<div class="d-flex mb-5">
											<div
												class="flex-shrink-0 btn-square  rounded-circle"
												style={{
													width: "90px",
													height: "90px",
													background: "#071E22",
												}}
											>
												<div class="img-fluid">
													<GiThreeFriends size={40} color="#ffff" />
												</div>
											</div>
											<div class="ms-4">
												<h5
													style={{ color: "#071E22", fontWeight: "normal" }}
													class="mb-3 "
												>
													Budget-friendly
												</h5>
												<p className="text-justify text-white">
													We dont demand that you spend a fortune protecting
													your car from dangerous UV and infrared rays. Instead,
													we provide affordable auto tinting and sun control
													window films to improve comfort. We also offer a
													variety of solutions for home tinting and let our
													customers select the one that best suits their needs
													and their budget. Additionally, our window tinting
													options can enable you to reduce your long-term
													lighting and air conditioning expenses.
												</p>
											</div>
										</div>
									</div>
									<div className="col-md-6"></div>
									<div className="col-md-6">
										<div class="d-flex mb-5">
											<div
												class="flex-shrink-0 btn-square  rounded-circle"
												style={{
													width: "90px",
													height: "90px",
													background: "#071E22",
												}}
											>
												<div class="img-fluid">
													<GiShakingHands size={40} color="#ffff" />
												</div>
											</div>
											<div class="ms-4">
												<h5
													style={{ color: "#071E22", fontWeight: "normal" }}
													class="mb-"
												>
													100% Satisfaction
												</h5>
												<p className="text-justify text-white ">
													At Storm Automotive, we perform superior storm auto
													tinting services in Sharjah and around the UAE with
													the goal of achieving unmatched client satisfaction.
													We guarantee that our goods will meet your
													expectations for quality and performance.
													Additionally, they maintain their appearance and
													colour throughout time. Additionally, being a
													reputable window tinting business in the UAE, we
													continuously adapt to meet the shifting needs and
													preferences of our clients.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style={{ height: "300px" }} className="container-fluid bg-storm">
				<div
					style={{ color: "#ffae42", fontWeight: "bold", textAlign: "center" }}
					className=" text-[44px] pt-3 "
				>
					GUARANTEES
				</div>

				<p className="text-LEFT  m-auto text-white text-[18px] mt-1 ">
					In the UAE, storm Automotive is a reliable source of tint and provides
					some of the best warranties available.Protection against colour fading
					We guarantee that all of our window films wont fade for years, and
					that both intense wind and direct sunlight wont dull their glossy
					sheen.
				</p>
			</div>
			<div
				style={{ backgroundColor: "#071E22", }}
				className="container-fluid "
			>
				<p
					style={{ color: "#Ffb400" }}
					className="text-center  m-auto pb-5 text-[40px] "
				>
					The following warranties are provided to our clients.
				</p>
				<div className="row mt-10 m-auto gop mb-[200px]">
					<div className="col-md-4 gbbb">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#071E22",
								border: "2px solid #Eaeaac",
							}}
						>
							<div class="card-img-top  mt-5">
								<BsShieldCheck
									size={50}
									style={{ marginLeft: "40%", color: "#Ffb400" }}
								/>
							</div>

							<div class="card-body">
								<h5
									style={{ color: "#Ffb400" }}
									class="card-title text-center text-[20px] "
								>
									Warranty for UV ray blockage
								</h5>
								<p class="card-text text-[14px] text-white text-justify">
									The window/car tints from Storm Automotive offer some UV and
									infrared radiation protection. They will therefore let you to
									enjoy natural sunshine without having to deal with its
									negative consequences.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 gbbb">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#071E22",
								border: "2px solid #Eaeaac",
							}}
						>
							<div class="card-img-top  mt-5">
								<GiFactory
									size={50}
									style={{ marginLeft: "45%", color: "#Ffb400" }}
								/>
							</div>

							<div class="card-body">
								<h5
									style={{ color: "#Ffb400" }}
									class="card-title text-[20px] "
								>
									Industry’s leading warranties
								</h5>
								<p class="card-text text-white text-[14px] text-justify">
									Our contemporary window films offer all the advantages
									outlined by industry standards. Additionally, they come with a
									warranty against delamination, peeling, blistering, and
									bubbling. They are non-metallic, so they dont affect how
									mobile devices and satellite communications normally operate.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 gbbb">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#071E22",
								border: "2px solid #Eaeaac",
							}}
						>
							<div class="card-img-top mt-5">
								<GiMetalDisc
									size={50}
									style={{ marginLeft: "45%", color: "#Ffb400" }}
								/>
							</div>

							<div class="card-body">
								<h5
									style={{ color: "#FFD700" }}
									class="card-title text-[20px] "
								>
									Warranty for non-metallic window films
								</h5>
								<p class="card-text text-white text-[14px] text-justify">
									Our contemporary automobile window films do not include any
									metallic components, in contrast to their conventional
									equivalents. As a result, they dont prevent mobile devices and
									satellite signals from operating normally.
								</p>
							</div>
						</div>
					</div>
				</div>
				<ul
					style={{ listStyle: "circle" }}
					className=" text-justify m-4 text-[18px] mt-5 text-[white]"
				>
					<li>
						In addition to adhering to the many quality standards established by
						the new Federal Traffic Law that went into effect on July 1st.
					</li>
					<li>
						we also follow an universal installation guideline. we backup the
						same with a few warranties that come with each window film
					</li>
					we backup the same with a few warranties that come with each window
					film.
					<li>
						If it turns out that our product is flawed, we will replace itat no
						additional cost. You will need to provide the purchase receipt,
						which includes information on the kind of film and the
						installationdate, in order to take advantage of the guarantee.
					</li>
					<li>
						The length of theguarantee may differ depending on the particular
						automobile or window tint you have selected.
					</li>
				</ul>
			</div>

			<div className=" bgimage">
				<div className="text-center pt-5 text-[#Ffb400] text-[32px] font-bold  ">
					HOW IT WORKS
				</div>
				<div className="row container py-4  m-auto">
					<div className="col-lg-3 col-md-5 gbbb">
						<div
							class="card"
							style={{
								width: "18rem",

								backgroundColor: "#Ffb400",
							}}
						>
							<div class="card-img-top   mt-5">
								<BsPeople
									size={100}
									style={{ marginLeft: "35%", color: "white" }}
								/>
							</div>

							<div class="card-body">
								<h5 class="card-title text-[16px] text-[white] text-center ">
									MEET THE CLIENT
								</h5>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-5 gbbb">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#Ffb400",
							}}
						>
							<div class="card-img-top  mt-5">
								<AiOutlineSolution
									size={100}
									style={{ marginLeft: "35%", color: "white" }}
								/>
							</div>

							<div class="card-body">
								<h5 class="card-title text-[16px] text-center text-[white] ">
									CUSTOMISE SOLUTION
								</h5>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-5 gbbb">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#Ffb400",
							}}
						>
							<div class="card-img-top  mt-5">
								<GrUnorderedList
									size={100}
									style={{ marginLeft: "35%", color: "white" }}
								/>
							</div>

							<div class="card-body">
								<h5 class="card-title text-[16px] text-center text-[white]  ">
									CONFIRM ORDER
								</h5>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-5 gbbb">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#Ffb400",
							}}
						>
							<div class="card-img-top  mt-5">
								<TbTruckDelivery
									size={100}
									style={{ marginLeft: "35%", color: "white" }}
								/>
							</div>

							<div class="card-body">
								<h5 class="card-title text-[16px] text-center text-[white] ">
									DELIVERY & INSTALLATION
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bgimage ">
				<div
					style={{ height: "530px", paddingTop: "100px" }}
					className="container  m-auto"
				>
					<div class="accordion" id="accordionExample">
						<div class="accordion-item">
							<h2
								style={{ backgroundColor: "#071E22" }}
								class="accordion-header"
								id="headingzero"
							>
								<button
									style={{ color: "#ffae42" }}
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapsezero"
									aria-expanded="false"
									aria-controls="collapsezero"
								>
									STORM AUTOMATIVE WINDOW FILM AND CAR TINTING CENTER SHARJAH
								</button>
							</h2>
							<div
								id="collapsezero"
								class="accordion-collapse collapse show"
								aria-labelledby="headingzero"
								data-bs-parent="#accordionExample"
							>
								<p
									style={{ backgroundColor: "#071E22" }}
									class="accordion-body text-[15px] text-white text-justify"
								>
									Window tinting can offer long-lasting practical advantages,
									such as Privacy, sun protection, and safety, in addition to
									improving Aesthetics. Storm automotive is a reputable auto
									tinting business That works with you to install an optically
									transparent film to give Vehicles the performance and
									appearance you want. All of our Materials protect against uv
									radiation and adhere to uae automobile Tinting regulations.
									Additionally, they include a uv protection Certification that
									you can attest to.
								</p>
							</div>
						</div>

						<div class="accordion-item">
							<h2
								style={{ backgroundColor: "#071E22" }}
								class="accordion-header"
								id="headingTwo"
							>
								<button
									style={{ color: "#ffae42" }}
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									Trusted Window Tinting Centre in Sharjah
								</button>
							</h2>
							<div
								id="collapseTwo"
								class="accordion-collapse collapse "
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionExample"
							>
								<p
									style={{ backgroundColor: "#071E22" }}
									class="accordion text-[15px] text-white text-justify"
								>
									Window films are an excellent investment since they offer
									everything from temperature control to sun protection. Optical
									clear films may be installed by Storm Automotive, a reputable
									window tinting business, to safeguard your car and provide you
									with a safer and more pleasant ride. We have a wide variety of
									automobile tints to comply with the new traffic regulation in
									Sharjah, which permits car owners to receive up to 50% tint.
									<br />
									<br />
									Your automobile may have a brand-new appearance thanks to our
									high-quality window tinting services. We can provide you with
									the ideal window/car tinting solution, regardless of whether
									you need a specific amount of UV protection, light filtering,
									interior upgrading, privacy, safety, or glare relief. Our
									staff considers each customers particular needs and offers the
									best window tinting materials to fit them.
								</p>
							</div>
						</div>
						<div class="accordion-item">
							<h2
								style={{ backgroundColor: "#071E22" }}
								class="accordion-header"
								id="headingThree"
							>
								<button
									style={{ color: "#ffae42" }}
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									Upgrade the Style and Comfort of Your Vehicle with storm
									Window Tinting
								</button>
							</h2>
							<div
								id="collapseThree"
								class="accordion-collapse collapse"
								aria-labelledby="headingThree"
								data-bs-parent="#accordionExample"
							>
								<p
									style={{ backgroundColor: "#071E22" }}
									class="accordion-body text-[15px] text-white text-justify"
								>
									We try to satisfy the various demands of automobile owners in
									the UAE with our premium automotive window tinting, which
									exudes unrivalled excellence. We provide you with a wide range
									of automobile tinting choices that enable you to drive more
									easily, including Crystalline, Ceramic Coating, and FX Series.
									Simply inform us of your issues, and our window tinting
									specialists will respond with appropriate advice. We will
									implement a product or service when you approve it.
								</p>
							</div>
						</div>
						<div class="accordion-item">
							<h2
								style={{ backgroundColor: "#071E22" }}
								class="accordion-header"
								id="headingFour"
							>
								<button
									style={{ color: "#ffae42" }}
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseFour"
									aria-expanded="false"
									aria-controls="collapseFour"
								>
									An Exhaustive Range of Car Window Tinting Services
								</button>
							</h2>
							<div
								id="collapseFour"
								class="accordion-collapse collapse"
								aria-labelledby="heading"
								data-bs-parent="#accordionExample"
							>
								<p
									style={{ backgroundColor: "#071E22" }}
									class="accordion-body text-white text-[15px]"
								>
									Storm automotive, a window tinting company with years of
									expertise, offers a wide range of automobile and window
									tinting choices in Sharjah. Therefore, you may choose a window
									film that suits your needs here, whether you want privacy and
									protection or a better look. We make sure that all of our
									products are made to offer uv protection, reduce overheating,
									and the required amount of privacy since we are an approved
									storm vehicle tinting facility in Sharjah.
									<br /> In addition to providing products of the highest
									calibre, our business places a huge emphasis on appropriate
									installation and finishing. Additionally, as an approved
									automobile tinting shop, we provide a wide array of services,
									including
									<br />
									<span className="text-red-600">Car Window Tinting </span>
									<br />
									Our premium selection of storm sun control films gives the
									inside of your automobile the necessary degree of privacy and
									security..
									<br />
									<span className="text-red-600">
										Creative Vehicle Graphics{" "}
									</span>
									<br />
									As a storm certified car tinting shop in Sharjah, we give you
									countless opportunities to express your creativity via vehicle
									wraps.
									<br />
									<span className="text-red-600">Paint Protection Film </span>
									<br />
									When used on a cars painted surfaces, this high-end automobile
									tinting aids in avoiding fading or abrasion.
									<br />
									<span className="text-red-600">Car Detailing </span>
									<br />
									With a range of services, we can provide a brand-new look to
									the interior and exterior of your car.
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bgimage2 py-5 ">
				<div className="row container">
					<div className="col-md-10">
						<div
							style={{ color: "#FFD700" }}
							className="text-center text-[44px] font-bold"
						>
							CALL US FOR LIVE ASSISTANCE
						</div>
						<p className="text-center text-[20px] text-white">
							All you have to do is phone or email us for an appointment, and
							our assessment specialist will contact you.
						</p>
					</div>
					<div className="col-md-2">
						<a
							href=""
							style={{
								backgroundColor: "rgba(0,0,0,0.1)",
								borderColor: "#ffae42",
							}}
							class="btn btn-primary py-2 px-5 mt-4 animated slideInDown"
						>
							{" "}
							Call Now
						</a>
					</div>
				</div>
			</div>
			<ContactForm />
			<a href="https://api.whatsapp.com/send?phone+03469413675" class="float">
				<AiFillPhone class="fa fa-plus my-float"></AiFillPhone>
			</a>
			<a href="https://api.whatsapp.com/send?phone+03469413675" class="float2">
				<BsWhatsapp class="fa fa-plus my-float"></BsWhatsapp>
			</a>
			<Link
				style={{ textAlign: "center", marginTop: "50%" }}
				href="/Homearabic"
			>
				<p id="link" class="float3"></p>
			</Link>
			{/* <a id="link" class="float4">
				<Link href="/">
					<MdOutlineLanguage className="my-float" />
					English
				</Link>
			</a> */}
			<Footer />
		</>
	);
	
}
