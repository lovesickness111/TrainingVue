
<template>
    <div class="ms-overlay">
        <div class="ms-popup-wrapper">
            <slot name="popup-content" :data="'pass-slot-data-here'"></slot>
        </div>
    </div>

</template>

<script>

export default {
    name: 'MsPopup',
    components: {

    },
    props: {

    },
    data() {
        return {
        }
    },
    created() {

    },
    computed: {

    },
    methods: {

    }
};
</script>


<style lang="scss" scoped>
.ms-overlay {
    z-index: 1500;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0px;
    top: 0px;
    transform: translate(0px, 0px);
    transition: all 0s ease 0s;
    overflow: visible;
    pointer-events: auto;
    background-color: rgba(255, 255, 255, .8);
    box-sizing: border-box;

    .ms-popup-wrapper {
        width: 80vw;
        height: 80vh;
        left: 0px;
        top: 0px;
        transform: translate(114px, 97px) scale(1);
        transition: none 0s ease 0s;
        z-index: 1501;
        opacity: 1;

        border: 1px solid #ddd;
        background: #fff;
        -webkit-box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
        box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
        border-radius: 6px;
        position: absolute;
        pointer-events: auto;
        outline: 0;
        overflow: hidden;
    }

}
</style>