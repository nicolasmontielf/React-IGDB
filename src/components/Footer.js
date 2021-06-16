import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

const Footer = () => {
    return (
        <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
            <AppBar position="static" color="dark">
                <Container maxWidth="md">
                    <Toolbar>
                        <Typography variant="body1" color="inherit">
                            © 2021 Footer
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Footer;