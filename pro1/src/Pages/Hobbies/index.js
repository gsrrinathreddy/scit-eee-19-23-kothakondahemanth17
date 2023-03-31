import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div"></ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://th.bing.com/th/id/OIP.7O34lDMris2mSIDHRJxTvwHaE7?pid=ImgDet&w=509&h=339&rs=1',
    title: 'Reading Books',
    
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://th.bing.com/th/id/OIP.d3rpzSwhpevEw31SMOXGagHaEo?pid=ImgDet&rs=1',
    title: 'music',
    
  },
  
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    
    cols: 2,
  },


  
  
  {
    img: 'https://i.pinimg.com/originals/92/c2/2e/92c22ead4cd40a546ffdee230789f957.jpg',
    title: 'volley ball',
  
    cols: 2,
  },
];