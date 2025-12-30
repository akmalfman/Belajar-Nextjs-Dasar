import { Controller, Get, Param, Post, Query, Req, } from '@nestjs/common';
import express from 'express';

@Controller('/api/users')
export class UserController {

    @Post()
    post(): string {
        return "Post"
    }

    @Get('/hello')
    seyHello(@Query("name") name: string): string {
        return `Hello ${name}`
    }

    // @Get('/:id')
    // getById(@Req() request: express.Request): string {
    //     return `GET ${request.params.id}`
    // }

    @Get('/:id')
    getById(@Param("id") id: string): string {
        return `GET ${id}`
    }

    @Get("/sample")
    get(): string {
        return "Get";
    }
}
