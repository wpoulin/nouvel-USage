package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.persistence.SaleMapper;
import ca.usherbrooke.gegi.server.business.Sale;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import java.util.List;

@Path("sale")
public class SaleService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject private SaleMapper saleMapper;

    @GET
    @Produces("application/json")
    public List<Sale> getSale(@QueryParam("id") Integer id) {

        System.out.println(httpServletRequest.getUserPrincipal().getName());
        //saleMapper.InsertSale(CreateSale());
        List<Sale> sales = saleMapper.GetSaleById(id);
        return sales;
    }

    private Sale CreateSale(){
        Sale tempSale = new Sale();
        tempSale.setSaleDescription("insert description");
        tempSale.setSaleTitle("insert title");
        tempSale.setIdCategory(1);
        tempSale.setIdClient(1);
        tempSale.setIdStatusSale(1);
        return tempSale;
    }

}
