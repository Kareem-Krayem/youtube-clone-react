import React from 'react';
import './ChannelRow.css';
import { Avatar } from '@material-ui/core';
import { CheckCircleOutline } from '@material-ui/icons';

function ChannelRow({
  image,
  Channel,
  verified,
  subs,
  noOfVideos,
  description,
}) {
  return (
    <div className='channelRow'>
      <Avatar className='channelRow__logo' alt={Channel} src={image} />
      <div className='channelRow__text'>
        <h4>
          {Channel} {verified && <CheckCircleOutline />}
        </h4>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
