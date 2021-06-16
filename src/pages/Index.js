import GameCarousel from "../components/GameCarousel"
import ChipsColumn from "../components/ChipsColumn"
import Grid from '@material-ui/core/Grid';
import Newsletter from "../components/Newsletter"

const Index = () => {
    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <GameCarousel title="Últimos juegos" typeOfData="last_games" />
                </Grid>  
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <ChipsColumn title="Categoria 1" />
                </Grid>

                <Grid item xs={12} md={4}>
                    <ChipsColumn title="Categoria 2" />
                </Grid>

                <Grid item xs={12} md={4}>
                    <ChipsColumn title="Categoria 3" />
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Newsletter />
                </Grid>
            </Grid>
        </>
    )
}

export default Index;