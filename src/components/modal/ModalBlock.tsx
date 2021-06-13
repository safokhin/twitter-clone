import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";

interface ModalBlockProps {
    visible: boolean;
    title: string;
    onClose: () => void;
    children: any;
}

export const useStyles = makeStyles({
    popupOutside: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        background: 'rgba(0, 0, 0, 0.45)',
        zIndex: 2
    },
    popup: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: 550,
        background: '#fff',
        borderRadius: '12px',
        padding: '10px 20px',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '40px',
        borderBottom: '1px solid #e2e2e2',
    },
    headerIcon: {
        cursor: 'pointer',
        color: '#1DA1F2'
    },
    headerTitle: {
        fontWeight: 'bold',
        marginLeft: '20px',
        fontSize: 18
    }
})

export const ModalBlock: React.FC<ModalBlockProps> = (props: ModalBlockProps) => {
    const classes = useStyles();
    // visibleAddTweetPopup
    if(props.visible) {
        return (
            <div className={classes.popupOutside}>
                <div className={classes.popup}>
                    <div className={classes.header}>
                        <CloseIcon className={classes.headerIcon} onClick={props.onClose} />
                        <span className={classes.headerTitle}>{props.title}</span>
                    </div>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        )
    } else {
        return null
    }

}

