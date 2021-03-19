import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type Clientes = {
  __typename?: 'Clientes';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  hero_image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ClienteInput = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  hero_image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditClienteInput = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  hero_image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateClienteInput = {
  data?: Maybe<EditClienteInput>;
};

export type UpdateClientePayload = {
  __typename?: 'updateClientePayload';
  cliente?: Maybe<Clientes>;
};

export type DeleteClientePayload = {
  __typename?: 'deleteClientePayload';
  cliente?: Maybe<Clientes>;
};

export type Contactos = {
  __typename?: 'Contactos';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  email: Scalars['String'];
  message: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ContactosConnection = {
  __typename?: 'ContactosConnection';
  values?: Maybe<Array<Maybe<Contactos>>>;
  groupBy?: Maybe<ContactosGroupBy>;
  aggregate?: Maybe<ContactosAggregator>;
};

export type ContactosAggregator = {
  __typename?: 'ContactosAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ContactosGroupBy = {
  __typename?: 'ContactosGroupBy';
  id?: Maybe<Array<Maybe<ContactosConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ContactosConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ContactosConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ContactosConnectionName>>>;
  email?: Maybe<Array<Maybe<ContactosConnectionEmail>>>;
  message?: Maybe<Array<Maybe<ContactosConnectionMessage>>>;
  published_at?: Maybe<Array<Maybe<ContactosConnectionPublished_At>>>;
};

export type ContactosConnectionId = {
  __typename?: 'ContactosConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ContactosConnection>;
};

export type ContactosConnectionCreated_At = {
  __typename?: 'ContactosConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ContactosConnection>;
};

export type ContactosConnectionUpdated_At = {
  __typename?: 'ContactosConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ContactosConnection>;
};

export type ContactosConnectionName = {
  __typename?: 'ContactosConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactosConnection>;
};

export type ContactosConnectionEmail = {
  __typename?: 'ContactosConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactosConnection>;
};

export type ContactosConnectionMessage = {
  __typename?: 'ContactosConnectionMessage';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ContactosConnection>;
};

export type ContactosConnectionPublished_At = {
  __typename?: 'ContactosConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ContactosConnection>;
};

export type ContactoInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  message: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditContactoInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateContactoInput = {
  data?: Maybe<ContactoInput>;
};

export type CreateContactoPayload = {
  __typename?: 'createContactoPayload';
  contacto?: Maybe<Contactos>;
};

export type UpdateContactoInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditContactoInput>;
};

export type UpdateContactoPayload = {
  __typename?: 'updateContactoPayload';
  contacto?: Maybe<Contactos>;
};

export type DeleteContactoInput = {
  where?: Maybe<InputId>;
};

export type DeleteContactoPayload = {
  __typename?: 'deleteContactoPayload';
  contacto?: Maybe<Contactos>;
};

export type Equipo = {
  __typename?: 'Equipo';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  hero_image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type EquipoInput = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  hero_image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditEquipoInput = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  hero_image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateEquipoInput = {
  data?: Maybe<EditEquipoInput>;
};

export type UpdateEquipoPayload = {
  __typename?: 'updateEquipoPayload';
  equipo?: Maybe<Equipo>;
};

export type DeleteEquipoPayload = {
  __typename?: 'deleteEquipoPayload';
  equipo?: Maybe<Equipo>;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  client: Scalars['String'];
  slug: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  hero_image?: Maybe<UploadFile>;
  home_image?: Maybe<ComponentGalleryPortfolioGallery>;
  year?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  tag?: Maybe<Array<Maybe<ComponentTagsServiceTag>>>;
  images?: Maybe<Array<Maybe<ComponentGalleryProjectImages>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  services?: Maybe<Array<Maybe<Service>>>;
};


export type ProjectServicesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  values?: Maybe<Array<Maybe<Project>>>;
  groupBy?: Maybe<ProjectGroupBy>;
  aggregate?: Maybe<ProjectAggregator>;
};

export type ProjectAggregator = {
  __typename?: 'ProjectAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<ProjectAggregatorSum>;
  avg?: Maybe<ProjectAggregatorAvg>;
  min?: Maybe<ProjectAggregatorMin>;
  max?: Maybe<ProjectAggregatorMax>;
};

export type ProjectAggregatorSum = {
  __typename?: 'ProjectAggregatorSum';
  year?: Maybe<Scalars['Float']>;
};

export type ProjectAggregatorAvg = {
  __typename?: 'ProjectAggregatorAvg';
  year?: Maybe<Scalars['Float']>;
};

export type ProjectAggregatorMin = {
  __typename?: 'ProjectAggregatorMin';
  year?: Maybe<Scalars['Float']>;
};

export type ProjectAggregatorMax = {
  __typename?: 'ProjectAggregatorMax';
  year?: Maybe<Scalars['Float']>;
};

export type ProjectGroupBy = {
  __typename?: 'ProjectGroupBy';
  id?: Maybe<Array<Maybe<ProjectConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProjectConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProjectConnectionUpdated_At>>>;
  client?: Maybe<Array<Maybe<ProjectConnectionClient>>>;
  slug?: Maybe<Array<Maybe<ProjectConnectionSlug>>>;
  description?: Maybe<Array<Maybe<ProjectConnectionDescription>>>;
  hero_image?: Maybe<Array<Maybe<ProjectConnectionHero_Image>>>;
  home_image?: Maybe<Array<Maybe<ProjectConnectionHome_Image>>>;
  year?: Maybe<Array<Maybe<ProjectConnectionYear>>>;
  title?: Maybe<Array<Maybe<ProjectConnectionTitle>>>;
  published_at?: Maybe<Array<Maybe<ProjectConnectionPublished_At>>>;
};

export type ProjectConnectionId = {
  __typename?: 'ProjectConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionCreated_At = {
  __typename?: 'ProjectConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionUpdated_At = {
  __typename?: 'ProjectConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionClient = {
  __typename?: 'ProjectConnectionClient';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionSlug = {
  __typename?: 'ProjectConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionDescription = {
  __typename?: 'ProjectConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionHero_Image = {
  __typename?: 'ProjectConnectionHero_image';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionHome_Image = {
  __typename?: 'ProjectConnectionHome_image';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionYear = {
  __typename?: 'ProjectConnectionYear';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionTitle = {
  __typename?: 'ProjectConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionPublished_At = {
  __typename?: 'ProjectConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectInput = {
  client: Scalars['String'];
  slug: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  hero_image?: Maybe<Scalars['ID']>;
  home_image?: Maybe<ComponentGalleryPortfolioGalleryInput>;
  year?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  tag?: Maybe<Array<Maybe<ComponentTagsServiceTagInput>>>;
  services?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<ComponentGalleryProjectImageInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditProjectInput = {
  client?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  hero_image?: Maybe<Scalars['ID']>;
  home_image?: Maybe<EditComponentGalleryPortfolioGalleryInput>;
  year?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  tag?: Maybe<Array<Maybe<EditComponentTagsServiceTagInput>>>;
  services?: Maybe<Array<Maybe<Scalars['ID']>>>;
  images?: Maybe<Array<Maybe<EditComponentGalleryProjectImageInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateProjectInput = {
  data?: Maybe<ProjectInput>;
};

export type CreateProjectPayload = {
  __typename?: 'createProjectPayload';
  project?: Maybe<Project>;
};

export type UpdateProjectInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProjectInput>;
};

export type UpdateProjectPayload = {
  __typename?: 'updateProjectPayload';
  project?: Maybe<Project>;
};

export type DeleteProjectInput = {
  where?: Maybe<InputId>;
};

export type DeleteProjectPayload = {
  __typename?: 'deleteProjectPayload';
  project?: Maybe<Project>;
};

export type RedColaboracion = {
  __typename?: 'RedColaboracion';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  hero_image?: Maybe<UploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type RedColaboracionInput = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  hero_image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRedColaboracionInput = {
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  hero_image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateRedColaboracionInput = {
  data?: Maybe<EditRedColaboracionInput>;
};

export type UpdateRedColaboracionPayload = {
  __typename?: 'updateRedColaboracionPayload';
  redColaboracion?: Maybe<RedColaboracion>;
};

export type DeleteRedColaboracionPayload = {
  __typename?: 'deleteRedColaboracionPayload';
  redColaboracion?: Maybe<RedColaboracion>;
};

export type Service = {
  __typename?: 'Service';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  short_description: Scalars['String'];
  featured_image?: Maybe<UploadFile>;
  description: Scalars['String'];
  tag?: Maybe<Array<Maybe<ComponentTagsServiceTag>>>;
  hero_image?: Maybe<UploadFile>;
  related_works?: Maybe<Array<Maybe<ComponentGalleryWorks>>>;
  project?: Maybe<Project>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type ServiceConnection = {
  __typename?: 'ServiceConnection';
  values?: Maybe<Array<Maybe<Service>>>;
  groupBy?: Maybe<ServiceGroupBy>;
  aggregate?: Maybe<ServiceAggregator>;
};

export type ServiceAggregator = {
  __typename?: 'ServiceAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type ServiceGroupBy = {
  __typename?: 'ServiceGroupBy';
  id?: Maybe<Array<Maybe<ServiceConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ServiceConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ServiceConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ServiceConnectionName>>>;
  slug?: Maybe<Array<Maybe<ServiceConnectionSlug>>>;
  title?: Maybe<Array<Maybe<ServiceConnectionTitle>>>;
  short_description?: Maybe<Array<Maybe<ServiceConnectionShort_Description>>>;
  featured_image?: Maybe<Array<Maybe<ServiceConnectionFeatured_Image>>>;
  description?: Maybe<Array<Maybe<ServiceConnectionDescription>>>;
  hero_image?: Maybe<Array<Maybe<ServiceConnectionHero_Image>>>;
  project?: Maybe<Array<Maybe<ServiceConnectionProject>>>;
  published_at?: Maybe<Array<Maybe<ServiceConnectionPublished_At>>>;
};

export type ServiceConnectionId = {
  __typename?: 'ServiceConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionCreated_At = {
  __typename?: 'ServiceConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionUpdated_At = {
  __typename?: 'ServiceConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionName = {
  __typename?: 'ServiceConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionSlug = {
  __typename?: 'ServiceConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionTitle = {
  __typename?: 'ServiceConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionShort_Description = {
  __typename?: 'ServiceConnectionShort_description';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionFeatured_Image = {
  __typename?: 'ServiceConnectionFeatured_image';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionDescription = {
  __typename?: 'ServiceConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionHero_Image = {
  __typename?: 'ServiceConnectionHero_image';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionProject = {
  __typename?: 'ServiceConnectionProject';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceConnectionPublished_At = {
  __typename?: 'ServiceConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ServiceConnection>;
};

export type ServiceInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
  title: Scalars['String'];
  short_description: Scalars['String'];
  featured_image?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  tag?: Maybe<Array<Maybe<ComponentTagsServiceTagInput>>>;
  hero_image?: Maybe<Scalars['ID']>;
  related_works?: Maybe<Array<Maybe<ComponentGalleryWorkInput>>>;
  project?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditServiceInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  short_description?: Maybe<Scalars['String']>;
  featured_image?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  tag?: Maybe<Array<Maybe<EditComponentTagsServiceTagInput>>>;
  hero_image?: Maybe<Scalars['ID']>;
  related_works?: Maybe<Array<Maybe<EditComponentGalleryWorkInput>>>;
  project?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateServiceInput = {
  data?: Maybe<ServiceInput>;
};

export type CreateServicePayload = {
  __typename?: 'createServicePayload';
  service?: Maybe<Service>;
};

export type UpdateServiceInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditServiceInput>;
};

export type UpdateServicePayload = {
  __typename?: 'updateServicePayload';
  service?: Maybe<Service>;
};

export type DeleteServiceInput = {
  where?: Maybe<InputId>;
};

export type DeleteServicePayload = {
  __typename?: 'deleteServicePayload';
  service?: Maybe<Service>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentGalleryPortfolioGallery = {
  __typename?: 'ComponentGalleryPortfolioGallery';
  id: Scalars['ID'];
  image?: Maybe<UploadFile>;
  gridColumn: Scalars['String'];
  gridRow: Scalars['String'];
};

export type ComponentGalleryPortfolioGalleryInput = {
  image?: Maybe<Scalars['ID']>;
  gridColumn: Scalars['String'];
  gridRow: Scalars['String'];
};

export type EditComponentGalleryPortfolioGalleryInput = {
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  gridColumn?: Maybe<Scalars['String']>;
  gridRow?: Maybe<Scalars['String']>;
};

export enum Enum_Componentgalleryprojectimages_Section {
  Gallery = 'gallery',
  Banner = 'banner'
}

export type ComponentGalleryProjectImages = {
  __typename?: 'ComponentGalleryProjectImages';
  id: Scalars['ID'];
  section?: Maybe<Enum_Componentgalleryprojectimages_Section>;
  gallery?: Maybe<Array<Maybe<ComponentGalleryPortfolioGallery>>>;
};

export type ComponentGalleryProjectImageInput = {
  section?: Maybe<Enum_Componentgalleryprojectimages_Section>;
  gallery?: Maybe<Array<Maybe<ComponentGalleryPortfolioGalleryInput>>>;
};

export type EditComponentGalleryProjectImageInput = {
  id?: Maybe<Scalars['ID']>;
  section?: Maybe<Enum_Componentgalleryprojectimages_Section>;
  gallery?: Maybe<Array<Maybe<EditComponentGalleryPortfolioGalleryInput>>>;
};

export type ComponentGalleryWorks = {
  __typename?: 'ComponentGalleryWorks';
  id: Scalars['ID'];
  gallery?: Maybe<ComponentGalleryPortfolioGallery>;
  client?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type ComponentGalleryWorkInput = {
  gallery?: Maybe<ComponentGalleryPortfolioGalleryInput>;
  client?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type EditComponentGalleryWorkInput = {
  id?: Maybe<Scalars['ID']>;
  gallery?: Maybe<EditComponentGalleryPortfolioGalleryInput>;
  client?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type ComponentTagsServiceTag = {
  __typename?: 'ComponentTagsServiceTag';
  id: Scalars['ID'];
  tag: Scalars['String'];
};

export type ComponentTagsServiceTagInput = {
  tag: Scalars['String'];
};

export type EditComponentTagsServiceTagInput = {
  id?: Maybe<Scalars['ID']>;
  tag?: Maybe<Scalars['String']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Clientes | UpdateClientePayload | DeleteClientePayload | Contactos | ContactosConnection | ContactosAggregator | ContactosGroupBy | ContactosConnectionId | ContactosConnectionCreated_At | ContactosConnectionUpdated_At | ContactosConnectionName | ContactosConnectionEmail | ContactosConnectionMessage | ContactosConnectionPublished_At | CreateContactoPayload | UpdateContactoPayload | DeleteContactoPayload | Equipo | UpdateEquipoPayload | DeleteEquipoPayload | Project | ProjectConnection | ProjectAggregator | ProjectAggregatorSum | ProjectAggregatorAvg | ProjectAggregatorMin | ProjectAggregatorMax | ProjectGroupBy | ProjectConnectionId | ProjectConnectionCreated_At | ProjectConnectionUpdated_At | ProjectConnectionClient | ProjectConnectionSlug | ProjectConnectionDescription | ProjectConnectionHero_Image | ProjectConnectionHome_Image | ProjectConnectionYear | ProjectConnectionTitle | ProjectConnectionPublished_At | CreateProjectPayload | UpdateProjectPayload | DeleteProjectPayload | RedColaboracion | UpdateRedColaboracionPayload | DeleteRedColaboracionPayload | Service | ServiceConnection | ServiceAggregator | ServiceGroupBy | ServiceConnectionId | ServiceConnectionCreated_At | ServiceConnectionUpdated_At | ServiceConnectionName | ServiceConnectionSlug | ServiceConnectionTitle | ServiceConnectionShort_Description | ServiceConnectionFeatured_Image | ServiceConnectionDescription | ServiceConnectionHero_Image | ServiceConnectionProject | ServiceConnectionPublished_At | CreateServicePayload | UpdateServicePayload | DeleteServicePayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentGalleryPortfolioGallery | ComponentGalleryProjectImages | ComponentGalleryWorks | ComponentTagsServiceTag;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  cliente?: Maybe<Clientes>;
  contacto?: Maybe<Contactos>;
  contactos?: Maybe<Array<Maybe<Contactos>>>;
  contactosConnection?: Maybe<ContactosConnection>;
  equipo?: Maybe<Equipo>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Maybe<Project>>>;
  projectsConnection?: Maybe<ProjectConnection>;
  redColaboracion?: Maybe<RedColaboracion>;
  service?: Maybe<Service>;
  services?: Maybe<Array<Maybe<Service>>>;
  servicesConnection?: Maybe<ServiceConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryClienteArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryContactoArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryContactosArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryContactosConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryEquipoArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryProjectsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryProjectsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRedColaboracionArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryServiceArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryServicesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryServicesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateCliente?: Maybe<UpdateClientePayload>;
  deleteCliente?: Maybe<DeleteClientePayload>;
  createContacto?: Maybe<CreateContactoPayload>;
  updateContacto?: Maybe<UpdateContactoPayload>;
  deleteContacto?: Maybe<DeleteContactoPayload>;
  updateEquipo?: Maybe<UpdateEquipoPayload>;
  deleteEquipo?: Maybe<DeleteEquipoPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  updateRedColaboracion?: Maybe<UpdateRedColaboracionPayload>;
  deleteRedColaboracion?: Maybe<DeleteRedColaboracionPayload>;
  createService?: Maybe<CreateServicePayload>;
  updateService?: Maybe<UpdateServicePayload>;
  deleteService?: Maybe<DeleteServicePayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationUpdateClienteArgs = {
  input?: Maybe<UpdateClienteInput>;
};


export type MutationCreateContactoArgs = {
  input?: Maybe<CreateContactoInput>;
};


export type MutationUpdateContactoArgs = {
  input?: Maybe<UpdateContactoInput>;
};


export type MutationDeleteContactoArgs = {
  input?: Maybe<DeleteContactoInput>;
};


export type MutationUpdateEquipoArgs = {
  input?: Maybe<UpdateEquipoInput>;
};


export type MutationCreateProjectArgs = {
  input?: Maybe<CreateProjectInput>;
};


export type MutationUpdateProjectArgs = {
  input?: Maybe<UpdateProjectInput>;
};


export type MutationDeleteProjectArgs = {
  input?: Maybe<DeleteProjectInput>;
};


export type MutationUpdateRedColaboracionArgs = {
  input?: Maybe<UpdateRedColaboracionInput>;
};


export type MutationCreateServiceArgs = {
  input?: Maybe<CreateServiceInput>;
};


export type MutationUpdateServiceArgs = {
  input?: Maybe<UpdateServiceInput>;
};


export type MutationDeleteServiceArgs = {
  input?: Maybe<DeleteServiceInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type FeaturedServicesQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedServicesQuery = (
  { __typename?: 'Query' }
  & { services?: Maybe<Array<Maybe<(
    { __typename?: 'Service' }
    & Pick<Service, 'id' | 'name' | 'slug' | 'title' | 'short_description'>
    & { featured_image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )> }
  )>>> }
);

export type ProjectsInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsInfoQuery = (
  { __typename?: 'Query' }
  & { projects?: Maybe<Array<Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'id' | 'title' | 'slug' | 'client' | 'year'>
    & { home_image?: Maybe<(
      { __typename?: 'ComponentGalleryPortfolioGallery' }
      & Pick<ComponentGalleryPortfolioGallery, 'gridRow' | 'gridColumn'>
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<UploadFile, 'url'>
      )> }
    )> }
  )>>> }
);

export type ServiceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ServiceQuery = (
  { __typename?: 'Query' }
  & { service?: Maybe<(
    { __typename?: 'Service' }
    & Pick<Service, 'name' | 'title' | 'description'>
    & { hero_image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )>, tag?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentTagsServiceTag' }
      & Pick<ComponentTagsServiceTag, 'tag'>
    )>>>, related_works?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentGalleryWorks' }
      & Pick<ComponentGalleryWorks, 'client' | 'link' | 'title' | 'year'>
      & { gallery?: Maybe<(
        { __typename?: 'ComponentGalleryPortfolioGallery' }
        & Pick<ComponentGalleryPortfolioGallery, 'gridRow' | 'gridColumn'>
        & { image?: Maybe<(
          { __typename?: 'UploadFile' }
          & Pick<UploadFile, 'url'>
        )> }
      )> }
    )>>> }
  )> }
);

export type ProjectQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ProjectQuery = (
  { __typename?: 'Query' }
  & { project?: Maybe<(
    { __typename?: 'Project' }
    & Pick<Project, 'client' | 'title' | 'description'>
    & { hero_image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )>, services?: Maybe<Array<Maybe<(
      { __typename?: 'Service' }
      & Pick<Service, 'name'>
    )>>>, tag?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentTagsServiceTag' }
      & Pick<ComponentTagsServiceTag, 'tag'>
    )>>>, images?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentGalleryProjectImages' }
      & Pick<ComponentGalleryProjectImages, 'section'>
      & { gallery?: Maybe<Array<Maybe<(
        { __typename?: 'ComponentGalleryPortfolioGallery' }
        & Pick<ComponentGalleryPortfolioGallery, 'gridRow' | 'gridColumn'>
        & { image?: Maybe<(
          { __typename?: 'UploadFile' }
          & Pick<UploadFile, 'url'>
        )> }
      )>>> }
    )>>> }
  )> }
);

export type ClienteQueryVariables = Exact<{ [key: string]: never; }>;


export type ClienteQuery = (
  { __typename?: 'Query' }
  & { cliente?: Maybe<(
    { __typename?: 'Clientes' }
    & Pick<Clientes, 'title' | 'description'>
    & { hero_image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )> }
  )> }
);

export type EquipoQueryVariables = Exact<{ [key: string]: never; }>;


export type EquipoQuery = (
  { __typename?: 'Query' }
  & { equipo?: Maybe<(
    { __typename?: 'Equipo' }
    & Pick<Equipo, 'title' | 'description'>
    & { hero_image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )> }
  )> }
);

export type RedColaboracionQueryVariables = Exact<{ [key: string]: never; }>;


export type RedColaboracionQuery = (
  { __typename?: 'Query' }
  & { redColaboracion?: Maybe<(
    { __typename?: 'RedColaboracion' }
    & Pick<RedColaboracion, 'title' | 'description'>
    & { hero_image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<UploadFile, 'url'>
    )> }
  )> }
);

export type CreateContactoMutationVariables = Exact<{
  input?: Maybe<CreateContactoInput>;
}>;


export type CreateContactoMutation = (
  { __typename?: 'Mutation' }
  & { createContacto?: Maybe<(
    { __typename?: 'createContactoPayload' }
    & { contacto?: Maybe<(
      { __typename?: 'Contactos' }
      & Pick<Contactos, 'name' | 'email' | 'message'>
    )> }
  )> }
);

export const FeaturedServicesDocument = gql`
    query featuredServices {
  services(sort: "id:asc") {
    id
    name
    slug
    title
    featured_image {
      url
    }
    short_description
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FeaturedServicesGQL extends Apollo.Query<FeaturedServicesQuery, FeaturedServicesQueryVariables> {
    document = FeaturedServicesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProjectsInfoDocument = gql`
    query ProjectsInfo {
  projects {
    id
    title
    slug
    client
    year
    home_image {
      image {
        url
      }
      gridRow
      gridColumn
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProjectsInfoGQL extends Apollo.Query<ProjectsInfoQuery, ProjectsInfoQueryVariables> {
    document = ProjectsInfoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ServiceDocument = gql`
    query service($id: ID!) {
  service(id: $id) {
    name
    title
    description
    hero_image {
      url
    }
    tag {
      tag
    }
    related_works {
      client
      link
      title
      year
      gallery {
        gridRow
        gridColumn
        image {
          url
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ServiceGQL extends Apollo.Query<ServiceQuery, ServiceQueryVariables> {
    document = ServiceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ProjectDocument = gql`
    query project($id: ID!) {
  project(id: $id) {
    hero_image {
      url
    }
    client
    title
    description
    services {
      name
    }
    tag {
      tag
    }
    images {
      section
      gallery {
        gridRow
        gridColumn
        image {
          url
        }
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ProjectGQL extends Apollo.Query<ProjectQuery, ProjectQueryVariables> {
    document = ProjectDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ClienteDocument = gql`
    query cliente {
  cliente {
    title
    description
    hero_image {
      url
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ClienteGQL extends Apollo.Query<ClienteQuery, ClienteQueryVariables> {
    document = ClienteDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EquipoDocument = gql`
    query equipo {
  equipo {
    title
    description
    hero_image {
      url
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EquipoGQL extends Apollo.Query<EquipoQuery, EquipoQueryVariables> {
    document = EquipoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RedColaboracionDocument = gql`
    query redColaboracion {
  redColaboracion {
    title
    description
    hero_image {
      url
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RedColaboracionGQL extends Apollo.Query<RedColaboracionQuery, RedColaboracionQueryVariables> {
    document = RedColaboracionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CreateContactoDocument = gql`
    mutation createContacto($input: createContactoInput) {
  createContacto(input: $input) {
    contacto {
      name
      email
      message
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateContactoGQL extends Apollo.Mutation<CreateContactoMutation, CreateContactoMutationVariables> {
    document = CreateContactoDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
