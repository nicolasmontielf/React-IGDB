import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const Newsletter = () => {
    return (
        <div style={{ border: "solid 2px black" }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <h2>ESTO ES UNA DESCRIPCION DEL FORM</h2>
                </Grid>

                <Grid item xs={12} md={4}>
                    <form noValidate autoComplete="off">
                        <Input placeholder="Name" name="name" required style={{ width: "100%" }} />
                        <Input placeholder="Email" name="email" required type="email" style={{ width: "100%" }} />
                        <Button variant="outlined" color="primary">
                            Suscribe
                        </Button>
                    </form>   
                </Grid>
            </Grid>
        </div>
    )
}

export default Newsletter;