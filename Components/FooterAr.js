import React from 'react'
import { BiMap, BiPhoneCall, BiEnvelope } from "react-icons/bi";


const FooterAr = () => {
  return (
		<footer>
			<div style={{backgroundColor:"black"}}
				class="container-fluid  footer mt-5 pt-5 wow fadeIn"
				data-wow-delay="0.1s"
			>
				<div class="container py-5">
					<div class="row g-5">
						<div class="col-md-6">
							<h2 class="text-[#FFD700] mb-4">
							
							اكسسوارات العاصفة
							</h2>
							<span className="text-justify text-white">
							لأفلام النوافذ عالية الجودة التي تأتي في مجموعة واسعة من
الأنماط والتصميمات لتوفير الخصوصية والأمان والحماية من أشعة الشمس ،
Storm Automotive LLC هو اسم مرموق في دولة الإمارات العربية المتحدة. حسب
إلى دولة الإمارات العربية المتحدة قانون المرور الاتحادي المعدل ، والذي يسمح للسيارات
يتم تلوين النوافذ بنسبة تصل إلى 50٪.
							</span>
						</div>
					
						<div class="col-lg-3  text-white col-md-6">
							<h5 class="text-[#FFD700] mb-4">Get In Touch</h5>
							<p>
								<BiMap style={{color:"yellow",display:"inline-block"}} />
								ضاحية حلوان أوتو ستروم - المنطقة الصناعية 4 - الشارقة -
الإمارات العربية المتحدة
							</p>
							<p>
								<BiPhoneCall  style={{color:"yellow",display:"inline-block"}} />
								+971 50 144 4353
							</p>
							<p>
								<BiEnvelope  style={{color:"yellow",display:"inline-block"}} />
								info@stormaccessoires.com
							</p>
						</div>
						<div  class="col-lg-3 text-white  col-md-6">
							<h5 class="text-[#FFD700] mb-4">علاماتنا</h5>
						<h2>خدمة تظليل السيارات في الشارقة</h2>
						<br></br>
						<h2>تنجيد مقاعد السيارات في الشارقة</h2>
						<br></br>

						<h2>اكسسوارات السيارات في الشارقة</h2>

						</div>
						
					</div>
				</div>
				<div class="container-fluid copyright">
					<div class="container">
						<div class="row">
							<div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
								&copy;{" "}
								<a href="#" style={{ color: "##FFD700" }}>
								اكسسوارات العاصفة
								</a>
								, جميع الحقوق محفوظة.
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default FooterAr
