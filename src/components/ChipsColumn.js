import { useEffect, useState } from "react"
import Grid from '@material-ui/core/Grid';
import ChipItem from "./ChipItem"
import { getCategories } from "../api/categories"


const ChipsColumn = (props) => {
    const [items, setItems] = useState([])

    useEffect( () => {
        const fetchData = async () => {
            const newItems = await getCategories(props.type)
            if (newItems) {
                setItems(() => {
                    return newItems
                })
            }
        }
        fetchData()
    }, [props.type])

    const itemsCategories = items.map((aux) => {
        return (
            <ChipItem data={aux} key={aux.id} />
        )
    })

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h4>{ props.title }</h4>
                </Grid>
                <Grid item xs={12}>
                    {itemsCategories}
                </Grid>
            </Grid>
        </>
    )
}

export default ChipsColumn;