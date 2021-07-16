import { FC } from "react"

import Slider from "react-slick"

import Image from "next/image"

const ImageBanner: FC = () => {
	const settings = {
		dots: true,
		accessibility: true,
		autoPlaySpeed: 10000,
		autoplay: false,
		arrows: false,
		pauseOnHover: false,
	}

	return (
		<Slider {...settings}>
			<div>
				<Image
					src="http://placekitten.com/g/400/200"
					title={"algo"}
					alt={"algo"}
					width={600}
					height={300}
				/>
			</div>
			<div>
				<Image
					src="http://placekitten.com/g/400/200"
					title={"algo"}
					width={600}
					height={300}
					alt={"algo"}
				/>
			</div>
			<div>
				<Image
					src="http://placekitten.com/g/400/200"
					title={"algo"}
					alt={"algo"}
					width={600}
					height={300}
				/>
			</div>
			<div>
				<Image
					src="http://placekitten.com/g/400/200"
					title={"algo"}
					alt={"algo"}
					width={600}
					height={300}
				/>
			</div>
		</Slider>
	)
}

export default ImageBanner
