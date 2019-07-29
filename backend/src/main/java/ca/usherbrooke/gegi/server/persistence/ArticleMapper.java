package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.Article;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface ArticleMapper {

    Article GetArticleById(@Param("id") int id);

    void InsertArticle(@Param("article") Article article);
}
