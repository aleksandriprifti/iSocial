import { Button, Container, Menu } from 'semantic-ui-react'
import { useStore } from '../store/store';
import { observer } from 'mobx-react-lite';

const Navbar = () => {

    const {activityStore} = useStore();
    return (
        <Menu inverted fixed='top' >
            <Container>
                <Menu.Item header >
                    <img src="/assets/logo.png" alt="logo" style={{ marginRight: '10px' }} />
                    iSocial
                </Menu.Item>
                <Menu.Item name='isocial' content="iSocial" />
                <Menu.Item >
                    <Button onClick={() => activityStore.openForm()} positive content='Create iSocial'  />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default observer(Navbar);