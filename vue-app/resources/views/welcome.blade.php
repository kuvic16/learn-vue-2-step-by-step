<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        
    </head>
    <body>
        {{-- <div id="app">
            <li v-for="skill in skills" v-text="skill"></li>
        </div> --}}

        <div id="one">
            <h1>
                @{{shared.user.name}}
            </h1>
        </div>
        <div id="two">
            <h1>
                @{{shared.user.name}}
            </h1>
        </div>


        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script src="/js/app24.js"></script>
    </body>
</html>
