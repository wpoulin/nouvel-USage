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

@Path("client")
public class ClientService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject private ClientMapper clientMapper;

    @GET
    @Produces("application/json")
    public List<Client> getSale(@QueryParam("id") Integer id) {

        System.out.println(httpServletRequest.getUserPrincipal().getName());
        //clientMapper.InsertClient(CreateClient());

        List<Client> clients = clientMapper.select(id);
        return clients;
    }

    private Client CreateClient(){
        Client tempClient = new Client();
        tempClient.setFirstName("insert FN");
        tempClient.setLastName("insert LN");
        return tempClient;
    }
}
