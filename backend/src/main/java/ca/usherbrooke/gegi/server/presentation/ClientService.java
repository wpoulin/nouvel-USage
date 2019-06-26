package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.persistence.ClientMapper;
import ca.usherbrooke.gegi.server.business.Client;


import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/client")
public class ClientService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject private ClientMapper clientMapper;

    @GET
    @Path("{id}")
    @Produces("application/json")
    public List<Client> getClient(@PathParam("id") Integer id) {

        //clientMapper.InsertClient(CreateClient());

        List<Client> clients = clientMapper.GetClientById(id);
        return clients;
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Client CreateClient(Client clientJSON){
        Client tempClient = new Client();
        tempClient.setFirstName("insert FN");
        tempClient.setLastName("insert LN");
        return tempClient;
    }
}
