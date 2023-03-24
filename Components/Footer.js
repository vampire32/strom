import React from 'react'
import { BiMap, BiPhoneCall, BiEnvelope } from "react-icons/bi";


const Footer = () => {
  return (
		<footer>
			<div
				style={{ backgroundColor: "#Ffb400" }}
				class="container-fluid  footer pt-5 wow fadeIn"
				data-wow-delay="0.1s"
			>
				<div class="container py-5">
					<div class="row g-5">
						<div class="col-md-6">
							<h2 class="text-[#071E22] mb-4 text-[30px]">Storm Accessories</h2>
							<span className="text-justify text-white font-thin ">
								For high-quality window films that come in a wide range of
								styles and designs to offer privacy, safety, and sun protection,
								Storm Automotive LLC is a reputable name in the UAE. according
								to the UAE revised federal traffic law, which permits car
								windows to be tinted up to 50%
							</span>
						</div>

						<div class="col-lg-3  text-white col-md-6">
							<h5 class="text-[#071E22] text-[30px] mb-4">Get In Touch</h5>
							<p>
								<BiMap
									style={{
										color: "#071E22",
										display: "inline-block",
										fontWeight: "lighter",
									}}
								/>
								Strom Auto Halwan Suburb - Industrial Area 4 - Sharjah - United
								Arab Emirates
							</p>
							<p>
								<BiPhoneCall
									style={{ color: "#071E22", display: "inline-block" }}
								/>
								+971 50 144 4353
							</p>
							<p>
								<BiEnvelope
									style={{ color: "#071E22", display: "inline-block" }}
								/>
								info@stormaccessoires.com
							</p>
						</div>
						<div class="col-lg-3 text-white font-extralight  col-md-6">
							<h5 class="text-[#071E22] text-[30px] mb-4">Our Tags</h5>
							<h2>Car Tinting Service In Sharjah</h2>

							<h2>Car Seat Upholsery In Sharjah</h2>

							<h2>Car Accessories In Sharjah</h2>
						</div>
					</div>
				</div>
				<div class="container-fluid copyright">
					<div class="container">
						<div class="row">
							<div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
								&copy;{" "}
								<a href="#" style={{ color: "#071E22" }}>
									Storm Accessories
								</a>
								, All Right Reserved.
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer
