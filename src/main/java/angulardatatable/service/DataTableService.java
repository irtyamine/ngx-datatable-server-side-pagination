package angulardatatable.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import angulardatatable.dto.DataTableDto;
import angulardatatable.repository.DataTableRepo;

@Service
public class DataTableService {
	
	@Autowired
	private DataTableRepo dataTableRepo;
	
	public Iterable<DataTableDto> findAll()
	{
		return dataTableRepo.findAll();
	}
	

}
