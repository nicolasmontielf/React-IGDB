import Index from "../pages/Index"
import Menu from "../components/Menu"
import Footer from "../components/Footer"

import { Container } from '@material-ui/core';

const Layout = () => {
    return (
        <>
            <Menu />
            <main>
                <Container>
                    <Index />
                </Container>
            </main>
            <Footer />
        </>
    )
}

export default Layout;