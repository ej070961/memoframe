package com.example.memoframe.Member.Repository;

import com.example.memoframe.Member.Domain.Member;
import com.example.memoframe.Member.Domain.MemberEmailInfo;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Integer> {
//    Optional<Member> findMemberByEmail(String email); //멤버 이메일 정보 테이블에서 이메일을 검색
}
