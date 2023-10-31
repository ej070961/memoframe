package com.example.memoframe.Member.Repository;

import com.example.memoframe.Member.Domain.MemberEmailInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberEmailInfoRepository extends JpaRepository<MemberEmailInfo, Integer> {
    Optional<MemberEmailInfo> findByEmail(String email);
}
