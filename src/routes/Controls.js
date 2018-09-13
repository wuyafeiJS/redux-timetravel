import React from 'react';
import TopicSelectorContainer from './Topicselector';
import DisplayModeContainer from './DisplayMode';
import HistoryContainer from './History';

import styles from './Controls.css';

const Controls = () => (
  <div className={styles.controls}>
    <TopicSelectorContainer />
    <DisplayModeContainer />
    <HistoryContainer />
  </div>
);

export default Controls;
