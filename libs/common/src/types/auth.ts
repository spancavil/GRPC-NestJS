// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.174.0
//   protoc               v3.20.3
// source: proto/auth.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "auth";

export interface PaginationDto {
  page: number;
  skip: number;
}

export interface Empty {
}

export interface UpdateUserDto {
  id: string;
  socialMedia: SocialMedia | undefined;
}

export interface FindOneDto {
  id: string;
}

/** With repeated we are specifying an array of users */
export interface Users {
  users: User[];
}

export interface CreateUserDto {
  username: string;
  password: string;
  age: number;
}

/** With message we define the types basically */
export interface User {
  id: string;
  username: string;
  password: string;
  age: number;
  subscribed: boolean;
  socialMedia: SocialMedia | undefined;
}

export interface SocialMedia {
  twitterUri?: string | undefined;
  fbUri?: string | undefined;
}

export const AUTH_PACKAGE_NAME = "auth";

/** Define the create user service that could be called in our GRPC and define input and output */

export interface UsersServiceClient {
  createUser(request: CreateUserDto): Observable<User>;

  findAllUsers(request: Empty): Observable<Users>;

  findOneUser(request: FindOneDto): Observable<User>;

  updateUser(request: UpdateUserDto): Observable<User>;

  removeUser(request: FindOneDto): Observable<User>;

  /** Un stream es para cuando tenemos muchos datos y queremos como "paginarlos". Entonces generamos esta suerte de stream para dividir la data en "chunks" */

  queryUsers(request: Observable<PaginationDto>): Observable<Users>;
}

/** Define the create user service that could be called in our GRPC and define input and output */

export interface UsersServiceController {
  createUser(request: CreateUserDto): Promise<User> | Observable<User> | User;

  findAllUsers(request: Empty): Promise<Users> | Observable<Users> | Users;

  findOneUser(request: FindOneDto): Promise<User> | Observable<User> | User;

  updateUser(request: UpdateUserDto): Promise<User> | Observable<User> | User;

  removeUser(request: FindOneDto): Promise<User> | Observable<User> | User;

  /** Un stream es para cuando tenemos muchos datos y queremos como "paginarlos". Entonces generamos esta suerte de stream para dividir la data en "chunks" */

  queryUsers(request: Observable<PaginationDto>): Observable<Users>;
}

export function UsersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createUser", "findAllUsers", "findOneUser", "updateUser", "removeUser"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = ["queryUsers"];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USERS_SERVICE_NAME = "UsersService";
