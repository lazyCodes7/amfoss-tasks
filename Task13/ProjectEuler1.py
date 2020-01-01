t = int(input())
for i in range(t):
    n =int(input())
    x=(n-1)//3
    y=(n-1)//5
    z=(n-1)//15
    a=(3*((x*(x+1)))//2)+(5*((y*(y+1)))//2)-(15*((z*(z+1)))//2)
    print(a)

