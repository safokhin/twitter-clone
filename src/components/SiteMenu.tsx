import React from 'react';
import {IconButton, Typography, Button, Hidden} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/NotificationsNone";
import MessageIcon from "@material-ui/icons/MailOutline";
import BookMarkIcon from "@material-ui/icons/BookmarkBorder";
import ListIcon from "@material-ui/icons/ListAlt";
import PersonIcon from "@material-ui/icons/PersonOutline";
import EditIcon from '@material-ui/icons/Edit';
import {useHomeStyles} from "../pages/home/theme";
import {ModalBlock} from './modal/ModalBlock';
import {AddTweetForm} from "./AddTweetForm";
import {Link} from "react-router-dom";
import {UserSideProfile} from "./UserSideProfile";
import {useSelector} from "react-redux";
import {selectUserData} from "../store/ducks/user/selectors";

interface SiteMenuProps {
    classes: ReturnType<typeof useHomeStyles>
}

export const SiteMenu: React.FC<SiteMenuProps> = ({classes}: SiteMenuProps) :React.ReactElement => {
    const [visibleAddTweetPopup, setVisibleAddTweetPopup] = React.useState<boolean>(false);
    const userData = useSelector(selectUserData);

    const closePopupAddTweet = () => {
        setVisibleAddTweetPopup(false)
    }

    return (
        <ul className={classes.sideMenuList}>
          <UserSideProfile classes={classes} />
            <li className={classes.sideMenuListItem}>
                <Link to='/home' >
                    <IconButton style={{paddingTop: 0}} color="primary">
                        <TwitterIcon className={classes.logo}/>
                    </IconButton>
                </Link>
            </li>
          <li className={classes.sideMenuListItem}>
            <div>
              <SearchIcon className={classes.sideMenuListItemIcon}/>
              <Hidden smDown>
                <Typography variant="h6" className={classes.sideMenuListItemLabel}>Главная</Typography>
              </Hidden>
            </div>
          </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Поиск</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <NotificationsIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Уведомления</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <MessageIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Сообщения</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <BookMarkIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Закладки</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <ListIcon className={classes.sideMenuListItemIcon}/>
                    <Hidden smDown>
                        <Typography variant="h6" className={classes.sideMenuListItemLabel}>Списки</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
              <Link to={`/user/${userData?._id}`} >
                <div>
                  <PersonIcon className={classes.sideMenuListItemIcon}/>
                  <Hidden smDown>
                    <Typography variant="h6" className={classes.sideMenuListItemLabel}>Профиль</Typography>
                  </Hidden>
                </div>
              </Link>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button variant="contained" color="primary" className={classes.sideMenuButtonTweet}> {/*onClick={openPopupAddTweet}*/}
                    <Hidden smDown>Твитнуть</Hidden>
                    <Hidden smUp><EditIcon /> </Hidden>
                </Button>
            </li>
            <ModalBlock visible={visibleAddTweetPopup} title='Отправить Твит' onClose={closePopupAddTweet}>
                <AddTweetForm classes={classes} />
            </ModalBlock>
        </ul>
    );
}
