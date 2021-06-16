import React from 'react';
// Todo para la card
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const imageURL = (name) => {
    if (name) {
        return `https://images.igdb.com/igdb/image/upload/t_cover_big/${name}.jpg`
    }
}

const GameCard = (props) => {
    return (
        <Card style={{ maxWidth: "100%" }}>
            <CardActionArea>
                <CardMedia
                    style={{ height: "20em" }}
                    image={ imageURL(props.gameInfo?.cover?.image_id) ?? "http://placekitten.com/800/800" }
                    title={props.gameInfo?.name ?? ""}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6">
                        {props.gameInfo?.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Ver más
                </Button>
            </CardActions>
        </Card>
    );
}

export default GameCard;