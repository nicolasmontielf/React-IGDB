import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';

const Footer = () => {
    return (
        <div style={{ bottom: 0, width: "100%" }}>
            <AppBar position="static" color="primary">
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