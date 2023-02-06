package com.htek.service;

import com.htek.email.EmailDetails;
import com.htek.entity.Employee;
import com.htek.repository.IEmployeeRepository;

import com.htek.security.BCryptPasswordEncoderService;
import jakarta.inject.Inject;
import jakarta.inject.Singleton;

import java.util.List;

@Singleton
public class EmployeeService {
    @Inject
    IEmployeeRepository repository;

    @Inject
    BCryptPasswordEncoderService bCryptPasswordEncoderService;


    public String addEmployee(Employee employee) {
        String encodedPassword = bCryptPasswordEncoderService.encode(employee.getPassword());
        employee.setPassword(encodedPassword);
        return repository.addEmployee(employee);
    }

    public List<Employee> getAllEmployee() {
        return repository.getAllEmployee();
    }

    public Employee getEmployeeById(int id) {
        return repository.getEmployeeById(id);
    }


    public String deleteEmployeeById(int id) {
        return repository.deleteEmployeeById(id);
    }

    public String updateEmployeeById(Employee employee, int id) {
        return repository.updateEmployeeById(employee,id);
    }

    public Employee findByEmail(String empEmail) {
        EmailDetails emailDetails = repository.findByEmpEmail(empEmail);
        return this.getEmployeeById(emailDetails.getId());
    }
}
