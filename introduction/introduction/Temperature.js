const temperature = [3, -2, -6 -1,'error',9, 13,17,15,14,9,5];

const calculateTemperature = function (temperatures){
     let min =temperatures[0];
     let max = temperatures[0]
     for(let index = 0;index < temperatures.length;index++){
        var currentValueHolder =temperatures[index]
        if(currentValueHolder > min) min = currentValueHolder;
        if(currentValueHolder < max) max = currentValueHolder;
         }
         console.log(min , max)
};