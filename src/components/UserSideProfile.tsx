import React from 'react';
import { Link } from 'react-router-dom';
import {useHomeStyles} from "../pages/home/theme";
import {Avatar, Typography} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {selectUserData} from "../store/ducks/user/selectors";

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import {signOut} from "../store/ducks/user/actionCreators";

interface UserSideProfileProps {
  classes: ReturnType<typeof useHomeStyles>
}

export const UserSideProfile: React.FC<UserSideProfileProps> = ({classes}: UserSideProfileProps) :React.ReactElement => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    window.localStorage.removeItem('token');
    dispatch(signOut())
  }

  return (
    <div className={classes.userSideProfile} >
      <Avatar />
      <div className={classes.userSideProfileInfo}>
        <b>{userData?.fullName}</b>
        <Typography>@{userData?.username}</Typography>
      </div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <ArrowDownIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.userSideProfileMenu}
      >
        <Link to='/users/safokhin'>
          <MenuItem onClick={handleClose}>Мой профиль</MenuItem>
        </Link>
        <MenuItem onClick={handleSignOut}>Выйти</MenuItem>
      </Menu>
    </div>
  )
}
