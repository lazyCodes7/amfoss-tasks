s=int(input())
f0=2
f1=8
sum=10
d=0
flag=0
for i in range(s):
    n=int(input())
    if(n>=2 and n<8):
        print(f0)
    elif(n<34):
        print(f0+f1)
    elif(n>=34):
        while(d<n):
            d=4*f1+f0
            if(d>n):
                print(sum)
                flag=1
                break
            f0=f1
            f1=d
            sum=d+sum
        if(flag==0):
            print(sum)
    sum=10
    flag=0
    d=0
    f0=2
    f1=8
          
        
    
