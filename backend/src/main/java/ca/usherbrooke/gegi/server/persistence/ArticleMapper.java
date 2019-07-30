package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.Article;
import ca.usherbrooke.gegi.server.business.NewArticleRequest;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface ArticleMapper {

    List<Article> GetArticlesFiltered(@Param("filter") String filter);
    Article GetArticleById(@Param("id") int id);
    void InsertArticle(@Param("article") NewArticleRequest article);
}
