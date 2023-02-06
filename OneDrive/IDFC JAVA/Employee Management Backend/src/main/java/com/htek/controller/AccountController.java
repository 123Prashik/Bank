package com.htek.controller;

import com.htek.entity.Account;
import com.htek.dto.CustomResponse;

import com.htek.entity.Transaction;
import com.htek.entity.TransferBalanceRequest;
import com.htek.repository.AccountRepository;
import com.htek.service.AccountService;

import com.htek.service.TransactionService;
import com.htek.utils.CommonUtils;
import com.htek.dto.ResponseDto;
import io.micronaut.http.HttpResponse;
import io.micronaut.http.HttpStatus;
import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.*;
import io.micronaut.security.annotation.Secured;
import jakarta.inject.Inject;

import javax.annotation.security.PermitAll;

import java.util.*;

@Controller("/emp/account")
public class AccountController {

    @Inject
    private AccountService accountService;
    @Inject
    AccountRepository accountRepository;
    @Inject
    TransactionService transactionService;

    ResponseDto responseDto = new ResponseDto();

    @Post("/open")
    @PermitAll
    @Produces(MediaType.APPLICATION_JSON)
    public HttpResponse<CustomResponse> createAccount(@Body Account account) {
        return HttpResponse.ok(new CustomResponse(accountService.createAccount(account)));
    }

    @Get("/show")
    @Secured({"ROLE_ADMIN", "ROLE_MANAGER", "ROLE_USER"})
    @Produces(MediaType.APPLICATION_JSON)
    public HttpResponse<List<Account>> getAccount() {
        List<Account> acc = accountService.getAllAccount();

        if (acc.size() >= 0) {
            return HttpResponse.ok().body(acc);
        }
        return HttpResponse.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }


    @Get("/show/{accountNumber}")
    @Secured({"ROLE_ADMIN", "ROLE_MANAGER", "ROLE_USER"})
    @Produces(MediaType.APPLICATION_JSON)
    public HttpResponse<CustomResponse> getAccountByAccNumber(@PathVariable long accountNumber) {
        return HttpResponse.ok(new CustomResponse(accountService.getAccountByAccNumber(accountNumber)));
    }

    @Delete("/delete/{accountNumber}")
    @Secured({"ROLE_ADMIN", "ROLE_MANAGER", "ROLE_USER"})
    @Produces(MediaType.APPLICATION_JSON)
    public HttpResponse<CustomResponse> deleteAccountByAccNumber(@PathVariable long accountNumber) {
        return HttpResponse.ok(new CustomResponse(accountService.deleteAccountByAccNumber(accountNumber)));
    }


    @Post("/withdraw")
    @Secured({"ROLE_ADMIN", "ROLE_MANAGER", "ROLE_USER"})
    public HttpResponse<CustomResponse> cashWithdraw(@QueryValue long accountNumber, @QueryValue long withdrawAmount) {
        return HttpResponse.ok(new CustomResponse(accountService.cashWithdraw(accountNumber, withdrawAmount)));
    }

    @Post("/deposit")
    @Secured({"ROLE_ADMIN", "ROLE_MANAGER", "ROLE_USER"})
    public HttpResponse<CustomResponse> cashDeposit(@QueryValue long accountNumber, @QueryValue long depositAmount) {
        return HttpResponse.ok(new CustomResponse(accountService.cashDeposit(accountNumber, depositAmount)));
    }

    @PermitAll
    @Get("/statement")
    public HttpResponse<?> accountStatement(@QueryValue long accountNumber, @QueryValue String startDate,
                                        @QueryValue String endDate) {
        HashMap<String,List> hMap = new HashMap<>();
        List<Transaction> updList = new ArrayList<>();
        try {
            List<Transaction> txn= transactionService.account();
            Account account = accountService.getAccountByAccNumber(accountNumber);

            for (int i = 0; i < txn.size(); i++){
                if(txn.get(i).getAccountNumber() == (accountNumber)){
                    Date date = CommonUtils.dateFormat(txn.get(i).getTimePeriod());
                    if(CommonUtils.isWithinRange(date, CommonUtils.dateFormat(startDate), CommonUtils.dateFormat(endDate))) {
                        updList.add(txn.get(i));
                    }
                }
            }
            hMap.put("Account Balance", Arrays.asList(account.getBalance()));
            hMap.put("Transaction History",updList);
            responseDto.setResponse("SUCCESS");
            responseDto.setHistory(hMap);
            return HttpResponse.ok(responseDto);

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }
    @Post("/send")
    @Secured({"ROLE_ADMIN", "ROLE_MANAGER", "ROLE_USER"})
    public HttpResponse<CustomResponse> sendMoney(@Body TransferBalanceRequest transferBalanceRequest) throws InterruptedException {
        return HttpResponse.ok(new CustomResponse(transactionService.sendMoney(transferBalanceRequest)));
    }
}
