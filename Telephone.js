// Telephone packagae
class Telephone {
    constructor() {
        this.phoneNumbers = new Set();
        this.observers = [];
    }
 addPhoneNumber(number) {
        this.phoneNumbers.add(number);
    }
removePhoneNumber(number) {
        this.phoneNumbers.delete(number);
    }
dialPhoneNumber(number) {
        if (this.phoneNumbers.has(number)) {
            this.notifyObservers(number);
        } else {
            console.log(`Cannot dial ${number}. Number not added.`);
        }
    }
addObserver(observer) {
        this.observers.push(observer);
    }
 removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
notifyObservers(number) {
        this.observers.forEach(observer => observer.update(number));
    }
}
class Observer {
    update(number) {
        throw new Error("Method 'update' must be implemented.");
    }
}
class PrintObserver extends Observer {
    update(number) {
        console.log(number);
    }
}
class DialingObserver extends Observer {
    update(number) {
        console.log(`Now Dialing ${number}`);
    }
}
