import React from 'react'
import { ItemPost } from '../ItemPost'
import { App } from '../App'
import {PostList} from '../../components/Data/PostList'
import './Home.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  wrapper: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    top: 28,
    right: -170,
    left: 0,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 400,
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

export function Home() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const [openAddItem, setOpenSAddItem] = React.useState(false);


  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };


  const handleClick = state => () => {
    if (state === 'SignIn')
      setOpen(prev => !prev);
    if (state === 'SignUp')
      setOpenSignUp(prev => !prev);
    if (state === 'AddItem')
      setOpenSAddItem(prev => !prev);
  };

  const handleClickAway = state => () => {
    if ( state === 'SignIn')setOpen(false);
    if ( state === 'ASignUp') setOpenSignUp(false);
    if ( state === 'AddItem') setOpenSAddItem(false);
    if (state == 'Menu') setAnchorEl(null);
  };

  return (
    <Router>
      <div className="navigation-bar">
        <div class ="btn-area">
          <ClickAwayListener onClickAway={handleClickAway('SignIn')}>
            <div className={classes.wrapper}>
              <Button class="signin-area" onClick={handleClick('SignIn')} onClose={handleClickAway('SignIn')}>
                SIGN IN
              </Button>
              {open ? <div className={classes.paper}><p>*Here should be SignIn from*</p><p>Don't have an account?</p>
                <button onClick={handleClick('SignUp')}>SignUp</button>
                <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={openSignUp}
                  onClose={handleClickAway('SignUp')}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={openSignUp}>
                    <div className={classes.paper}>
                      <p id="transition-modal-description">*Here should be SignUp form*</p>
                    </div>
                  </Fade>
                </Modal>
              </div> : null}
            </div>
          </ClickAwayListener>

          <div className="addItem">
            <Button className="add-btn" type="button" onClick={handleClick('AddItem')}>ADD YOUR ITEM</Button>
            <Modal className='add-mdl' aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description"
                   open={openAddItem} onClose={handleClickAway('AddItem')}>
              <div  className={classes.paper}><ItemPost></ItemPost>
              </div>
            </Modal>
          </div>

          <div className="dropdown">
            <Button className="dropbtn" aria-controls="simple-menu" aria-haspopup="true"onClick={handleOpen} >Account</Button>
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClickAway('Menu')}>
              <MenuItem onClick={handleClickAway('Menu')}>My account</MenuItem>
              <MenuItem onClick={handleClickAway('Menu')}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div className="items-labels">
        <h1>Products for you</h1>
        <h2>Recently Posted</h2>
      </div>
      <div class="item-gallery">
        <div class = "item-elements">
          <PostList/>
        </div>
      </div>
      <div>
        <Switch>
          <Route path="/App">
            <App />
          </Route>
          <Route path="/ItemPost">
            <ItemPost />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}