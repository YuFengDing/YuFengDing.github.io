# JS类型转换以及判断
if条件句和三元表达式会进行隐式转换 比如说
```
if([]){console.log('hi')} // hi
这里的if([])会进行Boolean([])的隐式转换结果为true
```
