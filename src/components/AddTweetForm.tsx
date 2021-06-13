import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Button, CircularProgress, Grid, Paper, TextareaAutosize, Typography} from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import {useHomeStyles} from "../pages/home/theme";
import {fetchAddTweet, setAddFormState} from "../store/ducks/tweets/actionCreators";
import {selectAddFormState} from "../store/ducks/tweets/selectors";
import {AddFormState} from "../store/ducks/tweets/contracts/state";
import {UploadImages} from "./UploadImages";
import {uploadImages} from "../utils/uploadImage";

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>
}

export interface ImageObj {
    file: File;
    blobUrl: string;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes}: AddTweetFormProps): React.ReactElement => {
    const MAX_LENGTH = 280;
    const dispatch = useDispatch();
    const addFormState = useSelector(selectAddFormState);
    const [images, setImages] = React.useState<ImageObj[]>([]);
    const [textTweet, setTextTweet] = React.useState<string>('');
    const [visibleNotification, setVisibleNotification] = React.useState<boolean>(false);
    const textLimitPercent = Math.ceil(textTweet.length / MAX_LENGTH * 100);

    const changeTextTweet = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) setTextTweet(e.currentTarget.value)
        if(textLimitPercent > 100) {
            e.currentTarget.selectionStart = MAX_LENGTH;
            e.currentTarget.selectionEnd = e.currentTarget.value.length;
            e.currentTarget.focus();
        }
    }

    const handleClickAddTweet = async (): Promise<void> => {
        let result = [];
        dispatch(setAddFormState(AddFormState.LOADING))
        for (let i = 0; i < images.length; i++) {
            const file = images[i].file;
            const { url } = await uploadImages(file);
            result.push(url)
        }

        dispatch(fetchAddTweet({ textTweet: textTweet, images: result }));
        setTextTweet('');
        setImages([])
    }

    const handleCloseNotification = (): void => {
        setVisibleNotification(false);
    }

    React.useEffect(() => {
        if(addFormState === AddFormState.ERROR) {
            setVisibleNotification(true);
        }
    }, [addFormState]);

    return(
        <Paper className={classes.createTweet} variant="outlined">
            <Snackbar
                open={visibleNotification}
                onClose={handleCloseNotification}
                message="Произошла ошибка при добавлении твита"
            />
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <Avatar
                        src='https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80'
                        alt='Аватарка пользователя'
                    />
                </Grid>
                <Grid item xs={11}>
                    <div>
                        <TextareaAutosize
                            value={textTweet}
                            onChange={changeTextTweet}
                            className={classes.textareaStyle}
                            placeholder="Что происходит?"
                        />
                    </div>
                    <div className={classes.createTweetFooter}>
                        <div>
                            <UploadImages images={images} onChangeImages={setImages} />
                        </div>
                        <div className={classes.createTweetFooterBlock}>
                            {textTweet && <>
                              <Typography style={{fontSize: 14}}>{MAX_LENGTH - textTweet.length}</Typography>
                              <CircularProgress
                                  className={classes.progressBar}
                                  variant="determinate" value={textLimitPercent}
                                  style={ textLimitPercent > 100 ? {color: '#DC143C'} : undefined}
                              />
                            </>}

                            <Button
                                onClick={handleClickAddTweet}
                                disabled={textLimitPercent > 100 || !textTweet}
                                variant="contained"
                                color="primary"
                                className={classes.createTweetButton}
                            >{addFormState === AddFormState.LOADING ? <CircularProgress size={18} /> : 'Твитнуть'}</Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}
