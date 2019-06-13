

-- Test script
-------------    Table UserStatus    -----------------------------
INSERT INTO UserStatus VALUES(1, 'Admin');
INSERT INTO UserStatus VALUES(2, 'Usager');
INSERT INTO UserStatus VALUES(3, 'Deny');

-- select * from userStatus

-------------    Table Tag    -----------------------------
INSERT INTO tag VALUES(1, 'S1');
INSERT INTO tag VALUES(2, 'S2');
INSERT INTO tag VALUES(3, 'Informatique');

-- select * from tag

-------------    Table User    -----------------------------
INSERT INTO client VALUES(1, 'alex', 'veilleiux', 'username', 'password', 'alex.veilleux2@usherbrooke.ca', '418-957-7444', null, 'Sherbrooke', 10);
INSERT INTO client VALUES(2, 'bryan', 'fortin', 'username2', 'password', 'bryan.fortin@usherbrooke.ca', '418-957-7444', null, 'Sherbrooke', 0);
INSERT INTO client VALUES(3, 'jean-olivier', 'lessard', 'username3', 'password', 'jeanolivier.lessard@usherbrooke.ca', '418-957-7444', null, 'Sherbrooke', 5);


-- select * from client

-------------    Table StatusByUser    -----------------------------
INSERT INTO statusByUser VALUES(1, 1);
INSERT INTO statusByUser VALUES(2, 2);
INSERT INTO statusByUser VALUES(3, 3);

-- select * from statusByUser

-------------    Table CategorySale    -----------------------------
INSERT INTO CategorySale VALUES(1, 'Livre');
INSERT INTO CategorySale VALUES(2, 'Accessoire');
INSERT INTO CategorySale VALUES(3, 'Outils');

-- select * from CategorySale

-------------    Table SaleStatus    -----------------------------
INSERT INTO SaleStatus VALUES(1, 'En vente');
INSERT INTO SaleStatus VALUES(2, 'Vendu');
INSERT INTO SaleStatus VALUES(3, 'Réservé');

-- select * from SaleStatus

-------------    Table sale  -----------------------------
INSERT INTO sale VALUES(1, 1, 1, 1, 'Titre vente livre', 'Description vente livre', '2019-05-28', 10.5, 0, true, 'Sherbrooke');
INSERT INTO sale VALUES(2, 1, 1, 2, 'Titre vente livre2', 'Description vente livre2', '2019-05-29', 15, 0, true, 'Magog');
INSERT INTO sale VALUES(3, 2, 2, 1, 'Titre vente accessoire', 'Description vente accessoire', '2019-06-1', 2, 0, true, 'Sherbrooke');
INSERT INTO sale VALUES(4, 3, 3, 3, 'Titre vente outil', 'Description vente outil', '2019-05-28', 10, 0, false, 'Sherbrooke');

--select * from sale
--select * from CategorySale
--select * from SaleStatus

-------------    Table SalePicture  -----------------------------
INSERT INTO SalePicture VALUES(1, 1, 'link for picture');
INSERT INTO SalePicture VALUES(2, 1, 'link for picture');

-- select * from SalePicture

-------------    Table saleByTag  -----------------------------
INSERT INTO SaleByTag VALUES(1, 1);
INSERT INTO SaleByTag VALUES(2, 1);
INSERT INTO SaleByTag VALUES(1, 2);

-- select * from SaleByTag














