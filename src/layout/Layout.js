import Menu from "../components/Menu"
import Footer from "../components/Footer"

import { Container } from '@material-ui/core';

const Layout = ({ children }) => {
    return (
        <div>
            <Menu />
            <Container component="main" >
                {children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout;