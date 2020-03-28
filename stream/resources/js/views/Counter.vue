<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Counter Page</div>
                    <div class="panel-body">
                        This is counter page
                        <div
                            class="tw-flex tw-justify-center"
                            style="padding-top: 1000px"
                        >
                            <div
                                class="tw-bg-grey tw-rounded-lg tw-p-4 tw-mx-4"
                            >
                                <count :to="110000"></count>
                            </div>
                            <div
                                class="tw-bg-grey tw-rounded-lg tw-p-4 tw-mx-4"
                            >
                                <count :to="500"></count>
                            </div>
                            <div
                                class="tw-bg-grey tw-rounded-lg tw-p-4 tw-mx-4"
                            >
                                <count :to="1955"></count>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Count from "../components/Count.vue";
export default {
    components: { Count },
    mounted() {
        console.log("Component mounted.");
    }
};
</script>
<style></style>
