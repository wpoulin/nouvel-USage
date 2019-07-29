package ca.usherbrooke.gegi.server.business;

import java.time.format.DateTimeFormatter;

public class Article {
    private Integer id_article;
    private Integer id_category;
    private String cip_user;
    private Integer id_status;
    private String title;
    private String description;
    private DateTimeFormatter creation_date;
    private String price;
    private Integer wear;
    private Boolean nego;
    private String location;

    public Integer getId() {
        return id_article;
    }
    public void setId(Integer p_id_article) {
        this.id_article = p_id_article;
    }

    public Integer getIdCategory() {
        return id_category;
    }
    public void setIdCategory(Integer p_idCategory) {
        this.id_category = p_idCategory;
    }

    public String getUserCIP() {
        return cip_user;
    }
    public void setUserCIP(String p_cip_user) {
        this.cip_user = p_cip_user;
    }

    public Integer getIdStatus() {
        return id_status;
    }
    public void setIdStatus(Integer p_id_status) {
        this.id_status = p_id_status;
    }

    public String getTitle() {
        return title;
    }
    public void setTitle(String p_title) { this.title = p_title; }

    public String getDescription() {
        return description;
    }
    public void setDescription(String p_description) {
        this.description = p_description;
    }

    public DateTimeFormatter getCreationDate() {
        return creation_date;
    }
    public void setDate(DateTimeFormatter p_creationdate) {
        this.creation_date = p_creationdate;
    }

    public String getPrice() {
        return price;
    }
    public void setPrice(String p_price) {
        this.price = p_price;
    }

    public Integer getWear() {
        return wear;
    }
    public void setWear(Integer p_wear) { this.wear = p_wear; }

    public Boolean getNego() {
        return nego;
    }
    public void setNego(Boolean p_nego) { this.nego = p_nego; }

    public String getLocation() {
        return location;
    }
    public void setLocation(String p_location) { this.location = p_location; }

    @Override
    public String toString() {
        return "Article{" +
                "id_article=" + id_article +
                ", id_category='" + id_category + '\'' +
                ", cip_user='" + cip_user + '\'' +
                ", id_status='" + id_status + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", creation_date='" + creation_date + '\'' +
                ", price='" + price + '\'' +
                ", wear='" + wear + '\'' +
                ", nego='" + nego + '\'' +
                ", location='" + location + '\'' +
                '}';
    }
}
