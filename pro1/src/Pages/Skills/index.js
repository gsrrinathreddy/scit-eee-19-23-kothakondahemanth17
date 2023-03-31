import Card1 from '../../Pages/Card1'
import { Grid } from '@mui/material';
import Card2 from '../../Pages/Card2';
import Card3 from '../../Pages/Card3';
import Card4 from '../../Pages/Card4';
import Card5 from '../../Pages/Card5';

export default function Skills(){
  return(
    <>
      <Grid container sx={{ p: 3 }} spacing={4}>
        <Grid item xs={4}>
      <Card1/>
      </Grid>
      <Grid item xs={4}>
      <Card2/>
      </Grid>
      <Grid item xs={4}>
      <Card3/>
      </Grid>
      <Grid item xs={4}>
      <Card4/>
      </Grid>
      <Grid item xs={4}>
      <Card5/>
      </Grid>
      </Grid>
    </>
  )
}