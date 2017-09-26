import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

const addSixPercent = (x: number) => x + (x * 0.06);

Observable.of(10, 20, 30, 40)
    .map(addSixPercent)
    .subscribe(console.log);
