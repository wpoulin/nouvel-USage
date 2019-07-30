package ca.usherbrooke.gegi.server.business;

import com.fasterxml.jackson.annotation.JsonProperty;

public class NewArticleRequest {
    private Integer id_category;
    private String cip;
    private String title;
    private String description;
    private Double price;
    private Integer wear;
    private Boolean nego;
    private String image_src;

    @JsonProperty("id_category")
    public Integer getIdCategory() {
        return id_category;
    }
    public void setIdCategory(Integer p_idCategory) {
        this.id_category = p_idCategory;
    }

    @JsonProperty("cip")
    public String getCIP() {
        return cip;
    }
    public void setCIP(String p_cip) {
        this.cip = p_cip;
    }

    @JsonProperty("title")
    public String getTitle() {
        return title;
    }
    public void setTitle(String p_title) { this.title = p_title; }

    @JsonProperty("description")
    public String getDescription() {
        return description;
    }
    public void setDescription(String p_description) {
        this.description = p_description;
    }

    @JsonProperty("price")
    public Double getPrice() {
        return price;
    }
    public void setPrice(Double p_price) {
        this.price = p_price;
    }

    @JsonProperty("wear")
    public Integer getWear() {
        return wear;
    }
    public void setWear(Integer p_wear) { this.wear = p_wear; }

    @JsonProperty("nego")
    public Boolean getNego() {
        return nego;
    }
    public void setNego(Boolean p_nego) { this.nego = p_nego; }

    @JsonProperty("image_src")
    public String getImageSrc() {
        return image_src;
    }
    public void setImageSrc(String p_imageSrc) { this.image_src = p_imageSrc; }

    @Override
    public String toString() {
        return "NewArticleRequest{" +
                "id_category='" + id_category + '\'' +
                ", cip='" + cip + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", price='" + price + '\'' +
                ", wear='" + wear + '\'' +
                ", nego='" + nego + '\'' +
                ", image_src='" + image_src + '\'' +
                '}';
    }
}
