t = int(input())
for i in range(t):
    n = int(input())
    x=(n-1)//3
    y=(n-1)//5
    z=(n-1)//15
    a=(x/2*(6+(x-1)*3))+(y/2*(10+(y-1)*5))-(z/2*(30+(z-1)*15))
    print(int(a))
