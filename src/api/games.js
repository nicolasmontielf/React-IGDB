import getData from "./get_data"

export const getLastGames = async () => {
    const actualTime = new Date().getTime()
    const query = `fields id, name, slug, genres.name, cover.*; where status = (0, 4) & created_at < ${actualTime}; sort updated_at desc;`

    try {
        const data = await getData("games", query)
        return data;
    } catch (error) {
        console.log("getLastGames", error.message)
        return null;
    }  
}