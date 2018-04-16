// http://reactivex.io/rxjs/manual/tutorial.html

const Rx = require('rxjs/Rx');


// Converting to observables

// From one or multiple values
const myObservableOf = Rx.Observable.of('1', '2');
myObservableOf.subscribe(value => console.log(value));
myObservableOf.pluck('f1')
  .subscribe(value => console.log(value)); // 4, 5

// From array of values
const myObservableFrom = Rx.Observable.from(['3', '4']);
myObservableFrom.subscribe(value => console.log(value));




// Creating observables

// Externally produce new events
const myObservableSubject = new Rx.Subject();
myObservableSubject.next('5'); // 表示されない
myObservableSubject.subscribe(value => console.log(value));
myObservableSubject.next('6'); // 表示される

// Internally produce new events
const myObservableCreate = Rx.Observable.create(observer => {
  observer.next('7');
});
myObservableCreate.subscribe(value => console.log(value));




// Controlling the flow

// Filter out target values less than 4 characters long
const myObservableFlow = Rx.Observable.of('f1', 'fl2', 'flo3', 'flow4');
myObservableFlow.filter(value => value.length > 3) // flo3, flow4
  .map(value => value.length)
  .subscribe(value => console.log(value)); // 4, 5
