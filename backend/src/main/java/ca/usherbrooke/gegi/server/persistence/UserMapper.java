package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.User;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface UserMapper {
    User GetUserByCIP(@Param("cip") String cip);
    void CreateUser(@Param("cip") String cip);
    void UpdateUser(@Param("user") User user);
}
