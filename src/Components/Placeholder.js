import React from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';

import './activeChat.css'



export const ComponentName = (props) => {

    
    const {
        
    } = props;
    
    var temp={
        Boys: [
        {author: 'you',msg:'bruh', img:'', aux:'',vid: ''},
        {author: 'not you',msg:'bruh bruh', img:'', aux:'',vid: ''},
        {author: 'not you',msg:'21st century dialogues be like', img:'', aux:'',vid: ''},
        {author: 'you',msg:'i stapled lobster to a ceiling', img:'', aux:'',vid: ''},
    ],
    Girls: [
        {author: 'you', msg:'', img:'https://www.meme-arsenal.com/memes/fd2730642a8e0736a9e0f9ce2d4fed26.jpg', aux:'',vid: ''},
        {author: 'not you',msg:'nice', img:'', aux:'',vid: ''},
    ],fater: [
        {author: 'not you',msg:'ur adopted', img:'', aux:'',vid: ''},
    ],wife: [
        {author: 'you',msg:'ride wife', img:'', aux:'',vid: ''},
        {author: 'not you',msg:'wife fight back', img:'', aux:'',vid: ''},
        {author: 'you',msg:'K  I  L  L     W  I  F  E', img:'', aux:'',vid: ''},
    ],lol5: [],lol6: [],lol7: [],lol8: [],lol9: [],lol10: [],lol11: [],lol12: [],lol13: [],
    }
    

    
    const [selectedIndex, setSelectedIndex] = React.useState(1);
  
    const handleListItemClick = (event, index) => {
      setSelectedIndex(index);
    };
    
    const chats = Object.keys(temp)
    const [activeTopic, changeActiveChat] = React.useState(chats[0])

    const doTheJobPls = (event, index, activeTopic) =>{
        handleListItemClick(event, index)
        changeActiveChat(activeTopic)
       
    }
    
    // const useStyles = makeStyles(theme => ({
           
    // }));
    return (
        <div style={{
            backgroundColor: 'grey',
            width: '100vw',
            height: '100vh'
            }}>

            <div>
                <Typography variant= 'h3' style={{
                    textAlign: 'center'
                }}>
                    CUTE CHAT APP
                </Typography>    
            </div>
            <Grid 
            container spacing={3}
            justify= 'center'
            >
                <Grid item xs={3}>
                    <Paper style={{
                       height: '80vh' 
                    }}>
                        <TextField id="standard-basic" label="Standard" />

                        <div style={{
                            
                        }}>  
                        <List style={{height: '70vh',overflow: 'auto'}}>
                            {
                                chats.map(chat => (
                                    <ListItem selected={selectedIndex === 0} onClick={event => doTheJobPls(event, 1 ,event.target.innerText)} key={chat}  button>
                                        <ListItemText primary={chat}  />
                                    </ListItem>
                                ))
                            }
                            
                        </List>
                    </div>
                        
                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <Paper style={{
                       height: '80vh',
                       padding: '20px', 
                    }}>
                        <div style={{height: '70vh',
                        overflow: 'auto'
                        
                    }}>
                        {
                        // temp.map(x => <div> {JSON.stringify(x)} </div>)
                        temp[activeTopic].map((msg, i, j) => (
                            <div key={i}>
                                {
                                (msg.author !== 'you')?<Typography variant='body1' style={{textAlign: 'left'}}>{'>> '}{msg.author,msg.msg}</Typography>
                                :
                                <div style={{background:'pink',textAlign: 'right', }}>{msg.author,msg.msg}{' <<'}</div>
                                }  
                            <div> {(msg.img !== '')?  
                            <div key={j} style={{alignContent: 'right'}}>
                                {
                                    (msg.author !== 'you')?<div><img src={msg.img} style={{maxHeight: '200px'}}></img></div>
                                    :
                                    <div><img src={msg.img} alt={msg.alt} style={{maxHeight: '200px', alignContent: 'right'}}></img></div>   
                                }
                            </div>
                            :
                            <div style={{maxHeight: '0px'}}></div>
                            }   
                            </div>   
                            </div>
                            
                        ))  
                        }
                           
                        </div>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'nowrap',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            alignContent: 'stretch',

                        }}>

                            <div style={{flex: 6, width: '',}}>
                                <TextField id="standard-basic" label="Standard" />
                            </div>
                            
                            <div style={{flex: 1, primary: '#f96969'}}>
                            <Button variant="contained" color="primary" >UWU</Button>
                            </div>
                        
                        </div>
                        
                    </Paper>
                </Grid>
            </Grid>
        </div>    
    );
}