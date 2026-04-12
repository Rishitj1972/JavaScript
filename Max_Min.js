let nums = [1,2,2,4,5,2,3];

let max = nums[0];
let min = nums[0];

for(let i = 0; i < nums.length; i++) {
    
    if(max < nums[i]) {
        max = nums[i];
    } 
    if(min > nums[i]) {
        min = nums[i];
    }

}

console.log(max);
console.log(min);