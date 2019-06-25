package ca.usherbrooke.gegi.server.business;

import java.time.format.DateTimeFormatter;

public class Sale {
    private Integer id_sale;
    private Integer id_category;
    private Integer id_client;
    private Integer id_statusSale;
    private String sale_title;
    private String sale_description;
    private DateTimeFormatter sale_date;
    private String sale_price;
    private Integer sale_wear;
    private Boolean sale_nego;
    private String sale_location;

    public Integer getIdSale() {
        return id_sale;
    }
    public void setIdSale(Integer p_idSale) {
        this.id_sale = p_idSale;
    }

    public Integer getIdCategory() {
        return id_category;
    }
    public void setIdCategory(Integer p_idCategory) {
        this.id_category = p_idCategory;
    }

    public Integer getIdClient() {
        return id_client;
    }
    public void setIdClient(Integer p_idClient) {
        this.id_client = p_idClient;
    }

    public Integer getIdStatusSale() {
        return id_statusSale;
    }
    public void setIdStatusSale(Integer p_idStatusSale) {
        this.id_statusSale = p_idStatusSale;
    }

    public String getSaleTitle() {
        return sale_title;
    }
    public void setSaleTitle(String saleTitle) {
        this.sale_title = saleTitle;
    }

    public String getSaleDescription() {
        return sale_description;
    }
    public void setSaleDescription(String p_saleDescription) {
        this.sale_description = p_saleDescription;
    }

    public DateTimeFormatter getSaleDate() {
        return sale_date;
    }
    public void setSaleDate(DateTimeFormatter p_saleDate) {
        this.sale_date = p_saleDate;
    }

    public String getSalePrice() {
        return sale_price;
    }
    public void setSalePrice(String p_salePrice) {
        this.sale_price = p_salePrice;
    }

    public Integer getSaleWear() {
        return sale_wear;
    }
    public void setSaleWear(Integer p_saleWear) { this.sale_wear = p_saleWear; }

    public Boolean getSaleNego() {
        return sale_nego;
    }
    public void setSaleNoge(Boolean p_saleNego) { this.sale_nego = p_saleNego; }

    public String getSaleLocation() {
        return sale_location;
    }
    public void setSaleLocation(String p_saleLocation) { this.sale_location = p_saleLocation; }

    @Override
    public String toString() {
        return "Sale{" +
                "id_sale=" + id_sale +
                ", id_category='" + id_category + '\'' +
                ", id_client='" + id_client + '\'' +
                ", id_statusSale='" + id_statusSale + '\'' +
                ", sale_title='" + sale_title + '\'' +
                ", sale_description='" + sale_description + '\'' +
                ", sale_date='" + sale_date + '\'' +
                ", sale_price='" + sale_price + '\'' +
                ", sale_wear='" + sale_wear + '\'' +
                ", sale_nego='" + sale_nego + '\'' +
                ", sale_location='" + sale_location + '\'' +
                '}';
    }
}
