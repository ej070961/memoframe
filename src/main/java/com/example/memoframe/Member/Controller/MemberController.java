package com.example.memoframe.Member.Controller;

import com.example.memoframe.Member.Domain.Member;
import com.example.memoframe.Member.Domain.MemberEmailInfo;
import com.example.memoframe.Member.Domain.MemberProfile;
import com.example.memoframe.Member.Service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/member")
public class MemberController {

    private final MemberService memberService;

    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    public ResponseEntity<?> registerNewMember(@RequestBody Map<String, String> user) {
        //클라이언트가 보낸 login type을 변수에 저장
        int login_type = Integer.parseInt(user.get("login_type"));

        //login_type이 1이면 이메일 로그인
        if (login_type == 1) {
            String email = user.get("email");
            String password = user.get("password");

            //이메일이 이미 db에 저장되어 있는지 확인
            boolean exists = memberService.checkEmailExists(email);

            // 이메일이 이미 존재하는 경우
            if (exists) {
                Map<String, Object> response = new HashMap<>();
                response.put("registerSuccess", false);
                response.put("message", "이미 가입된 이메일입니다.");

                return ResponseEntity.ok().body(response);
            }

            // 새로운 회원 등록
            try {
                Member member = new Member();
                MemberEmailInfo memberEmailInfo = new MemberEmailInfo();

                // member와 memberEmailInfo 필드 설정
                member.setLogin_type(login_type);
                memberEmailInfo.setEmail(email);
                memberEmailInfo.setPassword(password);

                //멤버 서비스 registerNewMemberByEmail 실행
                int member_id = memberService.registerNewMemberByEmail(member, memberEmailInfo);

                //클라이언트에게 보낼 response 객체 생성
                Map<String, Object> response = new HashMap<>();
                response.put("registerSuccess", true);
                response.put("message", "회원가입 성공. 프로필 입력 페이지 이동");
                response.put("member_id", member_id); // member_id 추가

                return ResponseEntity.ok().body(response);
            } catch (Exception e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
            }

        }else{
            //login_type이 2이면 소셜 로그인
            //소셜로그인 구현 필요
            return null;
        }

    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/saveProfile")
    public ResponseEntity<?> saveProfileInfo(@RequestBody Map<String, String> user) {
        try {
            MemberProfile memberProfile = new MemberProfile();
            memberProfile.setMember_id(Integer.parseInt(user.get("member_id")));
            memberProfile.setNickname(user.get("nickname"));
            memberProfile.setProfileimage(user.get("profileimage"));

            memberService.saveMemberProfile(memberProfile);


            return ResponseEntity.ok().body("프로필 등록 완료");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
