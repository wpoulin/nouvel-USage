package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.Client;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface ClientMapper {

    List<Client> GetClientById(@Param("id") int id);
    void InsertClient(@Param("client") Client client);
    void UpdateClient(@Param("client") Client client);
}
