def max_fact(num):
    c=0
    fact=2
    while(fact*fact<=num):
        while(num%fact==0):
            num=num/fact
        c=fact
        fact=fact+1
    if(num>c):
        c=num
    return(c)
n=int(input())
for i in range(n):
    x=int(input())
    print(max_fact(x))
        

    
    
    
