import * as dotenv from "dotenv"
import useFetch from "../hooks/useFetch"

dotenv.config()

const endpoint = "http://localhost:3000/api"


export default function Home() {


	const {data, loading, error} = useFetch(`${endpoint}/getTree`, "GET")

	if (loading) {
		return <div>Loading....</div>
	}

	if (error) {
		return <div>{error}</div>
	}

	return (
    <>
      <div>{data.result}</div>
    </>
  )
}

export async function getServerSideProps(context) {

	const response = await fetch("https://mocki.io/v1/b5503794-f6b7-4b9d-810f-c0d8e6340b7b")
	const result = await response.json()


	return {
	  props: {}, // will be passed to the page component as props
	}
  }