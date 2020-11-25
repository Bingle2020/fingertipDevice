<template>
    <div class="wrap">
        <ul class="list" v-tar :data-num="num">
            <li class="item">发现</li>
            <li class="item">主页</li>
            <li class="item">附近</li>
            <li class="item">个人</li>
        </ul>
        <h1>{{ num }}</h1>
        <label for="focus">自动聚焦</label><input v-focus type="text" id="focus" v-model="num">
    </div>
</template>

<script>
export default {
    directives: {
        focus: {
            bind(el) {
                console.log('222');
            },
            inserted(el,binding,vnode) {
                console.log('111');
                // el.focus();
            }
        },
        tar(el,binding) {
            console.log(el);
            console.log(binding);
        }
    },
    data() {
        return {
            num: 0
        }
    }
}
</script>

<style lang="less" scoped>
.wrap {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: rgb(230, 224, 224);
    .list {
        list-style: none;
        margin: 0 auto;
        padding: 20px 0;
        width: 200px;
        height: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .item {
            width: 25%;
            height: 100%;
            border: 1px solid black;
            box-sizing: border-box;
            line-height: 35px;
            text-align: center;
            font-size: 17px;
        }
        .act {
            background-color: rgb(15, 145, 155);
            color: #fff;
        }
    }
}
</style>