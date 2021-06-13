import {makeStyles} from "@material-ui/core/styles";

export const useHomeStyles = makeStyles(() => ({
    wrapper: {
        height: '100vh',
    },
    progressBar: {
        margin: '0 15px',
    },
    progressBarLimit: {
        margin: '0 15px',
        color: '#DC143C'
    },
    createTweetFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    createTweet: {
        borderRadius: 0,
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800
        }
    },
    borderAddTweet: {
        height: 10,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
    },
    createTweetButton: {
        color: '#fff',
        height: 40,
        padding: '0 20px',
        width: 100
    },
    logo: {
        fontSize: 36,
        marginBottom: 15,
        marginLeft: 10,
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        position: 'relative'
    },
    sideMenuListItem: {
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 20px',
            cursor: 'pointer',
            height: 40,
            borderRadius: 30,
            marginBottom: 10,
            '&:hover': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
                color: '#1DA1F2',
                '& svg': {
                    fill: '#1DA1F2',
                }
            }
        }
    },
    actualItemLink: {
        textDecoration: 'none',
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 10
    },
    sideMenuListItemIcon: {
        fontSize: 28
    },
    sideMenuButtonTweet: {
        color: '#fff',
        height: 40,
        padding: '0 20px',
        width: '80%'
    },
    createTweetFooterBlock: {
        display: 'flex',
        alignItems: 'center',
    },
    tweet: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)'
        }
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderBottom: 0,
        borderTop: 0,
        zIndex: 0,
        position: 'relative',
    },
    tweetHeader: {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 0,
        borderLeft: 0,
        borderRight: 0,
        borderTop: 0,
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800
        }
    },
    tweetHeaderUser: {
        display: 'flex',
        flexDirection: 'column',
        padding: '10px 15px 0 15px',
        border: 0,
        borderBottom: '1px solid #e2e2e2'
    },
    tweetHeaderInfo: {
      display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    fullTweetText: {
        fontSize: 22,
        margin: '20px 0',
        lineHeight: 1.3125
    },
    fullTweetDate: {
        fontSize: 15,
        color: '#9e9e9e',
        marginBottom: 0,
        paddingBottom: 15,
        borderBottom: '1px solid #e2e2e2'
    },
    fullTweetFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    tweetUserName: {
        color: '#9e9e9e'
    },
    tweetFooter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
    },
    inputContainer: {
        '& Button, & Button:hover': {
            borderRadius: 0,
            border: 0
        },
    },
    actualList: {
        width: '100%',
        backgroundColor: '#f5f7f9',
        marginTop: 20,
        borderRadius: 10,
    },
    actualItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }
    },
    actualTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        cursor: 'default',
    },
    actualItemAuthor: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 15px',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',
        }
    },
    textareaStyle: {
        minHeight: 45,
        border: 'none',
        padding: '0 25px',
        fontSize: 18,
        resize: 'none',
    },
    wrapperLeft: {
        position: 'sticky',
        top: 0,
    },
    centered: {
      position: 'absolute',
      left: 0,
      right: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    wrapperRight: {
        position: 'sticky',
        top: 0,
        zIndex: 0
    },
    tweetsCentred: {
        marginTop: 50,
        textAlign: 'center'
    },
    tweetWrapper: {
        textDecoration: 'none'
    },
    popupOutside: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
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
        width: '600px',
        height: '350px',
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
    },
    userSideProfile: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        bottom: 30,
        left: 310,
        width: 200,
        borderRadius: 20,
        transition: '0.4s',
        '&:hover': {
            backgroundColor: 'none'
        }

    },
    userSideProfileMenu : {
        top: '-80px!important',
        left: '-140px!important',
        '& li': {
            width: '220px!important',
        }
    },
    userSideProfileInfo: {
        textAlign: 'center',
        marginLeft: 15
    },
    imagesList: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
        flexWrap: 'wrap'
    },
    imagesItem: {
        width: 80,
        height: 80,
        overflow: 'hidden',
        borderRadius: 6,
        margin: '0 10px 10px 0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        '& img': {
            maxWidth: 80,
            maxHeight: 80,
        }
    },
    removeIcon: {
        position: 'absolute',
        right: 5,
        top: 5,
        padding: 0,
        color: '#DC143C'
    },
    root: {
        width: '100%',
        maxWidth: 360,
    },
    nested: {
        paddingLeft: 4
    },
    root2: {
        flexGrow: 1,
    },
}))
