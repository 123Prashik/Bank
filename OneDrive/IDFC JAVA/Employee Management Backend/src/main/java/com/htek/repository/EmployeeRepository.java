package com.htek.repository;

import com.htek.configuration.AeroMapperConfiguration;
import com.htek.email.EmailDetails;
import com.htek.entity.Employee;
//import com.htek.notification.SendEmployeeNotification;
import com.htek.service.EmailService;
import io.micronaut.context.annotation.Bean;
import jakarta.inject.Inject;

import java.util.List;

@Bean
public class EmployeeRepository implements IEmployeeRepository{

    @Inject
    private AeroMapperConfiguration aeroMapperConfiguration;
//    @Inject
//    SendEmployeeNotification sendEmployeeNotification;

    @Override
    public String addEmployee(Employee employee) {
        aeroMapperConfiguration.getMapper().save(employee);

//        sendEmployeeNotification.sendEmployeeNotification("Employee added"+employee);

        EmailDetails emailDetails = new EmailDetails(employee.getId(), employee.getEmail(), employee.getPassword());
        aeroMapperConfiguration.getMapper().save(emailDetails);
        if(aeroMapperConfiguration != null){
            EmailService.sendEmail(new EmailDetails("Employee Alert !!!", "Congratulations "+employee.getName()+", Your Employee Id is "+employee.getId(), employee.getEmail()));
        }
        return "Employee added successfully!!!!";
    }


    @Override
    public List<Employee> getAllEmployee() {
//        sendEmployeeNotification.sendEmployeeNotification("All employees :"+aeroMapperConfiguration.getMapper().scan(Employee.class));
        return aeroMapperConfiguration.getMapper().scan(Employee.class);
    }

    @Override
    public Employee getEmployeeById(int id) {
//        sendEmployeeNotification.sendEmployeeNotification("Employee with id :"+aeroMapperConfiguration.getMapper().read(Employee.class,id));
        return aeroMapperConfiguration.getMapper().read(Employee.class,id);
    }

    @Override
    public String deleteEmployeeById(int id) {
//        sendEmployeeNotification.sendEmployeeNotification("Deleted employee:"+id);
        aeroMapperConfiguration.getMapper().delete(Employee.class,id);
        return "Employee deleted by id :"+id;
    }

    @Override
    public String updateEmployeeById(Employee employee, int id) {
        Employee emp = aeroMapperConfiguration.getMapper().read(Employee.class,id);
        emp.setName(employee.getName());
        emp.setEmail(employee.getEmail());
        emp.setSal(employee.getSal());
        emp.setJoiningDate(employee.getJoiningDate());
        emp.setDepartment(employee.getDepartment());

        aeroMapperConfiguration.getMapper().save(emp);
//        sendEmployeeNotification.sendEmployeeNotification("Updated Employee :"+emp);

        return "Employee updated successfully!!!";
    }

    @Override
    public EmailDetails findByEmpEmail(String empEmail) {
//        sendEmployeeNotification.sendEmployeeNotification("Employee by email :"+aeroMapperConfiguration.getMapper().read(Employee.class,empEmail));
        return aeroMapperConfiguration.getMapper().read(EmailDetails.class,empEmail);
    }
}
