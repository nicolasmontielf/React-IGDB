import Index from "../pages/Index"
import Menu from "../components/Menu"
import Footer from "../components/Footer"

import { Container } from '@material-ui/core';

const Layout = () => {
    return (
        <div>
            <Menu />
            <Container component="main" >
                <Index />
            </Container>
            <Footer />
        </div>
    )
}

export default Layout;