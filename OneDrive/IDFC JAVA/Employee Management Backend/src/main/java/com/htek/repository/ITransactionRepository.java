package com.htek.repository;

import com.htek.entity.Transaction;

import java.util.List;

public interface ITransactionRepository {

    void saveTransaction(Transaction transaction);

    List<Transaction> listTransaction();
}
