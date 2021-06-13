import React from 'react';
import classNames from "classnames";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Avatar, Grid, IconButton, Paper, Typography} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import LikeIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import {useHomeStyles} from "../pages/home/theme";
import {useHistory} from "react-router-dom";
import {formatDate} from "../utils/formatDate";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import {useDispatch} from "react-redux";
import {removeTweet} from "../store/ducks/tweets/actionCreators";

export interface TweetProps {
  _id: string,
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  images?: string[];
  createdAt: string;
  user: {
    fullName: string;
    username: string;
    avatarUrl: string;
  }
}

export const Tweet: React.FC<TweetProps> = ({text, user, images, classes, _id, createdAt}: TweetProps): React.ReactElement => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();

  const handleClickTweet = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    history.push(`/home/tweet/${_id}`);
  }

  const handleClick = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: any) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const handleRemove = (event: any): void => {
    event.stopPropagation();
    event.preventDefault();
    dispatch(removeTweet(_id));
  };

  return (
      <a onClick={handleClickTweet} className={classes.tweetWrapper} href={`/home/tweet/${_id}`} >
        <Paper className={classNames(classes.tweet, classes.tweetHeader)} variant="outlined">
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <Avatar src={user.avatarUrl} alt={`Аватарка пользователя ${user.username}`}/>
            </Grid>
            <Grid item xs={11}>
              <div className={classes.tweetHeaderInfo}>
                <div>
                  <b>{user.fullName} </b>
                  <span className={classes.tweetUserName}>@{user.username}</span>
                  <span> · </span>
                  <span className={classes.tweetUserName}>{formatDate(new Date(createdAt))}</span>
                </div>
                <div>
                  <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Редактировать</MenuItem>
                    <MenuItem onClick={handleRemove}>Удалить твит</MenuItem>
                  </Menu>
                </div>
              </div>
              <Typography variant='body1' gutterBottom>
                {text}
                {images && images.map(url => <div key={url} className={classes.imagesItem}>
                  <img src={url} alt="" />
                </div>)}
              </Typography>
              <div className={classes.tweetFooter}>
                <div><IconButton><CommentIcon/></IconButton><span>1</span></div>
                <div><IconButton><RepeatIcon/></IconButton></div>
                <div><IconButton><LikeIcon/></IconButton></div>
                <div><IconButton><ShareIcon/></IconButton></div>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </a >
  )
}
