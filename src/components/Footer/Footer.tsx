import { Link } from "react-router-dom"
import { copyRightsText, fullCompanyName } from "../../constants/title"
export default function Footer() {
	return (
			<footer className = ' footer  w-full py-3 pb-4 bg-blue-50 mt-4'>
				<div className = ''>
					
					<div className = 'text-center px-2'>
						<p className="text-md sm:text-lg mb-0 text-gray-700 font-bold">&copy; {copyRightsText} <Link className="font-bold text-primary" to = "/">{fullCompanyName}</Link></p>
					</div>
				</div>
			</footer>
		)
}
