import { GraphQLClient, RequestOptions } from 'graphql-request';
import { gql } from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

/** Mutations for Analytics */
export type AnalyticsMutation = {
  __typename?: 'AnalyticsMutation';
  /** Update a list of Analytics providers and their configuration */
  updateProviders?: Maybe<DefaultResponse>;
};


/** Mutations for Analytics */
export type AnalyticsMutationUpdateProvidersArgs = {
  providers: Array<InputMaybe<AnalyticsProviderInput>>;
};

/** Analytics Provider */
export type AnalyticsProvider = {
  __typename?: 'AnalyticsProvider';
  /** Configuration values for this provider */
  config?: Maybe<Array<Maybe<KeyValuePair>>>;
  /** Short description of the provider */
  description?: Maybe<Scalars['String']['output']>;
  /** Is the provider available for use */
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  /** Is the provider active */
  isEnabled: Scalars['Boolean']['output'];
  /** Unique identifier for this provider */
  key: Scalars['String']['output'];
  /** Path to the provider logo */
  logo?: Maybe<Scalars['String']['output']>;
  /** List of configuration properties, formatted as stringified JSON objects */
  props?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** Name of the provider */
  title: Scalars['String']['output'];
  /** Website of the provider */
  website?: Maybe<Scalars['String']['output']>;
};

/** Analytics Configuration Input */
export type AnalyticsProviderInput = {
  /** Configuration values for this provider */
  config?: InputMaybe<Array<InputMaybe<KeyValuePairInput>>>;
  /** Is the provider active */
  isEnabled: Scalars['Boolean']['input'];
  /** Unique identifier of the provider */
  key: Scalars['String']['input'];
};

/** Queries for Analytics */
export type AnalyticsQuery = {
  __typename?: 'AnalyticsQuery';
  /** Fetch list of Analytics providers and their configuration */
  providers?: Maybe<Array<Maybe<AnalyticsProvider>>>;
};


/** Queries for Analytics */
export type AnalyticsQueryProvidersArgs = {
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetFolder = {
  __typename?: 'AssetFolder';
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
};

export type AssetItem = {
  __typename?: 'AssetItem';
  author?: Maybe<User>;
  createdAt: Scalars['Date']['output'];
  ext: Scalars['String']['output'];
  fileSize: Scalars['Int']['output'];
  filename: Scalars['String']['output'];
  folder?: Maybe<AssetFolder>;
  id: Scalars['Int']['output'];
  kind: AssetKind;
  metadata?: Maybe<Scalars['String']['output']>;
  mime: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum AssetKind {
  All = 'ALL',
  Binary = 'BINARY',
  Image = 'IMAGE'
}

export type AssetMutation = {
  __typename?: 'AssetMutation';
  createFolder?: Maybe<DefaultResponse>;
  deleteAsset?: Maybe<DefaultResponse>;
  flushTempUploads?: Maybe<DefaultResponse>;
  renameAsset?: Maybe<DefaultResponse>;
};


export type AssetMutationCreateFolderArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
  parentFolderId: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
};


export type AssetMutationDeleteAssetArgs = {
  id: Scalars['Int']['input'];
};


export type AssetMutationRenameAssetArgs = {
  filename: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};

export type AssetQuery = {
  __typename?: 'AssetQuery';
  folders?: Maybe<Array<Maybe<AssetFolder>>>;
  list?: Maybe<Array<Maybe<AssetItem>>>;
};


export type AssetQueryFoldersArgs = {
  parentFolderId: Scalars['Int']['input'];
};


export type AssetQueryListArgs = {
  folderId: Scalars['Int']['input'];
  kind: AssetKind;
};

export type AuthenticationActiveStrategy = {
  __typename?: 'AuthenticationActiveStrategy';
  autoEnrollGroups: Array<Maybe<Scalars['Int']['output']>>;
  config?: Maybe<Array<Maybe<KeyValuePair>>>;
  displayName: Scalars['String']['output'];
  domainWhitelist: Array<Maybe<Scalars['String']['output']>>;
  isEnabled: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  selfRegistration: Scalars['Boolean']['output'];
  strategy: AuthenticationStrategy;
};

export type AuthenticationApiKey = {
  __typename?: 'AuthenticationApiKey';
  createdAt: Scalars['Date']['output'];
  expiration: Scalars['Date']['output'];
  id: Scalars['Int']['output'];
  isRevoked: Scalars['Boolean']['output'];
  keyShort: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type AuthenticationCreateApiKeyResponse = {
  __typename?: 'AuthenticationCreateApiKeyResponse';
  key?: Maybe<Scalars['String']['output']>;
  responseResult?: Maybe<ResponseStatus>;
};

export type AuthenticationLoginResponse = {
  __typename?: 'AuthenticationLoginResponse';
  continuationToken?: Maybe<Scalars['String']['output']>;
  jwt?: Maybe<Scalars['String']['output']>;
  mustChangePwd?: Maybe<Scalars['Boolean']['output']>;
  mustProvideTFA?: Maybe<Scalars['Boolean']['output']>;
  mustSetupTFA?: Maybe<Scalars['Boolean']['output']>;
  redirect?: Maybe<Scalars['String']['output']>;
  responseResult?: Maybe<ResponseStatus>;
  tfaQRImage?: Maybe<Scalars['String']['output']>;
};

export type AuthenticationMutation = {
  __typename?: 'AuthenticationMutation';
  createApiKey?: Maybe<AuthenticationCreateApiKeyResponse>;
  forgotPassword?: Maybe<DefaultResponse>;
  login?: Maybe<AuthenticationLoginResponse>;
  loginChangePassword?: Maybe<AuthenticationLoginResponse>;
  loginTFA?: Maybe<AuthenticationLoginResponse>;
  regenerateCertificates?: Maybe<DefaultResponse>;
  register?: Maybe<AuthenticationRegisterResponse>;
  resetGuestUser?: Maybe<DefaultResponse>;
  revokeApiKey?: Maybe<DefaultResponse>;
  setApiState?: Maybe<DefaultResponse>;
  updateStrategies?: Maybe<DefaultResponse>;
};


export type AuthenticationMutationCreateApiKeyArgs = {
  expiration: Scalars['String']['input'];
  fullAccess: Scalars['Boolean']['input'];
  group?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};


export type AuthenticationMutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type AuthenticationMutationLoginArgs = {
  password: Scalars['String']['input'];
  strategy: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type AuthenticationMutationLoginChangePasswordArgs = {
  continuationToken: Scalars['String']['input'];
  newPassword: Scalars['String']['input'];
};


export type AuthenticationMutationLoginTfaArgs = {
  continuationToken: Scalars['String']['input'];
  securityCode: Scalars['String']['input'];
  setup?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AuthenticationMutationRegisterArgs = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type AuthenticationMutationRevokeApiKeyArgs = {
  id: Scalars['Int']['input'];
};


export type AuthenticationMutationSetApiStateArgs = {
  enabled: Scalars['Boolean']['input'];
};


export type AuthenticationMutationUpdateStrategiesArgs = {
  strategies: Array<InputMaybe<AuthenticationStrategyInput>>;
};

export type AuthenticationQuery = {
  __typename?: 'AuthenticationQuery';
  activeStrategies?: Maybe<Array<Maybe<AuthenticationActiveStrategy>>>;
  apiKeys?: Maybe<Array<Maybe<AuthenticationApiKey>>>;
  apiState: Scalars['Boolean']['output'];
  strategies?: Maybe<Array<Maybe<AuthenticationStrategy>>>;
};


export type AuthenticationQueryActiveStrategiesArgs = {
  enabledOnly?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AuthenticationRegisterResponse = {
  __typename?: 'AuthenticationRegisterResponse';
  jwt?: Maybe<Scalars['String']['output']>;
  responseResult?: Maybe<ResponseStatus>;
};

export type AuthenticationStrategy = {
  __typename?: 'AuthenticationStrategy';
  color?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  key: Scalars['String']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  props?: Maybe<Array<Maybe<KeyValuePair>>>;
  title: Scalars['String']['output'];
  useForm: Scalars['Boolean']['output'];
  usernameType?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type AuthenticationStrategyInput = {
  autoEnrollGroups: Array<InputMaybe<Scalars['Int']['input']>>;
  config?: InputMaybe<Array<InputMaybe<KeyValuePairInput>>>;
  displayName: Scalars['String']['input'];
  domainWhitelist: Array<InputMaybe<Scalars['String']['input']>>;
  isEnabled: Scalars['Boolean']['input'];
  key: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  selfRegistration: Scalars['Boolean']['input'];
  strategyKey: Scalars['String']['input'];
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type CommentCreateResponse = {
  __typename?: 'CommentCreateResponse';
  id?: Maybe<Scalars['Int']['output']>;
  responseResult?: Maybe<ResponseStatus>;
};

export type CommentMutation = {
  __typename?: 'CommentMutation';
  create?: Maybe<CommentCreateResponse>;
  delete?: Maybe<DefaultResponse>;
  update?: Maybe<CommentUpdateResponse>;
  updateProviders?: Maybe<DefaultResponse>;
};


export type CommentMutationCreateArgs = {
  content: Scalars['String']['input'];
  guestEmail?: InputMaybe<Scalars['String']['input']>;
  guestName?: InputMaybe<Scalars['String']['input']>;
  pageId: Scalars['Int']['input'];
  replyTo?: InputMaybe<Scalars['Int']['input']>;
};


export type CommentMutationDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type CommentMutationUpdateArgs = {
  content: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};


export type CommentMutationUpdateProvidersArgs = {
  providers?: InputMaybe<Array<InputMaybe<CommentProviderInput>>>;
};

export type CommentPost = {
  __typename?: 'CommentPost';
  authorEmail: Scalars['String']['output'];
  authorIP: Scalars['String']['output'];
  authorId: Scalars['Int']['output'];
  authorName: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  id: Scalars['Int']['output'];
  render: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type CommentProvider = {
  __typename?: 'CommentProvider';
  config?: Maybe<Array<Maybe<KeyValuePair>>>;
  description?: Maybe<Scalars['String']['output']>;
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  isEnabled: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type CommentProviderInput = {
  config?: InputMaybe<Array<InputMaybe<KeyValuePairInput>>>;
  isEnabled: Scalars['Boolean']['input'];
  key: Scalars['String']['input'];
};

export type CommentQuery = {
  __typename?: 'CommentQuery';
  list: Array<Maybe<CommentPost>>;
  providers?: Maybe<Array<Maybe<CommentProvider>>>;
  single?: Maybe<CommentPost>;
};


export type CommentQueryListArgs = {
  locale: Scalars['String']['input'];
  path: Scalars['String']['input'];
};


export type CommentQuerySingleArgs = {
  id: Scalars['Int']['input'];
};

export type CommentUpdateResponse = {
  __typename?: 'CommentUpdateResponse';
  render?: Maybe<Scalars['String']['output']>;
  responseResult?: Maybe<ResponseStatus>;
};

export type ContributeContributor = {
  __typename?: 'ContributeContributor';
  avatar?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  joined: Scalars['Date']['output'];
  name: Scalars['String']['output'];
  source: Scalars['String']['output'];
  twitter?: Maybe<Scalars['String']['output']>;
  website?: Maybe<Scalars['String']['output']>;
};

export type ContributeQuery = {
  __typename?: 'ContributeQuery';
  contributors?: Maybe<Array<Maybe<ContributeContributor>>>;
};

/** Generic Mutation Response */
export type DefaultResponse = {
  __typename?: 'DefaultResponse';
  responseResult?: Maybe<ResponseStatus>;
};

export type Group = {
  __typename?: 'Group';
  createdAt: Scalars['Date']['output'];
  id: Scalars['Int']['output'];
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  pageRules?: Maybe<Array<Maybe<PageRule>>>;
  permissions: Array<Maybe<Scalars['String']['output']>>;
  redirectOnLogin?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
  users?: Maybe<Array<Maybe<UserMinimal>>>;
};

export type GroupMinimal = {
  __typename?: 'GroupMinimal';
  createdAt: Scalars['Date']['output'];
  id: Scalars['Int']['output'];
  isSystem: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
  userCount?: Maybe<Scalars['Int']['output']>;
};

export type GroupMutation = {
  __typename?: 'GroupMutation';
  assignUser?: Maybe<DefaultResponse>;
  create?: Maybe<GroupResponse>;
  delete?: Maybe<DefaultResponse>;
  unassignUser?: Maybe<DefaultResponse>;
  update?: Maybe<DefaultResponse>;
};


export type GroupMutationAssignUserArgs = {
  groupId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type GroupMutationCreateArgs = {
  name: Scalars['String']['input'];
};


export type GroupMutationDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type GroupMutationUnassignUserArgs = {
  groupId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};


export type GroupMutationUpdateArgs = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  pageRules: Array<InputMaybe<PageRuleInput>>;
  permissions: Array<InputMaybe<Scalars['String']['input']>>;
  redirectOnLogin: Scalars['String']['input'];
};

export type GroupQuery = {
  __typename?: 'GroupQuery';
  list?: Maybe<Array<Maybe<GroupMinimal>>>;
  single?: Maybe<Group>;
};


export type GroupQueryListArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type GroupQuerySingleArgs = {
  id: Scalars['Int']['input'];
};

export type GroupResponse = {
  __typename?: 'GroupResponse';
  group?: Maybe<Group>;
  responseResult: ResponseStatus;
};

/** Generic Key Value Pair */
export type KeyValuePair = {
  __typename?: 'KeyValuePair';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

/** General Key Value Pair Input */
export type KeyValuePairInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type LocalizationConfig = {
  __typename?: 'LocalizationConfig';
  autoUpdate: Scalars['Boolean']['output'];
  locale: Scalars['String']['output'];
  namespaces: Array<Maybe<Scalars['String']['output']>>;
  namespacing: Scalars['Boolean']['output'];
};

export type LocalizationLocale = {
  __typename?: 'LocalizationLocale';
  availability: Scalars['Int']['output'];
  code: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  installDate?: Maybe<Scalars['Date']['output']>;
  isInstalled: Scalars['Boolean']['output'];
  isRTL: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nativeName: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type LocalizationMutation = {
  __typename?: 'LocalizationMutation';
  downloadLocale?: Maybe<DefaultResponse>;
  updateLocale?: Maybe<DefaultResponse>;
};


export type LocalizationMutationDownloadLocaleArgs = {
  locale: Scalars['String']['input'];
};


export type LocalizationMutationUpdateLocaleArgs = {
  autoUpdate: Scalars['Boolean']['input'];
  locale: Scalars['String']['input'];
  namespaces: Array<InputMaybe<Scalars['String']['input']>>;
  namespacing: Scalars['Boolean']['input'];
};

export type LocalizationQuery = {
  __typename?: 'LocalizationQuery';
  config?: Maybe<LocalizationConfig>;
  locales?: Maybe<Array<Maybe<LocalizationLocale>>>;
  translations?: Maybe<Array<Maybe<Translation>>>;
};


export type LocalizationQueryTranslationsArgs = {
  locale: Scalars['String']['input'];
  namespace: Scalars['String']['input'];
};

export type Logger = {
  __typename?: 'Logger';
  config?: Maybe<Array<Maybe<KeyValuePair>>>;
  description?: Maybe<Scalars['String']['output']>;
  isEnabled: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  level?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type LoggerInput = {
  config?: InputMaybe<Array<InputMaybe<KeyValuePairInput>>>;
  isEnabled: Scalars['Boolean']['input'];
  key: Scalars['String']['input'];
  level: Scalars['String']['input'];
};

export type LoggerTrailLine = {
  __typename?: 'LoggerTrailLine';
  level: Scalars['String']['output'];
  output: Scalars['String']['output'];
  timestamp: Scalars['Date']['output'];
};

export type LoggingMutation = {
  __typename?: 'LoggingMutation';
  updateLoggers?: Maybe<DefaultResponse>;
};


export type LoggingMutationUpdateLoggersArgs = {
  loggers?: InputMaybe<Array<InputMaybe<LoggerInput>>>;
};

export type LoggingQuery = {
  __typename?: 'LoggingQuery';
  loggers?: Maybe<Array<Maybe<Logger>>>;
};


export type LoggingQueryLoggersArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};

export type MailConfig = {
  __typename?: 'MailConfig';
  dkimDomainName?: Maybe<Scalars['String']['output']>;
  dkimKeySelector?: Maybe<Scalars['String']['output']>;
  dkimPrivateKey?: Maybe<Scalars['String']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  pass?: Maybe<Scalars['String']['output']>;
  port?: Maybe<Scalars['Int']['output']>;
  secure?: Maybe<Scalars['Boolean']['output']>;
  senderEmail?: Maybe<Scalars['String']['output']>;
  senderName?: Maybe<Scalars['String']['output']>;
  useDKIM?: Maybe<Scalars['Boolean']['output']>;
  user?: Maybe<Scalars['String']['output']>;
  verifySSL?: Maybe<Scalars['Boolean']['output']>;
};

export type MailMutation = {
  __typename?: 'MailMutation';
  sendTest?: Maybe<DefaultResponse>;
  updateConfig?: Maybe<DefaultResponse>;
};


export type MailMutationSendTestArgs = {
  recipientEmail: Scalars['String']['input'];
};


export type MailMutationUpdateConfigArgs = {
  dkimDomainName: Scalars['String']['input'];
  dkimKeySelector: Scalars['String']['input'];
  dkimPrivateKey: Scalars['String']['input'];
  host: Scalars['String']['input'];
  name: Scalars['String']['input'];
  pass: Scalars['String']['input'];
  port: Scalars['Int']['input'];
  secure: Scalars['Boolean']['input'];
  senderEmail: Scalars['String']['input'];
  senderName: Scalars['String']['input'];
  useDKIM: Scalars['Boolean']['input'];
  user: Scalars['String']['input'];
  verifySSL: Scalars['Boolean']['input'];
};

export type MailQuery = {
  __typename?: 'MailQuery';
  config?: Maybe<MailConfig>;
};

/** Mutations (Create, Update, Delete) */
export type Mutation = {
  __typename?: 'Mutation';
  analytics?: Maybe<AnalyticsMutation>;
  assets?: Maybe<AssetMutation>;
  authentication?: Maybe<AuthenticationMutation>;
  comments?: Maybe<CommentMutation>;
  groups?: Maybe<GroupMutation>;
  localization?: Maybe<LocalizationMutation>;
  logging?: Maybe<LoggingMutation>;
  mail?: Maybe<MailMutation>;
  navigation?: Maybe<NavigationMutation>;
  pages?: Maybe<PageMutation>;
  rendering?: Maybe<RenderingMutation>;
  search?: Maybe<SearchMutation>;
  site?: Maybe<SiteMutation>;
  storage?: Maybe<StorageMutation>;
  system?: Maybe<SystemMutation>;
  theming?: Maybe<ThemingMutation>;
  users?: Maybe<UserMutation>;
};

export type NavigationConfig = {
  __typename?: 'NavigationConfig';
  mode: NavigationMode;
};

export type NavigationItem = {
  __typename?: 'NavigationItem';
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  kind: Scalars['String']['output'];
  label?: Maybe<Scalars['String']['output']>;
  target?: Maybe<Scalars['String']['output']>;
  targetType?: Maybe<Scalars['String']['output']>;
  visibilityGroups?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  visibilityMode?: Maybe<Scalars['String']['output']>;
};

export type NavigationItemInput = {
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  kind: Scalars['String']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['String']['input']>;
  targetType?: InputMaybe<Scalars['String']['input']>;
  visibilityGroups?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  visibilityMode?: InputMaybe<Scalars['String']['input']>;
};

export enum NavigationMode {
  Mixed = 'MIXED',
  None = 'NONE',
  Static = 'STATIC',
  Tree = 'TREE'
}

export type NavigationMutation = {
  __typename?: 'NavigationMutation';
  updateConfig?: Maybe<DefaultResponse>;
  updateTree?: Maybe<DefaultResponse>;
};


export type NavigationMutationUpdateConfigArgs = {
  mode: NavigationMode;
};


export type NavigationMutationUpdateTreeArgs = {
  tree: Array<InputMaybe<NavigationTreeInput>>;
};

export type NavigationQuery = {
  __typename?: 'NavigationQuery';
  config: NavigationConfig;
  tree: Array<Maybe<NavigationTree>>;
};

export type NavigationTree = {
  __typename?: 'NavigationTree';
  items: Array<Maybe<NavigationItem>>;
  locale: Scalars['String']['output'];
};

export type NavigationTreeInput = {
  items: Array<InputMaybe<NavigationItemInput>>;
  locale: Scalars['String']['input'];
};

export type Page = {
  __typename?: 'Page';
  authorEmail: Scalars['String']['output'];
  authorId: Scalars['Int']['output'];
  authorName: Scalars['String']['output'];
  content: Scalars['String']['output'];
  contentType: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  creatorEmail: Scalars['String']['output'];
  creatorId: Scalars['Int']['output'];
  creatorName: Scalars['String']['output'];
  description: Scalars['String']['output'];
  editor: Scalars['String']['output'];
  hash: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isPrivate: Scalars['Boolean']['output'];
  isPublished: Scalars['Boolean']['output'];
  locale: Scalars['String']['output'];
  path: Scalars['String']['output'];
  privateNS?: Maybe<Scalars['String']['output']>;
  publishEndDate: Scalars['Date']['output'];
  publishStartDate: Scalars['Date']['output'];
  render?: Maybe<Scalars['String']['output']>;
  scriptCss?: Maybe<Scalars['String']['output']>;
  scriptJs?: Maybe<Scalars['String']['output']>;
  tags: Array<Maybe<PageTag>>;
  title: Scalars['String']['output'];
  toc?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type PageConflictLatest = {
  __typename?: 'PageConflictLatest';
  authorId: Scalars['String']['output'];
  authorName: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isPublished: Scalars['Boolean']['output'];
  locale: Scalars['String']['output'];
  path: Scalars['String']['output'];
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type PageHistory = {
  __typename?: 'PageHistory';
  actionType: Scalars['String']['output'];
  authorId: Scalars['Int']['output'];
  authorName: Scalars['String']['output'];
  valueAfter?: Maybe<Scalars['String']['output']>;
  valueBefore?: Maybe<Scalars['String']['output']>;
  versionDate: Scalars['Date']['output'];
  versionId: Scalars['Int']['output'];
};

export type PageHistoryResult = {
  __typename?: 'PageHistoryResult';
  total: Scalars['Int']['output'];
  trail?: Maybe<Array<Maybe<PageHistory>>>;
};

export type PageLinkItem = {
  __typename?: 'PageLinkItem';
  id: Scalars['Int']['output'];
  links: Array<Maybe<Scalars['String']['output']>>;
  path: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type PageListItem = {
  __typename?: 'PageListItem';
  contentType: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  isPrivate: Scalars['Boolean']['output'];
  isPublished: Scalars['Boolean']['output'];
  locale: Scalars['String']['output'];
  path: Scalars['String']['output'];
  privateNS?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type PageMigrationResponse = {
  __typename?: 'PageMigrationResponse';
  count?: Maybe<Scalars['Int']['output']>;
  responseResult: ResponseStatus;
};

export type PageMutation = {
  __typename?: 'PageMutation';
  convert?: Maybe<DefaultResponse>;
  create?: Maybe<PageResponse>;
  delete?: Maybe<DefaultResponse>;
  deleteTag?: Maybe<DefaultResponse>;
  flushCache?: Maybe<DefaultResponse>;
  migrateToLocale?: Maybe<PageMigrationResponse>;
  move?: Maybe<DefaultResponse>;
  purgeHistory?: Maybe<DefaultResponse>;
  rebuildTree?: Maybe<DefaultResponse>;
  render?: Maybe<DefaultResponse>;
  restore?: Maybe<DefaultResponse>;
  update?: Maybe<PageResponse>;
  updateTag?: Maybe<DefaultResponse>;
};


export type PageMutationConvertArgs = {
  editor: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};


export type PageMutationCreateArgs = {
  content: Scalars['String']['input'];
  description: Scalars['String']['input'];
  editor: Scalars['String']['input'];
  isPrivate: Scalars['Boolean']['input'];
  isPublished: Scalars['Boolean']['input'];
  locale: Scalars['String']['input'];
  path: Scalars['String']['input'];
  publishEndDate?: InputMaybe<Scalars['Date']['input']>;
  publishStartDate?: InputMaybe<Scalars['Date']['input']>;
  scriptCss?: InputMaybe<Scalars['String']['input']>;
  scriptJs?: InputMaybe<Scalars['String']['input']>;
  tags: Array<InputMaybe<Scalars['String']['input']>>;
  title: Scalars['String']['input'];
};


export type PageMutationDeleteArgs = {
  id: Scalars['Int']['input'];
};


export type PageMutationDeleteTagArgs = {
  id: Scalars['Int']['input'];
};


export type PageMutationMigrateToLocaleArgs = {
  sourceLocale: Scalars['String']['input'];
  targetLocale: Scalars['String']['input'];
};


export type PageMutationMoveArgs = {
  destinationLocale: Scalars['String']['input'];
  destinationPath: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};


export type PageMutationPurgeHistoryArgs = {
  olderThan: Scalars['String']['input'];
};


export type PageMutationRenderArgs = {
  id: Scalars['Int']['input'];
};


export type PageMutationRestoreArgs = {
  pageId: Scalars['Int']['input'];
  versionId: Scalars['Int']['input'];
};


export type PageMutationUpdateArgs = {
  content?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  editor?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  isPrivate?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  publishEndDate?: InputMaybe<Scalars['Date']['input']>;
  publishStartDate?: InputMaybe<Scalars['Date']['input']>;
  scriptCss?: InputMaybe<Scalars['String']['input']>;
  scriptJs?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type PageMutationUpdateTagArgs = {
  id: Scalars['Int']['input'];
  tag: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export enum PageOrderBy {
  Created = 'CREATED',
  Id = 'ID',
  Path = 'PATH',
  Title = 'TITLE',
  Updated = 'UPDATED'
}

export enum PageOrderByDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PageQuery = {
  __typename?: 'PageQuery';
  checkConflicts: Scalars['Boolean']['output'];
  conflictLatest: PageConflictLatest;
  history?: Maybe<PageHistoryResult>;
  links?: Maybe<Array<Maybe<PageLinkItem>>>;
  list: Array<PageListItem>;
  search: PageSearchResponse;
  searchTags: Array<Maybe<Scalars['String']['output']>>;
  single?: Maybe<Page>;
  singleByPath?: Maybe<Page>;
  tags: Array<Maybe<PageTag>>;
  tree?: Maybe<Array<Maybe<PageTreeItem>>>;
  version?: Maybe<PageVersion>;
};


export type PageQueryCheckConflictsArgs = {
  checkoutDate: Scalars['Date']['input'];
  id: Scalars['Int']['input'];
};


export type PageQueryConflictLatestArgs = {
  id: Scalars['Int']['input'];
};


export type PageQueryHistoryArgs = {
  id: Scalars['Int']['input'];
  offsetPage?: InputMaybe<Scalars['Int']['input']>;
  offsetSize?: InputMaybe<Scalars['Int']['input']>;
};


export type PageQueryLinksArgs = {
  locale: Scalars['String']['input'];
};


export type PageQueryListArgs = {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  creatorId?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<PageOrderBy>;
  orderByDirection?: InputMaybe<PageOrderByDirection>;
  tags?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type PageQuerySearchArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  query: Scalars['String']['input'];
};


export type PageQuerySearchTagsArgs = {
  query: Scalars['String']['input'];
};


export type PageQuerySingleArgs = {
  id: Scalars['Int']['input'];
};


export type PageQuerySingleByPathArgs = {
  locale: Scalars['String']['input'];
  path: Scalars['String']['input'];
};


export type PageQueryTreeArgs = {
  includeAncestors?: InputMaybe<Scalars['Boolean']['input']>;
  locale: Scalars['String']['input'];
  mode: PageTreeMode;
  parent?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};


export type PageQueryVersionArgs = {
  pageId: Scalars['Int']['input'];
  versionId: Scalars['Int']['input'];
};

export type PageResponse = {
  __typename?: 'PageResponse';
  page?: Maybe<Page>;
  responseResult: ResponseStatus;
};

export type PageRule = {
  __typename?: 'PageRule';
  deny: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  locales: Array<Maybe<Scalars['String']['output']>>;
  match: PageRuleMatch;
  path: Scalars['String']['output'];
  roles: Array<Maybe<Scalars['String']['output']>>;
};

export type PageRuleInput = {
  deny: Scalars['Boolean']['input'];
  id: Scalars['String']['input'];
  locales: Array<InputMaybe<Scalars['String']['input']>>;
  match: PageRuleMatch;
  path: Scalars['String']['input'];
  roles: Array<InputMaybe<Scalars['String']['input']>>;
};

export enum PageRuleMatch {
  End = 'END',
  Exact = 'EXACT',
  Regex = 'REGEX',
  Start = 'START',
  Tag = 'TAG'
}

export type PageSearchResponse = {
  __typename?: 'PageSearchResponse';
  results: Array<Maybe<PageSearchResult>>;
  suggestions: Array<Maybe<Scalars['String']['output']>>;
  totalHits: Scalars['Int']['output'];
};

export type PageSearchResult = {
  __typename?: 'PageSearchResult';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  locale: Scalars['String']['output'];
  path: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type PageTag = {
  __typename?: 'PageTag';
  createdAt: Scalars['Date']['output'];
  id: Scalars['Int']['output'];
  tag: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Date']['output'];
};

export type PageTreeItem = {
  __typename?: 'PageTreeItem';
  depth: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isFolder: Scalars['Boolean']['output'];
  isPrivate: Scalars['Boolean']['output'];
  locale: Scalars['String']['output'];
  pageId?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<Scalars['Int']['output']>;
  path: Scalars['String']['output'];
  privateNS?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export enum PageTreeMode {
  All = 'ALL',
  Folders = 'FOLDERS',
  Pages = 'PAGES'
}

export type PageVersion = {
  __typename?: 'PageVersion';
  action: Scalars['String']['output'];
  authorId: Scalars['String']['output'];
  authorName: Scalars['String']['output'];
  content: Scalars['String']['output'];
  contentType: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  description: Scalars['String']['output'];
  editor: Scalars['String']['output'];
  isPrivate: Scalars['Boolean']['output'];
  isPublished: Scalars['Boolean']['output'];
  locale: Scalars['String']['output'];
  pageId: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  publishEndDate: Scalars['Date']['output'];
  publishStartDate: Scalars['Date']['output'];
  tags: Array<Maybe<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  versionDate: Scalars['Date']['output'];
  versionId: Scalars['Int']['output'];
};

/** Query (Read) */
export type Query = {
  __typename?: 'Query';
  analytics?: Maybe<AnalyticsQuery>;
  assets?: Maybe<AssetQuery>;
  authentication?: Maybe<AuthenticationQuery>;
  comments?: Maybe<CommentQuery>;
  contribute?: Maybe<ContributeQuery>;
  groups?: Maybe<GroupQuery>;
  localization?: Maybe<LocalizationQuery>;
  logging?: Maybe<LoggingQuery>;
  mail?: Maybe<MailQuery>;
  navigation?: Maybe<NavigationQuery>;
  pages?: Maybe<PageQuery>;
  rendering?: Maybe<RenderingQuery>;
  search?: Maybe<SearchQuery>;
  site?: Maybe<SiteQuery>;
  storage?: Maybe<StorageQuery>;
  system?: Maybe<SystemQuery>;
  theming?: Maybe<ThemingQuery>;
  users?: Maybe<UserQuery>;
};

export type Renderer = {
  __typename?: 'Renderer';
  config?: Maybe<Array<Maybe<KeyValuePair>>>;
  dependsOn?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  input?: Maybe<Scalars['String']['output']>;
  isEnabled: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  output?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type RendererInput = {
  config?: InputMaybe<Array<InputMaybe<KeyValuePairInput>>>;
  isEnabled: Scalars['Boolean']['input'];
  key: Scalars['String']['input'];
};

export type RenderingMutation = {
  __typename?: 'RenderingMutation';
  updateRenderers?: Maybe<DefaultResponse>;
};


export type RenderingMutationUpdateRenderersArgs = {
  renderers?: InputMaybe<Array<InputMaybe<RendererInput>>>;
};

export type RenderingQuery = {
  __typename?: 'RenderingQuery';
  renderers?: Maybe<Array<Maybe<Renderer>>>;
};


export type RenderingQueryRenderersArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};

/** Mutation Status */
export type ResponseStatus = {
  __typename?: 'ResponseStatus';
  errorCode: Scalars['Int']['output'];
  message?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  succeeded: Scalars['Boolean']['output'];
};

export type SearchEngine = {
  __typename?: 'SearchEngine';
  config?: Maybe<Array<Maybe<KeyValuePair>>>;
  description?: Maybe<Scalars['String']['output']>;
  isAvailable?: Maybe<Scalars['Boolean']['output']>;
  isEnabled: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type SearchEngineInput = {
  config?: InputMaybe<Array<InputMaybe<KeyValuePairInput>>>;
  isEnabled: Scalars['Boolean']['input'];
  key: Scalars['String']['input'];
};

export type SearchMutation = {
  __typename?: 'SearchMutation';
  rebuildIndex?: Maybe<DefaultResponse>;
  updateSearchEngines?: Maybe<DefaultResponse>;
};


export type SearchMutationUpdateSearchEnginesArgs = {
  engines?: InputMaybe<Array<InputMaybe<SearchEngineInput>>>;
};

export type SearchQuery = {
  __typename?: 'SearchQuery';
  searchEngines?: Maybe<Array<Maybe<SearchEngine>>>;
};


export type SearchQuerySearchEnginesArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};

export type SiteConfig = {
  __typename?: 'SiteConfig';
  analyticsId?: Maybe<Scalars['String']['output']>;
  analyticsService?: Maybe<Scalars['String']['output']>;
  authAutoLogin?: Maybe<Scalars['Boolean']['output']>;
  authEnforce2FA?: Maybe<Scalars['Boolean']['output']>;
  authHideLocal?: Maybe<Scalars['Boolean']['output']>;
  authJwtAudience?: Maybe<Scalars['String']['output']>;
  authJwtExpiration?: Maybe<Scalars['String']['output']>;
  authJwtRenewablePeriod?: Maybe<Scalars['String']['output']>;
  authLoginBgUrl?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Scalars['String']['output']>;
  contentLicense?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  editFab?: Maybe<Scalars['Boolean']['output']>;
  editMenuBar?: Maybe<Scalars['Boolean']['output']>;
  editMenuBtn?: Maybe<Scalars['Boolean']['output']>;
  editMenuExternalBtn?: Maybe<Scalars['Boolean']['output']>;
  editMenuExternalIcon?: Maybe<Scalars['String']['output']>;
  editMenuExternalName?: Maybe<Scalars['String']['output']>;
  editMenuExternalUrl?: Maybe<Scalars['String']['output']>;
  featurePageComments?: Maybe<Scalars['Boolean']['output']>;
  featurePageRatings?: Maybe<Scalars['Boolean']['output']>;
  featurePersonalWikis?: Maybe<Scalars['Boolean']['output']>;
  footerOverride?: Maybe<Scalars['String']['output']>;
  host?: Maybe<Scalars['String']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  pageExtensions?: Maybe<Scalars['String']['output']>;
  robots?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  securityCSP?: Maybe<Scalars['Boolean']['output']>;
  securityCSPDirectives?: Maybe<Scalars['String']['output']>;
  securityHSTS?: Maybe<Scalars['Boolean']['output']>;
  securityHSTSDuration?: Maybe<Scalars['Int']['output']>;
  securityIframe?: Maybe<Scalars['Boolean']['output']>;
  securityOpenRedirect?: Maybe<Scalars['Boolean']['output']>;
  securityReferrerPolicy?: Maybe<Scalars['Boolean']['output']>;
  securitySRI?: Maybe<Scalars['Boolean']['output']>;
  securityTrustProxy?: Maybe<Scalars['Boolean']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  uploadForceDownload?: Maybe<Scalars['Boolean']['output']>;
  uploadMaxFileSize?: Maybe<Scalars['Int']['output']>;
  uploadMaxFiles?: Maybe<Scalars['Int']['output']>;
  uploadScanSVG?: Maybe<Scalars['Boolean']['output']>;
};

export type SiteMutation = {
  __typename?: 'SiteMutation';
  updateConfig?: Maybe<DefaultResponse>;
};


export type SiteMutationUpdateConfigArgs = {
  analyticsId?: InputMaybe<Scalars['String']['input']>;
  analyticsService?: InputMaybe<Scalars['String']['input']>;
  authAutoLogin?: InputMaybe<Scalars['Boolean']['input']>;
  authEnforce2FA?: InputMaybe<Scalars['Boolean']['input']>;
  authHideLocal?: InputMaybe<Scalars['Boolean']['input']>;
  authJwtAudience?: InputMaybe<Scalars['String']['input']>;
  authJwtExpiration?: InputMaybe<Scalars['String']['input']>;
  authJwtRenewablePeriod?: InputMaybe<Scalars['String']['input']>;
  authLoginBgUrl?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  contentLicense?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  editFab?: InputMaybe<Scalars['Boolean']['input']>;
  editMenuBar?: InputMaybe<Scalars['Boolean']['input']>;
  editMenuBtn?: InputMaybe<Scalars['Boolean']['input']>;
  editMenuExternalBtn?: InputMaybe<Scalars['Boolean']['input']>;
  editMenuExternalIcon?: InputMaybe<Scalars['String']['input']>;
  editMenuExternalName?: InputMaybe<Scalars['String']['input']>;
  editMenuExternalUrl?: InputMaybe<Scalars['String']['input']>;
  featurePageComments?: InputMaybe<Scalars['Boolean']['input']>;
  featurePageRatings?: InputMaybe<Scalars['Boolean']['input']>;
  featurePersonalWikis?: InputMaybe<Scalars['Boolean']['input']>;
  footerOverride?: InputMaybe<Scalars['String']['input']>;
  host?: InputMaybe<Scalars['String']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  pageExtensions?: InputMaybe<Scalars['String']['input']>;
  robots?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  securityCSP?: InputMaybe<Scalars['Boolean']['input']>;
  securityCSPDirectives?: InputMaybe<Scalars['String']['input']>;
  securityHSTS?: InputMaybe<Scalars['Boolean']['input']>;
  securityHSTSDuration?: InputMaybe<Scalars['Int']['input']>;
  securityIframe?: InputMaybe<Scalars['Boolean']['input']>;
  securityOpenRedirect?: InputMaybe<Scalars['Boolean']['input']>;
  securityReferrerPolicy?: InputMaybe<Scalars['Boolean']['input']>;
  securitySRI?: InputMaybe<Scalars['Boolean']['input']>;
  securityTrustProxy?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  uploadForceDownload?: InputMaybe<Scalars['Boolean']['input']>;
  uploadMaxFileSize?: InputMaybe<Scalars['Int']['input']>;
  uploadMaxFiles?: InputMaybe<Scalars['Int']['input']>;
  uploadScanSVG?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SiteQuery = {
  __typename?: 'SiteQuery';
  config?: Maybe<SiteConfig>;
};

export type StorageMutation = {
  __typename?: 'StorageMutation';
  executeAction?: Maybe<DefaultResponse>;
  updateTargets?: Maybe<DefaultResponse>;
};


export type StorageMutationExecuteActionArgs = {
  handler: Scalars['String']['input'];
  targetKey: Scalars['String']['input'];
};


export type StorageMutationUpdateTargetsArgs = {
  targets: Array<InputMaybe<StorageTargetInput>>;
};

export type StorageQuery = {
  __typename?: 'StorageQuery';
  status?: Maybe<Array<Maybe<StorageStatus>>>;
  targets?: Maybe<Array<Maybe<StorageTarget>>>;
};

export type StorageStatus = {
  __typename?: 'StorageStatus';
  key: Scalars['String']['output'];
  lastAttempt: Scalars['String']['output'];
  message: Scalars['String']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type StorageTarget = {
  __typename?: 'StorageTarget';
  actions?: Maybe<Array<Maybe<StorageTargetAction>>>;
  config?: Maybe<Array<Maybe<KeyValuePair>>>;
  description?: Maybe<Scalars['String']['output']>;
  hasSchedule: Scalars['Boolean']['output'];
  isAvailable: Scalars['Boolean']['output'];
  isEnabled: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  logo?: Maybe<Scalars['String']['output']>;
  mode?: Maybe<Scalars['String']['output']>;
  supportedModes?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  syncInterval?: Maybe<Scalars['String']['output']>;
  syncIntervalDefault?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  website?: Maybe<Scalars['String']['output']>;
};

export type StorageTargetAction = {
  __typename?: 'StorageTargetAction';
  handler: Scalars['String']['output'];
  hint: Scalars['String']['output'];
  label: Scalars['String']['output'];
};

export type StorageTargetInput = {
  config?: InputMaybe<Array<InputMaybe<KeyValuePairInput>>>;
  isEnabled: Scalars['Boolean']['input'];
  key: Scalars['String']['input'];
  mode: Scalars['String']['input'];
  syncInterval?: InputMaybe<Scalars['String']['input']>;
};

/** Subscriptions (Push, Real-time) */
export type Subscription = {
  __typename?: 'Subscription';
  loggingLiveTrail?: Maybe<LoggerTrailLine>;
};

export type SystemExportStatus = {
  __typename?: 'SystemExportStatus';
  message?: Maybe<Scalars['String']['output']>;
  progress?: Maybe<Scalars['Int']['output']>;
  startedAt?: Maybe<Scalars['Date']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type SystemExtension = {
  __typename?: 'SystemExtension';
  description: Scalars['String']['output'];
  isCompatible: Scalars['Boolean']['output'];
  isInstalled: Scalars['Boolean']['output'];
  key: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type SystemFlag = {
  __typename?: 'SystemFlag';
  key: Scalars['String']['output'];
  value: Scalars['Boolean']['output'];
};

export type SystemFlagInput = {
  key: Scalars['String']['input'];
  value: Scalars['Boolean']['input'];
};

export enum SystemImportUsersGroupMode {
  Multi = 'MULTI',
  None = 'NONE',
  Single = 'SINGLE'
}

export type SystemImportUsersResponse = {
  __typename?: 'SystemImportUsersResponse';
  failed?: Maybe<Array<Maybe<SystemImportUsersResponseFailed>>>;
  groupsCount?: Maybe<Scalars['Int']['output']>;
  responseResult?: Maybe<ResponseStatus>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};

export type SystemImportUsersResponseFailed = {
  __typename?: 'SystemImportUsersResponseFailed';
  email?: Maybe<Scalars['String']['output']>;
  error?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
};

export type SystemInfo = {
  __typename?: 'SystemInfo';
  configFile?: Maybe<Scalars['String']['output']>;
  cpuCores?: Maybe<Scalars['Int']['output']>;
  currentVersion?: Maybe<Scalars['String']['output']>;
  dbHost?: Maybe<Scalars['String']['output']>;
  dbType?: Maybe<Scalars['String']['output']>;
  dbVersion?: Maybe<Scalars['String']['output']>;
  groupsTotal?: Maybe<Scalars['Int']['output']>;
  hostname?: Maybe<Scalars['String']['output']>;
  httpPort?: Maybe<Scalars['Int']['output']>;
  httpRedirection?: Maybe<Scalars['Boolean']['output']>;
  httpsPort?: Maybe<Scalars['Int']['output']>;
  latestVersion?: Maybe<Scalars['String']['output']>;
  latestVersionReleaseDate?: Maybe<Scalars['Date']['output']>;
  nodeVersion?: Maybe<Scalars['String']['output']>;
  operatingSystem?: Maybe<Scalars['String']['output']>;
  pagesTotal?: Maybe<Scalars['Int']['output']>;
  platform?: Maybe<Scalars['String']['output']>;
  ramTotal?: Maybe<Scalars['String']['output']>;
  sslDomain?: Maybe<Scalars['String']['output']>;
  sslExpirationDate?: Maybe<Scalars['Date']['output']>;
  sslProvider?: Maybe<Scalars['String']['output']>;
  sslStatus?: Maybe<Scalars['String']['output']>;
  sslSubscriberEmail?: Maybe<Scalars['String']['output']>;
  tagsTotal?: Maybe<Scalars['Int']['output']>;
  telemetry?: Maybe<Scalars['Boolean']['output']>;
  telemetryClientId?: Maybe<Scalars['String']['output']>;
  upgradeCapable?: Maybe<Scalars['Boolean']['output']>;
  usersTotal?: Maybe<Scalars['Int']['output']>;
  workingDirectory?: Maybe<Scalars['String']['output']>;
};

export type SystemMutation = {
  __typename?: 'SystemMutation';
  export?: Maybe<DefaultResponse>;
  importUsersFromV1?: Maybe<SystemImportUsersResponse>;
  performUpgrade?: Maybe<DefaultResponse>;
  renewHTTPSCertificate?: Maybe<DefaultResponse>;
  resetTelemetryClientId?: Maybe<DefaultResponse>;
  setHTTPSRedirection?: Maybe<DefaultResponse>;
  setTelemetry?: Maybe<DefaultResponse>;
  updateFlags?: Maybe<DefaultResponse>;
};


export type SystemMutationExportArgs = {
  entities: Array<InputMaybe<Scalars['String']['input']>>;
  path: Scalars['String']['input'];
};


export type SystemMutationImportUsersFromV1Args = {
  groupMode: SystemImportUsersGroupMode;
  mongoDbConnString: Scalars['String']['input'];
};


export type SystemMutationSetHttpsRedirectionArgs = {
  enabled: Scalars['Boolean']['input'];
};


export type SystemMutationSetTelemetryArgs = {
  enabled: Scalars['Boolean']['input'];
};


export type SystemMutationUpdateFlagsArgs = {
  flags: Array<InputMaybe<SystemFlagInput>>;
};

export type SystemQuery = {
  __typename?: 'SystemQuery';
  exportStatus?: Maybe<SystemExportStatus>;
  extensions?: Maybe<Array<Maybe<SystemExtension>>>;
  flags?: Maybe<Array<Maybe<SystemFlag>>>;
  info?: Maybe<SystemInfo>;
};

export type ThemingConfig = {
  __typename?: 'ThemingConfig';
  darkMode: Scalars['Boolean']['output'];
  iconset: Scalars['String']['output'];
  injectBody?: Maybe<Scalars['String']['output']>;
  injectCSS?: Maybe<Scalars['String']['output']>;
  injectHead?: Maybe<Scalars['String']['output']>;
  theme: Scalars['String']['output'];
  tocPosition?: Maybe<Scalars['String']['output']>;
};

export type ThemingMutation = {
  __typename?: 'ThemingMutation';
  setConfig?: Maybe<DefaultResponse>;
};


export type ThemingMutationSetConfigArgs = {
  darkMode: Scalars['Boolean']['input'];
  iconset: Scalars['String']['input'];
  injectBody?: InputMaybe<Scalars['String']['input']>;
  injectCSS?: InputMaybe<Scalars['String']['input']>;
  injectHead?: InputMaybe<Scalars['String']['input']>;
  theme: Scalars['String']['input'];
  tocPosition?: InputMaybe<Scalars['String']['input']>;
};

export type ThemingQuery = {
  __typename?: 'ThemingQuery';
  config?: Maybe<ThemingConfig>;
  themes?: Maybe<Array<Maybe<ThemingTheme>>>;
};

export type ThemingTheme = {
  __typename?: 'ThemingTheme';
  author?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Translation = {
  __typename?: 'Translation';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  appearance: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  dateFormat: Scalars['String']['output'];
  email: Scalars['String']['output'];
  groups: Array<Maybe<Group>>;
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  jobTitle: Scalars['String']['output'];
  lastLoginAt?: Maybe<Scalars['Date']['output']>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  providerId?: Maybe<Scalars['String']['output']>;
  providerIs2FACapable?: Maybe<Scalars['Boolean']['output']>;
  providerKey: Scalars['String']['output'];
  providerName?: Maybe<Scalars['String']['output']>;
  tfaIsActive: Scalars['Boolean']['output'];
  timezone: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type UserLastLogin = {
  __typename?: 'UserLastLogin';
  id: Scalars['Int']['output'];
  lastLoginAt: Scalars['Date']['output'];
  name: Scalars['String']['output'];
};

export type UserMinimal = {
  __typename?: 'UserMinimal';
  createdAt: Scalars['Date']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isActive: Scalars['Boolean']['output'];
  isSystem: Scalars['Boolean']['output'];
  lastLoginAt?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String']['output'];
  providerKey: Scalars['String']['output'];
};

export type UserMutation = {
  __typename?: 'UserMutation';
  activate?: Maybe<DefaultResponse>;
  changePassword?: Maybe<UserTokenResponse>;
  create?: Maybe<UserResponse>;
  deactivate?: Maybe<DefaultResponse>;
  delete?: Maybe<DefaultResponse>;
  disableTFA?: Maybe<DefaultResponse>;
  enableTFA?: Maybe<DefaultResponse>;
  resetPassword?: Maybe<DefaultResponse>;
  update?: Maybe<DefaultResponse>;
  updateProfile?: Maybe<UserTokenResponse>;
  verify?: Maybe<DefaultResponse>;
};


export type UserMutationActivateArgs = {
  id: Scalars['Int']['input'];
};


export type UserMutationChangePasswordArgs = {
  current: Scalars['String']['input'];
  new: Scalars['String']['input'];
};


export type UserMutationCreateArgs = {
  email: Scalars['String']['input'];
  groups: Array<InputMaybe<Scalars['Int']['input']>>;
  mustChangePassword?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  passwordRaw?: InputMaybe<Scalars['String']['input']>;
  providerKey: Scalars['String']['input'];
  sendWelcomeEmail?: InputMaybe<Scalars['Boolean']['input']>;
};


export type UserMutationDeactivateArgs = {
  id: Scalars['Int']['input'];
};


export type UserMutationDeleteArgs = {
  id: Scalars['Int']['input'];
  replaceId: Scalars['Int']['input'];
};


export type UserMutationDisableTfaArgs = {
  id: Scalars['Int']['input'];
};


export type UserMutationEnableTfaArgs = {
  id: Scalars['Int']['input'];
};


export type UserMutationResetPasswordArgs = {
  id: Scalars['Int']['input'];
};


export type UserMutationUpdateArgs = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  dateFormat?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  groups?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  id: Scalars['Int']['input'];
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  newPassword?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
};


export type UserMutationUpdateProfileArgs = {
  appearance: Scalars['String']['input'];
  dateFormat: Scalars['String']['input'];
  jobTitle: Scalars['String']['input'];
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  timezone: Scalars['String']['input'];
};


export type UserMutationVerifyArgs = {
  id: Scalars['Int']['input'];
};

export type UserProfile = {
  __typename?: 'UserProfile';
  appearance: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  dateFormat: Scalars['String']['output'];
  email: Scalars['String']['output'];
  groups: Array<Maybe<Scalars['String']['output']>>;
  id: Scalars['Int']['output'];
  isSystem: Scalars['Boolean']['output'];
  isVerified: Scalars['Boolean']['output'];
  jobTitle: Scalars['String']['output'];
  lastLoginAt?: Maybe<Scalars['Date']['output']>;
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  pagesTotal: Scalars['Int']['output'];
  providerKey?: Maybe<Scalars['String']['output']>;
  providerName?: Maybe<Scalars['String']['output']>;
  timezone: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type UserQuery = {
  __typename?: 'UserQuery';
  lastLogins?: Maybe<Array<Maybe<UserLastLogin>>>;
  list?: Maybe<Array<Maybe<UserMinimal>>>;
  profile?: Maybe<UserProfile>;
  search?: Maybe<Array<Maybe<UserMinimal>>>;
  single?: Maybe<User>;
};


export type UserQueryListArgs = {
  filter?: InputMaybe<Scalars['String']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
};


export type UserQuerySearchArgs = {
  query: Scalars['String']['input'];
};


export type UserQuerySingleArgs = {
  id: Scalars['Int']['input'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  responseResult: ResponseStatus;
  user?: Maybe<User>;
};

export type UserTokenResponse = {
  __typename?: 'UserTokenResponse';
  jwt?: Maybe<Scalars['String']['output']>;
  responseResult: ResponseStatus;
};

export type GetPageByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetPageByIdQuery = { __typename?: 'Query', pages?: { __typename?: 'PageQuery', single?: { __typename?: 'Page', id: number, path: string, title: string, description: string, content: string, createdAt: any, updatedAt: any, locale: string, tags: Array<{ __typename?: 'PageTag', tag: string, title?: string | null } | null> } | null } | null };

export type GetPageByPathQueryVariables = Exact<{
  path: Scalars['String']['input'];
  locale: Scalars['String']['input'];
}>;


export type GetPageByPathQuery = { __typename?: 'Query', pages?: { __typename?: 'PageQuery', singleByPath?: { __typename?: 'Page', id: number, path: string, title: string, description: string, content: string, locale: string, tags: Array<{ __typename?: 'PageTag', tag: string, title?: string | null } | null> } | null } | null };

export type GetAllPagesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type GetAllPagesQuery = { __typename?: 'Query', pages?: { __typename?: 'PageQuery', list: Array<{ __typename?: 'PageListItem', id: number, path: string, locale: string, title?: string | null, description?: string | null, createdAt: any, updatedAt: any, tags?: Array<string | null> | null }> } | null };

export type SearchPagesQueryVariables = Exact<{
  query: Scalars['String']['input'];
  path?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
}>;


export type SearchPagesQuery = { __typename?: 'Query', pages?: { __typename?: 'PageQuery', search: { __typename?: 'PageSearchResponse', suggestions: Array<string | null>, totalHits: number, results: Array<{ __typename?: 'PageSearchResult', title: string, description: string, path: string, locale: string } | null> } } | null };

export type CreatePageMutationVariables = Exact<{
  title: Scalars['String']['input'];
  content: Scalars['String']['input'];
  description: Scalars['String']['input'];
  editor: Scalars['String']['input'];
  isPublished: Scalars['Boolean']['input'];
  isPrivate: Scalars['Boolean']['input'];
  locale: Scalars['String']['input'];
  tags: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  path: Scalars['String']['input'];
}>;


export type CreatePageMutation = { __typename?: 'Mutation', pages?: { __typename?: 'PageMutation', create?: { __typename?: 'PageResponse', responseResult: { __typename?: 'ResponseStatus', succeeded: boolean, errorCode: number, slug: string, message?: string | null } } | null } | null };

export type UpdatePageMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  content: Scalars['String']['input'];
  description: Scalars['String']['input'];
  editor: Scalars['String']['input'];
  isPublished: Scalars['Boolean']['input'];
  isPrivate: Scalars['Boolean']['input'];
  locale: Scalars['String']['input'];
  tags: Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>;
  path: Scalars['String']['input'];
}>;


export type UpdatePageMutation = { __typename?: 'Mutation', pages?: { __typename?: 'PageMutation', update?: { __typename?: 'PageResponse', responseResult: { __typename?: 'ResponseStatus', succeeded: boolean, errorCode: number, slug: string, message?: string | null } } | null } | null };


export const GetPageByIdDocument = gql`
    query GetPageById($id: Int!) {
  pages {
    single(id: $id) {
      id
      path
      title
      description
      tags {
        tag
        title
      }
      content
      createdAt
      updatedAt
      locale
    }
  }
}
    `;
export const GetPageByPathDocument = gql`
    query GetPageByPath($path: String!, $locale: String!) {
  pages {
    singleByPath(path: $path, locale: $locale) {
      id
      path
      title
      description
      content
      locale
      tags {
        tag
        title
      }
    }
  }
}
    `;
export const GetAllPagesDocument = gql`
    query GetAllPages($limit: Int, $locale: String, $tags: [String!]) {
  pages {
    list(limit: $limit, locale: $locale, tags: $tags) {
      id
      path
      locale
      title
      description
      createdAt
      updatedAt
      tags
    }
  }
}
    `;
export const SearchPagesDocument = gql`
    query SearchPages($query: String!, $path: String, $locale: String) {
  pages {
    search(query: $query, path: $path, locale: $locale) {
      results {
        title
        description
        path
        locale
      }
      suggestions
      totalHits
    }
  }
}
    `;
export const CreatePageDocument = gql`
    mutation CreatePage($title: String!, $content: String!, $description: String!, $editor: String!, $isPublished: Boolean!, $isPrivate: Boolean!, $locale: String!, $tags: [String]!, $path: String!) {
  pages {
    create(
      title: $title
      content: $content
      description: $description
      editor: $editor
      isPublished: $isPublished
      isPrivate: $isPrivate
      locale: $locale
      tags: $tags
      path: $path
    ) {
      responseResult {
        succeeded
        errorCode
        slug
        message
      }
    }
  }
}
    `;
export const UpdatePageDocument = gql`
    mutation UpdatePage($id: Int!, $title: String!, $content: String!, $description: String!, $editor: String!, $isPublished: Boolean!, $isPrivate: Boolean!, $locale: String!, $tags: [String]!, $path: String!) {
  pages {
    update(
      id: $id
      title: $title
      content: $content
      description: $description
      editor: $editor
      isPublished: $isPublished
      isPrivate: $isPrivate
      locale: $locale
      tags: $tags
      path: $path
    ) {
      responseResult {
        succeeded
        errorCode
        slug
        message
      }
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetPageById(variables: GetPageByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetPageByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPageByIdQuery>({ document: GetPageByIdDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetPageById', 'query', variables);
    },
    GetPageByPath(variables: GetPageByPathQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetPageByPathQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPageByPathQuery>({ document: GetPageByPathDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetPageByPath', 'query', variables);
    },
    GetAllPages(variables?: GetAllPagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetAllPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllPagesQuery>({ document: GetAllPagesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetAllPages', 'query', variables);
    },
    SearchPages(variables: SearchPagesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<SearchPagesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchPagesQuery>({ document: SearchPagesDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'SearchPages', 'query', variables);
    },
    CreatePage(variables: CreatePageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<CreatePageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePageMutation>({ document: CreatePageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'CreatePage', 'mutation', variables);
    },
    UpdatePage(variables: UpdatePageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<UpdatePageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdatePageMutation>({ document: UpdatePageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'UpdatePage', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;