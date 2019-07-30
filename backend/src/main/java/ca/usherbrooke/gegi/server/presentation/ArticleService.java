package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.persistence.ArticleMapper;
import ca.usherbrooke.gegi.server.business.Article;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/article")
public class ArticleService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject private ArticleMapper articleMapper;

    @GET
    @Path("list")
    @Produces("application/json")
    public List<Article> getArticlesFiltered(@QueryParam("filter") String filter) {
        return articleMapper.GetArticlesFiltered(filter);
    }

    @GET
    @Path("")
    @Produces("application/json")
    public Article getArticleById(@QueryParam("id") Integer id) {
        return articleMapper.GetArticleById(id);
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Article CreateArticle(Article articleJSON){
        Article tempArticle = new Article();
        tempArticle.setDescription("insert description");
        tempArticle.setTitle("insert title");
        tempArticle.setIdCategory(1);
        tempArticle.setUserCIP("test1234");
        tempArticle.setIdStatus(1);
        return tempArticle;
    }
}
