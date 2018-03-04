module.exports = function getZerosCount(number, base) {
  // your implementation
    var arr=simpleNumber(base);//множители
    var arrM=[];// степени
    var arrM1=[];//коэфициенты
    var n=arr[0], count=0;
    var c=[];
    for(let i=0, length=arr.length;i<length;i++){

        if(n==arr[i]){
            count++;
        }
        if(n<arr[i]){
            arrM.push(count);
            count=1;
            arrM1.push(n);
            n=arr[i];
        }if(i==length-1){
            arrM.push(count);
            arrM1.push(n);
        }

    }
//считаем количество вхождений
function countAr(countNum) {
        let zero=0;
        let step=countNum;
        for(let i=1; Math.floor(number/step)>1;i++){

            step=Math.pow(countNum,i);


            zero=zero+Math.floor(number/step);

        }
        return zero;
    }

function result() {

    var min=0;
    for(let i=0;i<arrM.length;i++){
        c[i]=Math.floor(countAr(arrM1[i])/arrM[i]);
    }
    c.sort(function (a,b) {
        return a-b;
    })
        min=c[0];
        return min;
}

   function simpleNumber(num) {

       var array=new Array();
       let j=0;
       let i=2;//множитель

    do{
        if (num%i==0) {
            num = num / i;
            array[j]=i;
            j++;
        }
        else{
            i++;
        }

    }while (i<=num);
    return array;
   }

var zeros=result();
    return zeros;
}