package angulardatatable.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import angulardatatable.service.DataTableService;


@Component
@RestController
public class DataTableCtrl{
	
	@Autowired
	private DataTableService dataTableService;
	
	Map<String,Object> responseObj= new HashMap<String,Object>();
	
	@RequestMapping("getname")
	public String getName()
	{
		return "Balmukund";
	}
	
	@RequestMapping("findall")
	public Map<String, Object> getResponseObj(){
		responseObj.put("totalCity", dataTableService.findAll());
		return responseObj;
	}
	
	

}
