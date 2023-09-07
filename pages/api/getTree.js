
import Response from "../../utils/response_template.js";
import {UnauthorizedError} from "../../utils/api_error.js"
const endpoint = "https://mocki.io/v1/188f1987-642c-41a4-9680-47fdceb658e1"

export default async function handler(req, res) {

	const cookieStr = req.headers.cookie
	if (cookieStr) {
		const [cookieKey, cookieValue] = cookieStr.split("=")
		if (cookieKey !== token) res.status(401).json({error:true});
		console.log(cookieValue)
	} else {
		res.status(401).json({error:true});
	}
	
	
	try {
		const response = await fetch(endpoint)
		if (response.status >= 200 && response.status < 400) {
			const result = await response.json()
			res.status(response.status).json(result)
		} else {
			const result = await response.json()
			res.status(response.status).json(result)
		}
	} catch (err) {
		console.log('chere')
		console.log(err)
	}
  }