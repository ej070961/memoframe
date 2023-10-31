package com.example.memoframe.Member.Service;

import com.example.memoframe.Member.Domain.Member;
import com.example.memoframe.Member.Domain.MemberEmailInfo;
import com.example.memoframe.Member.Domain.MemberProfile;
import com.example.memoframe.Member.Repository.MemberEmailInfoRepository;
import com.example.memoframe.Member.Repository.MemberProfileRepository;
import com.example.memoframe.Member.Repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;
    @Autowired
    private MemberEmailInfoRepository memberEmailInfoRepository;

    @Autowired
    private MemberProfileRepository memberProfileRepository;

    @Autowired
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    public List<Member> getMembers() {
        return memberRepository.findAll(); //전체회원 조회 -> 다들 기본적으로 구현해두길래 구현해놨음
    }

    //이메일이 이미 있는지 확인하는 메서드
    public boolean checkEmailExists(String email) {
        Optional<MemberEmailInfo> memberOptional =
                memberEmailInfoRepository.findByEmail(email);

        return memberOptional.isPresent();
    }
    //이메일 회원가입 시 멤버 사용자 정보를 저장하는 메서드
    @Transactional
    public int registerNewMemberByEmail(Member member, MemberEmailInfo memberEmailInfo) {

        // member 저장
        Member savedMember = memberRepository.save(member);

        // member_id 설정
        memberEmailInfo.setMember_id(savedMember.getMember_id());

        // memberEmailInfo 저장
        memberEmailInfoRepository.save(memberEmailInfo);

        return savedMember.getMember_id();
    }

    public void saveMemberProfile(MemberProfile memberprofile){
        // memberProfile 저장
        memberProfileRepository.save(memberprofile);
    }
}
