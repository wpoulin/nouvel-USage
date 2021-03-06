/*==============================================================*/
/* DBMS name:      PostgreSQL 8                                 */
/* Created on:     2019-06-14 13:53:21                          */
/*==============================================================*/


/*==============================================================*/
/* Table: CATEGORYSALE                                          */
/*==============================================================*/
create table CATEGORYSALE (
   ID_CATEGORY          SERIAL               not null,
   CATEGORY_NAME        VARCHAR(50)          null,
   constraint PK_CATEGORYSALE primary key (ID_CATEGORY)
);

/*==============================================================*/
/* Table: CLIENT                                                */
/*==============================================================*/
create table CLIENT (
   ID_CLIENT            SERIAL               not null,
   FIRST_NAME           VARCHAR(50)          null,
   LAST_NAME            VARCHAR(50)          null,
   USERNAME             VARCHAR(50)          null,
   PASSWORD             VARCHAR(50)          null,
   EMAIL                VARCHAR(50)          null,
   PHONE                VARCHAR(50)          null,
   CELL_PHONE           VARCHAR(50)          null,
   VILLE                VARCHAR(50)          null,
   COTE_SELLER          INT4                 null,
   constraint PK_CLIENT primary key (ID_CLIENT)
);

/*==============================================================*/
/* Table: LOG                                                   */
/*==============================================================*/
create table LOG (
   ID_LOG               SERIAL               not null,
   ID_CLIENT            INT4                 not null,
   EVENT_DESCRIPTION    VARCHAR(200)         null,
   LOG_TIME             DATE                 null,
   constraint PK_LOG primary key (ID_LOG)
);

/*==============================================================*/
/* Table: SALE                                                  */
/*==============================================================*/
create table SALE (
   ID_SALE              SERIAL               not null,
   ID_CATEGORY          INT4                 not null,
   ID_CLIENT            INT4                 not null,
   ID_STATUSSALE        INT4                 not null,
   SALE_TITLE           VARCHAR(50)          null,
   SALE_DESCRIPTION     VARCHAR(1000)        null,
   SALE_DATE            DATE                 null,
   SALE_PRICE           FLOAT8               null,
   SALE_WEAR            INT4                 null,
   SALE_NEGO            BOOL                 null,
   SALE_LOCATION        VARCHAR(50)          null,
   constraint PK_SALE primary key (ID_SALE)
);

/*==============================================================*/
/* Table: SALEBYTAG                                             */
/*==============================================================*/
create table SALEBYTAG (
   ID_TAG               INT4                 not null,
   ID_SALE              INT4                 not null,
   constraint PK_SALEBYTAG primary key (ID_TAG, ID_SALE)
);

/*==============================================================*/
/* Table: SALEPICTURE                                           */
/*==============================================================*/
create table SALEPICTURE (
   ID_PICTURE           SERIAL               not null,
   ID_SALE              INT4                 not null,
   PICTURE_LINK         VARCHAR(500)         null,
   "PRIMARY"            BOOL                 null,
   constraint PK_SALEPICTURE primary key (ID_PICTURE)
);

/*==============================================================*/
/* Table: SALESTATUS                                            */
/*==============================================================*/
create table SALESTATUS (
   ID_STATUSSALE        SERIAL               not null,
   STATUSSALE_NAME      VARCHAR(50)          null,
   constraint PK_SALESTATUS primary key (ID_STATUSSALE)
);

/*==============================================================*/
/* Table: STATUSBYUSER                                          */
/*==============================================================*/
create table STATUSBYUSER (
   ID_STATUS            INT4                 not null,
   ID_CLIENT            INT4                 not null,
   constraint PK_STATUSBYUSER primary key (ID_STATUS, ID_CLIENT)
);

/*==============================================================*/
/* Table: TAG                                                   */
/*==============================================================*/
create table TAG (
   ID_TAG               SERIAL               not null,
   TAG_NAME             VARCHAR(50)          null,
   constraint PK_TAG primary key (ID_TAG)
);

/*==============================================================*/
/* Table: USERSTATUS                                            */
/*==============================================================*/
create table USERSTATUS (
   ID_STATUS            SERIAL               not null,
   STATUS_NAME          VARCHAR(100)         null,
   constraint PK_USERSTATUS primary key (ID_STATUS)
);

alter table LOG
   add constraint FK_LOG_LOGS_CLIENT foreign key (ID_CLIENT)
      references CLIENT (ID_CLIENT)
      on delete restrict on update restrict;

alter table SALE
   add constraint FK_SALE_CATEGORIS_CATEGORY foreign key (ID_CATEGORY)
      references CATEGORYSALE (ID_CATEGORY)
      on delete restrict on update restrict;

alter table SALE
   add constraint FK_SALE_SELLS_CLIENT foreign key (ID_CLIENT)
      references CLIENT (ID_CLIENT)
      on delete restrict on update restrict;

alter table SALE
   add constraint FK_SALE_STATUE_SALESTAT foreign key (ID_STATUSSALE)
      references SALESTATUS (ID_STATUSSALE)
      on delete restrict on update restrict;

alter table SALEBYTAG
   add constraint FK_SALEBYTA_SALEBYTAG_TAG foreign key (ID_TAG)
      references TAG (ID_TAG)
      on delete restrict on update restrict;

alter table SALEBYTAG
   add constraint FK_SALEBYTA_SALEBYTAG_SALE foreign key (ID_SALE)
      references SALE (ID_SALE)
      on delete restrict on update restrict;

alter table SALEPICTURE
   add constraint FK_SALEPICT_CONTAINS_SALE foreign key (ID_SALE)
      references SALE (ID_SALE)
      on delete restrict on update restrict;

alter table STATUSBYUSER
   add constraint FK_STATUSBY_STATUSBYU_USERSTAT foreign key (ID_STATUS)
      references USERSTATUS (ID_STATUS)
      on delete restrict on update restrict;

alter table STATUSBYUSER
   add constraint FK_STATUSBY_STATUSBYU_CLIENT foreign key (ID_CLIENT)
      references CLIENT (ID_CLIENT)
      on delete restrict on update restrict;

