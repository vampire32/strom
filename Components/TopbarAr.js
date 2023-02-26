import Image from 'next/image';
import React from 'react'
import { AiFillPhone } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {Ri24HoursLine} from 'react-icons/ri'
import Logo from '../img/Logo.png'

const TopbarAr = () => {
  return (
		<div className="bg-black">
			<header class=" container text-white body-font overflow-hidden ">
				<div className="row flex justify-center">
					<div className="col-md-3 mt-3 hide">
						<div className=" flex ">
							<HiOutlineLocationMarker size={80} color="#ffae42" />
							<h3 className="mt-3">
							ضاحية حلوان أوتو ستروم - المنطقة الصناعية 4 -
الشارقة، الإمارات العربية المتحدة
							</h3>
						</div>
					</div>
					<div className="col-md-4">
						{/* <div className=" flex  justify-center ml-10 mt-3">
							<Image src={Logo} width={200} height={200} />
						</div> */}
					</div>
					<div className="col-md-2 hide">
						<div className=" flex  mt-5 justify-center">
							<a href="tel:+923365124444">
								<BsTelephone size={30} color=" ffae42"  />
							</a>

							<h3>+۹۷۱ ٥۰ ۱٤٤ ٤۳٥۳</h3>
						</div>
					</div>
					<div className="col-md-2 hide">
						<div className=" flex  mt-5 justify-center">
							<Ri24HoursLine size={30} color="#ffae42" />
							<h3 className="ml-4">۲٤/۷</h3>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default TopbarAr
