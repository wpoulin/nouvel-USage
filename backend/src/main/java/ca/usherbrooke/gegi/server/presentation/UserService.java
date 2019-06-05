package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.business.User;
import ca.usherbrooke.gegi.server.persistence.UserMapper;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import java.util.List;

@Path("user")
public class UserService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject private UserMapper userMapper;

    @GET
    @Produces("application/json")
    public List<User> getSale(@QueryParam("id") Integer id) {

        System.out.println(httpServletRequest.getUserPrincipal().getName());
        List<User> users = userMapper.select(id);
        return users;
    }
}
