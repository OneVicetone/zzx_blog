<template>
    <div>
        <vue-typed-js :strings="typedString">
            <span></span>
        </vue-typed-js>
    </div>
</template>

<script>

export default {
    components:{
        'vue-typed-js':VueTypedJs
    },
    data(){
        return{
            typedString:[
                'First Test',
                'Second Test\nTyped.js is success!\nCooool~\n^1000Github_url--->https://github.com/mattboldt/typed.js/'
            ]
        }
    },
    created(){
        console.log(VueTypedJs)
    }
}
</script>

