<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        
    </head>
    <body>
        {{-- episode 23 --}}
        {{-- <div id="app">
            <li v-for="skill in skills" v-text="skill"></li>
        </div> --}}

        {{-- episode 24 --}}
        {{-- <div id="one">
            <h1>
                @{{shared.user.name}}
            </h1>
        </div>
        <div id="two">
            <h1>
                @{{shared.user.name}}
            </h1>
        </div> --}}

        <div id="root">
            {{-- <input type="text" v-model="coupon" /> --}}
            {{-- <input type="text" :value="coupon" @input="coupon = $event.target.value" /> --}}

            <coupon v-model="coupon">
        </div>


        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script src="/js/app25.js"></script>
    </body>
</html>
