/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UsersDocument } from './entities/user.entity';
import { Model, Types } from 'mongoose';
export declare class UsersService {
    private usersModel;
    constructor(usersModel: Model<UsersDocument>);
    create(createUserDto: CreateUserDto): Promise<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>)[], import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }, "find">;
    findOne(id: Types.ObjectId): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }, "findOne">;
    update(id: Types.ObjectId, updateUserDto: UpdateUserDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }, "findOneAndUpdate">;
    remove(id: Types.ObjectId): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>, import("mongoose").Document<unknown, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }> & import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    } & Required<{
        _id: Types.ObjectId;
    }>, {}, import("mongoose").Document<unknown, {}, User> & User & {
        _id: Types.ObjectId;
    }, "findOneAndDelete">;
}
