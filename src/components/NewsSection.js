import { Grid, Typography, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';

const NewsSection = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h5">News</Typography>
                </Grid>

                <GridList cols={4} style={{width: "100%"}}>
                    {lul()}
                    {lul()}
                    {lul()}
                    {lul()}
                    {lul()}
                    {lul()}
                    {lul()}
                    {lul()}
                </GridList>
            </Grid>
        </>
    )
}

const lul = () => {
    return (
        <GridListTile>
            <img src="http://placekitten.com/g/300/500" alt="LUL" />
            <GridListTileBar
                title="TITULO"
                subtitle="Subtitulo"
                actionIcon={
                    <IconButton>
                        Ver
                    </IconButton>
                }
            />
        </GridListTile>
    )
}

export default NewsSection;