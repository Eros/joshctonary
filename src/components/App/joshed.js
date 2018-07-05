import React from 'react';
import classNames from 'classnames';

import * as styles from './styles.scss';

export default class Joshed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.row}>
                <div className={classNames(styles.col, styles['col-12'])}>
                    <div className={styles.card}>
                        <p>{this.props.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}