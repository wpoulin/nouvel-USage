package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.persistence.UserMapper;
import ca.usherbrooke.gegi.server.business.User;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

@Path("/user")
public class UserService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject private UserMapper userMapper;

    @GET
    @Path("")
    @Produces(MediaType.APPLICATION_JSON)
    public User getUserByCIP(@QueryParam("cip") String cip) {
        User user = userMapper.GetUserByCIP(cip);

        if (user == null) {
            userMapper.CreateUser(cip);
            user = userMapper.GetUserByCIP(cip);
        }
        return user;
    }

    @PUT
    @Path("")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public User UpdateClient(User userJSON){
        userMapper.UpdateUser(userJSON);
        return userJSON;
    }
}
