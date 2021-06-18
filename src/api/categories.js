import getData from "./get_data"

/* 
    Esta función maneja:
    - Genres
    - Companies
    - Platforms
*/

export const getCategories = async (type) => {
    const query = `fields name, slug; sort updated_at;`

    try {
        const data = await getData(type, query)
        return data;
    } catch (error) {
        console.log("getCategories", error.message)
        return null;
    }  
}