import Link from 'next/link';
import React, { useState } from 'react'
import { AiFillPhone } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import {MdOutlineLanguage} from "react-icons/md"



const Floating = () => {

	
	
	
  return (
		<>
			<a href="https://api.whatsapp.com/send?phone+03469413675" class="float">
				<AiFillPhone class="fa fa-plus my-float"></AiFillPhone>
			</a>
			<a href="https://api.whatsapp.com/send?phone+03469413675" class="float2">
				<BsWhatsapp class="fa fa-plus my-float"></BsWhatsapp>
			</a>
			<a
				id="link"
				class="float3"
				
			>
				<Link href="/">
					<MdOutlineLanguage className="my-float" />
					Arabic
				</Link>
			</a>
			<a
				id="link"
				class="float4"
			
			>
				<Link href="/">
					<MdOutlineLanguage className="my-float" />
					English
				</Link>
			</a>
		</>
	);
	
}

export default Floating
