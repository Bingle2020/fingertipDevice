<template>
    <div class="home">
        <van-nav-bar title="主页" left-arrow/>
        <h1 class="px">px大小测试</h1>
    </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.home {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    .px {
        font-size: 25px;
    }
}
</style>