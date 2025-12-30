import { Controller, Get, Header, Param, Post, Query, Req, Res, HttpCode, Redirect, } from '@nestjs/common';
import type { HttpRedirectResponse } from '@nestjs/common';
import type { Response, Request } from 'express';

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
    // getById(@Req() request: Request): string {
    //     return `GET ${request.params.id}`
    // }

    // @Get('/:id')
    // getById(@Param("id") id: string): string {
    //     return `GET ${id}`
    // }

    // @Get("/sample")
    // get(): string {
    //     return "Get";
    // }

    @Get("/sample-response")
    @Header('Content-Type', 'application/json')
    @HttpCode(200)
    sampleResponse(): Record<string, string> {
        return ({
            data: "Hell"
        });
    }

    @Get('/redirect')
    @Redirect()
    redirect(): HttpRedirectResponse {
        return {
            url: '/api/users/sample-response',
            statusCode: 301
        };
    }
}
