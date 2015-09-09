import React  from 'react';
import Menu   from '../menu';
import styles from './index.styl';

export default class Index extends React.Component {
  render() {
    return (
      <main className={styles.app}>
        <Menu />
        this is the app.
      </main>
    );
  }
}
