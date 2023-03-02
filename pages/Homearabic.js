import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import C1 from "../img/window-tinting-2.jpg";
import C2 from "../img/carousel-2.jpg";
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
import { MdOutlineLanguage } from "react-icons/md";
import { FcApproval } from "react-icons/fc";
import { BsShieldCheck, BsPeople } from "react-icons/bs";
import { GrUserWorker, GrUnorderedList, GrDeliver } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";

import A1 from "../img/A1.jpg";
import A2 from "../img/about-2.jpg";
import A3 from "../img/about-3.jpg";
import A4 from "../img/about-4.jpg";
import { AiFillPhone, AiOutlineSolution } from "react-icons/ai";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import Feature from "../img/mec.jpg";
import Feature2 from "../img/mec2.gif";
import S1 from "../img/service-1.jpg";
import S2 from "../img/service-2.jpg";
import S3 from "../img/S1.jpeg";
import S4 from "../img/SchoolBuss.jpg";
import S5 from "../img/porch11.webp";
import S6 from "../img/image3.jpg";
import T1 from "../img/team-1.jpg";
import T2 from "../img/team-2.jpg";
import T3 from "../img/team-3.jpg";
import T4 from "../img/team-4.jpg";
import R1 from "../img/testimonial-1.jpg";
import R2 from "../img/testimonial-2.jpg";
import R3 from "../img/testimonial-3.jpg";
import Automotive from "../img/commercial.jpg";
import Res from "../img/res.jpg";
import sec from "../img/seeec.webp";
import ContactForm from "@/Components/ContactForm";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Poster from "../img/poster.jpg";
import { RxCross2 } from "react-icons/rx";
import Topbar from "@/Components/Topbar";
import Footer from "@/Components/Footer";
import Carmic from "../img/carmeic.webp";
import Mechnic from "../img/mechnic.jpg";
import Floating from "@/Components/Floating";
import Head from "next/head";
import Image from "next/image";
import TopbarAr from "@/Components/TopbarAr";
import ContactFormAr from "@/Components/ContactFormAr";
import FooterAr from "@/Components/FooterAr";
import Link from "next/link";
import F1 from "../img/car_tinting_experts.png";
import F2 from "../img/c2-removebg-preview.png";
import F3 from "../img/c3-removebg-preview.png";

export default function Homearabic() {
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(true);

	const cancelButtonRef = useRef(null);

	return (
		<>
			<Head>
				<title>
					Car Tinting Dubai | 3M Car Window Tinting | 3M Auto Care - Safa
				</title>
				<meta
					name="description"
					content="Car Tinting Dubai - Window Tinting And Paint Protection Film Offers In Dubai, Superior Quality 3M Authorized Car Tinting In Dubai & Window Tint Solution."
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
					content="Car Tinting Dubai - Window Tinting And Paint Protection Film Offers In Dubai, Superior Quality 3M Authorized Car Tinting In Dubai & Window Tint Solution. "
				/>

				<link rel="alternate" href="https://www.safa.ae/" hreflang="en" />
				<link rel="canonical" href="https://www.safa.ae/" />
			</Head>
			<TopbarAr />

			<div
				id="carouselExampleControls"
				class="carousel slide"
				data-bs-ride="carousel"
			>
				<div class="carousel-inner">
					<div class="carousel-item active h-[120vh]">
						<div>
							<div>
								<Image style={{ height: "120vh" }} src={C1} />
								<div class="carousel-caption">
									<div class="container-fluid">
										<div class="row ">
											<div class="col-lg-6 pt-5">
												<h1
													style={{ fontWeight: "bold" }}
													class="display-3 text-white mb-4  animated slideInDown text-[35px]"
												>
													ستورم اكسسوارت تظليل نوافذ السيارة الشارقة
												</h1>
												<h2
													style={{ color: "#FFD700", fontSize: "20px" }}
													className="mb-4"
												>
													طلاء سيراميك | PPF | المكتب و نافذة المنزل | فيلم عن
													السلامة والأمان
												</h2>
												<h3 className="text-white text-[40px] mb-5 font-bold">
													تنجيد المقاعد
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
														borderColor: "#FF7276",
													}}
													class="btn btn-primary  animated slideInDown"
												>
													اتصل الان
												</button>
												<button
													style={{
														backgroundColor: "rgba(0,0,0,0.1)",
														borderColor: "#FF7276",
													}}
													class="btn btn-primary animated slideInDown ml-5"
													onClick={() => {
														setOpen(true);
													}}
												>
													احجز الآن
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
													src={F2}
													style={{
														width: "90%",
														height: "90%",
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
					<div class="carousel-item  h-[120vh]">
						<div>
							<div>
								<Image style={{ height: "120vh" }} src={C1} />
								<div class="carousel-caption">
									<div class="container-fluid">
										<div class="row ">
											<div class="col-lg-6 pt-5">
												<h1
													style={{ fontWeight: "bold" }}
													class="display-3 text-white mb-4  animated slideInDown text-[35px]"
												>
													ستورم اكسسوارت تظليل نوافذ السيارة الشارقة
												</h1>
												<h2
													style={{ color: "#FFD700", fontSize: "20px" }}
													className="mb-4"
												>
													طلاء سيراميك | PPF | المكتب و نافذة المنزل | فيلم عن
													السلامة والأمان
												</h2>
												<h3 className="text-white text-[40px] mb-5 font-bold">
													خدمات تصفيح النوافذ
												</h3>
												<button
													style={{
														backgroundColor: "rgba(0,0,0,0.1)",
														borderColor: "#FF7276",
													}}
													class="btn btn-primary animated slideInDown"
												>
													اتصل الان
												</button>
												<button
													style={{
														backgroundColor: "rgba(0,0,0,0.1)",
														borderColor: "#FF7276",
													}}
													class="btn btn-primary animated slideInDown ml-5 "
													onClick={() => {
														setOpen(true);
													}}
												>
													احجز الآن
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
														width: "90%",
														height: "90%",
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
													Storm Accessories Car Window Tinting Dubai
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

			<div class="container-fluid    py-5" data-parallax="scroll">
				<div class="container  py-5">
					<div class="row ">
						<div class="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
							<h4
								style={{ color: "BLACK", textAlign: "center" }}
								class="display-4 "
								data-toggle="counter-up"
							>
								+٥۰۰ مليون
							</h4>
							<p style={{ color: "red", textAlign: "center" }}>عملاء سعداء</p>
						</div>
						<div class="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
							<h4
								style={{ color: "BLACK", textAlign: "center" }}
								class="display-4 "
								data-toggle="counter-up"
							>
								مائتان
							</h4>
							<p style={{ color: "red", textAlign: "center" }}>فريق الخبراء</p>
						</div>
						<div class="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
							<h4
								style={{ color: "BLACK", textAlign: "center" }}
								class="display-4 "
								data-toggle="counter-up"
							>
								+۳۸٥
							</h4>
							<p style={{ color: "red", textAlign: "center" }}>مشروع مستمر</p>
						</div>
					</div>
				</div>
			</div>

			<div class="" style={{ backgroundColor: "#FFF8DC" }}>
				<div class="container">
					<div class="row  align-items-center">
						<div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
							<div class="h-100">
								<h2 style={{ color: "red" }} class="display-6 mb-5 ">
									أفضل مركز ستورم لاكسسوارات السيارات في دبي
								</h2>

								<p class="mb-4 text-justify ">
									الأشعة فوق البنفسجية الزائدة ، والأشعة تحت الحمراء ، والحرارة
									الشديدة ، و الوهج من خلال توفير مجموعة واسعة من تظليل السيارات
									في دبي. يمكن أن تقدم أفلام النوافذ الحديثة من Auto Storm منا
									تحسينًا الراحة والأمان والخصوصية. كونها واحدة من أفضل السيارات
									مركز العاصفة المعتمد في دولة الإمارات العربية المتحدة ، نحن
									على دراية واسعة مجموعة من احتياجات عملائنا ونقدم لهم أحدث
									السيارات أفلام نافذة العاصفة التي تلبي متطلباتهم الفريدة من
									نوعها الحماية من الشمس ، بيئة العمل للإضاءة ، ودرجة الحرارة
									اللوائح.<br></br>
									<br></br> سيساعدك تظليل السيارة المتميز في عاصفة السيارات
									إعطاء سيارتك المظهر والفائدة المطلوبين. بالإضافة إلى ذلك ، كل
									عنصر من العناصر لدينا مقاوم للخدش طلاء يضمن المتانة ولمسة
									نهائية خالية من العيوب. تستطيع الاستفادة من المزايا الصحية
									الرائعة الطبيعية تضيء وتحمي منزلك من درجات الحرارة المرتفعة
									يتغير بمساعدة حل الصبغ المنزلي الخاص بنا. بالإضافة إلى ذلك ،
									يمكن أن يعزز لون السيارة العاصفة من الراحة ورفاهية السيارة.
									بالإضافة إلى ذلك ، فإنها توفر خزنة تجربة القيادة عن طريق تقليل
									الوهج المفرط الناتج بواسطة الشمس أو مصادر الضوء الأخرى من صنع
									الإنسان.
								</p>
								<div class="border-top mt-4 pt-4">
									<div class="row">
										<div class="col-sm-6">
											<div class="d-flex align-items-center">
												<div
													style={{ backgroundColor: "#FF7276" }}
													class="btn-lg-square  rounded-circle me-3"
												>
													<AiFillPhone color="#fff" />
												</div>
												<h5 class="mb-0">+971 50 144 4353</h5>
											</div>
										</div>
										<div class="col-sm-6">
											<div class="d-flex align-items-center">
												<div
													style={{ backgroundColor: "#FF7276" }}
													class="btn-lg-square  rounded-circle me-3"
												>
													<BsFillEnvelopeFill color="#ffff" />
												</div>
												<h5 class="mb-0">info@accessorystorm.com</h5>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6">
							<div class="row g-3">
								<div class="col-lg-12 text-end">
									<div class="img-fluid w-100 wow zoomIn">
										<Image
											src={A1}
											alt="Car Tinting Service Dubai"
											style={{ borderRadius: 20, marginLeft: 10 }}
										/>
									</div>
								</div>
								{/* <div class="col-6 text-start">
									<div class="img-fluid w-80 wow zoomIn">
										<Image src={A2}  alt="Car Tinting Service Dubai" />
									</div>
								</div>
								<div class="col-6 text-end">
									<div class="img-fluid w-100 wow zoomIn">
										<Image src={A3}  alt="Car Tinting Service Dubai" />
									</div>
								</div>
								<div class="col-6 text-end">
									<div class="img-fluid w-100 wow zoomIn">
										<Image src={A4}  alt="Car Tinting Service Dubai" />
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<hr></hr>
			<div class="container-xxl">
				<div class="container">
					<div
						class="text-center m-auto  wow fadeInUp"
						data-wow-delay="0.1s"
						style={{ maxWidth: "800px" }}
					>
						<span
							style={{ color: "#FF7276", fontWeight: "normal" }}
							class="display-4 mb-3 "
						>
							خدماتنا
						</span>
						<p className=" leading-6 mb-5">
							Storm Automotive ، شركة معروفة بمجموعتها من AUTO STORM تلتزم خدمات
							تظليل السيارات في دبي بشدة الاستدامة. نعتمد نهجا شاملا للشمس
							الحماية وتجنب الضرر وتقليل الوهج مع خدمات تظليل النوافذ والأفلام
							المتطورة.
						</p>
					</div>
					<div class="row m-auto  ">
						<div class="col-lg-4 col-md-6 wow fadeInUp " data-wow-delay="0.1s">
							<div class="service-item ">
								<div class="img-fluid res ">
									<Image
										style={{
											border: "5px solid black",
											borderRadius: "15px",
											borderColor: "rgba(0,0,0,0.3)",
										}}
										src={S1}
										alt="Car Tinting Service Dubai"
										className="res"
									/>
								</div>
								<div>
									<a style={{ fontSize: "20px", color: "#FF7276" }}>السيارات</a>
								</div>
								<p className="text-justify w-72 pb-3">
									تتضمن خدمات تنظيف السيارات في الشارقة تنظيفًا شاملاً وتلميع
									الهيكل الخارجي والداخلي للسيارة. ويشمل ذلك غسل وتلميع السطح
									الخارجي بالشمع وكذلك تنظيف وتكييف الداخل.
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
										alt="Car Tinting Service Dubai"
										className="res"
									/>
								</div>
								<div>
									<a style={{ color: "#FF7276", fontSize: "20px" }}>
										أفلام تظليل النوافذ التجارية
									</a>
								</div>
								<p className="text-justify w-72 pb-3">
									الأشعة فوق البنفسجية الضارة التي يمكن أن تتلاشى وتدمر
									المفروشات ، يتم حظر الأقمشة والتشطيبات الداخلية الأخرى بواسطة
									هذه طلاءات تصل إلى 99٪. كما أنهم درعوا العمال من الآثار
									السلبية للأشعة فوق البنفسجية.
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
										alt="Car Tinting Service Dubai"
									/>
								</div>
								<div>
									<a style={{ color: "#FF7276", fontSize: "20px" }}>مقعد فوق</a>
								</div>
								<p className="text-justify w-72 pb-3">
									أي ضرر يلحق بأغطية المقاعد الحالية ، مثل الدموع ، والحروق ، أو
									البقع ، يمكن إصلاحها من خلال خدمات تصليح المقاعد في الشارقة.
									من خلال توفير هذه الخدمات ، قد تستمر المقاعد الحالية لفترة
									أطول و قد يتجنب العملاء الاضطرار إلى شراء أجهزة جديدة.
								</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
							<div class="service-item">
								<div class="img-fluid res">
									<Image
										style={{
											border: "5px solid black",
											borderRadius: "15px",
											borderColor: "rgba(0,0,0,0.3)",
										}}
										src={S4}
										alt="Car Tinting Service Dubai"
										className="res"
									/>
								</div>
								<div>
									<a style={{ color: "#FF7276", fontSize: "20px" }}>
										الحافلات المدرسية
									</a>
								</div>
								<p className="text-justify w-72 pb-3">
									يمكن زيادة سلامة الحافلات المدرسية باستخدام حافلات الشارقة
									خدمات تظليل النوافذ. في حالة وقوع حادث أو يمكن أن تساعد
									النوافذ المظللة في منع الزجاج من تحطيم ، وتقليل احتمالية إصابة
									الأطفال وسائقي الحافلات.
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
										src={S5}
										alt="Car Tinting Service Dubai"
										className="res"
									/>
								</div>
								<div>
									<a style={{ color: "#FF7276", fontSize: "20px" }}>سكني</a>
								</div>
								<p className="text-justify w-72 pb-3">
									يمكن أن تلبي خدمات تظليل النوافذ السكنية في الشارقة أ احتياجات
									متنوعة للمنزل بسعر معقول. يمكن لأصحاب المنازل الاستفادة من
									مزيد من الخصوصية والطاقة الأفضل الكفاءة ، وزيادة الراحة ،
									وزيادة السلامة و الأمن عن طريق تركيب أفلام تظليل النوافذ.
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
										src={S6}
										alt="Car Tinting Service Dubai"
										className="res"
									/>
								</div>
								<div>
									<a style={{ color: "#FF7276", fontSize: "20px" }}>
										سلامة الامن
									</a>
								</div>
								<p className="text-justify w-72 pb-3">
									الأمن والسلامة يمكن لخدمات تظليل النوافذ في الشارقة تلبية
									مجموعة متنوعة من متطلبات الملكية بتكلفة معقولة. أصحاب الأملاك
									يمكن أن تستفيد من أعلى مستويات السلامة والأمن ، وطاقة أفضل
									الكفاءة ، وزيادة الخصوصية ، وحماية أكبر ضد الآثار الضارة
									للأشعة فوق البنفسجية عن طريق تركيب النافذة أفلام التظليل.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br></br>
			<br></br>
			<div>
				<section class=" container body-font">
					<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
						<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
							<h2 class=" text-[24px] font-bold text-[#FF7276]">
								عازل حراري للسيارة في الشارقة
							</h2>
							<h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 divide-dashed > * + *">
								السيارات
							</h3>

							<p class="mb-8 leading-relaxed text-justify">
								هل تبحث عن أفضل خيارات حماية السيارات؟ نحن توفر مجموعة واسعة من
								حماية السيارات من الدرجة الأولى معدات لمساعدتك على حماية سيارتك
								من العديد العوامل الخارجية ، مثل الشمس والغبار والأوساخ والطقس.
								نحن تقدم أكسسوارات السيارات في العاصفة كل ما تحتاجه لصنع
								السيارات تبدو وكأنها جديدة ، بما في ذلك خدمات التفصيل ، نانو
								طلاء السيراميك ، تلميع السيارات ، أفلام التحكم في الشمس ،
								والتفاصيل خدمات. لدينا الكثير من المعرفة والمهارة في منحك
								الحماية الشاملة للسيارات لأننا المرخص لهم مركز العناية بالسيارات
								في دبي. نحن مسؤولون عن سلامة سيارتك.
							</p>
						</div>

						<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
							<div
								style={{ border: "3px solid #151229", borderRadius: "20px" }}
								class="object-cover object-center  "
							>
								<Image
									alt="hero"
									src={Automotive}
									style={{ borderRadius: 20 }}
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
									border: "3px solid #d5d4d9",
									borderRadius: "20px",
									height: "25rem",
								}}
							>
								<div class="card-img-top ">
									<Image
										style={{ borderRadius: "10px", height: "10rem" }}
										src={Cartint}
										alt="..."
									/>
								</div>

								<div class="card-body">
									<h5 class="text-[#FF7276] text-[18px] font-bold">
										تظليل نوافذ السيارة دبيتظليل نوافذ السيارة دبي
									</h5>
									<p class="card-text text-justify font-semibold">
										نحن نقدم مجموعة استثنائية من سيارات العاصفة الملحقات وأغطية
										النوافذ الواقية من الشمس التي يتم تركيبها على نوافذ سياراتك
										لتجعلك متوافقًا وحفظ ملف داخل سيارتك من التلف بسبب الحرارة
										الزائدة وأشعة الشمس.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div
								class="card"
								style={{
									width: "20rem",
									border: "3px solid #d5d4d9",
									borderRadius: "20px",
									height: "25rem",
								}}
							>
								<div class="card-img-top">
									<Image
										style={{ borderRadius: "10px", height: "10rem" }}
										src={Carmic}
										alt="..."
									/>
								</div>
								<div class="card-body">
									<h5 class=" text-[#FF7276] font-bold">Ceramic Coating</h5>
									<p class="card-text text-justify font-semibold">
										نحن نقدم أفضل طلاء نانو سيراميك لحمايتك السيارة من الخدوش
										والأضرار الخارجية الأخرى. يتم استخدامها على الطلاء ،
										والمصدات ، والزخرفة البلاستيكية لتوفيرها حماية عامة طويلة
										الأمد.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div
								class="card"
								style={{
									width: "20rem",
									border: "3px solid #d5d4d9",
									borderRadius: "20px",
									height: "25rem",
								}}
							>
								<div class="card-img-top">
									<Image
										style={{ borderRadius: "10px", height: "10rem" }}
										src={Mechnic}
										alt="..."
									/>
								</div>
								<div class="card-body">
									<h5 class=" text-[#FF7276] font-bold">الخدمة الميكانيكية</h5>
									<p class="card-text text-justify font-semibold">
										كان تنجيد Storm في صناعة السيارات منذ ذلك الحين 2003. نحن
										خبراء دبي في إصلاح السيارات الفاخرة. تصليح رولز رويس ،
										مرسيدس ، بورش ، لاند روفر ، بنتلي ، وأودي هي مجال اختصاصنا.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section class=" container body-font">
					<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
						<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
							<div
								style={{ border: "3px solid #151229", borderRadius: "20px" }}
								class="object-cover object-center"
							>
								<Image
									alt="hero"
									src={Automotive}
									style={{ borderRadius: 20 }}
								/>
							</div>
						</div>
						<div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
							<h2 class=" text-[24px] font-bold text-[#FF7276] text-left">
								خدمات تركيب افلام WINDOW في الشارقة - الاستخدام التجاري
							</h2>
							<h3 class=" title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 divide-dashed">
								أفلام تظليل النوافذ التجارية
							</h3>

							<p class="mb-8 leading-relaxed text-justify">
								في الوقت الحاضر ، تعتبر أفلام النوافذ التجارية في دبي ضرورية
								لتوفير درجة عالية من الخصوصية والحماية من الحرارة و بالطبع بيئة
								عمل ممتعة. قد يكون من الصعب جدا للعمل في مكان عمل حار وغير سار ،
								وإذا كنت لا تستطيع توفيره ظروف العمل المناسبة لعمالك ، قيمة
								علامتك التجارية سيعاني بلا شك. اكسسوارات السيارات العاصفة لديها
								مستوى عالمي ستورم أكسسوارات سيارات حلول أفلام تظليل النوافذ
								لإعلانك التجاري مساحات لمساعدتك على خلق بيئة عمل مثالية. عاصفة
								تدرك إكسسوارات السيارات ضرورة الحصول على أفضل جودة أفلام الحماية
								من الحرارة والأمان للنوافذ في الإعلانات التجارية البنايات.
							</p>
						</div>
					</div>
				</section>
				<section class=" container body-font">
					<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
						<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
							<h2 class=" text-[24px] font-bold text-[#FF7276]">
								فيلم النوافذ السكنية - يوفر حماية كاملة
							</h2>
							<h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
								سكني
							</h3>

							<p class="mb-8 leading-relaxed text-justify">
								مثل هذه الأشياء في مسكنك ، يجب أن تكون التعديلات صنع. يسمح
								الزجاج في نوافذ وأبواب المنازل بدخول الضوء الطبيعي ، ولكن الليل
								أيضًا يجلب معه قدرًا كبيرًا من الحرارة هذا يستنزف الطاقة. مع
								فيلم النافذة العلوي ، حان الوقت لإعادة التفكير في منزلك من
								الداخل. مجموعة متنوعة من أفلام تظليل النوافذ التي تقدمها Storm
								Auto Accessories لن تساعدك فقط على الحماية داخل منزلك ولكن أيضًا
								تحسين المساحات جاذبية وديكور راقى.
							</p>
						</div>

						<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
							<div
								style={{ border: "3px solid #151229", borderRadius: "20px" }}
								class="object-cover object-center "
							>
								<Image alt="hero" src={Res} style={{ borderRadius: 20 }} />
							</div>
						</div>
					</div>
				</section>
				<section on class=" container body-font">
					<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
						<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
							<div
								style={{ border: "3px solid #151229", borderRadius: "20px" }}
								class="object-cover object-center "
							>
								<Image alt="hero" src={sec} style={{ borderRadius: 20 }} />
							</div>
						</div>
						<div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
							<h2 class=" text-[24px] font-bold text-[#FF7276] text-left">
								حماية النوافذ الزجاجية التجارية والسكنية
							</h2>
							<h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
								سلامة الامن
							</h3>
							<h2 className="text-[22px] mb-3 font-semibold"></h2>
							<p class="mb-8 leading-relaxed text-justify">
								من الضروري دائمًا اتخاذ جميع الاحتياطات اللازمة لتوفيرها المناطق
								التي نعيش فيها أو نقضي معظم وقتنا فيها أعلى درجات الأمان. الهدف
								من اختيارنا المتميز لـ أفلام الأمن والسلامة هي للاحتفاظ بشخصيتك
								وعملك البيئات آمنة. مع هذا ، نريد حمايتك من الأحداث غير المتوقعة
								التي قد تضر بحياتك بشكل خطير أو ملكية. مجمعات الأعمال النوافذ
								الزجاجية ، والأبواب ، و جميع الجدران الزجاجية الشاهقة تتمتع
								بالسلامة والأمن الأفلام التي توضع عليها لحمايتها من الأذى الجسدي
								وغيره مشاكل بيئية. للتأكد من أن طريقتك ليست كذلك للخطر أثناء وضع
								أفلام الأمان على النوافذ ككل يقدم خط نوافذ الأمان التجارية
								والسكنية فريدة من نوعها ألوان وأنماط تنسق مع تصميم وديكور
								منطقتك.
							</p>
						</div>
					</div>
					<div class="container m-auto">
						<h2 class=" text-[24px] font-bold text-[#FF7276] text-center">
							لماذا تحتاج إلى تثبيت ملفات WINDOW الأمن والسلامة في دبي؟
						</h2>
						<p class="mb-8 leading-relaxed text-center">
							وغني عن القول أنه يجب عليك جعل أسرتك أو مكان العمل آمن ومأمون. في
							دبي ، هناك أمور غير مواتية أنماط الطقس والتغيرات المناخية المتطرفة
							، والتي لها أ تأثير سلبي كبير على المباني والمنشآت. في بعض الأماكن
							المعرضة للكوارث ، والكوارث الطبيعية الأخرى مثل الزلازل وهبوب
							الرياح السريعة مثل الأعاصير هي أيضًا سائدة نوعا ما. تركيب الدروع
							الواقية على النوافذ الزجاجية والأبواب ضرورية لأنها عرضة للكسر ،
							مما قد يؤدي إلى العديد من أشكال الإضرار بالممتلكات والأرواح.
							بالإضافة إلى ذلك ، هناك أضرار عرضية غير متوقعة حدثت عن طريق السرقة
							ونشاط إجرامي آخر ، لذلك يجب عليك ذلك الحفاظ على إجراءات أمنية
							مشددة لمنعها. الأمن والأمان قد توفر لك أفلام تظليل النوافذ حماية
							ممتازة في هذا الصدد. تهدف هذه الأفلام إلى منع زجاج النوافذ
							والأبواب من الكسر نتيجة الضغوط الخارجية أو الحوادث.
						</p>
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
										style={{ color: "#FF7276", fontWeight: "normal" }}
										class="display-4 mb-3 "
									>
										لماذا تختار Storm Automative ?
									</h2>
									<h3
										style={{ color: "#FFD700", fontWeight: "normal" }}
										className="font-bold text-[24px]"
									>
										عازل حراري في دبي
									</h3>
									<p class="mt-3 text-center text-white ">
										مع تظليل سيارات العاصفة بجودة ممتازة في دبي ، فيلم تظليل
										النوافذ ، تم تحسين Storm Automotive LLC وتحويلها العديد من
										المركبات والهياكل منذ تأسيسها في عام 2010. إلى تحسين كفاءة
										الطاقة والسلامة والخصوصية العامة لدينا يمكن لفريق من
										المهنيين المؤهلين تأهيلا عاليا أن يقدموا خدمات فعالة خدمات
										تظليل نوافذ السيارات والمنازل. العملاء لديهم أعلى إيمان بنا
										لعدد من الأسباب. العديد منهم هي واردة ادناه.
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
													background: "#FF7276",
												}}
											>
												<div class="img-fluid">
													<GiShakingHands size={40} color="#ffff" />
												</div>
											</div>
											<div class="ms-4">
												<h5
													style={{ color: "#FFD700", fontWeight: "normal" }}
													class="mb-3 "
												>
													منتجات ذات مستوى عالمي
												</h5>
												<p className="text-justify text-white ">
													تقدم Storm Automotive مجموعة واسعة من أفلام تظليل
													النوافذ كمركز تظليل معتمد لملحقات Storm في دبي. جميع
													بضائعنا تأتي من شركة عالية الجودة هي الشركة الرائدة في
													إنتاج أفلام تظليل النوافذ. بالإضافة إلى ذلك ، لقد
													أكملوا عددًا من الجودة إجراءات التحليل لضمان جودة لا
													مثيل لها. تسعى خيارات تظليل النوافذ هذه إلى توفير أكثر
													أمانًا بيئة القيادة عن طريق تقليل الوهج. بالإضافة إلى
													ذلك، يمكنهم تقديم المستوى المطلوب من السلامة والدفاع
													ضد أشعة الشمس الضارة عند استخدامها على النافذة.
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
													background: "#FF7276",
												}}
											>
												<div class="img-fluid">
													<GiAchievement size={40} color="#ffff" />
												</div>
											</div>
											<div class="ms-4">
												<h5
													style={{ color: "#FFD700", fontWeight: "normal" }}
													class="mb-3 "
												>
													خبرة صناعة واسعة
												</h5>
												<p className="text-justify text-white ">
													مع ما يقرب من 20 عامًا من الخبرة في تظليل السيارات في
													دبي ، نحن نهدف إلى تقديم الكمال باستمرار. كل النافذة
													يمكن تنفيذ خدمات التلوين من قبل المهرة لدينا أفراد
													بأقصى درجات الدقة. هؤلاء المهنيين يمكن تلميع وتفصيل أي
													مركبة بمستوى عالٍ و خلال الوقت المخصص بفضل اهتمامهم به
													التفاصيل. بالإضافة إلى ذلك ، استمروا في توسيع نطاق
													المعرفة والمهارات كتكنولوجيا تظليل السيارات التقدم.
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
											unoptimized={true}
											alt="Car Tinting Service Dubai"
										/>
									</div>

									<div className="col-md-6">
										<div class="d-flex mb-5">
											<div
												class="flex-shrink-0 btn-square  rounded-circle"
												style={{
													width: "90px",
													height: "90px",
													background: "#FF7276",
												}}
											>
												<div class="img-fluid">
													<GiCombinationLock size={40} color="#ffff" />
												</div>
											</div>
											<div class="ms-4">
												<h5
													style={{ color: "#FFD700", fontWeight: "normal" }}
													class="mb-3"
												>
													تفويض
												</h5>
												<p className="text-justify text-white">
													تعتمد Storm Automotive على ممارسات العمل الأخلاقية
													والمعايير لأنها شريك معتمد لـ أكبر مُصنِّع لأفلام
													نوافذ التحكم في أشعة الشمس في الشرق الأوسط العالمية.
													نذهب إلى ما فوق لإنشاء اتصال الثقة مع عملائنا. لذلك ،
													عازل كل سيارة تتضمن الخدمة أو المنتج المقدم من خلال
													أعمالنا أ شهادة الأصالة.
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
													background: "#FF7276",
												}}
											>
												<div class="img-fluid">
													<FcApproval size={40} color="#ffff" />
												</div>
											</div>
											<div class="ms-4">
												<h5
													style={{ color: "#FFD700", fontWeight: "normal" }}
													class="mb-3 "
												>
													أفلام تظليل النوافذ المعتمدة علميًا
												</h5>
												<p className="text-justify text-white">
													بصفتها تاجر أفلام تظليل نوافذ مرخص ، ستورم أوتوموتيف
													تقدم منتجات تظليل السيارات الممتازة مع بعضها الفوائد
													الصحية المعروفة. هذه السيارة العاصفة المتطورة تم
													التحقق من صحة الصبغات عن طريق العلم ويمكن أن تمنع ما
													يصل إلى 99٪ من الأشعة فوق البنفسجية والأشعة تحت
													الحمراء. نتيجة لهم التعرض لأشعة الشمس لفترات طويلة ،
													فإنها تحمي نفسها من الأمراض السائدة.
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
											alt="Car Tinting Service Dubai"
										/>
									</div>
									<div className="col-md-6">
										<div class="d-flex mb-5">
											<div
												class="flex-shrink-0 btn-square  rounded-circle"
												style={{
													width: "90px",
													height: "90px",
													background: "#FF7276",
												}}
											>
												<div class="img-fluid">
													<GiThreeFriends size={40} color="#ffff" />
												</div>
											</div>
											<div class="ms-4">
												<h5
													style={{ color: "#FFD700", fontWeight: "normal" }}
													class="mb-3 "
												>
													صديقة للميزانية
												</h5>
												<p className="text-justify text-white">
													نحن لا نطلب منك أن تنفق ثروة لحماية السيارة من الأشعة
													فوق البنفسجية والأشعة تحت الحمراء الخطرة. بدلا من ذلك
													، نحن توفير تظليل تلقائي للسيارة ونافذة للتحكم في أشعة
													الشمس بأسعار معقولة أفلام لتحسين الراحة. كما نقدم
													مجموعة متنوعة من حلول لتظليل المنزل والسماح لعملائنا
													بالاختيار أفضل ما يناسب احتياجاتهم وميزانيتهم.
													بالإضافة إلى ذلك ، يمكن أن تتيح لك خيارات تظليل
													النوافذ لدينا لتقليل الإضاءة وتكييف الهواء على المدى
													الطويل نفقات.
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
													background: "#FF7276",
												}}
											>
												<div class="img-fluid">
													<GiShakingHands size={40} color="#ffff" />
												</div>
											</div>
											<div class="ms-4">
												<h5
													style={{ color: "#FFD700", fontWeight: "normal" }}
													class="mb-"
												>
													إرضاء 100٪
												</h5>
												<p className="text-justify text-white ">
													في Storm Automotive ، نقوم بأداء سيارات العاصفة
													المتفوقة خدمات التظليل في دبي وحول الإمارات العربية
													المتحدة مع الهدف المتمثل في تحقيق رضا العملاء لا مثيل
													له. نحن نضمن أن بضائعنا سوف تلبي توقعاتك الجودة
													والأداء. بالإضافة إلى ذلك ، فإنهم يحافظون على مظهرها
													ولونها على مر الزمن. بالإضافة إلى ذلك ، كونها شركة ذات
													سمعة طيبة لتلوين النوافذ في الإمارات العربية المتحدة ،
													نتكيف باستمرار لمواكبة التغيير احتياجات وتفضيلات
													عملائنا.
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

			<div
				style={{ height: "350px" }}
				className="container-fluid bg-storm mt-1"
			>
				<div
					style={{ color: "#FF7276", fontWeight: "bold", textAlign: "center" }}
					className="text-center text-[44px] pt-5 "
				>
					ضمانات
				</div>
				<h2
					style={{ color: "#FFD700" }}
					className="text-center  m-auto text-[20px] mb-2 w-50"
				>
					في دولة الإمارات العربية المتحدة ، تعتبر شركة ستورم أوتوموتيف مصدرًا
					موثوقًا للظلال وتوفرها بعض من أفضل الضمانات المتاحة.
				</h2>
				<br></br>
				<p className="text-center w-50 m-auto text-white text-[18px] mt-5 ">
					حماية ضد بهتان اللون نحن نضمن أن كل نافذة لدينا لن تتلاشى الأفلام
					لسنوات ، وأن الرياح الشديدة والمباشرة لن يخفت ضوء الشمس لمعانها
					اللامع.
				</p>
			</div>
			<div className="container mt-5">
				<ul
					style={{ listStyle: "circle" }}
					className=" text-justify m-4 text-[18px]"
				>
					<li>
						بالإضافة إلى الالتزام بالعديد من معايير الجودة التي وضعتها قانون
						المرور الفيدرالي الجديد الذي دخل حيز التنفيذ في 1 يوليو.
					</li>
					<li>
						نتبع أيضًا إرشادات التثبيت العالمية. نقوم بعمل نسخة احتياطية من
						ملفات نفس الشيء مع بعض الضمانات التي تأتي مع كل فيلم تظليل
					</li>
					نقوم بعمل نسخة احتياطية من نفس الشيء مع بعض الضمانات التي تأتي مع كل
					نافذة فيلم.
					<li>
						إذا اتضح أن منتجنا به عيوب ، فسنقوم باستبداله بسعر لا تكلفة إضافية.
						سوف تحتاج إلى تقديم إيصال الشراء ، الذي يتضمن معلومات عن نوع الفيلم
						و تاريخ التركيب وذلك للاستفادة من الضمان.
					</li>
					<li>
						قد يختلف طول الضمان اعتمادًا على المعين لون السيارة أو النافذة الذي
						حددته.
					</li>
				</ul>
				<p
					style={{ color: "#FF7276" }}
					className="text-center  m-auto text-[20px] mb-2 w-50"
				>
					يتم توفير الضمانات التالية لعملائنا.
				</p>
				<div className="row mt-10 m-auto gop mb-[200px]">
					<div className="col-md-4 gbbb">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#0c143b",
								border: "7px solid #0005",
							}}
						>
							<div class="card-img-top  mt-5">
								<BsShieldCheck
									size={50}
									style={{ marginLeft: "40%", color: "#FF7276" }}
								/>
							</div>

							<div class="card-body">
								<h5
									style={{ color: "#FFD700" }}
									class="card-title text-center text-[20px] "
								>
									ضمان انسداد الأشعة فوق البنفسجية
								</h5>
								<p class="card-text text-[14px] text-white text-justify">
									توفر صبغات النوافذ / السيارة من Storm Automotive بعض الأشعة
									فوق البنفسجية و الحماية من الأشعة تحت الحمراء. لذلك سوف يسمحون
									لك بذلك تمتع بأشعة الشمس الطبيعية دون الحاجة إلى التعامل معها
									عواقب سلبية.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 gbbb">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#FF7276",
								border: "2px solid #0005",
							}}
						>
							<div class="card-img-top  mt-5">
								<GiFactory
									size={50}
									style={{ marginLeft: "45%", color: "white" }}
								/>
							</div>

							<div class="card-body">
								<h5
									style={{ color: "#FFD700" }}
									class="card-title text-[20px] "
								>
									الضمانات الرائدة في الصناعة
								</h5>
								<p class="card-text text-white text-[14px] text-justify">
									تقدم أفلام النوافذ المعاصرة الخاصة بنا جميع المزايا التي
									حددتها معايير الصناعة. بالإضافة إلى ذلك ، تأتي مع ملف الضمان
									ضد التفريغ ، التقشير ، التقرح ، و محتدما. إنها غير معدنية ،
									لذا فهي لا تؤثر على الطريقة تعمل الأجهزة المحمولة والاتصالات
									عبر الأقمار الصناعية بشكل طبيعي.
								</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 gbbb">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "#0c143b",
								border: "7px solid #0005",
							}}
						>
							<div class="card-img-top mt-5">
								<GiMetalDisc
									size={50}
									style={{ marginLeft: "45%", color: "#FF7276" }}
								/>
							</div>

							<div class="card-body">
								<h5
									style={{ color: "#FFD700" }}
									class="card-title text-[20px] "
								>
									الضمان لأفلام النوافذ غير المعدنية
								</h5>
								<p class="card-text text-white text-[14px] text-justify">
									لا تتضمن أفلام تظليل نوافذ السيارات المعاصرة الخاصة بنا أيًا
									منها المكونات المعدنية ، على عكس التقليدية مرادف. نتيجة لذلك ،
									لا يمنعون الأجهزة المحمولة و إشارات الأقمار الصناعية من العمل
									بشكل طبيعي.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br></br>
			<div className=" bgimage">
				<div className="text-center pt-5 text-[#FF7276] text-[32px] font-bold  ">
					كيف تعمل
				</div>
				<div className="row container py-20  m-auto">
					<div className="col-lg-3 col-md-5 gbbb">
						<div
							class="card"
							style={{
								width: "18rem",

								backgroundColor: "rgba(0,0,0,0.1)",
							}}
						>
							<div class="card-img-top   mt-5">
								<BsPeople
									size={100}
									style={{ marginLeft: "35%", color: "#FFD700" }}
								/>
							</div>

							<div class="card-body">
								<h5 class="card-title text-[16px] text-[white] text-center ">
									قابل العميل
								</h5>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-5 gbbb">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "rgba(0,0,0,0.1)",
							}}
						>
							<div class="card-img-top  mt-5">
								<AiOutlineSolution
									size={100}
									style={{ marginLeft: "35%", color: "#FFD700" }}
								/>
							</div>

							<div class="card-body">
								<h5 class="card-title text-[16px] text-center text-[white] ">
									تخصيص الحل
								</h5>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-5 gbbb">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "rgba(0,0,0,0.1)",
							}}
						>
							<div class="card-img-top  mt-5">
								<GrUnorderedList
									size={100}
									style={{ marginLeft: "35%", color: "#FFD700" }}
								/>
							</div>

							<div class="card-body">
								<h5 class="card-title text-[16px] text-center text-[white]  ">
									أكد الطلب
								</h5>
							</div>
						</div>
					</div>
					<div className="col-lg-3 col-md-5 gbbb">
						<div
							class="card"
							style={{
								width: "18rem",
								backgroundColor: "rgba(0,0,0,0.1)",
							}}
						>
							<div class="card-img-top  mt-5">
								<TbTruckDelivery
									size={100}
									style={{ marginLeft: "35%", color: "#FFD700" }}
								/>
							</div>

							<div class="card-body">
								<h5 class="card-title text-[16px] text-center text-[white] ">
									التسليم والتركيب
								</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bgimage ">
				<div style={{ height: "530px" }} className="container m-auto">
					<div class="accordion" id="accordionExample">
						<div class="accordion-item">
							<h2
								style={{ backgroundColor: "rgb(0,0,0,1)" }}
								class="accordion-header"
								id="headingzero"
							>
								<button
									style={{ color: "#FF7276" }}
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapsezero"
									aria-expanded="false"
									aria-controls="collapsezero"
								>
									نافذة ستورم أوتوماتيكية وتلميع السيارات بالشارقة
								</button>
							</h2>
							<div
								id="collapsezero"
								class="accordion-collapse collapse show"
								aria-labelledby="headingzero"
								data-bs-parent="#accordionExample"
							>
								<p
									style={{ backgroundColor: "rgb(0,0,0,1)" }}
									class="accordion-body text-[15px] text-white text-justify"
								>
									يمكن أن يوفر تظليل النوافذ مزايا عملية طويلة الأمد ، مثل
									الخصوصية والحماية من أشعة الشمس والأمان ، بالإضافة إلى التحسين
									جماليات. ستورم للسيارات هي شركة ذات سمعة طيبة لتظليل السيارات
									هذا يعمل معك لتثبيت فيلم شفاف بصريًا سيارات الأداء والمظهر
									الذي تريده. كل منا المواد تحمي من الأشعة فوق البنفسجية وتلتصق
									بالسيارات الإماراتية لوائح التظليل. بالإضافة إلى ذلك ، فهي
									تشمل حماية للأشعة فوق البنفسجية الشهادة التي يمكنك أن تشهد
									عليها.
								</p>
							</div>
						</div>

						<div class="accordion-item">
							<h2
								style={{ backgroundColor: "rgb(0,0,0,1)" }}
								class="accordion-header"
								id="headingOne"
							>
								<button
									style={{ color: "#FF7276" }}
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="false"
									aria-controls="collapseOne"
								>
									مركز تظليل النوافذ الموثوق في دبي
								</button>
							</h2>
							<div
								id="collapseOne"
								class="accordion-collapse collapse show"
								aria-labelledby="headingOne"
								data-bs-parent="#accordionExample"
							>
								<p
									style={{ backgroundColor: "rgb(0,0,0,1)" }}
									class="accordion text-[15px] text-white text-justify"
								>
									تعتبر أفلام تظليل النوافذ استثمارًا ممتازًا لأنها تقدم كل شيء
									من التحكم في درجة الحرارة إلى الحماية من أشعة الشمس. بصري قد
									يتم تثبيت الأفلام الشفافة بواسطة Storm Automotive ، ذات السمعة
									الطيبة تظليل النوافذ لحماية سيارتك وتوفيرها لك مع رحلة أكثر
									أمانًا ومتعة. لدينا مجموعة متنوعة من مظلات السيارات للامتثال
									للوائح المرور الجديدة في دبي ، والتي تسمح لأصحاب السيارات
									بالحصول على نسبة تظليل تصل إلى 50٪.
									<br />
									<br />
									قد يكون لسيارتك مظهر جديد تمامًا بفضل خدمات تظليل النوافذ
									عالية الجودة. يمكننا أن نوفر لك الحل المثالي لتظليل النوافذ /
									السيارة ، بغض النظر عما إذا كان أنت بحاجة إلى كمية محددة من
									الحماية من الأشعة فوق البنفسجية ، وتصفية الضوء ، الترقية
									الداخلية أو الخصوصية أو الأمان أو تخفيف الوهج. ملكنا يعتبر
									الموظفون كل عميل احتياجات خاصة ويقدمون أفضل مواد تظليل النوافذ
									لتناسبها.
								</p>
							</div>
						</div>
						<div class="accordion-item">
							<h2
								style={{ backgroundColor: "rgb(0,0,0,1)" }}
								class="accordion-header"
								id="headingTwo"
							>
								<button
									style={{ color: "#FF7276" }}
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
								>
									قم بترقية طراز وراحة سيارتك مع العاصفة تظليل النوافذ
								</button>
							</h2>
							<div
								id="collapseTwo"
								class="accordion-collapse collapse"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionExample"
							>
								<p
									style={{ backgroundColor: "rgb(0,0,0,1)" }}
									class="accordion-body text-[15px] text-white text-justify"
								>
									نحاول تلبية المطالب المختلفة لأصحاب السيارات في الإمارات
									العربية المتحدة من خلال تظليل نوافذ السيارات المتميز ، والذي
									ينضح بامتياز لا مثيل له. نحن نقدم لك مجموعة واسعة خيارات تظليل
									السيارات التي تمكنك من قيادة المزيد بسهولة ، بما في ذلك الطلاء
									البلوري والسيراميك وسلسلة FX. ما عليك سوى إبلاغنا بمشاكلك ،
									وتظليل النوافذ لدينا سوف يستجيب المتخصصون بالنصيحة المناسبة.
									سنقوم تنفيذ منتج أو خدمة عند الموافقة عليها.
								</p>
							</div>
						</div>
						<div class="accordion-item">
							<h2
								style={{ backgroundColor: "rgb(0,0,0,1)" }}
								class="accordion-header"
								id="headingThree"
							>
								<button
									style={{ color: "#FF7276" }}
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
								>
									مجموعة شاملة من خدمات تظليل نوافذ السيارة
								</button>
							</h2>
							<div
								id="collapseThree"
								class="accordion-collapse collapse"
								aria-labelledby="headingThree"
								data-bs-parent="#accordionExample"
							>
								<p
									style={{ backgroundColor: "rgb(0,0,0,1)" }}
									class="accordion-body text-white text-[15px]"
								>
									ستورم للسيارات ، شركة لتظليل النوافذ منذ سنوات الخبرة ، تقدم
									مجموعة واسعة من السيارات والنوافذ خيارات الصبغ في دبي. لذلك ،
									يمكنك اختيار نافذة فيلم يناسب احتياجاتك هنا ، سواء كنت تريد
									الخصوصية و الحماية أو نظرة أفضل. نتأكد من أن كل من المنتجات
									مصنوعة لتوفير الحماية من الأشعة فوق البنفسجية ، وتقليل ارتفاع
									درجة الحرارة ، والمقدار المطلوب من الخصوصية لأننا معتمدين
									منشأة تظليل لسيارات العاصفة في دبي.
									<br /> بالإضافة إلى تقديم منتجات من أعلى المستويات العيار ،
									يركز عملنا بشكل كبير على المناسب التركيب والتشطيب. بالإضافة
									إلى ذلك ، كما تمت الموافقة عليها متجر تظليل السيارات ، نحن
									نقدم مجموعة واسعة من الخدمات ، بما فيها
									<br />
									<span className="text-red-600">تظليل نوافذ السيارة </span>
									<br />
									يمنح اختيارنا المتميز لأفلام التحكم في أشعة الشمس العاصفة داخل
									سيارتك الدرجة اللازمة من الخصوصية و الأمان.
									<br />
									<span className="text-red-600">
										رسومات السيارة الإبداعية{" "}
									</span>
									<br />
									بصفتنا متجر تظليل سيارات معتمد من العاصفة في دبي ، نقدم لك فرص
									لا حصر لها للتعبير عن إبداعك عبر السيارة يلف.
									<br />
									<span className="text-red-600">فيلم حماية الطلاء </span>
									<br />
									عند استخدامها على الأسطح المطلية للسيارات ، فهذه السيارة
									الراقية يساعد التلوين في تجنب التلاشي أو التآكل.
									<br />
									<span className="text-red-600">تفاصيل السيارة </span>
									<br />
									من خلال مجموعة من الخدمات ، يمكننا تقديم مظهر جديد تمامًا لـ
									داخل وخارج سيارتك.
									<br />
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bgimage2 py-5 mt-5">
				<div className="row container">
					<div className="col-md-10">
						<div
							style={{ color: "#FFD700" }}
							className="text-center text-[44px] font-bold"
						>
							اتصل بنا للحصول على مساعدة مباشرة
						</div>
						<p className="text-center text-[20px] text-white">
							كل ما عليك فعله هو الهاتف أو مراسلتنا عبر البريد الإلكتروني لتحديد
							موعد ، وسيقوم أخصائي التقييم لدينا بالاتصال بك.
						</p>
					</div>
					<div className="col-md-2">
						<a
							href=""
							style={{
								backgroundColor: "rgba(0,0,0,0.1)",
								borderColor: "#FF7276",
							}}
							class="btn btn-primary py-2 px-5 mt-4 animated slideInDown"
						>
							{" "}
							اتصل الان
						</a>
					</div>
				</div>
			</div>
			<ContactFormAr />
			<a href="https://api.whatsapp.com/send?phone+03469413675" class="float">
				<AiFillPhone class="fa fa-plus my-float"></AiFillPhone>
			</a>
			<a href="https://api.whatsapp.com/send?phone+03469413675" class="float2">
				<BsWhatsapp class="fa fa-plus my-float"></BsWhatsapp>
			</a>
			<p id="link" class="float3"></p>
			<Link href="/">
				<p id="link" class="float4"></p>
			</Link>
			<FooterAr />
		</>
	);
}
