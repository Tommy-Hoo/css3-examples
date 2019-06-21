:::demo ### 测试页面

```html
<template>
    <img src="/static/image1.jpg" alt="test image" class="test-img" />
</template>
<script>
    console.log(1)
</script>
```
```scss
<style lang="scss" scoped>
    $width: 100px;
    $height: 50px;
    $class-name: test-img;
    .#{$class-name}{
        width: $width;
        height: $height;
    }
</style>
```
:::