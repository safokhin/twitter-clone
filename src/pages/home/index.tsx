import React from 'react';
import {Grid, Typography, Container, Paper} from "@material-ui/core";
import {Tweet} from '../../components/Tweet';
import {Tags} from '../../components/Tags';
import {SiteMenu} from "../../components/SiteMenu";
import {AddTweetForm} from '../../components/AddTweetForm';
import {useHomeStyles} from "./theme";
import {useDispatch, useSelector} from "react-redux";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import CircularProgress from '@material-ui/core/CircularProgress';
import {Route} from "react-router-dom";
import {BackButton} from "../../components/BackButton";
import {FullTweet} from '../../components/FullTweet';

export const Home:React.FC = (): React.ReactElement => {
    const dispatch = useDispatch();
    const classes = useHomeStyles();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);

    React.useEffect(() => {
        dispatch(fetchTweets());
    }, [dispatch])

    return(
        <Container maxWidth="lg" className={classes.wrapper}>
            <Grid container spacing={3}>
                <Grid className={classes.wrapperLeft} item xs={3}>
                    <SiteMenu classes={classes} />
                </Grid>
                <Grid item xs={6}>
                   <Paper className={classes.tweetsWrapper} variant="outlined">
                       <Paper className={classes.tweetHeader} variant="outlined">
                           <Route path='/home' exact><Typography variant='h6'>Главная</Typography></Route>
                           <Route path='/home/tweet'>
                               <Route path='/home/:any'>
                                   <BackButton />
                               </Route>
                               <Typography variant='h6'>Твитнуть</Typography></Route>
                           <Route path='/home/search/:q'>
                               <Route path='/home/:any'>
                                   <BackButton />
                               </Route>
                               <Typography variant='h6'>Актуальные темы</Typography>
                           </Route>

                       </Paper>
                       <Route path={['/home', '/home/search/:q']} exact>
                           <AddTweetForm classes={classes} />
                           <div className={classes.borderAddTweet} />
                       </Route>

                       <Route path="/home" exact>
                           {isLoading ? <div className={classes.tweetsCentred}><CircularProgress /></div> : tweets.map( tweet =>
                               <Tweet
                                   key={tweet._id}
                                   classes={classes}
                                   images={tweet.images}
                                   {...tweet}
                               />
                           )}
                       </Route>
                       <Route path="/home/tweet/:id" component={FullTweet} />
                   </Paper>

                </Grid>
                <Grid className={classes.wrapperRight} item xs={3}>
                    <Tags classes={classes} />
                </Grid>
            </Grid>
        </Container>
    )
}
