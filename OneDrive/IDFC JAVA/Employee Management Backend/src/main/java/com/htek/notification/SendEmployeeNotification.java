//package com.htek.notification;
//
//import jakarta.inject.Inject;
//import jakarta.inject.Singleton;
//
//@Singleton
//public class SendEmployeeNotification {
//    @Inject
//    KafkaProducer kafkaProducer;
//
//    public void sendEmployeeNotification(String message){
//        kafkaProducer.send(KafkaConstraints.EMPLOYEE_TOPIC_VALUE,message);
//    }
//}
