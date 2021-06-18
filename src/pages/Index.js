import GameCarousel from "../components/GameCarousel"
import ChipsColumn from "../components/ChipsColumn"
import Grid from '@material-ui/core/Grid';
import NewsSection from "../components/NewsSection"
import { makeStyles } from '@material-ui/core/styles';

const containerStyles = makeStyles({
    root: {
        margin: "1em 0"
    },
});

const Index = () => {
    const classes = containerStyles()

    return (
        <>
            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12}>
                    <GameCarousel title="Últimos juegos" typeOfData="last_games" />
                </Grid>
            </Grid>

            <Grid container spacing={1} className={classes.root}>
                <Grid item xs={12} md={4}>
                    <ChipsColumn title="Genres" type="genres" />
                </Grid>

                <Grid item xs={12} md={4}>
                    <ChipsColumn title="Companies" type="companies" />
                </Grid>

                <Grid item xs={12} md={4}>
                    <ChipsColumn title="Platforms" type="platforms" />
                </Grid>
            </Grid>

            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12}>
                    <NewsSection />
                </Grid>
            </Grid>
        </>
    )
}

export default Index;