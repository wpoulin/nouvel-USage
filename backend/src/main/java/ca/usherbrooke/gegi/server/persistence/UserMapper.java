package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.User;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface UserMapper {

    List<User> select(@Param("id") Integer id);
}
