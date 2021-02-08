/*
Напиши скрипт управления личным кабинетом интернет банка. Есть 
объект account в котором необходимо реализовать методы 
для работы с балансом и историей транзакций.



 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */
    createTransaction(amount, type) {
        const transaction = {};

        transaction.id = Date.now();
        // transaction.id = 228;
        transaction.type = type;
        transaction.amount = amount;

        return transaction;
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
        this.balance += amount;
    },

    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        if (amount > this.balance) {
            console.log('Снятие такой суммы не возможно, недостаточно средств!');
            return;
        }

        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
        this.balance -= amount;
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance;
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (const transaction of this.transactions) {
            if (transaction.id === id) {
                return transaction;
            }
        }

        // console.log('Транзакция по ID не была найдена. Такой транзакции не существует!')
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let totalAmount = 0;

        for (const transaction of this.transactions) {
            if ((type = transaction.type)) {
                totalAmount += transaction.amount;
            }
        }

        return totalAmount;
    },
};
