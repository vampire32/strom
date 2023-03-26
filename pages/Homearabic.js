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
import ContactForm from "@/Components/ContactFormAr";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Topbar from "@/Components/TopbarAr";
import Footer from "@/Components/FooterAr";
import Carmic from "../img/carmeic.webp";
import Mechnic from "../img/mechnic.jpg";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import F1 from "../img/c1-removebg-preview.png";
import F2 from "../img/c2-removebg-preview.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home2() {
	const [open, setOpen] = useState(false);
	const [open2, setOpen2] = useState(true);

	const cancelButtonRef = useRef(null);

	return (
		<>
			<Head>
				<title>
					تظليل نوافذ السيارات بالشارقة | اكسسوارات السيارات العاصفة
				</title>
				<meta
					name="description"
					content="عازل حراري للسيارة في الشارقة - عروض تظليل النوافذ وأفلام حماية الطلاء في الشارقة ، عازل حراري عالي الجودة للسيارات في الشارقة وحلول تظليل النوافذ."
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
					content="عازل حراري للسيارة في الشارقة - عروض تظليل النوافذ وأفلام حماية الطلاء في الشارقة ، عازل حراري عالي الجودة للسيارات في الشارقة وحلول تظليل النوافذ. "
				/>

				<link rel="canonical" href="https://www.stormupholstery.com/Homearabic" />
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
								<Image style={{ height: "100vh", width: "100%" }} src={C1} />

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
								<Image style={{ height: "100vh", width: "100%" }} src={C1} />
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
													style={{ color: "#FFB400", fontSize: "20px" }}
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
														borderColor: "#FFB400",
													}}
													class="btn btn-primary animated slideInDown"
												>
													اتصل الان
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
																				احجز حجزك الآن
																			</p>
																			<div class="mb-6">
																				<label
																					for="text"
																					class="block mb-2 text-sm font-medium text-[#FFD700]"
																				>
																					اسم
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
																					بريد إلكتروني
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
																					خدمات
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
																					رقم التليفون
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
																					يرسل
																				</button>

																				<button
																					type="button"
																					className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
																					onClick={() => setOpen(false)}
																					ref={cancelButtonRef}
																				>
																					يلغي
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
				</div>
				<button
					class="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleControls"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">سابق</span>
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
								+500 مليون
							</h4>
							<p style={{ color: "#ffae42", textAlign: "center" }}>
								عملاء سعداء
							</p>
						</div>
						<div class="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
							<h4
								style={{ color: "white", textAlign: "center" }}
								class="display-4 "
								data-toggle="counter-up"
							>
								مائتان
							</h4>
							<p style={{ color: "#ffae42", textAlign: "center" }}>
								فريق الخبراء
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
								مشروع مستمر
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
									أفضل مركز ستورم لاكسسوارات السيارات في الشارقة
								</h2>

								<p class="mb-4 text-justify text-[white] ">
									الأشعة فوق البنفسجية الزائدة ، والأشعة تحت الحمراء ، والحرارة
									الشديدة ، و الوهج من خلال توفير مجموعة واسعة من تظليل السيارات
									في الشارقة. يمكن أن تقدم أفلام النوافذ الحديثة من Auto Storm
									منا تحسينًا الراحة والأمان والخصوصية. كونها واحدة من أفضل
									السيارات مركز العاصفة المعتمد في دولة الإمارات العربية المتحدة
									، نحن على دراية واسعة مجموعة من احتياجات عملائنا ونقدم لهم
									أحدث السيارات أفلام نافذة العاصفة التي تلبي متطلباتهم الفريدة
									من نوعها الحماية من الشمس ، بيئة العمل للإضاءة ، ودرجة الحرارة
									أنظمة.<br></br>
									<br></br> سيساعدك تظليل السيارة المتميز في عاصفة السيارات
									إعطاء سيارتك المظهر والفائدة المطلوبين. بالإضافة إلى ذلك ، كل
									عنصر من العناصر لدينا مقاوم للخدش طلاء يضمن المتانة ولمسة
									نهائية خالية من العيوب. أنت تستطيع الاستفادة من المزايا الصحية
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
								alt="خدمة تظليل السيارات بالشارقة"
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
						خدماتنا
					</span>
					<p className=" leading-6 mb-5 text-white">
						Storm Automotive ، شركة معروفة بمجموعتها من AUTO STORM auto خدمات
						التظليل في الشارقة ملتزمة بشدة بالاستدامة. نعتمد نهجًا شاملاً
						للحماية من أشعة الشمس والضرر تجنب ، وتقليل الوهج من خلال تظليل
						النوافذ المتطور و خدمات الأفلام.
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
										alt="خدمة تظليل السيارات بالشارقة"
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
										السيارات
									</a>
								</div>
								<p className="text-left text-[white] font-extralight text-[18px]  pb-3">
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
										أفلام تظليل النوافذ التجارية
									</a>
								</div>
								<p className="text-left text-[white]  text-[18px] font-extralight   pb-3">
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
										مقعد فوق
									</a>
								</div>
								<p className="text-left text-[white]  text-[18px] font-extralight  pb-3">
									أي ضرر يلحق بأغطية المقاعد الحالية ، مثل الدموع ، والحروق ، أو
									البقع ، يمكن إصلاحها من خلال خدمات تصليح المقاعد في الشارقة.
									من خلال توفير هذه الخدمات ، قد تستمر المقاعد الحالية لفترة
									أطول و قد يتجنب العملاء الاضطرار إلى شراء أجهزة جديدة.
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
										الحافلات المدرسية
									</a>
								</div>
								<p className="text-left font-extralight  text-[18px] text-[white]  pb-3">
									يمكن زيادة سلامة الحافلات المدرسية باستخدام الشارقة خدمات
									تظليل النوافذ. في حالة وقوع حادث أو يمكن أن تساعد النوافذ
									المظللة في منع الزجاج من تحطيم ، وتقليل احتمالية إصابة الأطفال
									وسائقي الحافلات.
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
									يمكن أن تلبي خدمات تظليل النوافذ السكنية في الشارقة أ احتياجات
									متنوعة للمنزل بسعر معقول. يمكن لأصحاب المنازل الاستفادة من
									مزيد من الخصوصية والطاقة الأفضل الكفاءة ، وزيادة الراحة ،
									وزيادة السلامة و الأمن عن طريق تركيب أفلام تظليل النوافذ.
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
										سلامة الامن
									</a>
								</div>
								<p className="text-left font-extralight  text-[18px] text-[white]  pb-3">
									الأمن والسلامة يمكن أن تلبي خدمات تظليل نوافذ الشارقة مجموعة
									متنوعة من متطلبات الملكية بتكلفة معقولة. أصحاب الأملاك يمكن أن
									تستفيد من أعلى مستويات السلامة والأمن ، وطاقة أفضل الكفاءة ،
									وزيادة الخصوصية ، وحماية أكبر ضد الآثار الضارة للأشعة فوق
									البنفسجية عن طريق تركيب النافذة أفلام التظليل.
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
									تظليل نوافذ السيارات بالشارقة | تنجيد العاصفة
								</h2>
								<h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white divide-dashed > * + *">
									السيارات
								</h3>

								<p class="mb-8 leading-relaxed text-justify text-white">
									هل تبحث عن أفضل خيارات حماية السيارات؟ نحن توفر مجموعة واسعة
									من حماية السيارات من الدرجة الأولى معدات لمساعدتك على حماية
									سيارتك من العديد العوامل الخارجية ، مثل الشمس والغبار والأوساخ
									والطقس. نحن في ستورم لإكسسوارات السيارات نقدم كل ما تحتاجه
									لصنعه سيارتك تبدو وكأنها جديدة ، بما في ذلك خدمات التفاصيل ،
									طلاء نانو سيراميك ، تلميع السيارات ، أفلام التحكم في الشمس ، و
									تفصيل الخدمات. لدينا الكثير من المعرفة والمهارة في توفير
									الحماية الشاملة لسيارتك لأننا مركز معتمد للعناية بالسيارات في
									الشارقة. نحن مسؤولون عن سلامة سيارتك.
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
											تظليل نوافذ السيارة الشارقة
										</h5>
										<p class="card-text text-justify text-white">
											نحن نقدم مجموعة استثنائية من سيارات العاصفة الملحقات
											وأفلام النوافذ الواقية من الشمس مثبتة على نوافذ سياراتك
											لتجعلك متوافقًا و حفظ الجزء الداخلي من سيارتك من التلف
											الحرارة الزائدة وأشعة الشمس.
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
											نحن نقدم أفضل طلاء نانو سيراميك لحمايتك السيارة من الخدوش
											والأضرار الخارجية الأخرى. إنها تستخدم في الطلاء ، والمصدات
											، والزخرفة البلاستيكية لتوفير حماية عامة طويلة الأمد.
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
											الخدمة الميكانيكية
										</h5>
										<p class="card-text text-justify text-white">
											كان تنجيد Storm في صناعة السيارات منذ ذلك الحين 2003. نحن
											خبراء الشارقة في السيارات الفاخرة إصلاحات. تصليح رولز رويس
											، مرسيدس ، بورش ، لاند روفر وبنتلي وأودي هي مجال اختصاصنا.
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
									style={{ borderRadius: "20px", }}
								/>
							</div>
						</div>
						<div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
							<h2 class=" text-[30px] font-bold text-[#ffae42] text-left">
								خدمات تركيب افلام WINDOW في الشارقة - الاستخدام التجاري
							</h2>
							<h3 class=" title-font sm:text-4xl text-3xl mb-4 font-medium text-white divide-dashed">
								أفلام تظليل النوافذ التجارية
							</h3>

							<p class="mb-8 leading-relaxed text-justify text-white">
								في الوقت الحاضر ، تعتبر أفلام النوافذ التجارية في الشارقة ضرورية
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
				<div class="bgimage3">
					<section class=" container-fluid body-font">
						<div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
							<div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
								<h2 class=" text-[30px] font-bold text-[#ffae42]">
									فيلم النوافذ السكنية - يوفر حماية كاملة
								</h2>
								<h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
									سكني
								</h3>

								<p class="mb-8 leading-relaxed text-justify text-white">
									مثل هذه الأشياء في أماكن المعيشة الخاصة بك ، يجب أن تكون
									التعديلات صنع. يسمح الزجاج في النوافذ وأبواب المنازل بالدخول
									بشكل طبيعي الضوء ، ولكن الليل يجلب معه أيضًا كمية زائدة من
									الحرارة التي تستنزف الطاقة. مع نافذة الجزء العلوي من الخط فيلم
									، حان الوقت لإعادة التفكير في منزلك الداخلي. تنوع أفلام
									النوافذ التي تقدمها Storm Auto Accessories ليست فقط تساعدك على
									حماية داخل منزلك ولكن أيضًا تحسين المساحات جاذبيتها وديكورها
									بطريقة راقية.
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
										style={{ borderRadius: "20" }}
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
									style={{ borderRadius: 20,  }}
								/>
							</div>
						</div>
						<div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
							<h2 class=" text-[30px] font-bold text-[#ffae42] text-left">
								حماية النوافذ الزجاجية التجارية والسكنية
							</h2>
							<h3 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
								سلامة الامن
							</h3>
							<h2 className="text-[22px] mb-3 font-semibold"></h2>
							<p class="mb-8 leading-relaxed text-justify text-white">
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
								اتصل الان
							</button>
						</div>
					</div>
					<div class="bgimage3">
						<div class="container w-[60%] pb-5 pt-5">
							<h2 class=" text-[30px] font-bold text-[#ffae42] text-center">
								لماذا تحتاج إلى تثبيت ملفات WINDOW الأمن والسلامة في الشارقة؟
							</h2>
							<p class=" leading-7 pt-2 text-justify text-white">
								وغني عن القول أنه يجب عليك جعل أسرتك أو مكان العمل آمن ومأمون.
								في الشارقة هناك أنماط الطقس غير المواتية والتغيرات المناخية
								المتطرفة ، والتي لها تأثير سلبي كبير على المباني و الهياكل. في
								بعض الأماكن المعرضة للكوارث ، طبيعية أخرى كوارث مثل الزلازل
								وهبوب الرياح السريعة مثل كما أن الأعاصير منتشرة إلى حد ما. تركيب
								الحماية الواقيات على النوافذ والأبواب الزجاجية ضرورية لأنها كذلك
								عرضة للكسر ، مما قد يؤدي إلى العديد من أشكال أضرار الممتلكات
								والأرواح. بالإضافة إلى ذلك ، هناك أمور غير متوقعة الأضرار
								العرضية الناجمة عن السرقة وغيرها من الجرائم النشاط ، لذلك يجب
								الحفاظ على أمن مشدد ل منعهم. قد توفر أفلام نافذة الأمان والسلامة
								لك حماية ممتازة في هذا الصدد. هذه الأفلام تهدف إلى منع زجاج
								النوافذ والأبواب من الانكسار مثل أ نتيجة لضغوط أو حوادث خارجية
								مختلفة.
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
										لماذا تختار Storm AUTOMOTIVE؟
									</h2>
									<h3
										style={{ color: "#071E22", fontWeight: "normal" }}
										className="font-bold text-[24px]"
									>
										تلميح السيارات في الشارقة
									</h3>
									<p class="mt-3 text-center text-white  ">
										مع تظليل سيارات العاصفة ذات الجودة الممتازة الشارقة ، شباك
										الفيلم ، ستورم أوتوموتيف ذ م م قد تحسنت و حولت العديد من
										المركبات والهياكل منذ تأسيسها في عام 2010. لتحسين كفاءة
										الطاقة والسلامة والعامة الخصوصية ، يستطيع فريق المهنيين
										المؤهلين تأهيلا عاليا نقدم خدمات تظليل نوافذ فعالة للسيارات
										والمنازل. العملاء لديهم أعلى ثقة بنا لعدد من أسباب. العديد
										منهم مذكور أدناه.
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
													منتجات ذات مستوى عالمي
												</h5>
												<p className="text-justify text-white ">
													تقدم Storm Automotive مجموعة واسعة من النوافذ الأفلام
													باعتبارها ملحقات ستورم معتمدة للتلوين مركز في الشارقة.
													جميع بضائعنا تأتي من أ شركة عالية الجودة رائدة في
													الصناعة إنتاج أفلام تظليل النوافذ. بالإضافة إلى ذلك ،
													لديهم أكمل عددًا من إجراءات تحليل الجودة لـ ضمان جودة
													لا مثيل لها. هذه النافذة التظليل تسعى الخيارات لتوفير
													بيئة قيادة أكثر أمانًا من خلال تقليل الوهج. بالإضافة
													إلى ذلك ، يمكنهم تقديم المستوى المطلوب من الأمان
													والدفاع ضد الأضرار أشعة الشمس عند استخدامها على
													النافذة.
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
													خبرة صناعية واسعة
												</h5>
												<p className="text-justify text-white ">
													مع حوالي 20 عامًا من الخبرة في تظليل السيارات في
													الشارقة ، نهدف إلى تقديم الكمال باستمرار. الجميع يمكن
													تنفيذ خدمات تظليل النوافذ من خلال أفراد ماهرون بأقصى
													درجات الدقة. هؤلاء يمكن للمهنيين تلميع وتفصيل أي مركبة
													إلى مستوى عالٍ وفي الوقت المحدد بفضل اهتمامهم
													بالتفاصيل. بالإضافة إلى ذلك ، يستمرون لتوسيع معارفهم
													ومهاراتهم كسيارات تقدم تكنولوجيا التلوين.
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
											alt="خدمة تظليل السيارات بالشارقة"
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
													تفويض
												</h5>
												<p className="text-justify text-white">
													تعتمد Storm Automotive على ممارسات العمل الأخلاقية
													والمعايير لأنها شريك معتمد لـ أكبر مصنع لأفلام نافذة
													التحكم في الشمس في العالم. نذهب إلى ما فوق لإنشاء أ
													اتصال الثقة مع عملائنا. لذلك، كل خدمة أو منتج تظليل
													للسيارة مقدم من قبلنا يتضمن العمل شهادة أصالة.
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
													أفلام تظليل النوافذ المعتمدة علميًا
												</h5>
												<p className="text-justify text-white">
													بصفتها تاجر أفلام تظليل نوافذ مرخص ، ستورم أوتوموتيف
													تقدم منتجات تظليل السيارات الممتازة مع بعضها الفوائد
													الصحية المعروفة. هذه السيارة العاصفة المتطورة تم
													التحقق من صحة الصبغات عن طريق العلم ويمكن أن تحجب إلى
													99٪ من الأشعة فوق البنفسجية والأشعة تحت الحمراء. نتيجة
													لهم التعرض لأشعة الشمس لفترات طويلة ، فإنها تحمي نفسها
													من الأمراض السائدة.
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
											alt="خدمة تظليل السيارات بالشارقة"
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
													صديقة للميزانية
												</h5>
												<p className="text-justify text-white">
													نحن لا نطلب منك أن تنفق ثروة لحماية سيارتك من الأشعة
													فوق البنفسجية والأشعة تحت الحمراء الخطرة. بدلاً من،
													نحن نقدم تظليل تلقائي للسيارة والتحكم في أشعة الشمس
													بأسعار معقولة أفلام تظليل النوافذ لتحسين الراحة. كما
													نقدم أ مجموعة متنوعة من الحلول لتظليل المنزل ودعنا
													يختار العملاء أفضل ما يناسب احتياجاتهم وميزانيتهم.
													بالإضافة إلى ذلك ، تظليل النوافذ لدينا خيارات يمكن أن
													تمكنك من تقليل الخاص بك على المدى الطويل نفقات الإضاءة
													والتكييف.
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
													إرضاء 100٪
												</h5>
												<p className="text-justify text-white ">
													في Storm Automotive ، نقوم بأداء سيارات العاصفة
													المتفوقة خدمات التظليل في الشارقة ودولة الإمارات
													العربية المتحدة مع الهدف المتمثل في تحقيق رضا العملاء
													لا مثيل له. نحن نضمن أن بضائعنا سوف تلبي الخاص بك
													توقعات الجودة والأداء. بالإضافة إلى ذلك ، يحافظون على
													مظهرهم و لون طوال الوقت. بالإضافة إلى ذلك ، كونه أ
													أعمال تظليل النوافذ ذات السمعة الطيبة في الإمارات
													العربية المتحدة ، نحن تتكيف باستمرار لتلبية الاحتياجات
													المتغيرة و تفضيلات عملائنا.
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
					className=" text-[44px] pt-5 "
				>
					ضمانات
				</div>

				<p className="text-LEFT m-auto text-white text-[18px] mt-1 ">
					في دولة الإمارات العربية المتحدة ، تعتبر شركة ستورم أوتوموتيف مصدرًا
					موثوقًا للظلال وتوفرها بعض من أفضل الضمانات المتاحة حماية من بهتان
					الألوان نحن نضمن أن جميع أفلام تظليل النوافذ لدينا لن تتلاشى لسنوات ،
					و أن الرياح الشديدة وأشعة الشمس المباشرة لن تبدد لمعانها لمعان.
				</p>
			</div>
			<div
				style={{ backgroundColor: "#071E22",  }}
				className="container-fluid "
			>
				<p
					style={{ color: "#Ffb400" }}
					className="text-center  m-auto pb-5 text-[40px] "
				>
					يتم توفير الضمانات التالية لعملائنا.
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
									الضمانات الرائدة في الصناعة
								</h5>
								<p class="card-text text-white text- [14px] text-justify">
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
				<ul
					style={{ listStyle: "circle" }}
					className=" text-justify m-4 text-[18px] mt-5 text-[white]"
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
						إذا اتضح أن منتجنا به عيوب ، فسنقوم باستبداله لا تكلفة إضافية. سوف
						تحتاج إلى تقديم إيصال الشراء ، الذي يتضمن معلومات عن نوع الفيلم و
						تاريخ التركيب للاستفادة من الضمان.
					</li>
					<li>
						قد يختلف طول الضمان اعتمادًا على المعين لون السيارة أو النافذة الذي
						حددته.
					</li>
				</ul>
			</div>

			<div className=" bgimage">
				<div className="text-center pt-5 text-[#Ffb400] text-[32px] font-bold  ">
					كيف تعمل
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
									التسليم والتركيب
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
									style={{ backgroundColor: "#071E22" }}
									class="accordion-body text-[15px] text-white text-justify"
								>
									يمكن أن يوفر تظليل النوافذ مزايا عملية طويلة الأمد ، مثل
									الخصوصية والحماية من أشعة الشمس والسلامة ، بالإضافة إلى تحسين
									الجماليات. العاصفة للسيارات هي سيارة ذات سمعة طيبة أعمال الصبغ
									التي تعمل معك لتثبيت ملف فيلم شفاف لإعطاء المركبات الأداء و
									المظهر الذي تريده. جميع موادنا تحمي من الأشعة فوق البنفسجية
									الإشعاع والالتزام بلوائح تظليل السيارات في الإمارات العربية
									المتحدة. بالإضافة إلى ذلك ، فهي تتضمن شهادة حماية للأشعة فوق
									البنفسجية يمكنك أن تشهد على.
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
									مركز تظليل النوافذ الموثوق في الشارقة
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
									تعتبر أفلام تظليل النوافذ استثمارًا ممتازًا لأنها تقدم كل شيء
									من التحكم في درجة الحرارة إلى الحماية من أشعة الشمس. بصري قد
									يتم تثبيت الأفلام الشفافة بواسطة Storm Automotive ، ذات السمعة
									الطيبة تظليل النوافذ لحماية سيارتك وتوفيرها لك مع رحلة أكثر
									أمانًا ومتعة. لدينا مجموعة متنوعة من مظلات السيارات للامتثال
									للوائح المرور الجديدة في الشارقة ، والتي تسمح لأصحاب السيارات
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
									قم بترقية طراز وراحة سيارتك مع العاصفة تظليل النوافذ
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
									نحاول تلبية المطالب المختلفة لأصحاب السيارات في الإمارات
									العربية المتحدة من خلال تظليل نوافذ السيارات المتميز ، والذي
									ينضح بامتياز لا مثيل له. نحن نقدم لك مجموعة واسعة خيارات تظليل
									السيارات التي تمكنك من قيادة المزيد بسهولة ، بما في ذلك الطلاء
									البلوري والسيراميك وسلسلة FX. ما عليك سوى إبلاغنا بمشاكلك ،
									وتظليل النوافذ لدينا سوف يستجيب المتخصصون بالنصيحة المناسبة.
									ونحن سوف تنفيذ منتج أو خدمة عند الموافقة عليها.
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
									مجموعة شاملة من خدمات تظليل نوافذ السيارة
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
									ستورم للسيارات ، شركة لتظليل النوافذ منذ سنوات الخبرة ، تقدم
									مجموعة واسعة من السيارات والنوافذ خيارات التظليل في الشارقة.
									لذلك ، يمكنك اختيار نافذة فيلم يناسب احتياجاتك هنا ، سواء كنت
									تريد الخصوصية و الحماية أو نظرة أفضل. نتأكد من أن كل من
									المنتجات مصنوعة لتوفير الحماية من الأشعة فوق البنفسجية ،
									وتقليل ارتفاع درجة الحرارة ، والمقدار المطلوب من الخصوصية
									لأننا معتمدين منشأة تظليل لسيارات العاصفة في الشارقة.
									<br /> بالإضافة إلى تقديم منتجات من أعلى المستويات العيار ،
									يركز عملنا بشكل كبير على المناسب التركيب والتشطيب. بالإضافة
									إلى ذلك ، كما تمت الموافقة عليها متجر تظليل السيارات ، نحن
									نقدم مجموعة واسعة من الخدمات ، مشتمل
									<br />
									<span className="text-red-600">تظليل نوافذ السيارة </span>
									<br />
									يمنح اختيارنا المتميز لأفلام التحكم في أشعة الشمس العاصفة داخل
									سيارتك الدرجة اللازمة من الخصوصية و حماية.
									<br />
									<span className="text-red-600">
										رسومات السيارة الإبداعية{" "}
									</span>
									<br />
									بصفتنا متجر تظليل سيارات معتمد من العاصفة في الشارقة ، نقدم لك
									فرص لا حصر لها للتعبير عن إبداعك عبر السيارة يلف.
									<br />
									<span className="text-red-600">فيلم حماية الطلاء </span>
									<br />
									When used on a cars painted surfaces, this high-end automobile
									tinting aids in avoiding fading or abrasion.
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
			<div className="bgimage2 py-5 ">
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
							موعد ، و سيتصل بك أخصائي التقييم لدينا.
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
							اتصل الان
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
				href="/"
			>
				<p id="link" class="float4"></p>
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
