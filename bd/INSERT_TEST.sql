

-- Test script
-------------    Table UserStatus    -----------------------------
INSERT INTO UserStatus(status_name) VALUES
('Admin'),
('Usager'),
('Deny');

-- select * from userStatus

-------------    Table Tag    -----------------------------
INSERT INTO tag(tag_name) VALUES
('S1'),
('S2'),
('Informatique');

-- select * from tag

-------------    Table User    -----------------------------
INSERT INTO client(first_name, last_name, username, password, email, phone, cell_phone, ville, cote_seller) VALUES
('alex', 'veilleiux', 'username', 'password', 'alex.veilleux2@usherbrooke.ca', '418-957-7444', null, 'Sherbrooke', 10),
('bryan', 'fortin', 'username2', 'password', 'bryan.fortin@usherbrooke.ca', '418-957-7444', null, 'Sherbrooke', 0),
('jean-olivier', 'lessard', 'username3', 'password', 'jeanolivier.lessard@usherbrooke.ca', '418-957-7444', null, 'Sherbrooke', 5);

-- select * from client

-------------    Table StatusByUser    -----------------------------
INSERT INTO statusByUser(id_status, id_client) VALUES
(1, 1),
(2, 2),
(3, 3);

-- select * from statusByUser

-------------    Table CategorySale    -----------------------------
INSERT INTO CategorySale(category_name) VALUES
('Livre'),
('Accessoire'),
('Outils');

-- select * from CategorySale

-------------    Table SaleStatus    -----------------------------
INSERT INTO SaleStatus(statusSale_name) VALUES
('En vente'),
('Vendu'),
('Réservé');

-- select * from SaleStatus

-------------    Table sale  -----------------------------
INSERT INTO sale(id_category, id_client, id_statusSale, sale_title, sale_description, sale_date, sale_price, sale_wear, sale_nego, sale_location) VALUES
(1, 1, 1, 'Titre vente livre', 'Description vente livre', '2019-05-28', 10.5, 0, true, 'Sherbrooke'),
(1, 1, 2, 'Titre vente livre2', 'Description vente livre2', '2019-05-29', 15, 0, true, 'Magog'),
(2, 2, 1, 'Titre vente accessoire', 'Description vente accessoire', '2019-06-1', 2, 0, true, 'Sherbrooke'),
(3, 3, 3, 'Titre vente outil', 'Description vente outil', '2019-05-28', 10, 0, false, 'Sherbrooke');

--select * from sale
--select * from CategorySale
--select * from SaleStatus

-------------    Table SalePicture  -----------------------------
INSERT INTO SalePicture(id_sale, picture_link, picture_primary) VALUES
(1, 'link for picture', true),
(1, 'link for picture', false);

-- select * from SalePicture

-------------    Table saleByTag  -----------------------------
INSERT INTO SaleByTag(id_tag, id_sale) VALUES
(1, 1),
(2, 1),
(1, 2);

-- select * from SaleByTag














