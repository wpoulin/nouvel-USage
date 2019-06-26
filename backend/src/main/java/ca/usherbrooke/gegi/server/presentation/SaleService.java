package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.persistence.SaleMapper;
import ca.usherbrooke.gegi.server.business.Sale;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/sale")
public class SaleService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject private SaleMapper saleMapper;

    @GET
    @Path("{id}")
    @Produces("application/json")
    public List<Sale> getSale(@PathParam("id") Integer id) {

        System.out.println(httpServletRequest.getUserPrincipal().getName());
        System.out.println("Test 3");
        //saleMapper.InsertSale(CreateSale());
        List<Sale> sales = saleMapper.GetSaleById(id);
        return sales;
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Sale CreateSale(Sale saleJSON){
        Sale tempSale = new Sale();
        tempSale.setSaleDescription("insert description");
        tempSale.setSaleTitle("insert title");
        tempSale.setIdCategory(1);
        tempSale.setIdClient(1);
        tempSale.setIdStatusSale(1);
        return tempSale;
    }

}
