<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Full Stack SPA</title>


        <!-- Style -->
        <link rel="stylesheet" href="{{asset('css/app.css')}}">
    </head>
    <body>

        <div id="app">
            <v-app>
                <top-navbar locale="{{ app()->getLocale() }}" link-en="{{ LaravelLocalization::getLocalizedURL('en', null, [], true) }}"
                    link-ar="{{ LaravelLocalization::getLocalizedURL('ar', null, [], true) }}">
                </top-navbar>
                <v-main>
                    <main-app></main-app>
                </v-main>
            </v-app>
          </div>

    <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
