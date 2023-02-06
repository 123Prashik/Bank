package com.htek.repository;


import com.htek.email.EmailDetails;
import com.htek.entity.Employee;

import java.util.List;


public interface IEmployeeRepository {
    String addEmployee(Employee employee);

    List<Employee> getAllEmployee();

    Employee getEmployeeById(int id);

    String deleteEmployeeById(int id);

    String updateEmployeeById(Employee employee, int id);

    EmailDetails findByEmpEmail(String empEmail);


}