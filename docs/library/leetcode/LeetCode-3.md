# Longest Substring Without Repeating Characters
leetcode 第三题
```
const longestSubString = (string) =>{
    let stringPool = string.split('');
    let longestStringList = [];
    for(let i = 0;i < stringPool.length;i++){
        let tempList = [];
        tempList.push(stringPool[i]);
        for(let j = i+1;j < stringPool.length;j++){
            const position = tempList.indexOf(stringPool[j]);
            if(position > -1){
                i
                break;
            }else {
                tempList.push(stringPool[j])
            }
        }
        longestStringList = longestStringList.length > tempList.length ? longestStringList:tempList;
    }
    return longestStringList.length;
}
```