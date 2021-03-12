import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';

const NavBar = () => {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src='/assets/logo.png' alt='logo' style={{marginRight: '15px'}} />
                    eevents
                </Menu.Item>
                <Menu.Item name='See Events' />
                <Menu.Item>
                    <Button positive inverted content='Create Event' />
                </Menu.Item>
                <Menu.Item>
                    <Button basic inverted content='Login' />
                    <Button basic inverted content='Register' style={{ marginLeft: '0.5em' }} />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar;