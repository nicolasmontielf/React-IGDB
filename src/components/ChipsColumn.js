import Grid from '@material-ui/core/Grid';
import ChipItem from "./ChipItem"

const ChipsColumn = (props) => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h4>{ props.title }</h4>
                </Grid>
                <Grid item xs={12}>
                    <ChipItem />
                    <ChipItem />
                    <ChipItem />
                    <ChipItem />
                    <ChipItem />
                    <ChipItem />
                    <ChipItem />
                </Grid>
            </Grid>
        </>
    )
}

export default ChipsColumn;