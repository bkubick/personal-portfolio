# coding: utf-8
from django.http import HttpResponse, HttpRequest


def temp_route(request: HttpRequest) -> HttpResponse:
    return HttpResponse(f'<h1>Hello World!</h1>')
