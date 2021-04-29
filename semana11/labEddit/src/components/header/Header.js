import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { StyledToolbar } from './styled';
import { useHistory } from 'react-router';
import { goToFeed } from '../../routes/Coordinator'


const Header = () => {
    const history = useHistory()

    return (
            <AppBar position="static">
                <StyledToolbar>
                <Button onClick={(() => goToFeed(history))} color="inherit">LabEddit</Button>
                    <Button color="inherit">Login</Button>
                </StyledToolbar>
            </AppBar>
    );
}

export default Header;