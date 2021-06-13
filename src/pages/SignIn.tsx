import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import {Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import { SingInPopup } from "../components/modal/SingInPopup";
import { RegPopup } from "../components/modal/RegPopup";

export const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        height: '100vh',
        width: '100%',
        position: 'relative',
    },
    blueSide: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#71C9F8',
        height: '100%',
        flex: '0 0 50%',
        boxSizing: 'border-box',
        position: 'relative',
        overflow: 'hidden',
    },
    blueSideList: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        width: 380,
        zIndex: 2,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: 20,
            marginBottom: '20px'
        }
    },
    blueSideListIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    blueSideBigIcon: {
      position: 'absolute',
        left: '330px',
        top: '600px',
        width: '250%',
        height: '250%',
        transform: 'translate(-50%, -50%)',
        color: '#1DA1F2'
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100%',
        flex: '0 0 50%',
        padding: '20px 30px',
        boxSizing: 'border-box',
        overflow: 'hidden',
    },
    loginSideIcon: {
        width: '50px',
        height: '50px',
        color: '#1DA1F2',
        marginBottom: '20px',
    },
    loginSideWrapper: {
      width: '380px',
    },
    button: {
        borderRadius: '30px',
    },
    buttonContained: {
        margin: '15px 0',
        color: '#fff',
        borderRadius: '30px',
    },
    loginSideTitle: {
        fontWeight: 800,
        fontSize: 32,
        marginBottom: 45,
    }
});

export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStyles();
    const [activePopupSingIn, setActivePopupSingIn] = React.useState(false);
    const [activePopupReg, setActivePopupReg] = React.useState(false);

    return(
        <div className={classes.wrapper}>
            {activePopupSingIn && <SingInPopup setActivePopupSingIn={setActivePopupSingIn} />}
            {activePopupReg && <RegPopup setActivePopupReg={setActivePopupReg} />}
            <section className={classes.blueSide}>
                <TwitterIcon className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideList}>
                    <li>
                        <Typography variant="h6"><SearchIcon className={classes.blueSideListIcon} />Читайте о том, что вам интересно</Typography>
                    </li>
                    <li>
                        <Typography variant="h6"><PeopleIcon className={classes.blueSideListIcon} />Узнайте, о чем говорят в мире</Typography>
                    </li>
                    <li>
                        <Typography variant="h6"><MessageIcon className={classes.blueSideListIcon} />Присоединяйтесь к общению</Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon className={classes.loginSideIcon} />
                    <Typography className={classes.loginSideTitle} variant='h4'>Узнайте, что происходит в мире прямо сейчас</Typography>
                    <Typography><b>Присоединяйтесь к Твиттеру прямо сейчас!</b></Typography>
                    <Button
                        style={{color: '#fff'}}
                        variant="contained"
                        color="primary"
                        onClick={() => setActivePopupReg(true)}
                        fullWidth
                    >Зарегистрироваться</Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => setActivePopupSingIn(true)}
                        fullWidth
                    >Войти</Button>
                </div>
            </section>
        </div>
    )
}
