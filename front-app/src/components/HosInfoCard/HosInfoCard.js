import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import styles from './mystyle.module.scss';
import classNames from 'classnames/bind';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import BookmarkIcon from '@material-ui/icons/Bookmark';


const cx = classNames.bind(styles)
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,

  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  MarkContainer: {
    display: 'flex',
    alignItems: 'right',
    textAlign: "right",
    paddingLeft: theme.spacing(5),
  },
  BookmarkIcon: {
    height: 38,
    width: 38,

  },
}));

const HosInfoCard = props => {
  const classes = useStyles();
  const theme = useTheme();
  console.log(props.hospitalData)
  let hosData = props.hospitalData
  const images = hosData.h_image;
  return (
    <>
      <div className={cx('container-box')}>
        <div className={cx('photo-box')}>
          <img className={cx('photo')} src={hosData.h_image} />
        </div>
        <div className={cx('column-box')}>
          <div className={cx('vet-name')}>
            홍길동
          </div>
          <div className={cx('hos-name')}>
            {hosData.h_name}
          </div>
          <div className={cx('tag-box')}>
            <div className={cx('tag')} >#중성화</div>
            <div className={cx('tag')} >#광견병</div>
            <div className={cx('tag')} >#예방접종</div>
          </div>
        </div>
        <br />
      </div>

    </>

  );
}

export default HosInfoCard