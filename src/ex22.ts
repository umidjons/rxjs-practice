import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/merge';

const source1$ = Observable.interval(1000)
  .map(x => `Source 1 ${x}`)
  .take(3);

const source2$ = Observable.interval(1000)
  .map(x => `Source 2 ${x}`)
  .take(3);

Observable.merge(source1$, source2$)
  .subscribe(console.log);
