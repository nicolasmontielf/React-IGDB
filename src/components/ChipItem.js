// import randomColor from "randomcolor"
import { Chip, Avatar } from '@material-ui/core';

const ChipItem = () => {
    return (
        <Chip 
            avatar={<Avatar>M</Avatar>} 
            label="Clickable"
            onClick={ () => console.log("Esto va a llevar al catálogo") }
        />
    )
}

export default ChipItem;