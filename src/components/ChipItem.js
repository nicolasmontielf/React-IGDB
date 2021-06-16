import randomColor from "randomcolor"
import { Chip, Avatar } from '@material-ui/core';

const ChipItem = (props) => {
    const random = randomColor({
        luminosity: 'dark',
        hue: "blue"
    })
    return (
        <Chip 
            style={{ backgroundColor: random, color: "white" }}
            avatar={<Avatar>{props.data.name[0]}</Avatar>} 
            label={props.data.name}
            onClick={ () => console.log("Esto va a llevar al catálogo") }
        />
    )
}

export default ChipItem;