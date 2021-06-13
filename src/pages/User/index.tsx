import React from 'react';
import {Grid, Typography, Container, Paper, Tabs, Tab} from "@material-ui/core";
import {Tags} from '../../components/Tags';
import {SiteMenu} from "../../components/SiteMenu";
import {useHomeStyles} from "../home/theme";
import {BackButton} from "../../components/BackButton";
import RoomIcon from '@material-ui/icons/Room';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import './index.css';
import {Tweet} from "../../components/Tweet";
import {useDispatch, useSelector} from "react-redux";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Route} from "react-router-dom";

export const User:React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const classes = useHomeStyles();
  const [value, setValue] = React.useState(0);
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch])

  console.log(tweets);
  return(
    <Container maxWidth="lg" className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid className={classes.wrapperLeft} item xs={3}>
          <SiteMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetHeader} variant="outlined">
              <BackButton />
              <div>
                <Typography variant='h6'>Safohin</Typography>
                <Typography variant='caption' display='block'>62 Твита</Typography>
              </div>
            </Paper>
            <div className='user'>
              <div className="user__line" />
              <div className='user__header'>
                <div className="user__avatar">
                  <img className='user__avatar-img' src="https://images.unsplash.com/photo-1545996124-0501ebae84d0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" alt=""/>
                </div>
                <button className="user__button">Изменить профиль</button>
              </div>
              <div className="user__info">
                <span className='user__info-fullname'>Safohin Artem</span>
                <span className='user__info-username'>@safohin</span>
                <span className='user__info-description'>I Frontend Developer / Javascript / React</span>
                <div className='user__info-position'>
                  <RoomIcon className='user__info-icon' />
                  <span>Озеры</span>
                </div>
                <div className='user__info-birthday'>
                  <CardGiftcardIcon className='user__info-icon' />
                  <span>29.10.1999</span>
                </div>
                <div className="users">
                  <span className='users__text'><b>213 </b>в читаемых</span>
                  <span className='users__text'><b>59 </b>читателей</span>
                </div>
              </div>
              <div className='user__content'>
                <Paper className={classes.root2}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                  >
                    <Tab label="Твиты" />
                    <Tab label="Твиты и ответы" />
                    <Tab label="Медиа" />
                    <Tab label="Нравится" />
                  </Tabs>

                  {isLoading ? <div className={classes.tweetsCentred}><CircularProgress /></div> : tweets.map( tweet =>
                    <Tweet
                      key={tweet._id}
                      classes={classes}
                      images={tweet.images}
                      {...tweet}
                    />
                  )}
                </Paper>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid className={classes.wrapperRight} item xs={3}>
          <Tags classes={classes} />
        </Grid>
      </Grid>
    </Container>
  )
}
