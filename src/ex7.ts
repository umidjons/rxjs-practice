import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/reduce';

const add = (x: number, y: number) => x + y;

const spendings = [
    { date: '2016-07-01', amount: -320 },
    { date: '2016-07-13', amount: 1000 },
    { date: '2016-07-22', amount: 45 },
];

Observable.from(spendings)
    .pluck('amount')
    .reduce(add, 0)
    .subscribe(console.log);