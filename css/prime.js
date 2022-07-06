let num=23;
let prime;
for(i=2;i<nim;i++){
    if(num%i==0)
    {
        prime=1;
    }
    else{
        prime=0;
    }
}
if(prime==1){
    console.log("prime");
}
else{
    console.log(" not prime");
}