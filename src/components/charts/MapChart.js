import React from "react";
import { useState } from "react";
import mapImg from "../../images/map-blank.jpg";
import { chartMapCoordinates } from "../../utilities/chartMapCoordinates";

const MapChart = () => {
	const [coords, setCoords] = useState([]);
	

	const showCoord = (event) => {
		const xCoord = event.nativeEvent.offsetX;
		const yCoord = event.nativeEvent.offsetY;
		setCoords([...coords, xCoord, yCoord]);
		console.log(coords);
	};
	return (
		<div className="w-4/5 flex justify-center items-center">
			<img
				src={mapImg}
				alt=""
				useMap="#rakib"
				className="max-w-full rounded-md mix-blend-multiply"
				// onClick={(e) => showCoord(e)}
			/>
			<map name="rakib">
				{chartMapCoordinates.map((item, i) => (
					<area
						key={i}
						shape="poly"
						coords={item.coord}
						alt="map-demo"
						href="https://www.google.com/"
						onClick={() => console.log(item.district)}
						className="areaClr	"
					/>
				))}
			</map>
		</div>
	);
};

export default MapChart;
