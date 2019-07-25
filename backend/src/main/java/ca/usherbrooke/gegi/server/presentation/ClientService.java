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
    @Produces("application/json")
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
    @Produces("application/json")
    public Client getClientByID(@PathParam("id") Integer id) {
        return clientMapper.GetClientById(id);
    }
}
