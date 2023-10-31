package com.example.memoframe.Member.Domain;

import jakarta.persistence.*;

@Entity
@Table(name = "m_emailinfo_tb")
public class MemberEmailInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int email_id;
    private int member_id;


    private String email;
    private String password;

    public int getEmail_id() {
        return email_id;
    }

    public void setEmail_id(int email_id) {
        this.email_id = email_id;
    }

    public int getMember_id() {
        return member_id;
    }

    public void setMember_id(int member_id) {
        this.member_id = member_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
