import React from 'react';
import { Subject } from 'rxjs';
import 'rxjs/add/operator/takeUntil';
import { SystemStatistic } from './statistic.component';
export class Dashboard extends React.Component {
    constructor(...args) {
        super(...args);
        this.destroyed$ = new Subject();
        this.state = {
            temperature: '--',
            pressure: '--',
            humidity: '--'
        };
    }
    componentDidMount() {
        this.props.dashboardData$
            .takeUntil(this.destroyed$)
            .subscribe(newState => {
                this.setState(newState);
        }   );
    }

    componentWillUnmount() {
        this.destroyed$.next();
        this.destroyed$.complete();
    }

    render() {
        return <div>
            <SystemStatistic name="Temperature" value={this.state.temperature} />
            <SystemStatistic name="Humidity" value={this.state.humidity} />
            <SystemStatistic name="Pressure" value={this.state.pressure} />
        </div>;
    }
}
