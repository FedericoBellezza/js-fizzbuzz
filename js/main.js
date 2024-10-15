//* Scrivi un programma che stampi i numeri da 1 a 100,
//* ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//* Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//* Prima di partire a scrivere codice poniamoci qualche domanda:
//^ Come faccio a sapere se un numero è divisibile per?
//^ Abbiamo visto qualcosa di particolare che possiamo usare?

//* Consigli del giorno:
//^ 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//^ 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

let repetitionsNumber = 100;
let printNumber;

// STAMPO I NUMERI DA 1 A 100
for (i = 1; i < repetitionsNumber + 1; i++) {
	printNumber = i;

	// ^ PER I NUMERI MULTIPLI DI 5 e 3 IMPOSTO "FizzBuzz" COME OUTPUT
	if (i % 3 === 0 && i % 5 === 0) {
		printNumber = 'FizzBuzz';
		// ^ PER I NUMERI MULTIPLI DI 3 IMPOSTO "Fizz" COME OUTPUT
	} else if (i % 3 === 0) {
		printNumber = 'Fizz';
		// ^ PER I NUMERI MULTIPLI DI 5 IMPOSTO "Buzz" COME OUTPUT
	} else if (i % 5 === 0) {
		printNumber = 'Buzz';
		// ^ PER I NUMERI NON DI 5 O DI 3 IMPOSTO IL NUMERO COME OUTPUT
	}

	console.log(printNumber);
}
