import { Button, Container, Menu } from 'semantic-ui-react'

interface Props {
    openForm: () => void;
}

const Navbar = ({ openForm }: Props) => {
    return (
        <Menu inverted fixed='top' >
            <Container>
                <Menu.Item header >
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    iSocial
                </Menu.Item>
                <Menu.Item name='iSocial' />
                <Menu.Item >
                    <Button positive content='Create iSocial' onClick={openForm} />
                </Menu.Item>

            </Container>
        </Menu>
    )
}

export default Navbar;