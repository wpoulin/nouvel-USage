package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.business.NewArticleRequest;
import ca.usherbrooke.gegi.server.persistence.ArticleMapper;
import ca.usherbrooke.gegi.server.business.Article;
import ca.usherbrooke.gegi.server.business.NewArticleRequest;

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
    @Produces(MediaType.APPLICATION_JSON)
    public List<Article> getArticlesFiltered(@QueryParam("filter") String filter) {
        return articleMapper.GetArticlesFiltered(filter);
    }

    @GET
    @Path("")
    @Produces(MediaType.APPLICATION_JSON)
    public Article getArticleById(@QueryParam("id") Integer id) {
        return articleMapper.GetArticleById(id);
    }

    @POST
    @Path("")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public void CreateArticle(NewArticleRequest newArticle){
        System.out.println(newArticle.toString());
        articleMapper.InsertArticle(newArticle);
    }
}
