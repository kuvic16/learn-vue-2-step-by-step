<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Contact Page</div>
                    <div class="panel-body">
                        This is contact page
                        <carousel>
                            <img src="https://placeimg.com/640/480/any" />
                            <img src="https://placeimg.com/640/480/any?2" />
                            <img src="https://placeimg.com/640/480/any?3" />
                            <img src="https://placeimg.com/640/480/any?4" />
                            <img src="https://placeimg.com/640/480/any?5" />
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Carousel from "../components/Carousel";

export default {
    components: { Carousel }
    // mounted() {
    //   console.log("Component mounted.");
    // }
};
</script>
<style></style>
