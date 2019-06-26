package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.Sale;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface SaleMapper {

    List<Sale> GetSaleById(@Param("id") int id);

    void InsertSale(@Param("sale") Sale sale);
}
