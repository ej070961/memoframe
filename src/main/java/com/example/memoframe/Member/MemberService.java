package com.example.memoframe.Member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    @Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public List<Member> getMembers() {
        return memberRepository.findAll(); //전체회원 조회 -> 다들 기본적으로 구현해두길래 구현해놨음
    }

    public boolean checkEmailExists(String email) {
        Optional<Member> memberOptional =
                memberRepository.findMemberByEmail(email);

        return memberOptional.isPresent();
    }

    public void registerNewMember(Member member) {
        // you should encrypt the password here before saving it to the database!

        memberRepository.save(member);
    }
}
