// @ts-nocheck
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export const theme = createMuiTheme({
    palette: {
        default: {
            main: "#1DA1F2",
        },
        primary: {
            main: "#1DA1F2",
        },
        secondary: {
            main: green[500],
        },
        background: {
            default: '#fff'
        }
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 30,
                textTransform: 'none',
                fontSize: 16,
                height: 40,
                fontWeight: 700,
                margin: '10px 0'
            },
            outlinedPrimary: {
                borderColor: '#1DA1F2'
            }
        }
    }
});
