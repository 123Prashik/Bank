package com.htek.repository;

import com.htek.configuration.AeroMapperConfiguration;
import com.htek.entity.Account;

import io.micronaut.context.annotation.Bean;
import jakarta.inject.Inject;


import java.util.List;
@Bean
public class AccountRepository implements IAccountRepository {

    @Inject
    private AeroMapperConfiguration aeroMapperConfiguration;

//    @Inject
//    SendEmployeeNotification sendEmployeeNotification;


    public String createAccount(Account account) {
        aeroMapperConfiguration.getMapper().save(account);
        return "Account added successfully!";
    }

    @Override
    public void save(Account account) {
        aeroMapperConfiguration.getMapper().save(account);
    }

    public Account getAccountByAccNumber(long accountNumber) {
        return aeroMapperConfiguration.getMapper().read(Account.class, accountNumber);
    }

    public List<Account> getAllAccount() {
        return aeroMapperConfiguration.getMapper().scan(Account.class);
    }

    public String deleteAccountByAccNumber(long accountNumber) {
        aeroMapperConfiguration.getMapper().delete(Account.class, accountNumber);
        return "Account deleted successfully with account number :" + accountNumber;
    }
    
}
