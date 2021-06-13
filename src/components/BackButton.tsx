import React from 'react';
import {useHistory} from 'react-router-dom';
import {IconButton} from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";

export const BackButton: React.FC = (): React.ReactElement => {
    const history = useHistory();

    const handleClickButton = () => {
        history.goBack();
    }

    return(
        <IconButton onClick={handleClickButton} style={{marginRight: 20, padding: '0'}} color="primary">
            <ArrowBack />
        </IconButton>
    )
}
