package com.htek.repository;

import com.htek.configuration.AeroMapperConfiguration;
import com.htek.entity.Transaction;
import jakarta.inject.Inject;

import java.util.List;

public class TransactionRepository implements ITransactionRepository{
    @Inject
    AeroMapperConfiguration aeroMapperConfiguration;

    @Override
    public void saveTransaction(Transaction transaction) {
        aeroMapperConfiguration.getMapper().save(transaction);
    }

    @Override
    public List<Transaction> listTransaction() {
        return aeroMapperConfiguration.getMapper().scan(Transaction.class);
    }
}
