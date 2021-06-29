import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { Space } from './style';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const CardPost = (props) => {
    const classes = useStyles();

    return (
        <Box>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar src="/broken-image.jpg" />
                    }
                    title={props.username}
                    subheader={props.title}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.text}
            </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton  aria-label="UpVote">
                        <ArrowUpward />
                    </IconButton>
                    <div>
                        1
                    </div>
                    <IconButton aria-label="DownVote">
                        <ArrowDownward />
                    </IconButton>
                </CardActions>
                <CardContent>
                    <Typography>
                        comentario
                    </Typography>
                </CardContent>
            </Card>
                <Space/>
        </Box>
    );
}

export default CardPost;