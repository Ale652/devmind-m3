package com.example.rest_1;

import java.util.Date;

public class Message {
    String sender;
    String receiver;
    String text;
    Boolean seen;
    Date sentDate;

    public Message(String sender, String receiver, String text, Boolean seen, Date sentDate) {
        this.sender = sender;
        this.receiver = receiver;
        this.text = text;
        this.seen = seen;
        this.sentDate = sentDate;
    }

    public Message(String sender) {
        this.sender = sender;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Boolean getSeen() {
        return seen;
    }

    public void setSeen(Boolean seen) {
        this.seen = seen;
    }

    public Date getSentDate() {
        return sentDate;
    }

    public void setSentDate(Date sentDate) {
        this.sentDate = sentDate;
    }

    @Override
    public String toString() {
        return "Message{" +
                "sender='" + sender + '\'' +
                ", receiver='" + receiver + '\'' +
                ", text='" + text + '\'' +
                ", seen=" + seen +
                ", sentDate=" + sentDate +
                '}';
    }

}
