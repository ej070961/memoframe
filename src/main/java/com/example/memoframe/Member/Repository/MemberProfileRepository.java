package com.example.memoframe.Member.Repository;

import com.example.memoframe.Member.Domain.MemberProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberProfileRepository extends JpaRepository<MemberProfile, Integer> {
}
