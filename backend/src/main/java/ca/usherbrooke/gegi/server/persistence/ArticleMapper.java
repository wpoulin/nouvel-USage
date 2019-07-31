package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.Article;
import ca.usherbrooke.gegi.server.business.NewArticleRequest;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface ArticleMapper {

    List<Article> GetArticlesFiltered(@Param("id_category") Integer id_category, @Param("filter") String filter);
    Article GetArticleById(@Param("id") int id);
    void InsertArticle(@Param("article") NewArticleRequest article);
    void DeleteArticle(@Param("id") int id);
    void UpdateArticle(@Param("article") NewArticleRequest article);
}
