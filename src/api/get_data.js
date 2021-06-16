import axios from "axios"

const getData = async (endpoint, query) => {
    try {
        const { data } = await axios({
            method: 'POST',
            baseURL:  process.env.REACT_APP_IGDB_URL,
            url: endpoint,
            headers: {
                "Authorization": "Bearer vfhn93ok2br4medz9baeyj2a5y8pn7",
                "Client-ID": process.env.REACT_APP_TWITCH_ID
            },
            data: query
        });
        return data
    } catch (error) {
        console.log("Error in getData", error.message)
        return null;
    }
}

export default getData;