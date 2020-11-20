<template>
    <div class="home">
        <van-search
                class="search"
                v-model="search"
                shape="round"
                @search="toSearch"
                @cancel="toCancel"
                placeholder="请输入关键词"/>
        <van-collapse v-model="activeNames" accordion>
            <van-collapse-item title="标题1" name="1">内容</van-collapse-item>
            <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
            <van-collapse-item title="标题3" name="3" disabled>内容</van-collapse-item>
        </van-collapse>
    </div>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            activeNames: ['1']
        }
    },
    methods: {
        toSearch(v) {
            console.log(v);
        },
        toCancel() {
            Toast('取消');
        }
    }
}
</script>

<style lang="less" scoped>
.home {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .search {
        background-image: linear-gradient(#304352, #d7d2cc)
    }
}
</style>