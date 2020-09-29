import React from 'react';
import './SearchPage.css';
import { TuneOutlined } from '@material-ui/icons';
import ChannelRowl from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__filter'>
        <TuneOutlined />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRowl
        image='https://yt3.ggpht.com/a/AATXAJw-QM8qKN656goqN2rMXFNZiqs13_DzxBrALSmY_w=s176-c-k-c0x00ffffff-no-rj-mo'
        Channel='Unbox Therapy'
        verified
        subs='17.2M'
        noOfVideos={(1, 840)}
        description={`Where products get naked.
                    Here you will find a variety of videos showcasing the...`}
      />
      <hr />
      <VideoRow
        image='https://i.ytimg.com/vi/XabGaeuBTNk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBR9kqF2_vbgQ_pkB-ko5pFRpvtog'
        views='183k'
        subs='17.2M'
        description='The perfect 4K TV Setup for the Xbox Series X and Sony PS5. LG GX - http://lgoledtv.co/UnboxTherapy LG Virtual Studio ...'
        timestamp='4 hours ago'
        channel='Unbox Therapy'
        title='The Ultimate PlayStation vs Xbox Gaming Setup'
      />
      <VideoRow
        image='https://i.ytimg.com/vi/XabGaeuBTNk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBR9kqF2_vbgQ_pkB-ko5pFRpvtog'
        views='183k'
        subs='17.2M'
        description='The perfect 4K TV Setup for the Xbox Series X and Sony PS5. LG GX - http://lgoledtv.co/UnboxTherapy LG Virtual Studio ...'
        timestamp='4 hours ago'
        channel='Unbox Therapy'
        title='The Ultimate PlayStation vs Xbox Gaming Setup'
      />
      <VideoRow
        image='https://i.ytimg.com/vi/XabGaeuBTNk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBR9kqF2_vbgQ_pkB-ko5pFRpvtog'
        views='183k'
        subs='17.2M'
        description='The perfect 4K TV Setup for the Xbox Series X and Sony PS5. LG GX - http://lgoledtv.co/UnboxTherapy LG Virtual Studio ...'
        timestamp='4 hours ago'
        channel='Unbox Therapy'
        title='The Ultimate PlayStation vs Xbox Gaming Setup'
      />
      <VideoRow
        image='https://i.ytimg.com/vi/XabGaeuBTNk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBR9kqF2_vbgQ_pkB-ko5pFRpvtog'
        views='183k'
        subs='17.2M'
        description='The perfect 4K TV Setup for the Xbox Series X and Sony PS5. LG GX - http://lgoledtv.co/UnboxTherapy LG Virtual Studio ...'
        timestamp='4 hours ago'
        channel='Unbox Therapy'
        title='The Ultimate PlayStation vs Xbox Gaming Setup'
      />
      <VideoRow
        image='https://i.ytimg.com/vi/XabGaeuBTNk/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBR9kqF2_vbgQ_pkB-ko5pFRpvtog'
        views='183k'
        subs='17.2M'
        description='The perfect 4K TV Setup for the Xbox Series X and Sony PS5. LG GX - http://lgoledtv.co/UnboxTherapy LG Virtual Studio ...'
        timestamp='4 hours ago'
        channel='Unbox Therapy'
        title='The Ultimate PlayStation vs Xbox Gaming Setup'
      />
    </div>
  );
}

export default SearchPage;
