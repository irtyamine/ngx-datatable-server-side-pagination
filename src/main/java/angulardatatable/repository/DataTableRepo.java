package angulardatatable.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import angulardatatable.dto.DataTableDto;


@Repository
public interface DataTableRepo extends CrudRepository<DataTableDto,Long> {
	

}
