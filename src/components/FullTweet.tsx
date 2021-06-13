import React from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {fetchTweetData, setTweetData} from "../store/ducks/tweet/actionCreators";
import {selectIsTweetLoading, selectTweetData} from "../store/ducks/tweet/selectors";
import {useHomeStyles} from "../pages/home/theme";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Avatar, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import LikeIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import format from 'date-fns/format';
import {Tweet} from "./Tweet";
import ruLang from "date-fns/locale/ru";
import mediumZoom from 'medium-zoom'

export const FullTweet: React.FC = (): React.ReactElement | null=> {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);
    const isLoading = useSelector(selectIsTweetLoading)
    const params: {id: string} = useParams();
    const id = params.id;
    console.log(params)
    React.useEffect(() => {
        if(id) dispatch(fetchTweetData(id));

        return () => {
            dispatch(setTweetData(undefined));
        }
    }, [dispatch, id]);

    React.useEffect(() => {
        if(!isLoading) mediumZoom('.tweet__images img');
    }, [isLoading])

    if (isLoading) {
        return <div className={classes.tweetsCentred}><CircularProgress /></div>
    }

    if (tweetData) {
        return (
          <>
              <Paper className={classNames(classes.tweetHeaderUser)} variant="outlined">
                  <Grid container spacing={2}>
                      <Grid item xs={1}>
                          <Avatar src={tweetData.user.avatarUrl}
                                  alt={`Аватарка пользователя ${tweetData.user.username}`}/>
                      </Grid>
                      <Grid item xs={11}>
                          <Typography>
                              <b>{tweetData.user.fullName} </b>
                              <div>
                                  <span className={classes.tweetUserName}>@{tweetData.user.username}</span>
                                  <span> · </span>
                                  <span className={classes.tweetUserName}>1 ч.</span>
                              </div>
                          </Typography>
                      </Grid>
                  </Grid>
                  <div>
                      <Typography variant='body1' className={classes.fullTweetText} gutterBottom>
                          {tweetData.text}
                          <div className='tweet__images'>
                              {tweetData.images && tweetData.images.map(url => <div key={url} className={classes.imagesItem}>
                                  <img src={url} alt="" />
                              </div>)}
                          </div>
                      </Typography>
                  </div>
                  <div>
                      <Typography className={classes.fullTweetDate} gutterBottom>
                          {format(new Date(tweetData.createdAt), 'H:mm', {locale: ruLang})} · {format(new Date(tweetData.createdAt), 'dd MMM yyyy г.', {locale: ruLang})}
                      </Typography>
                  </div>
                  <div className={classes.fullTweetFooter}>
                      <div><IconButton><CommentIcon/></IconButton><span>1</span></div>
                      <div><IconButton><RepeatIcon/></IconButton></div>
                      <div><IconButton><LikeIcon/></IconButton></div>
                      <div><IconButton><ShareIcon/></IconButton></div>
                  </div>
              </Paper>
              <Tweet
                _id='1'
                text='test Text'
                createdAt={new Date().toString()}
                user={{
                    fullName: 'Artem Saf',
                    username: 'dsadasdas',
                    avatarUrl: 'https://source.unsplash.com/random/100x100?1'
                }}
                classes={classes}
              />
          </>
        )
    }
    return null;
}
