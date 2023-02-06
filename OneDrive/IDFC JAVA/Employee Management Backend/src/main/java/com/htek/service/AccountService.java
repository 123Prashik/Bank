package com.htek.service;

import com.htek.entity.Account;
import com.htek.entity.Transaction;
import com.htek.entity.TransactionType;
import com.htek.exception.InsufficientBalance;
import com.htek.repository.AccountRepository;

import com.htek.repository.TransactionRepository;
import com.htek.utils.CommonUtils;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

import java.util.Date;
import java.util.List;

@Singleton
public class AccountService {
    @Inject
    private AccountRepository accountRepository;
//    @Inject
//    AeroMapperConfiguration aeroMapperConfiguration;
    @Inject
    TransactionRepository transactionRepository;

    public String createAccount(Account account) {
        return accountRepository.createAccount(account);
    }

    public void save(Account account) {
        accountRepository.save(account);
    }

    public Account getAccountByAccNumber(long accountNumber) {
        return accountRepository.getAccountByAccNumber(accountNumber);
    }

    public List<Account> getAllAccount() {
        return accountRepository.getAllAccount();
    }

    public String deleteAccountByAccNumber(long accountNumber) {
        return accountRepository.deleteAccountByAccNumber(accountNumber);
    }


    public String cashWithdraw(long accountNumber, long withdrawAmount) {
        Account account = getAccountByAccNumber(accountNumber);
        if(account == null)
            return "Account not found";

        long amt=account.getBalance() - withdrawAmount;

        Transaction transaction = new Transaction(account.getAccountNumber(),withdrawAmount, TransactionType.DEBIT, CommonUtils.formatDate(new Date(), CommonUtils.DATE_TIME_FORMATE_11));

        if(amt < 0) {
//            transaction.setStatus(Status.FAILED);
            throw new InsufficientBalance("Insufficient Balance");
        }

        account.setBalance(amt);

        accountRepository.save(account);
        transactionRepository.saveTransaction(transaction);
        return "Account has been debited!!!!!";
    }

    public String cashDeposit(long accountNumber, long depositAmount) {
        Account account = getAccountByAccNumber(accountNumber);
        if(account == null)
            return "Account not found";
        account.setBalance(account.getBalance() + depositAmount);
        Transaction transaction =new Transaction(account.getAccountNumber(),depositAmount, TransactionType.CREDIT, CommonUtils.formatDate(new Date(), CommonUtils.DATE_TIME_FORMATE_11));

        accountRepository.save(account);
        transactionRepository.saveTransaction(transaction);
        return "Account has been credited!!!!!";
    }


}
