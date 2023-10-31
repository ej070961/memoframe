package com.example.memoframe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.redis.RedisRepositoriesAutoConfiguration;

@SpringBootApplication(exclude = {RedisRepositoriesAutoConfiguration.class})
public class MemoframeApplication {

	public static void main(String[] args) {
		SpringApplication.run(MemoframeApplication.class, args);
	}

}
