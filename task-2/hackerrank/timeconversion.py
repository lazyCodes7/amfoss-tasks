def timeConversion(x):
    a=list(x)
    y=""
    if "PM" in x:
        if(int(a[0]+a[1])!=12):
            s=12+int(a[0]+a[1])
            d=str(s)
            a[0]=d[0]
            a[1]=d[1]
            del(a[len(x)-1])
            del(a[len(x)-2])
            y=y.join(a)
            return(y)
        else:
             del(a[len(x)-1])
             del(a[len(x)-2])
             y=y.join(a)
             return(y)
    elif "AM" in x:
        if(int(a[0]+a[1])!=12):
            del(a[len(x)-1])
            del(a[len(x)-2])
            y=y.join(a)
            return(y)
        else:
            a[0]="0"
            a[1]="0"
            del(a[len(x)-1])
            del(a[len(x)-2])
            y=y.join(a)
            return(y)
            
x=input()
print (timeConversion(x))


