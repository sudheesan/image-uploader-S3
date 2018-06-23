package com.example.sliit.ImageUploader.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.sliit.ImageUploader.model.Result;
import com.example.sliit.ImageUploader.service.AmazonClientService;


@RestController
@RequestMapping("/bucket")
public class AmazonClientController {
	
	@Autowired
	private AmazonClientService amazonClientService;
	
	
	@RequestMapping(value="/uploadFile" ,method=RequestMethod.POST, produces="application/json")
    public ResponseEntity<Result>  uploadFile(@RequestPart(value = "file") MultipartFile file)   {	
		
		return new ResponseEntity<Result>(new Result(this.amazonClientService.uploadFile(file)),HttpStatus.OK);
		
    }

}
