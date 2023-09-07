import { useState, useEffect } from 'react';
import {
	AppError,
	BadRequestError,
	UnauthorizedError,
	ForbiddenError,
	NotFoundError,
	ValidationError,
	SessionExpiredError,
	ServiceUnavailableError
} from "../utils/api_error"


export default function useFetch(endpoint, method, body) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const fetchConfig = method === "GET" ? null : {
		method,
		headers: {
			"Content-Type": "application/json",
		},
		credentials: "include"
	}

	if (body) fetchConfig.body = body

	useEffect(() => {
		const fetchData = async () => {
			
			try {
				setLoading(true)

				const response = await fetch(endpoint, fetchConfig)
				if (!response.ok) {
					switch (response.status) {
						case (400) :
							throw new BadRequestError()
							break;
						case (401) :
							throw new UnauthorizedError()
							break;
						case (403) :
							throw new ForbiddenError()
							break;
						case (404) :
							throw new NotFoundError();
							break;
						default :
							throw new AppError("Unknown Error Occured", 500)
					}
				} else {
					const jsonResponse = await response.json()
					console.log(jsonResponse, '44444')
					if (jsonResponse.data) setData(jsonResponse)
					setLoading(false);
				}
			} catch (err) {
				setError(error);
        		setLoading(false);
			}
		}

		fetchData()
	}, [endpoint, fetchConfig])

	return {data, loading, error}
}