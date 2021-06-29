import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor } from './color';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrasText: '#C7D0D8'
        },
        text: {
            primary: '#000000'
        }
    },
});

export default theme;