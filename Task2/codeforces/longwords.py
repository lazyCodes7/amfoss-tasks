n=int(input())
for i in range(n):
    x=str(input())
    y=len(x)
    z=y-2
    if(y>10):
        print(x[0],end='')
        print(z,end='')
        print(x[y-1],end='')
        print(" ")
    else:
        print(x)
