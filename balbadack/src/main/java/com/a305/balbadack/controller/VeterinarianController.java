package com.a305.balbadack.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.a305.balbadack.model.dto.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;


import io.swagger.annotations.ApiOperation;



@CrossOrigin(origins = { "*" }, maxAge = 6000)
@RestController
@EnableAutoConfiguration
public class VeterinarianController {
  @Autowired
	Veterinarian veterinarian;
	VeterinarianService veterinarianService;

  // READ : 수의사 정보 받아오기
  @GetMapping("/veterinarian")
  @ApiOperation("수의사 전체 목록 조회")
	public ResponseEntity<Map<String, Object>> searchAll() throws Exception {
		return handleSuccess(veterinarianService.searchAll());
  }
  
	// READ : no에 해당하는 수의사 조회
	@GetMapping("/veterinarian/{no}")
	@ApiOperation("no에 해당하는 수의사 조회")
	public ResponseEntity<Map<String, Object>> search(@PathVariable int no) throws Exception {
		return handleSuccess(veterinarianService.search(no));
	}
	
	// CREATE, UPDATE : 수의사 등록, 수정 
	// 만약에 이미 테이블에 있다면 update, 아니라면 insert를 해야함.
	@PostMapping("/veterinarian")
	@ApiOperation("수의사 정보 등록, 수정하기")
	public ResponseEntity<Map<String, Object>> insert(@RequestBody Veterinarian veterinarian) throws Exception {
		veterinarianService.insert(veterinarian);
		return handleSuccess("수의사 등록, 수정 완료");
	}

	// DELETE : 수의사 정보 삭제
	@DeleteMapping("/veterinarian/{no}")
	@ApiOperation("no에 해당 하는 수의사 삭제 하기")
	public ResponseEntity<Map<String, Object>> delete(@PathVariable int no) throws Exception {
		veterinarianService.delete(veterinarian);
		return handleSuccess("수의사 정보 삭제 완료");
	}


	@ExceptionHandler
	public ResponseEntity<Map<String, Object>> handler(Exception e) {
		return handleFail(e.getMessage(), HttpStatus.OK);
	}

	private ResponseEntity<Map<String, Object>> handleSuccess(Object data) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("state", "ok");
		resultMap.put("data", data);
		return new ResponseEntity<Map<String, Object>>(resultMap, HttpStatus.OK);
	}

	private ResponseEntity<Map<String, Object>> handleFail(Object data, HttpStatus status) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("state", "fail");
		resultMap.put("data", data);
		return new ResponseEntity<Map<String, Object>>(resultMap, status);
	}

}