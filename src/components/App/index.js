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
      strength: 0.1
    }

    this.changeText = this.changeText.bind(this);
    this.joshIt = this.joshIt.bind(this);
    this.changeStrength = this.changeStrength.bind(this);
  }

  joshIt(word, strength) {
    if (word === undefined) return;
    const length = word.length;
    const letters = word.split("");
    for (let index = 0; index < length; index++) {
      const element = letters[index];
      if (element === "" || element === " ") {
        continue;
      }
      const rand = Math.random();
      if (rand <= strength) {
        let randIndex = this.getRandomInt(0, length);
        let temp = letters[randIndex];
        while (temp === "" || temp === " ") {
          randIndex = this.getRandomInt(0, length);
          temp = letters[randIndex];
        }
        letters[randIndex] = element;
        letters[index] = temp;
      }
    }

    return letters.join("").trim();
  }
  
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + max;
  }

  componentDidMount() {
    console.log(this.joshIt("i love penis", 0.9));
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
                    <h2>Josh It!</h2>
                  </div>
                  <br />
                  <input type="text" id="asd" placeholder="Type something to Joshify it!" onChange={this.changeText} value={this.state.input} />
                  <p><strong>Strength ({this.state.strength}):</strong></p>
                  <input type="range" min="0" max="100" value="10" onChange={this.changeStrength} />
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
