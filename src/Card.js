import { useState } from "react"

function Card({ key, data, answer }) {
	const [isClicked, setClicked] = useState(false)
	const handleClick = () => {
		setClicked(s => (s = !s))
		console.log(isClicked)
	}
	return (
		<div>
			<div
				className={`p-4 border-4 border-red-300 rounded-lg w-80 h-80 ${
					isClicked ? "bg-green-400" : " bg-stone-200"
				} font-bold text-3xl text-center flex items-center`}
				onClick={handleClick}
			>
				<p>{isClicked ? answer : data}</p>
			</div>
		</div>
	)
}

export default Card
