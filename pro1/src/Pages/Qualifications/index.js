import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Qualifications() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 3}}>
      <h1 className='mode'>Qualifications</h1>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SREE CHAITANYA INSTITUTE OF TECHNOLOGICAL SCIENCES" src="https://images.shiksha.com/mediadata/images/1594361429phpNct5zO.png" />
        </ListItemAvatar>
        <ListItemText
          primary="SREE CHAITANYA INSTITUTE OF TECHNOLOGICAL SCIENCES"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                70% CGPA
              </Typography>
              {" — B.TECH ELECTRICAL & ELECTRONICS ENGINEERING "}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="VAAGESWARI COLLEGE OF ENGINEERING" src="https://th.bing.com/th/id/OIP.vncL1jas-hNm1FxZZWe1QwAAAA?pid=ImgDet&rs=1" />
        </ListItemAvatar>
        <ListItemText
          primary="VAAGESWARI COLLEGE OF ENGINEERING"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                73% CGPA
              </Typography>
              {" — DIPLOMA ELECTRICAL & ELECTRONICS ENGINEERING"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="SISTER NIVEDITHA SCHOOL" src="https://targetstudy.com/files/img/2/76774/L_45746.gif" />
        </ListItemAvatar>
        <ListItemText
          primary="SISTER NIVEDITHA SCHOOL"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                73% CGPA
              </Typography>
              {' — Higher Secondory Education with Computer Classes'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}