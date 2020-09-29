import React from 'react';
import './Sidebar.css';
import SidebarRow from '../SidebarRow/SidebarRow';
import {
  Home,
  WhatshotSharp,
  SubscriptionsSharp,
  VideoLibrary,
  History,
  OndemandVideo,
  WatchLater,
  ThumbUpOutlined,
  ExpandMoreOutlined,
} from '@material-ui/icons';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow selected title='Home' Icon={Home} />
      <SidebarRow title='Trending' Icon={WhatshotSharp} />
      <SidebarRow title='Subscription' Icon={SubscriptionsSharp} />
      <hr />
      <SidebarRow title='Library' Icon={VideoLibrary} />
      <SidebarRow title='History' Icon={History} />
      <SidebarRow title='Your videos' Icon={OndemandVideo} />
      <SidebarRow title='Watch Later' Icon={WatchLater} />
      <SidebarRow title='Liked videos' Icon={ThumbUpOutlined} />
      <SidebarRow title='Show more' Icon={ExpandMoreOutlined} />
      <hr />
    </div>
  );
}

export default Sidebar;
