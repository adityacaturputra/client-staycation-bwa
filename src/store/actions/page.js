import { FETCH_PAGE } from "../types"
import axios from "axios"

export const fetchPage = (url, page) => (dispatch) => {
    try {
        return axios.get(url).then((response) => {
            dispatch({
                type: FETCH_PAGE,
                payload: {
                    [page] : response.data
                }
            }
            )
        }) 
    } catch (error) {
        console.log(error.message)
    }
}