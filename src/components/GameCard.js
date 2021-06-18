import React from 'react';
// Todo para la card
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import placeholder from "../assets/images/placeholder.png"
import { makeStyles } from '@material-ui/core/styles';

const imageURL = (name) => {
    if (name) {
        return `https://images.igdb.com/igdb/image/upload/t_cover_big/${name}.jpg`
    }
}

const containerStyles = makeStyles({
    root: {
        maxWidth: "100%",
        border: "solid 1px darkgray"
    },
});

const GameCard = (props) => {
    const cardClass = containerStyles()

    return (
        <Card className={cardClass.root}>
            <CardActionArea>
                <CardMedia
                    style={{ height: "20em" }}
                    image={ imageURL(props.gameInfo?.cover?.image_id) ?? placeholder }
                    title={ props.gameInfo?.name ?? "" }
                />
                <CardContent style={{ padding: "0.5em 0.3em" }}>
                    <Typography variant="h6" noWrap >
                        {props.gameInfo?.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={ () => console.log("Llevará a la página del juego.") }>
                    Ver más
                </Button>
            </CardActions>
        </Card>
    );
}

export default GameCard;