package com.example.memoframe.Member;

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
    @Autowired
    private StringRedisTemplate redisTemplate;
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/finduser")
    public ResponseEntity<?> findUser(@RequestBody Map<String, String> user) {
        boolean exists =  memberService.checkEmailExists(user.get("email"));

        if(!exists){
            // User does not exist, save email and password in redis with email as key and password as value.
            redisTemplate.opsForValue().set(user.get("email"), user.get("password"));
        }

        Map<String, Boolean> response = new HashMap<>();
        response.put("existedUser", exists);

        return ResponseEntity.ok().body(response);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/register")
    @Transactional
    public ResponseEntity<?> registerNewMember(@RequestBody Map<String, String> user) {

        Member member = new Member();

        String email = user.get("email");
        String password = redisTemplate.opsForValue().get(email);

        member.setEmail(email);
        member.setPassword(password); // 실제로는 암호화해서 사용 -> jwt 토큰해야하나?

        member.setNickname(user.get("nickname"));
        member.setProfileimage(user.get("profileimage"));

        try {
            memberService.registerNewMember(member);
            return ResponseEntity.ok().body("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/getuser")
    public ResponseEntity<?> getUser(@RequestParam String email) {
        String password = redisTemplate.opsForValue().get(email);


        if(password == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found in Redis");
        }

        Map<String, String> response = new HashMap<>();
        response.put("email", email);
        response.put("password", password);

        return ResponseEntity.ok().body(response);
    }


}
