

-- Test script

-------------    Table Pays    -----------------------------
INSERT INTO Pays VALUES(1, 'Canada');
INSERT INTO Pays VALUES(2, 'État-Unis');

-------------    Table Faculte    -----------------------------
INSERT INTO Faculte VALUES(1, 'Génie');
INSERT INTO Faculte VALUES(2, 'Admin');

-------------    Table Departement    -----------------------------
INSERT INTO Departement VALUES(1, 1, 'Informatique');
INSERT INTO Departement VALUES(2, 1, 'Electrique');

-------------    Table UserStatus    -----------------------------
INSERT INTO UserStatus VALUES(1, 'Admin');
INSERT INTO UserStatus VALUES(2, 'Usager');
INSERT INTO UserStatus VALUES(3, 'Deny');

-------------    Table Session    -----------------------------
INSERT INTO Session VALUES(1, 'S1');
INSERT INTO Session VALUES(2, 'S2');
INSERT INTO Session VALUES(3, 'S3');

-------------    Table User    -----------------------------
INSERT INTO "USER" VALUES(1, 1, 'alex', 'veilleiux', 'username', 'password', 'alex.veilleux2@usherbrooke.ca', '418-957-7444', null, 'Sherbrooke', 10);
INSERT INTO "USER" VALUES(2, 1, 'bryan', 'fortin', 'username2', 'password', 'bryan.fortin@usherbrooke.ca', '418-957-7444', null, 'Sherbrooke', 0);
INSERT INTO "USER" VALUES(3, 1, 'jean-olivier', 'lessard', 'username3', 'password', 'jeanolivier.lessard@usherbrooke.ca', '418-957-7444', null, 'Sherbrooke', 5);

-------------    Table StatusByUser    -----------------------------
INSERT INTO StatusByUser VALUES(1, 1);
INSERT INTO StatusByUser VALUES(2, 2);
INSERT INTO StatusByUser VALUES(3, 3);

-------------    Table studies    -----------------------------
INSERT INTO studies VALUES(1, 1);
INSERT INTO studies VALUES(2, 1);
INSERT INTO studies VALUES(3, 2);

-------------    Table is_in  (departementbyuser)  -----------------------------
INSERT INTO is_in VALUES(1, 1);
INSERT INTO is_in VALUES(1, 2);
INSERT INTO is_in VALUES(2, 1);
INSERT INTO is_in VALUES(3, 2);




-------------    Table CategorySale    -----------------------------
INSERT INTO CategorySale VALUES(1, 'Livre');
INSERT INTO CategorySale VALUES(2, 'Accessoire');
INSERT INTO CategorySale VALUES(3, 'Outils');

-------------    Table SaleStatus    -----------------------------
INSERT INTO SaleStatus VALUES(1, 'En vente');
INSERT INTO SaleStatus VALUES(2, 'Vendu');
INSERT INTO SaleStatus VALUES(3, 'Réservé');

-------------    Table sale  -----------------------------
INSERT INTO sale VALUES(1, 1, 1, 1, 'Titre vente livre', 'Description vente livre', '2019-05-28', 10, 0, true, 'Sherbrooke');
INSERT INTO sale VALUES(2, 1, 1, 2, 'Titre vente livre2', 'Description vente livre2', '2019-05-29', 10, 0, true, 'Magog');
INSERT INTO sale VALUES(3, 2, 2, 1, 'Titre vente accessoire', 'Description vente accessoire', '2019-06-1', 10, 0, true, 'Sherbrooke');
INSERT INTO sale VALUES(4, 3, 3, 3, 'Titre vente outil', 'Description vente outil', '2019-05-28', 10, 0, false, 'Sherbrooke');

select * from sale
select * from CategorySale
select * from SaleStatus

-------------    Table SalePicture  -----------------------------
INSERT INTO SalePicture VALUES(1, 1, 'link for picture');
INSERT INTO SalePicture VALUES(2, 1, 'link for picture');

-------------    Table SaleBySession  -----------------------------
INSERT INTO SaleBySession VALUES(1, 1);

select * from SaleBySession














