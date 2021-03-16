import React from 'react';

import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => {
  return (
    <div className="ui segment">
      <div className="ui two column very relaxed grid">
        <div className="column">
          <SongList />
        </div>
        <div className="column">
          <SongDetail />
        </div>
      </div>
      <div class="ui vertical divider">
        and
      </div>
    </div>
  );
};

export default App;