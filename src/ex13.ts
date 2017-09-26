import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

Observable.of([1, 2, 3, 4, 5])
  .do(x => console.log(`Emitted ${x}`))
  .delay(200)
  .subscribe(x => console.log(`Received ${x}`));
