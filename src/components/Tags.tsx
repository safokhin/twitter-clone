import React from 'react';
import {Link} from 'react-router-dom';
import {createStyles, InputBase, List, ListItem, Typography, withStyles} from "@material-ui/core";
import {useHomeStyles} from "../pages/home/theme";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useDispatch, useSelector} from "react-redux";
import {selectIsTagsLoading, selectTagsItems} from "../store/ducks/tags/selectors";
import {fetchTags} from "../store/ducks/tags/actionCreators";
import { Users } from "./Users";

interface TagsProps {
    classes: ReturnType<typeof useHomeStyles>;
}

const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            background: '#e6ecf0',
            height: 45,
            padding: '0 25px',
        }
    }))(InputBase)


export const Tags: React.FC<TagsProps> = ({classes}: TagsProps): React.ReactElement => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsTagsLoading);
    const tags = useSelector(selectTagsItems);

    React.useEffect(() => {
        dispatch(fetchTags());
    }, [dispatch])

    return (
        <>
            <SearchTextField fullWidth placeholder="Поиск по Твиттеру" />
            <List className={classes.actualList}>
                <ListItem>
                    <Typography className={classes.actualTitle}>Актуальные темы</Typography>
                </ListItem>
                {isLoading ? <CircularProgress/> : tags.map((tag, index) =>
                    <Link key={index} className={classes.actualItemLink} to={`/home/search/q=${tag.name}`}>
                        <ListItem className={classes.actualItem}>
                            <Typography style={{fontWeight: 'bold', color: '#000'}}>{tag.name}</Typography>
                            <Typography style={{color: 'rgba(0, 0, 0, 0.4)', fontSize: 14}}>Твитов: {tag.count}</Typography>
                        </ListItem>
                    </Link>
                )}
            </List>
            <Users classes={classes} />
        </>
    )
}
