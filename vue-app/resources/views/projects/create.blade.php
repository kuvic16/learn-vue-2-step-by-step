<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Laravel Vue Tutorial</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
</head>
<body>
    <div id="app" class="container">
        @include('projects.list')
        <form method="POST" action="/projects" @submit.prevent='onSubmit'>
            <div class="control">
                <label for="name" class="label">Project Name:</label>
                <input type="text" id="name" name="name" class="input" v-model="name" @keydown="errors.clear('name')">
                <span class="help is-danger" v-text="errors.get('name')"></span>
            </div>
            <div class="control">
                <label for="description" class="label">Project description:</label>
                <input type="text" id="description" name="description" class="input" v-model="description" @keydown="errors.clear('description')">
                <span class="help is-danger" v-text="errors.get('description')"></span>
            </div>
            <div class="control">
                <button class="button is-primary">Create</button>
            </div>
        </form>
    </div>

    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="/js/app19.js"></script>
</body>
</html>