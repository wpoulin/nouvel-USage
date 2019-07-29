DROP SCHEMA IF EXISTS nouvelusage CASCADE;

CREATE SCHEMA nouvelusage
	AUTHORIZATION s6infoe01;
	
GRANT ALL ON SCHEMA nouvelusage TO s6infoe01;

/*==============================================================*/
/* Table: CATEGORIES                                            */
/*==============================================================*/
create table CATEGORIES (
   ID_CATEGORY          SERIAL               not null,
   NAME        			VARCHAR(50)          not null,
   constraint PK_CATEGORIES primary key (ID_CATEGORY)
);

/*==============================================================*/
/* Table: USERS                                                 */
/*==============================================================*/
create table USERS (
   CIP					CHAR(8)				 not null,
   FIRST_NAME           VARCHAR(50)          null,
   LAST_NAME            VARCHAR(50)          null,
   USERNAME             VARCHAR(50)          null,
   PASSWORD             VARCHAR(50)          null,
   EMAIL                VARCHAR(50)          null,
   PHONE                VARCHAR(50)          null,
   CITY                 VARCHAR(50)          null,
   constraint PK_USERS primary key (CIP)
);

/*==============================================================*/
/* Table: ARTICLES                                              */
/*==============================================================*/
create table ARTICLES (
   ID_ARTICLE           SERIAL               not null,
   ID_CATEGORY          INT4                 not null,
   CIP_USER             CHAR(8)              not null,
   ID_STATUS            INT4                 not null,
   TITLE                VARCHAR(50)          null,
   DESCRIPTION          VARCHAR(1000)        null,
   CREATION_DATE        DATE                 null,
   PRICE                FLOAT8               null,
   WEAR                 INT4                 null,
   NEGO                 BOOL                 null,
   LOCATION             VARCHAR(50)          null,
   constraint PK_ARTICLES primary key (ID_ARTICLE)
);

/*==============================================================*/
/* Table: ARTICLE_TAGS                                          */
/*==============================================================*/
create table ARTICLE_TAGS (
   ID_ARTICLE           INT4                 not null,
   ID_TAG               INT4                 not null,
   constraint PK_ARTICLE_TAGS primary key (ID_ARTICLE, ID_TAG)
);

/*==============================================================*/
/* Table: TAGS                                                  */
/*==============================================================*/
create table TAGS (
   ID_TAG               SERIAL               not null,
   NAME             	VARCHAR(50)          null,
   constraint PK_TAGS primary key (ID_TAG)
);

/*==============================================================*/
/* Table: IMAGES                                                */
/*==============================================================*/
create table IMAGES (
   ID_IMAGE             SERIAL               not null,
   ID_ARTICLE           INT4                 not null,
   LINK                 VARCHAR(500)         not null,
   constraint PK_IMAGES primary key (ID_IMAGE)
);

/*==============================================================*/
/* Table: STATUS                                                */
/*==============================================================*/
create table STATUS (
   ID_STATUS            SERIAL               not null,
   NAME 	            VARCHAR(50)          null,
   constraint PK_STATUS primary key (ID_STATUS)
);

alter table ARTICLES
   add constraint FK_ARTICLES_CATEGORY foreign key (ID_CATEGORY)
      references CATEGORIES (ID_CATEGORY)
      on delete restrict on update restrict;

alter table ARTICLES
   add constraint FK_ARTICLES_USER foreign key (CIP_USER)
      references USERS (CIP)
      on delete restrict on update restrict;

alter table ARTICLES
   add constraint FK_ARTICLES_STATUS foreign key (ID_STATUS)
      references STATUS (ID_STATUS)
      on delete restrict on update restrict;

alter table ARTICLE_TAGS
   add constraint FK_ARTICLE_TAGS_TAG foreign key (ID_TAG)
      references TAGS (ID_TAG)
      on delete restrict on update restrict;

alter table ARTICLE_TAGS
   add constraint FK_ARTICLE_TAGS_ARTICLE foreign key (ID_ARTICLE)
      references ARTICLES (ID_ARTICLE)
      on delete restrict on update restrict;

alter table IMAGES
   add constraint FK_IMAGES_ARTICLE foreign key (ID_ARTICLE)
      references ARTICLES (ID_ARTICLE)
      on delete restrict on update restrict;

INSERT INTO STATUS (NAME)
VALUES ('Active'), ('Inactive');

INSERT INTO CATEGORIES (NAME)
VALUES ('Livre'),('Matériel');