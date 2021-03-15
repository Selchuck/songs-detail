export const songsReducer = () => {
  return [
    { 
      artist: 'Queen',  
      title: 'Bohemian Rhapsody',
      length: '5:55',
      released: 'October 1975'
    },
    {  
      artist: 'Stephen Wolf', 
      title: 'Born to Be Wild',
      length: '3:30',
      released: 'June 1968'
    },
    { 
      artist: 'Velvet Underground',  
      title: 'Im Waiting for the Man',
      length: '4:37',
      released: 'May 1966'
    },
    {  
      artist: 'Led Zeppelin', 
      title: 'Whole Lotta Love',
      length: '5:33',
      released: 'November 1969'
    },
    {   
      artist: 'Jimi Hendrix',
      title: 'Hear My Train A Comin',
      length: '3:05',
      released: 'December 1967'
    },
    {   
      artist: 'Pink Floyd',
      title: 'Confortably Numb',
      length: '6:21',
      released: 'November 1979'
    },
    {   
      artist: 'Lynrd Skynyrd',
      title: 'Free Bird',
      length: '9:08',
      released: 'November 1974'
    },
    {   
      artist: 'Talking Heads',
      title: 'Psycho Killer',
      length: '4:19',
      released: 'December 1977'
    },
    {   
      artist: 'Can',
      title: 'Swing Swan Song',
      length: '4:47',
      released: 'November 1972'
    },
    {   
      artist: 'Cem Karaca ve Apaslar',
      title: 'Gilgamis',
      length: '3:32',
      released: 'Febuary 1969'
    },
    {   
      artist: 'Edip Akbayram ve Dostlar',
      title: 'Kolum Nerden Aldin bu Zinciri',
      length: '3:35',
      released: 'May 1975'
    },
    {   
      artist: 'David Bowie',
      title: 'Ziggy Stardust',
      length: '3:13',
      released: 'November 1971'
    },
    {   
      artist: 'Bruce Springsteen',
      title: 'Darkness on the Edge of Town',
      length: '4:30',
      released: 'June 1978'
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};