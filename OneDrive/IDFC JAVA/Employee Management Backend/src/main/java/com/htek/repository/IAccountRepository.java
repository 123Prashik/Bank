package com.htek.repository;

import com.htek.entity.Account;


import java.util.List;

public interface IAccountRepository {
    String createAccount(Account account);

    void save(Account account);


    Account getAccountByAccNumber(long accountNumber);

    List<Account> getAllAccount();

    String deleteAccountByAccNumber(long accountNumber);

}
