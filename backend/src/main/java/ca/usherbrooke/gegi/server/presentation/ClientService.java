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
    @Path("CIP/{cip}")
    @Produces(MediaType.APPLICATION_JSON)
    public Client getClientByCIP(@PathParam("cip") String cip) {

        Client client = clientMapper.GetClientByCIP(cip);

        if (client == null) {
            clientMapper.CreateClient(cip);
            client = clientMapper.GetClientByCIP(cip);
        }

        return client;
    }

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Client getClientByID(@PathParam("id") Integer id) {
        return clientMapper.GetClientById(id);
    }

    @PUT
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Client UpdateClient(@PathParam("id") Integer id, Client clientJSON){
        System.out.print(clientJSON.toString());
        Client tempClient = new Client();
        clientMapper.UpdateClient(clientJSON);

        return clientJSON;
    }

}
