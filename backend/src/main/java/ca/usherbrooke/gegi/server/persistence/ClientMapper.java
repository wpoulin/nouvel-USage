package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.Client;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface ClientMapper {
    Client GetClientByCIP(@Param("cip") String cip);
    Client GetClientById(@Param("id") int id);
    void CreateClient(@Param("cip") String cip);
    void UpdateClient(@Param("client") Client client);
}
