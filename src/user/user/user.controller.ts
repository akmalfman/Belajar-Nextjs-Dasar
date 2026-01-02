import { Controller, Get, Header, Param, Post, Query, Req, Res, HttpCode, Redirect, } from '@nestjs/common';
import type { HttpRedirectResponse } from '@nestjs/common';
import type { Response, Request } from 'express';
import { request } from 'http';

@Controller('/api/users')
export class UserController {

    // @Post()
    // post(): string {
    //     return "Post"
    // }

    // @Get('/hello')
    // async seyHello(@Query("name") name: string): Promise<string> {
    //     return `Hello ${name}`
    // }

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

    // @Get("/sample-response")
    // @Header('Content-Type', 'application/json')
    // @HttpCode(200)
    // sampleResponse(): Record<string, string> {
    //     return ({
    //         data: "Hell"
    //     });
    // }

    // @Get('/redirect')
    // @Redirect()
    // redirect(): HttpRedirectResponse {
    //     return {
    //         url: '/api/users/sample-response',
    //         statusCode: 301
    //     };
    // }


    @Get('/set-cookie')
    setCookie(@Query('name') name: string, @Res() response: Response) {
        response.cookie('name', name);
        response.status(200).send('Success send cookie');
    }

    @Get('get-cookie')
    getCookie(@Req() request: Request): string {
        return request.cookies['name'];
    }

    @Get('view/hello')
    viewHello(@Query('name') name: string, @Res() response: Response) {
        response.render('index.html', {
            title: 'Template Engine',
            name: name,
        });
    }
}
