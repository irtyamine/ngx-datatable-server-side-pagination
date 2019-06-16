package angulardatatable.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="city")
public class DataTableDto
{
	@Id
	@Column(name="ID")
	private Long id;
		
	@Column(name="NAME")
	private String name;
	
	@Column(name="COUNTRYCODE")
	private String countryCode;
	
	@Column(name="DISTRICT")
	private String district;
	
	@Column(name="POPULATION")
	private String population;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCountryCode() {
		return countryCode;
	}
	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
	}
	public String getPopulation() {
		return population;
	}
	public void setPopulation(String population) {
		this.population = population;
	}
	
	@Override
	public String toString() {
		return "DataTableDto [id=" + id + ", name=" + name + ", countryCode=" + countryCode + ", district=" + district
				+ ", population=" + population + "]";
	}
	
	
	

}
