import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/timeInterval';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

const newRandomNumber = () => Math.floor(Math.random() * 100);

class Money {

    constructor(
        private curr: string,
        private val: number
    ) { }

    value(): number {
        return this.val;
    }

    currency(): string {
        return this.curr;
    }

    toString(): string {
        return `${this.curr} ${this.val}`;
    }
}

Observable.interval(2000)
    .timeInterval() // expose extra interval value
    .skip(1)
    .take(5)
    .do(interval => {
        // print elapsed time
        console.log(`Checking every ${interval.interval} ms`);
    })
    .map(num => new Money('USD', newRandomNumber()))
    .subscribe(price => console.log(`Price: ${price}`));
/*
Outputs something like this:

Checking every 2003 ms
Price: USD 70
Checking every 2010 ms
Price: USD 7
Checking every 2003 ms
Price: USD 41
Checking every 2003 ms
Price: USD 55
Checking every 2001 ms
Price: USD 70
*/