package com.htek.entity;

import com.aerospike.mapper.annotations.*;

@AerospikeRecord(namespace = "test",set = "transaction")
public class Transaction {
    @AerospikeBin
    private long accountNumber;
    @AerospikeBin
    private long amount;

    @AerospikeEnum
    @AerospikeBin
    private TransactionType Type;

    @AerospikeKey
    @AerospikeBin
    private String timePeriod;

    public Transaction() {
    }

    public Transaction(long accountNumber, long amount, TransactionType type, String timePeriod) {
        this.accountNumber = accountNumber;
        this.amount = amount;
        Type = type;
        this.timePeriod = timePeriod;
    }


    public long getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(long accountNumber) {
        this.accountNumber = accountNumber;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public TransactionType getType() {
        return Type;
    }

    public void setType(TransactionType type) {
        Type = type;
    }

    public String getTimePeriod() {
        return timePeriod;
    }

    public void setTimePeriod(String timePeriod) {
        this.timePeriod = timePeriod;
    }

    @Override
    public String toString() {
        return "Transaction{" +
                "accountNumber=" + accountNumber +
                ", amount=" + amount +
                ", Type=" + Type +
                ", timePeriod='" + timePeriod + '\'' +
                '}';
    }
}
