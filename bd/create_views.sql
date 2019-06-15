

---------------- Client -----------------------------

CREATE VIEW AllClient_View AS
 SELECT    
        id_client,
        first_name,
        last_name,
        username,
        password,
        email,
        phone,
        cell_phone,
        ville,
        cote_seller
 FROM client;



---------------- Sale -----------------------------

CREATE VIEW AllSale_view AS
 SELECT         
	id_sale,
        id_category,
        id_client,
        id_statusSale,
        sale_title,
        sale_description,
        sale_date,
        sale_price,
        sale_wear,
        sale_nego,
        sale_location
 FROM sale;

 




 