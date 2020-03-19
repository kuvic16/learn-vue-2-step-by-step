<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
        
    </head>
    <body>
        
        <carousel>
            <img src="https://placeimg.com/640/480/any?1" />
            <img src="https://placeimg.com/640/480/any?2" />
            <img src="https://placeimg.com/640/480/any?3" />
            <img src="https://placeimg.com/640/480/any?4" />
        </carousel>
        {{-- <div class="main-carousel" data-flickity='{ "cellAlign": "left", "contain": true, "wrapAround": true }'>
            
        </div> --}}


        <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script src="/js/app25.js"></script>
    </body>
</html>
