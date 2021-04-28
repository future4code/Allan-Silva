import { createMuiTheme } from '@material-ui/core/styles';
import { primaryColor, secondColor } from './color';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: primaryColor
        },
        secondary: {
            light: '#0066ff' ,
            main: secondColor ,
            contrasText: 'ffcc00',
        }
    }
});