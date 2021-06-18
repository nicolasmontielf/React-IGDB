import { useEffect, useState } from "react"
import { Grid, Typography } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton'
import ChipItem from "./ChipItem"
import { getCategories } from "../api/categories"

const ChipsColumn = (props) => {
    const [items, setItems] = useState(null)

    useEffect( () => {
        const fetchData = async () => {
            const newItems = await getCategories(props.type)
            if (newItems) {
                const itemsCategories = newItems.map((aux) => {
                    return (
                        <ChipItem data={aux} key={aux.id} />
                    )
                })
                setItems(() => {
                    return itemsCategories
                })
            }
        }
        fetchData()
    }, [props.type])

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        { props.title }
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {
                        (items && Array.isArray(items))
                        ? items
                        : skeletonLoading()
                    }
                </Grid>
            </Grid>
        </>
    )
}

const skeletonLoading = () => {
    return (
        <div>
            <Skeleton variant="text" height="2em" />
            <Skeleton variant="text" height="2em" />
            <Skeleton variant="text" height="2em" />
        </div>
    )
}

export default ChipsColumn;