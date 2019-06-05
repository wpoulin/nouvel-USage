package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.business.Client;
import ca.usherbrooke.gegi.server.persistence.ClientMapper;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import java.util.List;

@Path("user")
public class ClientService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject private ClientMapper clientMapper;

    @GET
    @Produces("application/json")
    public List<Client> getSale(@QueryParam("id") Integer id) {

        System.out.println(httpServletRequest.getUserPrincipal().getName());
        List<Client> clients = clientMapper.select(id);
        return clients;
    }
}
