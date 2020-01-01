n=int(input())
for i in range(n):
    x=2
    s=int(input())
    if(s==1):
        print(1)
    elif(s==2):
        print(2)
    elif(s>2):
        for j in range(2,s+1):
            c=j
            e=1
            b=1
            a=3
            flag=0
            if(x%j!=0):
                    while(c%2==0):
                        c=c/2
                        e=e*2
                        if(x%e!=0):
                            x=x*2
                    if(c!=1):
                        for k in range(3,j,2):
                            if(j%k==0):
                                flag=1
                                break
                        if(flag==1):
                            while(b!=j):
                              while(c%a==0):
                                 c=int(c/a)
                                 b=b*a
                                 if(x%b!=0):
                                     x=x*a
                              if(b==j):
                                  break
                              a=a+2
                        else:
                            if(x%j!=0):
                                x=x*j        
        print(x)
    
   
