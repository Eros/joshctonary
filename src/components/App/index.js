import React from 'react';
import classNames from 'classnames';

import * as styles from './styles.scss';

import Joshed from './joshed';

export default class App extends React.Component {

  constructor() {
    super();

    this.state = {
      input: '',
      joshd: '',
      strength: 0.5
    }

    this.changeText = this.changeText.bind(this);
    this.joshIt = this.joshIt.bind(this);
    this.changeStrength = this.changeStrength.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.rand = this.rand.bind(this);
  }

  // Credit to Hugo (@hugmanrique) for writing the randomization, original randomization can be found in the _legacy.js file.
  rand(strength) {
    return Math.random() <= strength;
  }

  shuffle(array, strength) {
    for (let i = array.length - 1; i > 0; i--) {
      if (this.rand(strength)) {
        const pos = Math.floor(Math.random() * (i + 1));
  
        const x = array[i];
        array[i] = array[pos];
        array[pos] = x;
      }
    }
  
    return array;
  }

  joshIt(sentence, strength) {
    const words = sentence
      .split(' ')
      .map(word => this.shuffle(word.split(''), strength))
      .map(array => array.join(''));
  
    return this.shuffle(words, strength).join(' ').trim();
  }

  changeText(event) {
    event.preventDefault();
    event.persist();
    
    this.setState(prevState => ({
      input: event.target.value,
      joshd: this.joshIt(event.target.value, prevState.strength)
    }));
  }

  changeStrength(event) {
    event.preventDefault();
    event.persist();

    const strength = event.target.value / 100;

    this.setState(prevState => ({
      strength: strength,
      joshd: this.joshIt(prevState.input, strength)
    }));
  }

  render() {
    return (
      <div className={styles.app}>
        <div className={styles.apptest}>
          <div className={styles['container']}>
            <div className={classNames(styles.row)}>
              <div className={classNames(styles.col, styles['col-12'])}>
                <div className={styles.card}>
                  <div className={styles['card-header']}>
                    <h2>Joshctonary</h2>
                  </div>
                  <br />
                  <input type="text" id="asd" placeholder="Type something to Joshify it!" onChange={this.changeText} value={this.state.input} />
                  <p><strong>Strength ({this.state.strength}):</strong></p>
                  <input type="range" min="0" max="100" onChange={this.changeStrength} />
                </div>
              </div>
            </div>
            { this.state.joshd.length > 0 && <Joshed text={this.state.joshd} /> }
          </div>
        </div>
      </div>
    );
  }
}
