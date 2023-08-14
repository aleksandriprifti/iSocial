import { Button, Container, Menu } from 'semantic-ui-react'

export const Navbar = () => {
    return (
        <Menu inverted fixed='top' >
            <Container>
                <Menu.Item header >
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    iSocial
                </Menu.Item>
                <Menu.Item name='iSocial' />
                <Menu.Item >
                    <Button positive content='Create iSocial' />
                </Menu.Item>

            </Container>
        </Menu>
    )
}
