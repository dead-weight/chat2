import React from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';


export const ComponentName = (props) => {
    const {
        
    } = props;
    
    var temp={
        lol: [
        {author: 'you',msg:'bruh'},
        {author: 'not you',msg:'bruh bruh'}
    ],
    lol2: [],lol3: [],lol4: [],lol5: [],lol6: [],lol7: [],lol8: [],lol9: [],lol10: [],lol11: [],lol12: [],lol13: [],
    }
    
    const chats = Object.keys(temp)
    const [activeTopic, changeActiveChat] = React.useState(chats[0])
    

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
                                    <ListItem onClick={e => changeActiveChat(e.target.innerText)} key={chat} button>
                                        <ListItemText primary={chat} />
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
                        temp[activeTopic].map((msg, i) => (
                            <div key={i}>
                                {
                                (msg.author !== 'you')?<Typography variant='body1' style={{textAlign: 'left'}}>{msg.author,msg.msg}</Typography>
                                :
                                <div style={{background:'pink',textAlign: 'right' }}>{msg.author,msg.msg}</div>
                                }    
                                
                                
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