package com.htek.service;

import com.htek.entity.*;
import com.htek.exception.InsufficientBalance;
import com.htek.repository.AccountRepository;
import com.htek.repository.TransactionRepository;
import com.htek.utils.CommonUtils;
import jakarta.inject.Inject;
import org.luaj.vm2.ast.Str;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class TransactionService {
    @Inject
    TransactionRepository transactionRepository;
    @Inject
    AccountRepository accountRepository;


    public void saveTransaction(Transaction transaction) {
        transactionRepository.saveTransaction(transaction);
    }

    public List<Transaction> account() {
        return transactionRepository.listTransaction();
    }

    public Transaction sendMoney1(TransferBalanceRequest transferBalanceRequest,long amount) throws InterruptedException {
        long toAccountNumber = transferBalanceRequest.getToAccountNumber();
        Account toAccount = accountRepository.getAccountByAccNumber(toAccountNumber);

        toAccount.setBalance(toAccount.getBalance() + amount);
        accountRepository.save(toAccount);

        Transaction transaction = new Transaction(toAccountNumber, amount, TransactionType.CREDIT, CommonUtils.formatDate(new Date(), CommonUtils.DATE_TIME_FORMATE_11));
        transactionRepository.saveTransaction(transaction);
        return transaction;
    }


    public List<Transaction> sendMoney(TransferBalanceRequest transferBalanceRequest) throws InterruptedException {

        long fromAccountNumber = transferBalanceRequest.getFromAccountNumber();
        long amount = transferBalanceRequest.getAmount();

        Account fromAccount = accountRepository.getAccountByAccNumber(fromAccountNumber);

        if(fromAccount.getBalance() <= 0 || amount > fromAccount.getBalance()) {
            throw new InsufficientBalance("Insufficient Balance");
        }

        fromAccount.setBalance(fromAccount.getBalance() - amount);
        accountRepository.save(fromAccount);

        Transaction transaction1 = new Transaction(fromAccountNumber, amount, TransactionType.DEBIT, CommonUtils.formatDate(new Date(), CommonUtils.DATE_TIME_FORMATE_11));
        transactionRepository.saveTransaction(transaction1);
        TimeUnit.SECONDS.sleep(1);
        Transaction transaction2=sendMoney1(transferBalanceRequest,amount);

        return Arrays.asList(transaction1,transaction2);
    }
}
